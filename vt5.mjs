import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
const erros = [];
p.on('pageerror', e => erros.push('PAGEERROR: ' + e.message));
await p.goto('http://127.0.0.1:4193/disciplina/TP12/tp12-governo-presbiteriano', { waitUntil: 'networkidle' });
await p.waitForTimeout(600);
const r = await p.evaluate(() => {
  const art = document.querySelector('article');
  const t = art.textContent; const c = s => t.split(s).length - 1;
  const secLeia = [...art.querySelectorAll('section')].find(s => /Leia tamb/.test(s.textContent));
  return {
    titulo: art.querySelector('h1')?.textContent,
    definicao: c('Definição'), pastoral: c('Nota pastoral'),
    controversia: c('Onde se divide'), termos: c('Termo técnico'),
    citacoes: art.querySelectorAll('blockquote').length,
    cardsLeia: secLeia ? secLeia.querySelectorAll('li').length : 0,
    fontes: document.querySelectorAll('a[target="_blank"]').length,
    caracteres: t.length,
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
  };
});
console.log(JSON.stringify(r, null, 1));
console.log('erros:', JSON.stringify(erros));
await p.goto('http://127.0.0.1:4193/', { waitUntil: 'networkidle' });
await p.fill('#busca', 'ministerial e declarativo');
await p.waitForTimeout(400);
console.log('busca ->', await p.locator('nav a').filter({ hasText: /Governo/ }).count(), 'resultado(s)');
await b.close();
