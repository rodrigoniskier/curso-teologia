/**
 * Encontra a exceção de auditoria aplicável a uma URL.
 *
 * Regras sem `urlPrefixo` continuam abrangendo o domínio e seus subdomínios.
 * Quando o prefixo é informado, ele restringe também protocolo, host, porta e
 * início do caminho. Isso impede que uma exceção estreita (por exemplo,
 * Gov.br/IPHAN) silencie falhas de todo o restante do mesmo domínio.
 */
export function encontrarRestricao(url, restricoes) {
  let destino;
  try {
    destino = new URL(url);
  } catch {
    return undefined;
  }

  return restricoes.find((restricao) => {
    const dominioCorresponde =
      destino.hostname === restricao.dominio ||
      destino.hostname.endsWith(`.${restricao.dominio}`);

    if (!dominioCorresponde) return false;
    if (!restricao.urlPrefixo) return true;

    let prefixo;
    try {
      prefixo = new URL(restricao.urlPrefixo);
    } catch {
      return false;
    }

    return (
      destino.protocol === prefixo.protocol &&
      destino.hostname === prefixo.hostname &&
      destino.port === prefixo.port &&
      destino.pathname.startsWith(prefixo.pathname)
    );
  });
}
