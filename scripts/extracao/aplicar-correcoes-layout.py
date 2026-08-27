"""Aplica reconstruções auditadas para layouts que o fluxo textual do PDF embaralha.

O PDF-fonte contém páginas/colunas cuja ordem de objetos não corresponde à ordem
visual. O parser genérico reproduz corretamente 114/121 disciplinas; as sete
exceções abaixo foram conferidas diretamente no original e ficam num manifesto
versionado ao lado do pipeline. Esta etapa produz o ementas.json final — o portal
não deve aplicar patches em tempo de execução.
"""
from __future__ import annotations

from copy import deepcopy
from pathlib import Path
import json

RAIZ = Path(__file__).resolve().parents[2]
EMENTAS = RAIZ / 'src' / 'dados' / 'ementas.json'
CORRECOES = Path(__file__).with_name('correcoes-layout.json')

base = json.loads(EMENTAS.read_text(encoding='utf-8'))
correcoes = json.loads(CORRECOES.read_text(encoding='utf-8'))
por_codigo = {d['codigo']: d for d in base}

vistos = set()
for correcao in correcoes:
    codigo = correcao.get('codigo')
    if not codigo:
        raise SystemExit('correcoes-layout.json: correção sem código')
    if codigo in vistos:
        raise SystemExit(f'correcoes-layout.json: código duplicado {codigo}')
    vistos.add(codigo)
    if codigo not in por_codigo:
        raise SystemExit(f'correcoes-layout.json: disciplina inexistente {codigo}')
    if 'unidades' in correcao:
        numeros = [u.get('numero') for u in correcao['unidades']]
        if len(numeros) != len(set(numeros)):
            raise SystemExit(f'correcoes-layout.json: unidades duplicadas em {codigo}')
    destino = por_codigo[codigo]
    for chave, valor in correcao.items():
        if chave != 'codigo':
            destino[chave] = deepcopy(valor)

EMENTAS.write_text(json.dumps(base, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'correções de layout aplicadas: {len(correcoes)} ({", ".join(sorted(vistos))})')
