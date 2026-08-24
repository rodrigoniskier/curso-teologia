import ts from 'typescript';

function nomePropriedade(nome) {
  if (ts.isIdentifier(nome) || ts.isStringLiteralLike(nome) || ts.isNumericLiteral(nome)) {
    return nome.text;
  }
  return undefined;
}

/**
 * Coleta, em ordem de leitura, todos os literais textuais de um nó da AST.
 *
 * `forEachChild` encerra a travessia quando o callback devolve um valor
 * verdadeiro. Por isso o callback precisa deliberadamente não devolver o
 * array acumulador.
 */
export function coletarTextosAst(no, saida = [], propriedadesIgnoradas = new Set()) {
  if (!no) return saida;
  if (
    ts.isPropertyAssignment(no) &&
    propriedadesIgnoradas.has(nomePropriedade(no.name))
  ) {
    return saida;
  }
  if (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no)) {
    saida.push(no.text);
    return saida;
  }

  no.forEachChild((filho) => {
    coletarTextosAst(filho, saida, propriedadesIgnoradas);
  });
  return saida;
}
