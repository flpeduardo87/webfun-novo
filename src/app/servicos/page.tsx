import '../site.css';
import './servicos.css';
import {
  Camera, MessageCircle, Briefcase, ArrowRight,
  Globe, Megaphone, ShoppingBag, Settings, Bot, Smartphone,
  Check, Clock, Users, TrendingUp, Zap, Shield,
} from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { VisualSite, VisualLanding, VisualLoja, VisualSistema, VisualAutomacao, VisualApp } from './ServicosVisuals';

export const metadata = {
  title: 'Serviços — Webfun',
  description: 'Sites, lojas virtuais, sistemas sob medida e automações. Cada entrega pensada para converter.',
};

const SERVICES = [
  {
    slug: 'site-institucional',
    icon: <Globe size={24} strokeWidth={1.8} />,
    visual: <VisualSite />,
    tag: 'Mais popular',
    title: 'Site institucional',
    headline: 'Sua empresa na web do jeito certo.',
    desc: 'Um site profissional que apresenta seu negócio com credibilidade, comunica seus diferenciais e converte visitantes em clientes. Do portfólio à clínica, do escritório ao restaurante.',
    from: 'R$ 1.700',
    time: '~3 semanas',
    accent: 'serv-blue',
    features: [
      'Design exclusivo, não template',
      'Responsivo para todos os dispositivos',
      'Otimizado para Google (SEO)',
      'Formulário de contato e WhatsApp',
      'Google Analytics integrado',
      'Hospedagem e domínio orientados',
    ],
    ideal: ['Clínicas e consultórios', 'Escritórios e consultorias', 'Restaurantes e hotéis', 'Indústrias e distribuidoras'],
    projects: ['LUME Odontologia', 'NEXO Estratégia', 'AURA Estética', 'MAPEAR Florestal'],
  },
  {
    slug: 'landing-page',
    icon: <Megaphone size={24} strokeWidth={1.8} />,
    visual: <VisualLanding />,
    tag: 'Alta conversão',
    title: 'Landing page',
    headline: 'Uma página. Um objetivo. Máxima conversão.',
    desc: 'Para lançamentos, campanhas e produtos digitais. Estruturada com copywriting persuasivo, prova social e chamadas claras para ação — feita para converter o tráfego que você já está pagando.',
    from: 'R$ 2.400',
    time: '~2 semanas',
    accent: 'serv-acid',
    features: [
      'Estrutura focada em conversão',
      'Copywriting persuasivo incluso',
      'A/B testing configurado',
      'Integração com ferramentas de email',
      'Pixel de rastreamento (Meta, Google)',
      'Velocidade máxima de carregamento',
    ],
    ideal: ['Infoprodutos e cursos online', 'Lançamentos de produtos', 'Serviços com funil de vendas', 'Campanhas de mídia paga'],
    projects: ['Com Cristo Kids', 'Mielke Energia Solar'],
  },
  {
    slug: 'loja-virtual',
    icon: <ShoppingBag size={24} strokeWidth={1.8} />,
    visual: <VisualLoja />,
    tag: 'E-commerce',
    title: 'Loja virtual',
    headline: 'Venda online com autonomia total.',
    desc: 'E-commerce completo com catálogo, carrinho, checkout otimizado e painel de gestão. Integrado com os principais meios de pagamento e plataformas de envio do Brasil.',
    from: 'R$ 3.800',
    time: '~5 semanas',
    accent: 'serv-green',
    features: [
      'Catálogo com variantes e estoque',
      'Checkout otimizado para conversão',
      'Pix, cartão e boleto integrados',
      'Painel admin para gerenciar pedidos',
      'Integração com Correios e transportadoras',
      'Recuperação de carrinho abandonado',
    ],
    ideal: ['Moda e acessórios', 'Alimentos e bebidas', 'Cosméticos e beleza', 'Produtos artesanais'],
    projects: ['AZAFF Moda Feminina'],
  },
  {
    slug: 'sistema-sob-medida',
    icon: <Settings size={24} strokeWidth={1.8} />,
    visual: <VisualSistema />,
    tag: 'Sob medida',
    title: 'Sistema sob medida',
    headline: 'Processos que funcionam do jeito que você precisa.',
    desc: 'Quando uma plataforma pronta não resolve — ou quando você precisa que diferentes partes do negócio conversem. Sistemas de reservas, gestão de sócios, CRMs, portais internos.',
    from: 'R$ 5.500',
    time: '~8 semanas',
    accent: 'serv-purple',
    features: [
      'Análise de processos e requisitos',
      'Banco de dados estruturado',
      'Painel administrativo completo',
      'Permissões e níveis de acesso',
      'Relatórios e dashboards',
      'Treinamento da equipe incluso',
    ],
    ideal: ['Clubes e associações', 'Franquias e redes', 'Negócios com processos complexos', 'Empresas com equipes internas'],
    projects: ['Canoinhas Tênis Clube', 'MATCH Racquet Club', 'Casa Serena'],
  },
  {
    slug: 'automacao-ia',
    icon: <Bot size={24} strokeWidth={1.8} />,
    visual: <VisualAutomacao />,
    tag: 'Inteligência artificial',
    title: 'Automação & IA',
    headline: 'Seu negócio trabalhando enquanto você dorme.',
    desc: 'Automatizamos tarefas repetitivas, construímos fluxos de atendimento e integramos IA ao seu processo — para que sua equipe foque no que realmente importa.',
    from: 'R$ 2.200',
    time: '~3 semanas',
    accent: 'serv-orange',
    features: [
      'Chatbot com IA para atendimento',
      'Automação de WhatsApp e e-mail',
      'Integração entre sistemas via API',
      'Notificações e alertas automáticos',
      'Relatórios gerados automaticamente',
      'Fluxos de nutrição de leads',
    ],
    ideal: ['Negócios com alto volume de contatos', 'Equipes com tarefas repetitivas', 'E-commerces', 'Prestadores de serviço'],
    projects: [],
  },
  {
    slug: 'aplicativo',
    icon: <Smartphone size={24} strokeWidth={1.8} />,
    visual: <VisualApp />,
    tag: 'Mobile',
    title: 'Aplicativo',
    headline: 'Na palma da mão dos seus clientes.',
    desc: 'Aplicativos web progressivos (PWA) e nativos para iOS e Android. Quando o app mobile é o produto — ou quando seu cliente precisa de acesso rápido e offline.',
    from: 'R$ 4.500',
    time: '~8 semanas',
    accent: 'serv-teal',
    features: [
      'PWA ou app nativo (iOS + Android)',
      'Interface mobile-first',
      'Funciona offline',
      'Notificações push',
      'Publicação nas lojas (App Store, Play)',
      'Atualizações sem novo download',
    ],
    ideal: ['Delivery e food service', 'Clubes e associações', 'Serviços com agendamento', 'Negócios com recorrência'],
    projects: ['Forno Alto Pizzaria'],
  },
];

const DIFFS = [
  { icon: <Users size={18} strokeWidth={1.8} />, title: 'Atendimento direto', desc: 'Você fala com quem vai construir o seu projeto. Sem intermediários, sem ruído de comunicação.' },
  { icon: <TrendingUp size={18} strokeWidth={1.8} />, title: 'Foco em resultado', desc: 'Cada decisão de design e código é orientada por conversão e crescimento do seu negócio.' },
  { icon: <Zap size={18} strokeWidth={1.8} />, title: 'Entregas no prazo', desc: 'Processos claros, cronograma definido desde o briefing e comunicação constante durante o projeto.' },
  { icon: <Shield size={18} strokeWidth={1.8} />, title: 'Suporte após entrega', desc: 'O projeto no ar é o começo. Ficamos por perto para ajustes, dúvidas e evolução contínua.' },
];

export default function ServicosPage() {
  return (
    <>
      <NavBar active="servicos" />

      {/* HERO */}
      <section className="serv-hero">
        <div className="serv-hero-inner">
          <div className="eyebrow">Serviços</div>
          <h1 className="serv-h1">
            Do site ao sistema —<br />
            <em>tudo sob o mesmo teto.</em>
          </h1>
          <p className="serv-sub">
            Cada entrega é construída do zero para o seu negócio. Nada de template, nada de solução genérica. Design que comunica, código que funciona, resultado que aparece.
          </p>
          <div className="serv-hero-pills">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="shpill">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="serv-list">
        <div className="serv-list-inner">
          {SERVICES.map((s, i) => (
            <div key={s.slug} id={s.slug} className={`serv-card ${i % 2 === 1 ? 'serv-card-flip' : ''}`}>
              <div className="serv-card-copy">
                <div className="serv-card-top">
                  <div className={`serv-icon ${s.accent}`}>{s.icon}</div>
                  <span className="serv-badge">{s.tag}</span>
                </div>
                <h2 className="serv-card-title">{s.title}</h2>
                <p className="serv-card-headline">{s.headline}</p>
                <p className="serv-card-desc">{s.desc}</p>
                <div className="serv-card-meta">
                  <div className="serv-meta-item">
                    <span className="smi-label">A partir de</span>
                    <span className="smi-val">{s.from}</span>
                  </div>
                  <div className="serv-meta-sep" />
                  <div className="serv-meta-item">
                    <Clock size={12} strokeWidth={2} />
                    <span className="smi-val">{s.time}</span>
                  </div>
                </div>
                <div className="serv-card-actions">
                  <a href="/#orcamento" className="serv-card-cta">
                    Solicitar orçamento <ArrowRight size={14} strokeWidth={2} />
                  </a>
                  <a href={`/servicos/${s.slug}`} className="serv-card-details">
                    Ver detalhes
                  </a>
                </div>
              </div>
              <div className="serv-card-detail">
                <div className="serv-card-visual">{s.visual}</div>
                <div className="serv-features">
                  <div className="sfd-title">O que está incluso</div>
                  <ul className="sfd-list">
                    {s.features.map((f) => (
                      <li key={f}>
                        <Check size={13} strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="serv-ideal">
                  <div className="sfd-title">Ideal para</div>
                  <div className="sfd-tags">
                    {s.ideal.map((t) => (
                      <span key={t} className="sfd-tag">{t}</span>
                    ))}
                  </div>
                </div>
                {s.projects.length > 0 && (
                  <div className="serv-examples">
                    <div className="sfd-title">Projetos entregues</div>
                    <div className="sfd-tags">
                      {s.projects.map((p) => (
                        <span key={p} className="sfd-proj">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="diff-section">
        <div className="diff-inner">
          <div className="diff-header">
            <div className="sec-eyebrow">Por que a Webfun</div>
            <div className="projects-title-row">
              <h2 className="sec-h2">Não é só o que<br /><em>entregamos.</em></h2>
              <p className="sec-sub">É como trabalhamos em cada projeto — do primeiro contato ao suporte pós-entrega.</p>
            </div>
          </div>
          <div className="diff-grid">
            {DIFFS.map((d) => (
              <div key={d.title} className="diff-card">
                <div className="diff-icon">{d.icon}</div>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="serv-cta-section">
        <div className="serv-cta-inner">
          <div className="sec-eyebrow">Próximo passo</div>
          <h2 className="serv-cta-h2">Não sabe por onde<br /><em>começar?</em></h2>
          <p className="serv-cta-sub">Me conta o que você precisa — mesmo que seja só uma ideia. A gente descobre juntos o que faz mais sentido pro seu negócio.</p>
          <a href="/#orcamento" className="btn-p">
            Falar sobre meu projeto <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
