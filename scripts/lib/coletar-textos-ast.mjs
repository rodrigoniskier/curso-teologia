import ts from 'typescript';

/**
 * Coleta, em ordem de leitura, todos os literais textuais de um nó da AST.
 *
 * `forEachChild` encerra a travessia quando o callback devolve um valor
 * verdadeiro. Por isso o callback precisa deliberadamente não devolver o
 * array acumulador.
 */
export function coletarTextosAst(no, saida = []) {
  if (!no) return saida;
  if (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no)) {
    saida.push(no.text);
    return saida;
  }

  no.forEachChild((filho) => {
    coletarTextosAst(filho, saida);
  });
  return saida;
}
