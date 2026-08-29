"""Aplica reconstruções auditadas para layouts que o fluxo textual do PDF embaralha.

O PDF-fonte contém páginas/colunas cuja ordem de objetos não corresponde à ordem
visual. O parser genérico reproduz corretamente 113/121 disciplinas; as oito
exceções conhecidas foram conferidas diretamente no original e ficam em manifestos
versionados ao lado do pipeline. Esta etapa produz o ementas.json final — o portal
não deve aplicar patches em tempo de execução.
"""
from __future__ import annotations

from copy import deepcopy
from pathlib import Path
import json

RAIZ = Path(__file__).resolve().parents[2]
EMENTAS = RAIZ / 'src' / 'dados' / 'ementas.json'
DIR = Path(__file__).parent
MANIFESTOS = sorted(DIR.glob('correcoes-layout*.json'))

base = json.loads(EMENTAS.read_text(encoding='utf-8'))
correcoes = []
for manifesto in MANIFESTOS:
    dados = json.loads(manifesto.read_text(encoding='utf-8'))
    if not isinstance(dados, list):
        raise SystemExit(f'{manifesto.name}: esperado um array de correções')
    for correcao in dados:
        correcoes.append((manifesto.name, correcao))

por_codigo = {d['codigo']: d for d in base}

vistos = set()
for manifesto, correcao in correcoes:
    codigo = correcao.get('codigo')
    if not codigo:
        raise SystemExit(f'{manifesto}: correção sem código')
    if codigo in vistos:
        raise SystemExit(f'correção de layout duplicada para {codigo}')
    vistos.add(codigo)
    if codigo not in por_codigo:
        raise SystemExit(f'{manifesto}: disciplina inexistente {codigo}')
    if 'unidades' in correcao:
        numeros = [u.get('numero') for u in correcao['unidades']]
        if len(numeros) != len(set(numeros)):
            raise SystemExit(f'{manifesto}: unidades duplicadas em {codigo}')
    destino = por_codigo[codigo]
    for chave, valor in correcao.items():
        if chave != 'codigo':
            destino[chave] = deepcopy(valor)

EMENTAS.write_text(json.dumps(base, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'correções de layout aplicadas: {len(correcoes)} ({", ".join(sorted(vistos))})')
