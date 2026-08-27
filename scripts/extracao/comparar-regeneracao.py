"""Compara uma regeneração do currículo com o estado efetivo auditado.

O estado efetivo é o JSON-base versionado com ementas-correcoes.json aplicado.
A regeneração só pode substituir os overlays quando reproduzir esse estado
integralmente, disciplina por disciplina e campo por campo.
"""
from __future__ import annotations

from copy import deepcopy
from pathlib import Path
import argparse
import difflib
import json
import sys


def carregar(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def indexar(disciplinas):
    return {d["codigo"]: d for d in disciplinas}


def aplicar_correcoes(base, correcoes):
    efetivo = deepcopy(base)
    por_codigo = indexar(efetivo)
    for correcao in correcoes:
        codigo = correcao["codigo"]
        if codigo not in por_codigo:
            raise SystemExit(f"correção aponta para disciplina inexistente: {codigo}")
        destino = por_codigo[codigo]
        for chave, valor in correcao.items():
            if chave != "codigo":
                destino[chave] = deepcopy(valor)
    return efetivo


def canonico(valor):
    return json.dumps(valor, ensure_ascii=False, indent=2, sort_keys=True).splitlines()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("base", type=Path, help="ementas.json antes da regeneração")
    ap.add_argument("regenerado", type=Path, help="ementas.json recém-regenerado")
    ap.add_argument("correcoes", type=Path, help="ementas-correcoes.json auditado")
    args = ap.parse_args()

    base = carregar(args.base)
    regenerado = carregar(args.regenerado)
    correcoes = carregar(args.correcoes)
    efetivo = aplicar_correcoes(base, correcoes)

    codigos_efetivos = [d["codigo"] for d in efetivo]
    codigos_regen = [d["codigo"] for d in regenerado]
    problemas = 0

    if codigos_efetivos != codigos_regen:
        problemas += 1
        print("✗ sequência/conjunto de disciplinas diverge")
        print("  efetivo   :", codigos_efetivos)
        print("  regenerado:", codigos_regen)

    efetivo_idx = indexar(efetivo)
    regen_idx = indexar(regenerado)
    divergentes = []
    for codigo in codigos_efetivos:
        if codigo not in regen_idx:
            divergentes.append(codigo)
            continue
        if efetivo_idx[codigo] != regen_idx[codigo]:
            divergentes.append(codigo)

    if divergentes:
        problemas += len(divergentes)
        print(f"✗ {len(divergentes)} disciplina(s) divergem do estado efetivo: {', '.join(divergentes)}")
        for codigo in divergentes:
            if codigo not in regen_idx:
                print(f"\n--- {codigo}: ausente na regeneração")
                continue
            print(f"\n=== {codigo} ===")
            diff = difflib.unified_diff(
                canonico(efetivo_idx[codigo]),
                canonico(regen_idx[codigo]),
                fromfile="efetivo",
                tofile="regenerado",
                lineterm="",
            )
            for linha in diff:
                print(linha)
    else:
        print(f"✓ regeneração idêntica ao estado efetivo: {len(efetivo)} disciplinas")

    overlays = [c["codigo"] for c in correcoes]
    ainda_necessarios = [
        codigo for codigo in overlays
        if codigo in regen_idx and efetivo_idx[codigo] != regen_idx[codigo]
    ]
    if ainda_necessarios:
        print("✗ overlays ainda necessários:", ", ".join(ainda_necessarios))
    else:
        print("✓ todos os overlays foram reproduzidos pelo pipeline")

    return 1 if problemas else 0


if __name__ == "__main__":
    sys.exit(main())
