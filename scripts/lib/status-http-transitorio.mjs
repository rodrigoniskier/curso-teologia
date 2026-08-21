const STATUS_TRANSITORIOS = new Set([403, 408, 425, 429]);

/**
 * Respostas que podem refletir proteção automatizada, limitação ou falha
 * temporária do servidor. Elas merecem nova medição, mas continuam reprovando
 * a auditoria se persistirem após todas as tentativas.
 */
export function statusHttpTransitorio(status) {
  return STATUS_TRANSITORIOS.has(status) || status >= 500;
}
