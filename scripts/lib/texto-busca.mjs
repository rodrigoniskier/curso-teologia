/** Remove as duas marcações inline que o portal renderiza nos verbetes. */
export function removerMarcacaoEnfase(texto) {
  return texto.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1');
}
