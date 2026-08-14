"""Extrai texto do PDF resolvendo ligaduras via CMaps /ToUnicode por fonte."""
import re, zlib, json

pdf = open('ementas.pdf', 'rb').read()

# ---- 1. index every indirect object -------------------------------------
objs = {}
for m in re.finditer(rb'(\d+)\s+(\d+)\s+obj\b', pdf):
    num = int(m.group(1))
    start = m.end()
    end = pdf.find(b'endobj', start)
    objs[num] = pdf[start:end]

def get_stream(raw):
    m = re.search(rb'stream\r?\n', raw)
    if not m:
        return None
    data = raw[m.end():raw.rfind(b'endstream')]
    try:
        return zlib.decompress(data)
    except Exception:
        return data

# ---- 2. build per-font ToUnicode maps ------------------------------------
def parse_tounicode(data):
    cmap = {}
    for blk in re.findall(rb'beginbfchar(.*?)endbfchar', data, re.S):
        for src, dst in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
            code = int(src, 16)
            txt = bytes.fromhex(dst.decode()).decode('utf-16-be', 'ignore')
            cmap[code] = txt
    for blk in re.findall(rb'beginbfrange(.*?)endbfrange', data, re.S):
        for lo, hi, dst in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
            a, b = int(lo, 16), int(hi, 16)
            base = int(dst, 16)
            for k in range(a, b + 1):
                try:
                    cmap[k] = chr(base + (k - a))
                except ValueError:
                    pass
    return cmap

font_cmap = {}          # font obj num -> cmap
for num, raw in objs.items():
    if b'/Font' not in raw:
        continue
    tu = re.search(rb'/ToUnicode\s+(\d+)\s+0\s+R', raw)
    if not tu:
        continue
    st = get_stream(objs.get(int(tu.group(1)), b''))
    if st:
        font_cmap[num] = parse_tounicode(st)

# ---- 3. page objects: content stream + font resource names ---------------
pages = []
for num, raw in objs.items():
    if b'/Type' not in raw or not re.search(rb'/Type\s*/Page\b', raw):
        continue
    # resources may be inline or indirect
    res_raw = raw
    rm = re.search(rb'/Resources\s+(\d+)\s+0\s+R', raw)
    if rm:
        res_raw = objs.get(int(rm.group(1)), b'')
    fonts = {}
    fm = re.search(rb'/Font\s*<<(.*?)>>', res_raw, re.S)
    if not fm:
        fi = re.search(rb'/Font\s+(\d+)\s+0\s+R', res_raw)
        if fi:
            fm = re.search(rb'<<(.*?)>>', objs.get(int(fi.group(1)), b''), re.S)
    if fm:
        for name, onum in re.findall(rb'/(\w+)\s+(\d+)\s+0\s+R', fm.group(1)):
            fonts[name.decode()] = int(onum)
    cm = re.search(rb'/Contents\s+(\d+)\s+0\s+R', raw)
    cnums = [int(cm.group(1))] if cm else []
    if not cnums:
        cm2 = re.search(rb'/Contents\s*\[(.*?)\]', raw, re.S)
        if cm2:
            cnums = [int(x) for x in re.findall(rb'(\d+)\s+0\s+R', cm2.group(1))]
    content = b''.join(get_stream(objs.get(n, b'')) or b'' for n in cnums)
    if content:
        pages.append((num, content, fonts))

# order pages by their appearance in the Pages tree
kids = []
for num, raw in objs.items():
    if re.search(rb'/Type\s*/Pages\b', raw):
        km = re.search(rb'/Kids\s*\[(.*?)\]', raw, re.S)
        if km:
            kids += [int(x) for x in re.findall(rb'(\d+)\s+0\s+R', km.group(1))]
order = {n: i for i, n in enumerate(kids)}
pages.sort(key=lambda p: order.get(p[0], 10**6))

# ---- 4. decode text with the right cmap ----------------------------------
def unescape(b):
    out = bytearray(); i = 0
    while i < len(b):
        c = b[i]
        if c == 0x5c and i + 1 < len(b):
            n = b[i + 1]
            m = {0x6e: 10, 0x72: 13, 0x74: 9, 0x62: 8, 0x66: 12, 0x28: 40, 0x29: 41, 0x5c: 92}
            if n in m:
                out.append(m[n]); i += 2; continue
            if 0x30 <= n <= 0x37:
                j = i + 1; o = b''
                while j < len(b) and 0x30 <= b[j] <= 0x37 and len(o) < 3:
                    o += bytes([b[j]]); j += 1
                out.append(int(o, 8) & 0xFF); i = j; continue
            out.append(n); i += 2; continue
        out.append(c); i += 1
    return bytes(out)

TOK = re.compile(rb'/(\w+)\s+[\d.]+\s+Tf|\((?:[^()\\]|\\.|\((?:[^()\\]|\\.)*\))*\)|TJ|Tj|T\*|Td|TD|ET|BT')

out_pages = []
missing = 0
for _, content, fonts in pages:
    cur = None
    buf = []
    for m in TOK.finditer(content):
        tok = m.group()
        if tok.startswith(b'/'):
            cur = font_cmap.get(fonts.get(m.group(1).decode(), -1))
        elif tok.startswith(b'('):
            raw = unescape(tok[1:-1])
            out = []
            for c in raw:
                if cur and c in cur:
                    v = cur[c]
                    # o produtor do PDF gravou ToUnicode defeituoso para as
                    # ligaduras: elas aparecem mapeadas para \xa0. Marca para
                    # resolução posterior por dicionário.
                    out.append('▮' if (c < 0x20 and v == '\xa0') else v)
                elif c < 0x20:
                    out.append('▮')
                    missing += 1
                else:
                    out.append(chr(c))
            buf.append(''.join(out))
        elif tok in (b'Td', b'TD', b'T*', b'ET'):
            buf.append('\n')
    txt = ''.join(buf)
    txt = re.sub(r'[ \t]{2,}', ' ', txt)
    out_pages.append(txt)

full = '\n'.join(f"===== PAG {i+1} =====\n{t}" for i, t in enumerate(out_pages))
# junta palavras quebradas por hífen de fim de linha. O extrator emite o hífen
# como token isolado, então a forma dominante é "exis\n-\ntência".
full = re.sub(r'(\w)[ \t]*\n[ \t]*-[ \t]*\n[ \t]*(\w)', r'\1\2', full)
full = re.sub(r'(\w)-[ \t]*\n[ \t]*(\w)', r'\1\2', full)
full = re.sub(r'(\w)[ \t]+-[ \t]*\n[ \t]*(\w)', r'\1\2', full)
open('texto.txt', 'w', encoding='utf-8').write(full)

leftovers = sum(full.count(chr(c)) for c in range(0x1b, 0x20))
print(f'páginas: {len(out_pages)} | fontes com cmap: {len(font_cmap)} | chars: {len(full)}')
print(f'ligaduras não resolvidas: {leftovers} | strings sem fonte: {missing}')
for w in ('Filosofia', 'Definição', 'Confissão', 'influência', 'conflito', 'santificação', 'Wycliffe'):
    print(f'  {w}: {full.count(w)}')
