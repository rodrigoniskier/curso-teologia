import re, json

t = open('texto.txt', encoding='utf-8').read()
blocks = re.split(r'===== PAG (\d+) =====', t)
pages = {int(blocks[i]): blocks[i + 1] for i in range(1, len(blocks), 2)}

DEPTS = {
    'CG': 'Cultura Geral', 'TE': 'Teologia Exegética', 'TH': 'Teologia Histórica',
    'TP': 'Teologia Pastoral', 'TS': 'Teologia Sistemática',
}

# ---- 1. sumário: código -> (título, página) ------------------------------
idx = ''.join(pages.get(p, '') for p in range(3, 7))
idx = re.sub(r'\.{2,}', ' … ', idx)
idx = re.sub(r'\s*\n\s*', ' ', idx)
entries = []
for m in re.finditer(r'\((CG|TE|TH|TP|TS)(\d{2})\)\s*(.+?)\s*…\s*(\d{1,3})\b', idx):
    entries.append({'codigo': m.group(1) + m.group(2),
                    'titulo': re.sub(r'\s+', ' ', m.group(3)).strip(),
                    'pagina': int(m.group(4))})
seen = set()
entries = [e for e in entries if not (e['codigo'] in seen or seen.add(e['codigo']))]
print('sumário:', len(entries), 'disciplinas')

# ---- 2. limpar páginas do corpo -----------------------------------------
DEPT_HEADERS = {d.upper() for d in DEPTS.values()} | {'DEPARTAMENTO DE'}

def linhas(p):
    out = []
    for l in pages.get(p, '').split('\n'):
        l = re.sub(r'\s+', ' ', l).strip()
        if not l or l in ('J', 'E', 'T'):
            continue
        if re.fullmatch(r'\d{1,3}', l):
            continue
        if l.upper() in DEPT_HEADERS or l.startswith('DEPARTAMENTO DE'):
            continue
        if l == 'Incluindo as disciplinas eletivas':
            continue
        out.append(l)
    return out

# ---- 3. fatiar por intervalo de páginas ---------------------------------
for i, e in enumerate(entries):
    e['fim'] = entries[i + 1]['pagina'] if i + 1 < len(entries) else 142

registros = []
for e in entries:
    ls = []
    for p in range(e['pagina'], max(e['pagina'] + 1, e['fim'])):
        ls += linhas(p)
    registros.append((e, ls))

# páginas compartilhadas (ex.: TP15..TP19 na mesma página): corta pelo código
def recortar(codigo, ls, vizinhos):
    marcas = {}
    for i, l in enumerate(ls):
        m = re.fullmatch(r'\(?((?:CG|TE|TH|TP|TS)\d{2})\)?', l)
        if m and m.group(1) in vizinhos:
            marcas.setdefault(m.group(1), i)
    if codigo not in marcas or len(marcas) < 2:
        return ls
    ordem = sorted(marcas.items(), key=lambda kv: kv[1])
    pos = [i for i, (c, _) in enumerate(ordem) if c == codigo][0]
    ini = 0 if pos == 0 else ordem[pos][1] - 3
    fim = ordem[pos + 1][1] - 3 if pos + 1 < len(ordem) else len(ls)
    return ls[max(0, ini):fim]

todos = {e['codigo'] for e in entries}
registros = [(e, recortar(e['codigo'], ls, todos)) for e, ls in registros]

# ---- 4. extrair campos ---------------------------------------------------
BULLET = re.compile(r'^[•·▪–—\-•]\s*')

def parse(e, ls):
    joined = '\n'.join(ls)

    def campo(rot, ate):
        m = re.search(rf'^{rot}:\s*(.*?)(?=^(?:{ate})|\Z)', joined, re.S | re.M)
        if not m:
            return ''
        return re.sub(r'\s*\n\s*', ' ', m.group(1)).strip()

    pre = campo('Pré-requisito', r'Ementa:|Objetivo|BIBLIOGRAFIA|Unidade \d')
    ementa = campo('Ementa', r'Objetivo|BIBLIOGRAFIA|Unidade \d|[A-ZÁÉÍÓÚÇÃÕÂÊÔ][A-ZÁÉÍÓÚÇÃÕÂÊÔ \d\-,]{6,}$')

    unidades, cur, in_bib = [], None, False
    for l in ls:
        if re.match(r'^BIBLIOGRAFIA', l, re.I):
            in_bib = True
        if in_bib:
            continue
        m = re.match(r'^Unidade\s*(\d+)\s*[-–—]?\s*(.*)$', l)
        if m:
            cur = {'numero': int(m.group(1)), 'titulo': m.group(2).strip(), 'topicos': []}
            unidades.append(cur)
            continue
        if cur is None:
            continue
        if re.match(r'^(Pré-requisito|Ementa|Objetivo)\b', l):
            cur = None
            continue
        l2 = BULLET.sub('', l).strip()
        if not l2:
            continue
        if not cur['titulo']:
            cur['titulo'] = l2
        elif BULLET.match(l) or cur['topicos'] == []:
            cur['topicos'].append(l2)
        else:
            cur['topicos'][-1] = (cur['topicos'][-1] + ' ' + l2).strip()

    bib = {'basica': [], 'complementar': []}
    bm = re.search(r'^BIBLIOGRAFIA\s*\n?(.*)\Z', joined, re.S | re.M)
    if bm:
        key = 'basica'
        cur_e = ''
        for l in bm.group(1).split('\n'):
            s = l.strip()
            if not s or s.upper() == 'BIBLIOGRAFIA':
                continue
            low = s.lower().rstrip(':')
            if low in ('básica', 'basica', 'específica', 'especifica'):
                if cur_e:
                    bib[key].append(cur_e.strip()); cur_e = ''
                key = 'basica'; continue
            if low in ('complementar', 'recomendada', 'complementares'):
                if cur_e:
                    bib[key].append(cur_e.strip()); cur_e = ''
                key = 'complementar'; continue
            # nova entrada começa com SOBRENOME em caixa alta seguido de vírgula
            if re.match(r'^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-ZÁÉÍÓÚÂÊÔÃÕÇ\'\-. ]{1,40},', s) or s.startswith('____'):
                if cur_e:
                    bib[key].append(cur_e.strip())
                cur_e = s
            else:
                cur_e += ' ' + s
        if cur_e:
            bib[key].append(cur_e.strip())
    for k in bib:
        bib[k] = [re.sub(r'\s+', ' ', x).strip() for x in bib[k] if len(x) > 12]

    return {
        'codigo': e['codigo'],
        'titulo': e['titulo'],
        'departamento': DEPTS[e['codigo'][:2]],
        'sigla': e['codigo'][:2],
        'eletiva': int(e['codigo'][2:]) >= 51,
        'preRequisito': pre or 'Não há',
        'ementa': ementa,
        'unidades': [u for u in unidades if u['titulo'] or u['topicos']],
        'bibliografia': bib,
        'paginaPdf': e['pagina'],
    }

out = [parse(e, ls) for e, ls in registros]
json.dump(out, open('ementas.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)

ok_e = sum(1 for d in out if len(d['ementa']) > 30)
ok_u = sum(1 for d in out if d['unidades'])
ok_b = sum(1 for d in out if d['bibliografia']['basica'])
print(f'parseadas: {len(out)} | ementa: {ok_e} | unidades: {ok_u} | bibliografia: {ok_b}')
print('sem ementa:', [d['codigo'] for d in out if len(d['ementa']) <= 30])
print('sem unidades:', [d['codigo'] for d in out if not d['unidades']])
