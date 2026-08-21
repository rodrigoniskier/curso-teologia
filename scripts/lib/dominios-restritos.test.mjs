import assert from 'node:assert/strict';
import test from 'node:test';

import { encontrarRestricao } from './dominios-restritos.mjs';

const restricoes = [
  { dominio: 'ccel.org' },
  { dominio: 'www.gov.br', urlPrefixo: 'https://www.gov.br/iphan/' },
];

test('mantém exceções que abrangem um domínio e seus subdomínios', () => {
  assert.equal(encontrarRestricao('https://ccel.org/obra', restricoes)?.dominio, 'ccel.org');
  assert.equal(
    encontrarRestricao('https://www.ccel.org/obra', restricoes)?.dominio,
    'ccel.org',
  );
});

test('restringe a exceção do Gov.br ao prefixo do IPHAN', () => {
  assert.equal(
    encontrarRestricao('https://www.gov.br/iphan/pt-br/assuntos/noticias', restricoes)
      ?.urlPrefixo,
    'https://www.gov.br/iphan/',
  );
  assert.equal(
    encontrarRestricao('https://www.gov.br/iphan/pt-br/patrimonio-cultural', restricoes)
      ?.urlPrefixo,
    'https://www.gov.br/iphan/',
  );
});

test('não amplia a exceção para outras áreas ou prefixos parecidos do Gov.br', () => {
  assert.equal(encontrarRestricao('https://www.gov.br/mec/pt-br', restricoes), undefined);
  assert.equal(encontrarRestricao('https://www.gov.br/iphan-falso/', restricoes), undefined);
  assert.equal(encontrarRestricao('https://www.gov.br/iphan', restricoes), undefined);
});

test('não aceita outro protocolo, subdomínio ou host que apenas contenha o nome', () => {
  assert.equal(encontrarRestricao('http://www.gov.br/iphan/pt-br', restricoes), undefined);
  assert.equal(encontrarRestricao('https://arquivo.www.gov.br/iphan/pt-br', restricoes), undefined);
  assert.equal(encontrarRestricao('https://www.gov.br.example/iphan/pt-br', restricoes), undefined);
});

test('ignora URLs e prefixos inválidos com segurança', () => {
  assert.equal(encontrarRestricao('não é URL', restricoes), undefined);
  assert.equal(
    encontrarRestricao('https://www.gov.br/iphan/pt-br', [
      { dominio: 'www.gov.br', urlPrefixo: 'prefixo inválido' },
    ]),
    undefined,
  );
});
