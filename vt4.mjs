import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
const erros = [];
p.on('pageerror', e => erros.push('PAGEERROR: ' + e.message));
await p.goto('http://127.0.0.1:4192/disciplina/TE02/te02-canon-nt', { waitUntil: 'networkidle' });
await p.waitForTimeout(600);
const r = await p.evaluate(() => {
  const art = document.querySelector('article');
  const t = art.textContent; const c = s => t.split(s).length - 1;
  return {
    titulo: art.querySelector('h1')?.textContent,
    definicao: c('Definição'), pastoral: c('Nota pastoral'),
    controversia: c('Onde se divide'), termos: c('Termo técnico'),
    citacoes: art.querySelectorAll('blockquote').length,
    passagens: c('2 Pedro 3.15-16'),
    leiaTambem: art.textContent.includes('Leia também'),
    cardsLeia: [...art.querySelectorAll('section')].slice(-2)[0]?.querySelectorAll('li').length ?? 0,
    fontes: document.querySelectorAll('a[target="_blank"]').length,
    caracteres: t.length,
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
  };
});
console.log(JSON.stringify(r, null, 1));
console.log('erros:', JSON.stringify(erros));
await b.close();
