export type Project = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  img?: string;
  color?: string;
  year: string;
  url?: string;
  featured?: boolean;
  featSize?: 'lg' | 'sm' | 'full';
};

export const PROJECTS: Project[] = [
  {
    slug: 'azaff',
    tag: 'Loja virtual',
    title: 'AZAFF',
    desc: 'E-commerce de moda feminina com identidade minimalista, catálogo dinâmico e checkout otimizado para conversão.',
    img: '/projects/azaff.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/azaff/index.html',
    featured: true,
    featSize: 'lg',
  },
  {
    slug: 'lume',
    tag: 'Site institucional',
    title: 'LUME Odontologia',
    desc: 'Site de alta conversão para clínica odontológica com agendamento online e área do paciente.',
    img: '/projects/lume.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/lume/index.html',
    featured: true,
    featSize: 'sm',
  },
  {
    slug: 'match',
    tag: 'Sistema',
    title: 'MATCH Racquet Club',
    desc: 'Plataforma completa para clube de raquete com reservas, planos de sócios e agenda de eventos.',
    img: '/projects/match.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/match/index.html',
    featured: true,
    featSize: 'full',
  },
  {
    slug: 'aura',
    tag: 'Site institucional',
    title: 'AURA Estética',
    desc: 'Site premium para clínica estética avançada com foco em conversão e identidade visual sofisticada.',
    img: '/projects/aura.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/aura/index.html',
  },
  {
    slug: 'canoinhas-tc',
    tag: 'Sistema',
    title: 'Canoinhas Tênis Clube',
    desc: 'Site institucional + sistema de reservas de quadras, churrasqueiras e gestão de sócios.',
    img: '/projects/canoinhas-tc.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/canoinhas-tc/index.html',
  },
  {
    slug: 'casa-serena',
    tag: 'Site institucional',
    title: 'Casa Serena',
    desc: 'Hotel boutique na Serra da Mantiqueira com sistema de reservas integrado e identidade visual premium.',
    img: '/projects/casa-serena.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/casa-serena/index.html',
  },
  {
    slug: 'nexo',
    tag: 'Site institucional',
    title: 'NEXO Estratégia',
    desc: 'Site institucional para consultoria B2B com foco em diagnóstico executivo e autoridade de marca.',
    img: '/projects/nexo.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/nexo/index.html',
  },
  {
    slug: 'forno-alto',
    tag: 'Delivery',
    title: 'Forno Alto Pizzaria',
    desc: 'Cardápio digital com pedido online, controle de horário e integração direta com a cozinha.',
    img: '/projects/forno-alto.webp',
    year: '2025',
    url: 'https://webfun.com.br/modelos/forno-alto/index.html',
  },
  {
    slug: 'com-cristo-kids',
    tag: 'Landing page',
    title: 'Com Cristo Kids',
    desc: 'Landing page de alta conversão para biblioteca cristã infantil digital com checkout integrado.',
    img: '/projects/com-cristo-kids.webp',
    year: '2025',
    url: 'https://webfun.com.br/modelos/com-cristo-kids/index.html',
  },
  {
    slug: 'mielke',
    tag: 'Site institucional',
    title: 'Mielke Energia Solar',
    desc: 'Site de geração de leads para instaladora solar com portfólio de projetos entregues.',
    img: '/projects/mielke.jpg',
    year: '2024',
    url: 'https://webfun.com.br/modelos/mielke/index.html',
  },
  {
    slug: 'mapear',
    tag: 'Site institucional',
    title: 'MAPEAR Florestal',
    desc: 'Site institucional para assessoria em engenharia florestal com portfólio técnico e captação de leads.',
    img: '/projects/mapear.jpg',
    year: '2024',
    url: 'https://webfun.com.br/modelos/mapear/index.html',
  },
  {
    slug: 'wasabi',
    tag: 'Site institucional',
    title: 'Wasabi Sushi Bar',
    desc: 'Site para restaurante japonês em Dublin com cardápio digital, reservas e identidade visual marcante.',
    color: 'proj-wasabi',
    year: '2024',
    url: 'https://wasabisushibar.ie',
  },
  {
    slug: 'tresreis',
    tag: 'Site institucional',
    title: 'Frigorífico Três Reis',
    desc: 'Site institucional para frigorífico com portfólio de cortes, diferenciais e captação de clientes B2B.',
    color: 'proj-tresreis',
    year: '2024',
    url: 'https://frigorificotresreis.com.br',
  },
  {
    slug: 'flavia',
    tag: 'Site institucional',
    title: 'Flávia Sussenbach',
    desc: 'Site para escritório de advocacia com foco em autoridade, credibilidade e captação de consultas.',
    color: 'proj-flavia',
    year: '2024',
    url: 'https://flaviasussenbachadvogados.com.br',
  },
];

export const FILTERS = ['Todos', 'Site institucional', 'Landing page', 'Loja virtual', 'Sistema', 'Delivery'];
