export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: number;
  cover?: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    slug: 'landing-page-vs-site-institucional',
    title: 'Landing page ou site institucional: qual você realmente precisa?',
    excerpt: 'A diferença não é só de tamanho — é de objetivo. Entender isso antes de contratar vai te poupar tempo e dinheiro.',
    tag: 'Estratégia',
    date: '2025-08-14',
    readTime: 6,
    content: `
## O erro mais comum

A maioria das empresas contrata um site sem saber ao certo para que ele vai servir. O resultado é um projeto que parece certo, mas entrega pouco.

A pergunta certa não é "quero um site" — é "o que eu quero que aconteça quando alguém chega no meu site?"

## O que é uma landing page

Uma landing page tem **um único objetivo**: converter. Pode ser uma venda, um cadastro, um orçamento solicitado, um download.

Ela não tem menu de navegação. Não tem "Sobre" nem "Política de Privacidade" escondido no footer. Ela empurra o visitante em uma única direção — e só uma.

Quando faz sentido: campanhas de tráfego pago (Google Ads, Meta Ads), lançamentos de produto, captação de leads para um serviço específico.

**Resultado esperado**: taxas de conversão entre 3% e 15%, dependendo do nicho e da qualidade do tráfego.

## O que é um site institucional

Um site institucional conta a história completa da empresa. Tem páginas de serviços, portfólio, equipe, blog, contato. Serve para o visitante que chegou por indicação, pesquisou sua empresa no Google ou quer entender se você é a escolha certa antes de ligar.

Quando faz sentido: negócios com ciclo de venda mais longo (serviços B2B, consultoria, agências), empresas que querem ranquear no Google a médio prazo, marcas que precisam transmitir credibilidade.

**Resultado esperado**: aumento de autoridade percebida, mais pedidos de orçamento qualificados, base para SEO orgânico.

## A resposta curta

| | Landing page | Site institucional |
|---|---|---|
| Objetivo | Converter agora | Construir confiança |
| Ideal para | Anúncios pagos | SEO + indicações |
| Prazo de entrega | 1–2 semanas | 3–6 semanas |
| Custo relativo | Menor | Maior |

## E se eu precisar dos dois?

Muita gente precisa. A solução mais inteligente é um site institucional com uma seção de landing page integrada para cada serviço principal. Assim você tem a credibilidade do site completo e a conversão focada da landing page — sem manter dois projetos separados.

Na Webfun, a maioria dos clientes começa com um site institucional e depois criamos landing pages específicas para as campanhas sazonais. Funciona bem porque os dois compartilham a identidade visual já construída.

## Conclusão

Se você vai rodar anúncios amanhã: landing page primeiro.

Se você quer aparecer no Google em 6 meses e construir uma marca: site institucional.

Se você não tem certeza: fale com a gente antes de contratar qualquer coisa. A conversa é gratuita e vai te poupar a frustração de pagar por algo que não resolve seu problema.
    `.trim(),
  },
  {
    slug: 'por-que-seu-site-precisa-ser-rapido',
    title: 'Por que a velocidade do seu site afeta suas vendas (com números reais)',
    excerpt: 'Cada segundo a mais de carregamento custa conversões. Aqui estão os dados — e o que fazer com eles.',
    tag: 'Performance',
    date: '2025-07-28',
    readTime: 5,
    content: `
## O número que você precisa saber

De acordo com estudos do Google, **53% dos usuários mobile abandonam um site que demora mais de 3 segundos para carregar**.

Não 10 segundos. Três.

E a maioria dos sites que vemos no Brasil demora entre 5 e 12 segundos no celular.

## Por que isso acontece

Sites lentos geralmente têm um ou mais desses problemas:

**Imagens sem otimização.** Uma foto de 4MB direto do celular colocada no site. É o problema número um. Uma imagem de produto deveria ter no máximo 80–150KB em WebP ou AVIF.

**Hospedagem barata demais.** Servidor compartilhado com 500 outros sites, todos brigando pelos mesmos recursos. A hospedagem é onde a maioria tenta economizar — e é onde o custo aparece na velocidade.

**Muitos plugins ou scripts de terceiros.** Cada plugin carregado é mais JavaScript que o browser precisa baixar, parsear e executar. Um site WordPress com 30 plugins carrega um peso enorme antes de mostrar qualquer coisa.

**Sem CDN.** Se seu site está em um servidor em São Paulo e o visitante está em Porto Alegre, tudo bem. Se está em Canoinhas e o visitante está em Lisboa — ou em outra região do Brasil — a distância física importa.

## O impacto nas vendas

A Amazon calculou que **cada 100ms de latência reduz as vendas em 1%**. Não é hipérbole — é resultado de testes em escala.

Para uma empresa menor, os números variam muito. Mas o princípio vale: um site lento comunica descuido. O visitante não pensa "o site tá lento" — ele pensa "esse negócio não parece confiável".

E vai embora.

## Como medir a velocidade do seu site

Use o [PageSpeed Insights](https://pagespeed.web.dev/) do Google. Insira a URL do seu site e analise dois resultados: **Mobile** e **Desktop**.

O que importa: a nota **LCP** (Largest Contentful Paint — quanto tempo para o maior elemento aparecer). Abaixo de 2,5 segundos é bom. Acima de 4 segundos, é crítico.

## O que fazer

Se o problema for imagens: comprima tudo com o [Squoosh](https://squoosh.app/) ou converta para WebP. É gratuito e resolve boa parte dos casos.

Se o problema for hospedagem: migre para Vercel, Netlify, Cloudflare Pages (para sites estáticos) ou para um VPS com boa configuração. A diferença de custo é pequena; a diferença de velocidade é enorme.

Se o problema for estrutural: vale uma conversa sobre reconstruir o site com tecnologia mais moderna. Um Next.js bem configurado carrega em menos de 1 segundo em qualquer parte do mundo.

## Um número para fechar

Os sites que construímos na Webfun têm nota média de **90–100 no PageSpeed Mobile**. Não por vaidade — porque sabemos que velocidade é resultado.
    `.trim(),
  },
  {
    slug: 'o-que-e-seo-tecnico',
    title: 'SEO técnico: o que é, por que importa e o que você pode fazer agora',
    excerpt: 'SEO não é só palavras-chave. A parte técnica é o que decide se o Google consegue ou não ler o seu site.',
    tag: 'SEO',
    date: '2025-07-10',
    readTime: 7,
    content: `
## SEO é mais do que texto

Quando as pessoas falam de SEO, geralmente falam de palavras-chave: colocar o termo certo no título, no texto, na meta description. Isso é SEO de conteúdo — e é importante.

Mas tem uma camada anterior que decide se o Google vai ou não conseguir ler e indexar seu site: o **SEO técnico**.

## O que o Google precisa para ranquear seu site

O processo do Google tem três etapas:

1. **Rastreamento** — o bot do Google visita seu site seguindo links
2. **Indexação** — ele entende o conteúdo e salva no banco de dados
3. **Ranqueamento** — ele decide em que posição mostrar seu site

SEO técnico é garantir que as etapas 1 e 2 funcionem sem atrito.

## Os problemas mais comuns

**Páginas bloqueadas para rastreamento.** Um arquivo \`robots.txt\` mal configurado pode dizer ao Google para não visitar partes (ou todo) o seu site. Acontece mais do que parece, especialmente após migrações.

**Tempo de carregamento alto.** O Google usa velocidade como fator de ranqueamento desde 2021 (Core Web Vitals). Um site lento ranqueia menos.

**Conteúdo duplicado.** Duas URLs com o mesmo conteúdo confundem o Google sobre qual delas indexar. Isso aparece muito em lojas virtuais com filtros de produto.

**Falta de HTTPS.** Desde 2018 o Chrome marca sites HTTP como "não seguros". O Google também usa HTTPS como fator de ranqueamento.

**Links quebrados.** Páginas que retornam erro 404 desperdiçam o "orçamento de rastreamento" que o Google aloca para o seu site.

**Sem sitemap.** O sitemap.xml é um mapa do seu site para o Google. Sem ele, o bot precisa descobrir todas as páginas seguindo links — e pode perder conteúdo importante.

## Como verificar seu site

**Google Search Console** (gratuito): crie uma conta, adicione seu site e aguarde 24–48h. Ele mostra erros de cobertura, problemas de indexação e quais páginas estão ranqueando.

**PageSpeed Insights**: mede Core Web Vitals — LCP, CLS e FID. São as métricas que o Google usa para avaliar experiência do usuário.

**Screaming Frog SEO Spider** (gratuito até 500 URLs): rastreia seu site como o Google faria e lista todos os problemas técnicos encontrados.

## O que priorizar

Se você só puder fazer uma coisa agora: **instale o Google Search Console e resolva os erros de cobertura**.

Se puder fazer duas: **melhore a velocidade do site** (veja nosso artigo sobre performance).

O resto — estrutura de URLs, dados estruturados, canonical tags — é otimização incremental que vai importar depois que o básico estiver resolvido.

## SEO técnico em um projeto novo

Quando construímos um site na Webfun, o SEO técnico já vem incluído no projeto:

- Sitemap.xml gerado automaticamente
- Robots.txt configurado corretamente
- Metadados por página (title, description, Open Graph)
- URLs canônicas
- HTTPS e headers de segurança
- Core Web Vitals otimizados (nota 90+ no PageSpeed)

Não é opcional — é parte do que significa entregar um site que funciona de verdade.
    `.trim(),
  },
  {
    slug: 'quanto-custa-um-site',
    title: 'Quanto custa um site em 2025? Uma resposta honesta',
    excerpt: 'A pergunta tem uma resposta curta e uma longa. A curta é inútil. A longa vai te ajudar a tomar uma decisão melhor.',
    tag: 'Orçamento',
    date: '2025-06-22',
    readTime: 8,
    content: `
## Por que a resposta "depende" é insatisfatória

Toda vez que alguém pergunta "quanto custa um site", a resposta padrão é "depende". É verdade — mas é a resposta mais inútil que existe.

Então vamos tentar uma abordagem diferente: os números reais, por categoria, com o que está incluído e o que não está.

## As três categorias principais

### 1. Construtores de site (Wix, Squarespace, Webflow)

**Custo:** R$50–R$300/mês

O que você recebe: templates prontos, hospedagem incluída, arraste-e-solte.

O que você não recebe: diferenciação. Todo mundo usa os mesmos templates. Performance é mediana. SEO técnico é limitado. E você paga para sempre — não é um ativo seu.

Quando faz sentido: negócio muito pequeno, orçamento zero, você mesmo tem tempo para montar e manter.

### 2. Freelancer / agência pequena

**Custo:** R$2.000–R$12.000 (projeto único)

A variação enorme diz algo importante: o mercado é muito heterogêneo. Um freelancer que entrega um site em Elementor por R$2.000 e uma agência que entrega um projeto com Next.js, design customizado e SEO técnico por R$10.000 são produtos completamente diferentes.

Perguntas que você deve fazer antes de contratar:
- O site vai ser feito em WordPress/Elementor ou em código próprio?
- Qual a nota esperada no PageSpeed Mobile?
- Hospedagem está incluída? Por quanto tempo?
- E manutenção depois da entrega?

### 3. Agências médias / grandes

**Custo:** R$20.000–R$150.000+

Projetos complexos, sistemas sob medida, e-commerce robusto, integrações com ERP. O custo maior reflete equipes maiores, processos mais formais e mais camadas de garantia.

Para a maioria das PMEs, esse range é overkill.

## O que realmente determina o preço

**Complexidade do design.** Um layout customizado levando 2–3 semanas de design vs. um template adaptado em 2 dias — isso é a maior variável de custo.

**Número de páginas e seções.** Um site institucional com 5 páginas custa menos que um com 20 páginas de serviços detalhados.

**Funcionalidades.** Blog simples é diferente de um sistema de blog com categorias, busca e newsletter integrada. Página de contato é diferente de um sistema de orçamento automatizado.

**Integrações.** Conectar com CRM, sistema de pagamento, plataforma de e-mail marketing, ERP — cada integração adiciona escopo.

**SEO e performance.** Um site otimizado para velocidade e SEO técnico exige mais trabalho de configuração e desenvolvimento. É diferencial — e tem custo.

## O verdadeiro custo do mais barato

O site de R$1.500 pode parecer um bom negócio. Até você precisar atualizar algo e o freelancer não responder mais. Ou perceber que carrega em 8 segundos. Ou que o Google não consegue indexar metade das páginas.

Refazer um site errado custa mais do que ter feito certo na primeira vez.

Não porque seja mais caro tecnicamente — mas porque você também vai refazer o SEO, o conteúdo, a campanha de anúncios, e recomeçar do zero toda a autoridade que o domínio anterior estava acumulando.

## O que fazemos na Webfun

Trabalhamos na faixa de R$4.000–R$18.000 para sites institucionais e landing pages, e R$8.000–R$35.000 para lojas virtuais e sistemas sob medida.

Não somos os mais baratos. Somos o melhor custo-benefício para quem quer um projeto feito com cuidado técnico, design próprio e resultado mensurável.

Se o orçamento for o único critério, provavelmente não somos a escolha certa. Se o resultado for o critério principal — é uma boa conversa para ter.
    `.trim(),
  },
  {
    slug: 'automacao-para-pequenos-negocios',
    title: 'Automação para pequenos negócios: o que vale a pena em 2025',
    excerpt: 'Não é só para grandes empresas. Algumas automações simples economizam horas por semana — e custam menos do que você imagina.',
    tag: 'Automação',
    date: '2025-06-05',
    readTime: 6,
    content: `
## O problema com "automação"

A palavra assusta. Parece algo para empresas com dezenas de funcionários e um time de TI. Na prática, algumas das automações mais úteis custam R$0 e levam menos de uma hora para configurar.

Vamos separar o que é hype do que é útil para um negócio pequeno.

## Automações que valem a pena agora

### Resposta automática no WhatsApp

Se você recebe mais de 20 mensagens por dia no WhatsApp e boa parte é a mesma pergunta ("qual o preço?", "qual o endereço?", "vocês fazem X?"), um chatbot básico resolve isso.

Ferramentas como **Typebot**, **ManyChat** ou até o próprio **WhatsApp Business** permitem configurar respostas automáticas sem código. O tempo economizado em uma semana já justifica as 2h de configuração.

### Confirmação de agendamento

Se você tem negócio com agendamento (clínica, salão, consultório, personal), a taxa de no-show cai drasticamente com uma confirmação automática 24h antes. O **Cal.com** faz isso gratuitamente. O **Google Agenda** com Zapier também.

### Follow-up de orçamento

Você envia um orçamento e não recebe resposta. Três dias depois manda uma mensagem manual. Seis dias depois manda outra.

Isso pode ser automatizado com qualquer ferramenta de e-mail marketing (Brevo, Mailchimp, ActiveCampaign) configurada para enviar um lembrete automático 48h depois que o cliente abriu o orçamento e não respondeu.

Taxa de conversão de orçamento sobe, consistentemente, com follow-up sistemático.

### Relatório automático de vendas

Uma planilha Google com dados de vendas + uma fórmula + um Google Apps Script para enviar o resumo todo domingo de manhã. Grátis, funciona, e você para de montar relatório manual.

## O que NÃO vale a pena agora

**Automação de atendimento completo por IA.** Para a maioria dos pequenos negócios, os clientes querem falar com alguém. Um chatbot que não resolve bem frustra mais do que ajuda. Comece com automações simples antes de chegar aqui.

**Ferramentas caras sem problema definido.** Antes de contratar qualquer plataforma de automação, defina o problema: "perco X horas por semana fazendo Y". Se não conseguir preencher essa frase, não precisa de automação — precisa de organização.

## Automação personalizada vs. ferramentas prontas

Ferramentas prontas (Zapier, Make, n8n) conectam sistemas existentes sem código. São ótimas para 80% dos casos.

Automação personalizada — código, integrações via API, agentes de IA — resolve os 20% que as ferramentas prontas não conseguem. Custa mais para criar, mas escala melhor e não tem mensalidade por uso.

Na Webfun, temos projetos dos dois tipos: desde uma integração simples entre formulário e planilha até agentes de IA que processam pedidos e atualizam estoque automaticamente.

## Por onde começar

1. Liste as tarefas que você repete mais de 3x por semana
2. Marque as que são chatas e mecânicas (não as que exigem julgamento)
3. Para cada uma, pesquise "como automatizar [tarefa] no [ferramenta que você usa]"
4. Comece pela mais simples

Uma automação bem configurada é invisível. Você para de pensar nela e ela continua funcionando. Esse é o objetivo.
    `.trim(),
  },
];
