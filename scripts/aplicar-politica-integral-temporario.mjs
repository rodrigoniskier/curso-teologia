import { readFile, writeFile } from 'node:fs/promises';

async function editar(caminho, transformacao) {
  const antes = await readFile(caminho, 'utf8');
  const depois = transformacao(antes);
  if (depois === antes) {
    console.log(`sem alteração: ${caminho}`);
    return;
  }
  await writeFile(caminho, depois);
  console.log(`atualizado: ${caminho}`);
}

function substituir(s, antigo, novo, rotulo) {
  if (s.includes(novo)) return s;
  if (!s.includes(antigo)) throw new Error(`trecho não encontrado: ${rotulo}`);
  return s.replace(antigo, novo);
}

await editar('README.md', (entrada) => {
  let s = entrada;
  s = substituir(
    s,
    '| Obras livres mapeadas | 224 |',
    '| Obras livres mapeadas | 224 |\n| Unidades verificadas | **0 / 1.375** |\n| Disciplinas concluídas | **0 / 121** |\n| Módulos avaliativos estruturados | **242** |',
    'linhas de progresso no README',
  );
  s = substituir(
    s,
    'A cobertura não é inferida pelo número bruto de verbetes. `npm run estado`\nconta **disciplinas distintas**: hoje há conteúdo em **101 das 101 disciplinas\nem que um verbete se aplica**. O primeiro ciclo de cobertura curricular está,\nportanto, completo. A diferença entre 201 verbetes e 101 disciplinas cobertas\nexiste porque algumas disciplinas possuem mais de um verbete.',
    'A régua principal não é mais a presença de verbetes. O projeto acompanha o **currículo integral das 121 disciplinas** e exige verificação explícita das **1.375 unidades oficiais**. Idiomas e estágios pertencem à mesma meta, mas usam formatos pedagógicos próprios. Um verbete ancorado numa unidade não a certifica automaticamente.\n\nO registro conservador começa sem promover retroativamente o acervo já escrito: cada unidade existente será revisada contra todos os seus tópicos oficiais quando chegar sua vez na fila de produção. `npm run progresso:curriculo` é a fonte de verdade para conclusão curricular; `npm run densidade:editorial` permanece apenas como indicador secundário de volume textual.',
    'parágrafo antigo 101/101',
  );
  if (!s.includes('## Currículo integral, ordem de produção e avaliações')) {
    s = s.replace(
      '## Como o conteúdo é escrito',
      '## Currículo integral, ordem de produção e avaliações\n\nO plano permanente está em [`src/dados/plano-curricular.json`](src/dados/plano-curricular.json). A produção segue primeiro as **93 disciplinas que aparecem no histórico de referência**, na ordem em que constam nele; somente depois entram as **28 disciplinas ausentes do histórico**, preservando a ordem do currículo oficial.\n\nCada disciplina possui dois módulos avaliativos estruturais: **AV1**, para as unidades oficiais 1–8 existentes, e **AV2**, para as unidades 9–15 existentes. O banco [`src/dados/questoes.json`](src/dados/questoes.json) começa vazio. A CI rejeita qualquer questão criada antes da conclusão integral de todas as unidades do bloco correspondente. Unidades 16+ continuam obrigatórias para concluir a disciplina, embora fiquem fora do recorte AV1/AV2; disciplinas sem unidades numeradas são acompanhadas em nível de disciplina, sem conteúdo inventado.\n\nAs unidades oficiais têm rota própria (`/disciplina/:codigo/unidade/:numero`). Isso permite que aquisição de línguas e estágios recebam, no futuro, materiais adequados ao seu método sem depender do formato de verbete doutrinário.\n\n## Como o conteúdo é escrito',
    );
  }
  s = substituir(
    s,
    'npm run validar             # gera o índice e valida ids, verMais, fontes, acervo e currículo\nnpm run validar:curriculo   # sequência e contaminação estrutural das unidades e bibliografias\nnpm run auditar:metadados   # coerência semântica entre título e URL de acervos',
    'npm run validar             # integridade de conteúdo, currículo integral e avaliações\nnpm run validar:curriculo   # sequência e contaminação estrutural das unidades e bibliografias\nnpm run validar:plano       # 121 disciplinas, ordem do histórico, AV1/AV2 e cobertura explícita\nnpm run validar:avaliacoes  # bloqueia questões prematuras ou fora da faixa/unidade\nnpm run progresso:curriculo # régua principal: unidades e disciplinas verificadas\nnpm run auditar:metadados   # coerência semântica entre título e URL de acervos',
    'comandos de auditoria README',
  );
  s = s.replace(
    /Depois de completar a cobertura aplicável,[\s\S]*?uma revisão ou um novo verbete terá maior efeito\./,
    '`npm run progresso:curriculo` define a próxima disciplina obrigatória pela ordem fixada no histórico e, ao final dele, pelo currículo oficial. `npm run priorizar` e `npm run densidade:editorial` permanecem diagnósticos secundários: ajudam a revisar extensão, fontes e estrutura, mas não podem furar a fila nem declarar uma unidade concluída.',
  );
  return s;
});

await editar('CLAUDE.md', (entrada) => {
  let s = entrada;
  if (!s.includes('**Currículo integral é a régua principal.**')) {
    s = s.replace(
      '- **Sempre ramo → PR → CI → merge.** Nada vai direto para `main`.',
      '- **Sempre ramo → PR → CI → merge.** Nada vai direto para `main`.\n- **Currículo integral é a régua principal.** Todas as 121 disciplinas pertencem à meta; idiomas e estágios não são excluídos.\n- **Unidade concluída exige verificação explícita.** A existência de verbete ou material relacionado não basta.\n- **Não fure a fila de produção.** Siga as 93 disciplinas do histórico de referência e só depois as 28 ausentes.\n- **AV1/AV2 começam vazias.** Questões só podem ser criadas depois da conclusão integral do bloco correspondente.',
    );
  }
  s = s.replace(
    /## 6\. O ciclo de trabalho[\s\S]*?\n---\n\n## 7\./,
    `## 6. O ciclo de trabalho\n\nA partir do plano curricular integral, a seleção do alvo não é mais livre:\n\n\`\`\`text\n0. Partir sempre do main mais recente em um ramo novo\n1. npm run proxima — identificar a primeira disciplina ainda não concluída na ordem fixada\n2. Trabalhar somente nessa disciplina até concluir suas unidades oficiais\n3. Ler a ementa e todos os tópicos da unidade ativa\n4. Auditar o material já existente antes de produzir algo novo\n5. Usar o formato pedagógico adequado: conteúdo, idioma ou estágio\n6. Marcar uma unidade em cobertura-curricular.json somente depois de revisar todos os seus tópicos\n7. Só quando todas as unidades de AV1 estiverem concluídas, elaborar AV1; idem para AV2\n8. Unidades 16+ continuam obrigatórias para concluir a disciplina, embora não entrem em AV1/AV2\n9. Disciplinas sem unidades oficiais são verificadas em nível de disciplina; nunca inventar unidades\n10. npm run validar && npm run build && npm run conferir\n11. Verificar a interface real no navegador\n12. PR, CI, Vercel, merge e validação pós-merge\n\`\`\`\n\n\`npm run priorizar\` e \`npm run densidade:editorial\` são diagnósticos secundários. Eles não podem escolher um alvo fora da fila nem promover cobertura automaticamente.\n\nIndependentemente do método de merge, **não reutilize um ramo antigo como base do próximo ciclo**. Novo ciclo começa no \`main\` já incorporado.\n\n---\n\n## 7.`,
  );
  s = s.replace(
    /## 9\. Estado e escolha do próximo alvo[\s\S]*?\n---\n\n## 10\./,
    `## 9. Estado, cobertura integral e avaliações\n\n**Não confie em número escrito aqui.** Rode:\n\n\`\`\`bash\nnpm run estado\nnpm run progresso:curriculo\nnpm run proxima\n\`\`\`\n\nA régua principal cobre as **121 disciplinas** e as **1.375 unidades oficiais**. O arquivo \`src/dados/cobertura-curricular.json\` é deliberadamente explícito: verbetes preexistentes não certificam unidades automaticamente. Aquisição de língua e estágio pertencem à meta integral, com formato pedagógico próprio.\n\nA ordem de produção está versionada em \`src/dados/plano-curricular.json\`: primeiro as **93 disciplinas do histórico de referência**, na ordem documentada; depois as **28 ausentes**, na ordem do currículo oficial.\n\nCada disciplina recebe dois módulos estruturais: **AV1 = unidades 1–8 existentes** e **AV2 = unidades 9–15 existentes**. O banco de questões começa vazio e \`npm run validar:avaliacoes\` reprova qualquer questão se o bloco correspondente ainda não estiver integralmente concluído. Unidades 16+ permanecem obrigatórias para a conclusão curricular, mas ficam fora desses dois recortes avaliativos. Disciplinas sem unidades numeradas não recebem unidades inventadas.\n\nO antigo indicador baseado em palavras permanece disponível como \`npm run densidade:editorial\`, mas é **secundário**: mede massa textual de disciplinas compatíveis com verbetes e não representa o percentual global de conclusão do curso.\n\n---\n\n## 10.`,
  );
  s = substituir(
    s,
    'npm run validar             # integridade interna de conteúdo e acervo\nnpm run regenerar:curriculo # reproduz ementas.json a partir do PDF original',
    'npm run validar             # conteúdo, currículo integral, cobertura e avaliações\nnpm run validar:plano       # invariantes do plano integral\nnpm run validar:avaliacoes  # impede questões prematuras/inválidas\nnpm run progresso:curriculo # régua principal de conclusão\nnpm run regenerar:curriculo # reproduz ementas.json a partir do PDF original',
    'comandos CLAUDE',
  );
  return s;
});

await editar('.github/workflows/auditoria.yml', (entrada) => {
  let s = entrada;
  s = substituir(
    s,
    '      - name: Validar integridade do conteúdo\n        run: npm run validar',
    '      - name: Validar conteúdo, currículo integral e avaliações\n        run: npm run validar',
    'nome do gate estrutural',
  );
  s = substituir(
    s,
    '      - name: Conferir os números do README\n        run: npm run conferir\n      - name: Verificar diagnóstico editorial\n        run: npm run priorizar -- --json > /dev/null',
    '      - name: Conferir os números do README\n        run: npm run conferir\n      - name: Conferir fila curricular integral\n        run: npm run progresso:curriculo -- --json > /dev/null\n      - name: Verificar diagnóstico editorial secundário\n        run: npm run priorizar -- --json > /dev/null',
    'fila integral na CI',
  );
  return s;
});

await editar('scripts/progresso-editorial.mjs', (entrada) => {
  let s = entrada;
  s = s.replace(
    ' * Estima o avanço da produção editorial sem tratar volume como nota de qualidade.',
    ' * Indicador SECUNDÁRIO de densidade textual das disciplinas tratadas por verbetes.',
  );
  s = s.replace(
    ' * estimativa transparente da massa editorial planejada, não um gate de qualidade.',
    ' * estimativa de massa textual, não um gate de qualidade nem o progresso global do currículo.',
  );
  s = s.replace("console.log('\\nPROGRESSO EDITORIAL ESTIMADO');", "console.log('\\nDENSIDADE EDITORIAL SECUNDÁRIA');");
  s = s.replace(
    "console.log('\\nEsta é uma estimativa de produção, não uma nota de qualidade nem um gate automático.');",
    "console.log('\\nIndicador secundário de volume textual: não representa a conclusão global das 121 disciplinas nem das 1.375 unidades.');",
  );
  return s;
});

await editar('scripts/estado.mjs', (entrada) => {
  if (entrada.includes("['Disciplinas concluídas', [disciplinasConcluidas, ementas.length]]")) return entrada;
  const alvo = "  ['Unidades verificadas', [unidadesConcluidas, unidades]],\n";
  if (!entrada.includes(alvo)) throw new Error('linha Unidades verificadas não encontrada em estado.mjs');
  return entrada.replace(
    alvo,
    alvo + "  ['Disciplinas concluídas', [disciplinasConcluidas, ementas.length]],\n",
  );
});
