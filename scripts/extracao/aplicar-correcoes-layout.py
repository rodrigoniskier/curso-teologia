"""Aplica reconstruções auditadas para layouts que o fluxo textual do PDF embaralha.

O PDF-fonte contém páginas/colunas cuja ordem de objetos não corresponde à ordem
visual. O parser genérico reproduz 113/121 disciplinas sem reconstrução; as oito
exceções conhecidas foram conferidas diretamente no original. Há ainda casos em
que as unidades são extraídas corretamente, mas uma cópia do texto programático
fica anexada ao último item bibliográfico por causa da ordem interna dos objetos
do PDF. Esses cortes também são explícitos e verificáveis nos manifestos.

Esta etapa produz o ementas.json final — o portal não aplica patches em runtime.
"""
from __future__ import annotations

from copy import deepcopy
from pathlib import Path
import json
import re

RAIZ = Path(__file__).resolve().parents[2]
EMENTAS = RAIZ / 'src' / 'dados' / 'ementas.json'
DIR = Path(__file__).parent
MANIFESTOS = sorted(DIR.glob('correcoes-layout*.json'))
MARCADOR_PROGRAMATICO = re.compile(r'\bUnidade\s+\d+\b|\bBIBLIOGRAFIA\b|\bPré-requisito\s*:|\bEmenta\s*:', re.I)

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
        if chave not in {'codigo', 'bibliografiaItens'}:
            destino[chave] = deepcopy(valor)

    itens_bibliografia = correcao.get('bibliografiaItens', [])
    if not isinstance(itens_bibliografia, list):
        raise SystemExit(f'{manifesto}: bibliografiaItens deve ser array em {codigo}')
    for ajuste in itens_bibliografia:
        grupo = ajuste.get('grupo')
        indice = ajuste.get('indice')
        comeca_com = ajuste.get('comecaCom')
        valor = ajuste.get('valor')
        if grupo not in {'basica', 'complementar'}:
            raise SystemExit(f'{manifesto}: grupo bibliográfico inválido em {codigo}: {grupo}')
        if not isinstance(indice, int) or indice < 1:
            raise SystemExit(f'{manifesto}: índice bibliográfico inválido em {codigo}: {indice}')
        itens = destino.get('bibliografia', {}).get(grupo, [])
        if indice > len(itens):
            raise SystemExit(f'{manifesto}: {codigo} {grupo} #{indice} não existe')
        original = str(itens[indice - 1])
        if not isinstance(comeca_com, str) or not original.startswith(comeca_com):
            raise SystemExit(f'{manifesto}: início inesperado em {codigo} {grupo} #{indice}')
        if not MARCADOR_PROGRAMATICO.search(original):
            raise SystemExit(f'{manifesto}: {codigo} {grupo} #{indice} não contém contaminação programática')
        if not isinstance(valor, str) or not valor.strip():
            raise SystemExit(f'{manifesto}: valor saneado vazio em {codigo} {grupo} #{indice}')
        itens[indice - 1] = valor

EMENTAS.write_text(json.dumps(base, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'correções auditadas aplicadas: {len(correcoes)} disciplinas ({", ".join(sorted(vistos))})')
