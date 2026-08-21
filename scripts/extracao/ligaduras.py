"""Resolve as ligaduras (▮) que o ToUnicode defeituoso do PDF apagou.

O corpus tem 241 palavras distintas com ligadura; todas foram inspecionadas.
A ligadura é 'fi' em ~85% dos casos, então 'fi' é o padrão e as exceções
('fl', 'ff' e o espaço) entram por lista explícita.
"""
from pathlib import Path
import re

RAIZ = Path(__file__).resolve().parents[2]
TEXTO = RAIZ / 'texto.txt'

# ▮ que na verdade é separador (espaço) — casos observados no corpus
ESPACO = [
    r'(?<=Rio)▮(?=de)', r'(?<=do)▮(?=Grego)', r'(?<=Testamento)▮(?=Grego)',
    r'(?<=dos)▮(?=Coordenadores)', r'(?<=de)▮(?=todos)', r'(?<=os)▮(?=seminá)',
    r'(?<=53)▮(?=coordenadores)', r'(?<=de)▮(?=Educação)', r'(?<=os)▮(?=Seminários)',
    r'(?<=que)▮(?=identi)', r'(?<=as)▮(?=bênçãos)', r'(?<=como)▮(?=obje)',
    r'(?<=nominal)▮', r'(?<=Eclesiastes)▮', r'(?<=Introduction)▮(?=to)',
    r'(?<=the)▮(?=New)', r'(?<=Saul)▮(?=A)', r'(?<=Nomear)▮(?=e)',
    r'(?<=a)▮(?=Necessidade)', r'(?<=Corretamente)▮', r'(?<=Stuttgartensia)▮',
    r'(?<=do)▮(?!\w)', r'▮(?=São|Janeiro|Aprovar|Junta|Registrar|Concentra)',
    r'▮(?=Kellum|QUARLES|Michael|Wheaton|Hermeneutical|Baker|2011)',
    r'▮(?=com\b|do\b|que\b|estabe)',
]

# ▮ = 'fl'
FL = [
    'con▮ito', 'con▮itos', 'con▮itante', 'con▮itual', 'con▮ict',
    'in▮uência', 'in▮uências', 'in▮uenciar',
    're▮exão', 're▮exões', 're▮exivo', 're▮etirá', '▮exão',
    'a▮itos', '▮uxo', '▮uxos', 'pan▮etos',
]

# ▮ = 'ff'
FF = ['mo▮att', 'bonhoe▮er', 'geo▮rey', 'bo▮', 'e▮ective', 'wycli▮']


def resolver(texto: str) -> str:
    for pat in ESPACO:
        texto = re.sub(pat, ' ', texto)

    def troca(lista, rep):
        nonlocal texto
        for w in lista:
            # preserva a caixa da primeira letra
            pat = re.compile(re.escape(w).replace('▮', '▮'), re.I)

            def sub(m):
                orig = m.group()
                i = orig.index('▮')
                r = rep.upper() if (i > 0 and orig[i - 1].isupper() and orig[:i].isupper()) else rep
                return orig[:i] + r + orig[i + 1:]

            texto = pat.sub(sub, texto)

    troca(FL, 'fl')
    troca(FF, 'ff')
    texto = texto.replace('▮', 'fi')          # padrão
    return texto


if __name__ == '__main__':
    t = TEXTO.read_text(encoding='utf-8')
    t = resolver(t)
    TEXTO.write_text(t, encoding='utf-8')
    print('ligaduras restantes:', t.count('▮'))
    for w in ('Filosofia', 'Definição', 'Confissão', 'influência', 'conflito',
              'santificação', 'Reflexões', 'Bonhoeffer', 'Rio de Janeiro'):
        print(f'  {w}: {t.count(w)}')
