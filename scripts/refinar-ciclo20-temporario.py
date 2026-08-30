from pathlib import Path

p = Path('src/conteudo/pastoral/ritos-provas-julgamento.ts')
s = p.read_text(encoding='utf-8')
marcador = "    {\n      tipo: 'definicao',\n      termo: 'Rito processual eclesiástico',"
bloco = """    {
      tipo: 'controversia',
      titulo: 'Quanto formalismo um tribunal eclesiástico precisa?',
      posicoes: [
        {
          escola: 'Minimalismo pastoral',
          sintese:
            'Prefere reduzir a forma ao mínimo para que o processo continue reconhecivelmente pastoral, simples e acessível a presbíteros que não são juristas. Sua força é evitar que a igreja imite um tribunal estatal e esconda pessoas atrás de tecnicismos. Seu custo é que, sem limites objetivos, a simplicidade pode virar improvisação: atos deixam de ser documentados, garantias variam de caso para caso e uma decisão substantivamente justa pode não sobreviver à revisão.',
        },
        {
          escola: 'Formalismo jurídico máximo',
          sintese:
            'Procura cercar o processo eclesiástico de cautelas semelhantes às do processo civil ou penal, importando categorias, peças e rotinas sempre que pareçam aumentar segurança. Sua força é a preocupação com previsibilidade, prova e defesa. Seu custo é acrescentar ao Código exigências que a própria igreja não adotou, transformar oficiais em operadores de uma técnica alheia ao seu ofício e permitir que analogias do direito estatal substituam a norma eclesiástica vigente.',
        },
        {
          escola: 'Forma proporcional e confessional',
          sintese:
            'Segue o Código de Disciplina e os regimentos aplicáveis com rigor, usa exatamente a simplificação que cada rito autoriza e preserva em todos eles competência, contraditório, defesa, prova, registro e decisão fundamentada. Sua força é distinguir fidelidade à forma de culto ao formalismo. Seu custo é exigir do tribunal estudo prévio e discernimento: não existe um único modelo de autos que possa ser repetido mecanicamente em toda causa.',
        },
      ],
    },
"""

if "titulo: 'Quanto formalismo um tribunal eclesiástico precisa?'" in s:
    raise SystemExit('bloco de controvérsia já existe')
if s.count(marcador) != 1:
    raise SystemExit(f'marcador esperado uma vez; encontrado {s.count(marcador)}')
p.write_text(s.replace(marcador, bloco + marcador), encoding='utf-8')
