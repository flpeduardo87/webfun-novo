import '../site.css';
import './sobre.css';
import { Camera, MessageCircle, Briefcase, ArrowRight, MapPin, Zap, Eye, Wrench, Target } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

export const metadata = {
  title: 'Sobre — Webfun',
  description: 'Estratégia, design e código no mesmo projeto. Conheça a Webfun e como trabalhamos.',
};

export default function SobrePage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <span className="logo-dot" />
          webfun
        </a>
        <ul className="nav-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/#servicos">Serviços</a></li>
          <li><a href="/#projetos">Projetos</a></li>
          <li><a href="/#orcamento">Contato</a></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/#orcamento" className="nav-cta">Começar projeto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="sobre-hero">
        <div className="sobre-hero-inner">
          <div className="sobre-hero-copy">
            <div className="eyebrow">Sobre a Webfun</div>
            <h1 className="sobre-h1">
              Estratégia, design<br />e código — no{' '}
              <em>mesmo projeto.</em>
            </h1>
            <p className="sobre-sub">
              Não somos uma fábrica de sites. Cada projeto começa pela pergunta certa: qual é o problema real que precisa ser resolvido? A partir daí, construímos o que faz sentido — nada mais, nada menos.
            </p>
          </div>
          <div className="sobre-hero-visual">
            <div className="sobre-badge-wrap">
              <div className="sobre-badge sobre-badge-1">
                <span className="sbadge-dot" />
                Design com propósito
              </div>
              <div className="sobre-badge sobre-badge-2">
                <MapPin size={11} />
                Canoinhas, SC
              </div>
              <div className="sobre-stat-card">
                <div className="ssc-val">+50</div>
                <div className="ssc-label">projetos entregues</div>
              </div>
              <div className="sobre-stat-card ssc-alt">
                <div className="ssc-val">4+</div>
                <div className="ssc-label">anos de mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto-section">
        <div className="manifesto-inner">
          <div className="manifesto-grid">
            <div className="manifesto-card mc-dark">
              <div className="mc-eyebrow">O projeto começa</div>
              <h2 className="mc-heading">pelo que precisa<br /><em>resolver.</em></h2>
              <p className="mc-text">
                Antes de qualquer pixel ou linha de código, entendemos o negócio. Quem é o cliente, o que o impede de comprar, como o processo funciona hoje. O site é a resposta — não o ponto de partida.
              </p>
            </div>
            <div className="manifesto-card mc-light">
              <div className="mc-eyebrow">Digital não é sobre o site.</div>
              <h2 className="mc-heading">É sobre<br /><em>experiência.</em></h2>
              <p className="mc-text">
                Um site bonito que não converte é decoração cara. Um sistema que ninguém usa é desperdício. Entregamos coisas que funcionam no mundo real — com pessoas reais, em dispositivos reais.
              </p>
            </div>
            <div className="manifesto-card mc-accent">
              <div className="mc-eyebrow">Projetos reais</div>
              <h2 className="mc-heading">para quem vai<br /><em>usar de verdade.</em></h2>
              <p className="mc-text">
                Trabalhamos com negócios locais, regionais e nacionais. De clínicas a clubes de raquete, de e-commerces a sistemas de gestão. O denominador comum é sempre o mesmo: resultado tangível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder-section">
        <div className="founder-inner">
          <div className="founder-img-col">
            <div className="founder-photo-wrap">
              <div className="founder-photo-placeholder">
                <span>F</span>
              </div>
              <div className="founder-tag">
                <span className="ftag-dot" />
                À frente da Webfun
              </div>
            </div>
          </div>
          <div className="founder-copy">
            <div className="sec-eyebrow">Fundador</div>
            <h2 className="sec-h2">Felipe<br /><em>Pedroso.</em></h2>
            <p className="founder-bio">
              Comecei a Webfun depois de perceber que a maioria das agências entregava sites — mas não soluções. Trabalhei em projetos de pequenas empresas a negócios internacionais e vi de perto o que separa um site que converte de um que só existe.
            </p>
            <p className="founder-bio">
              Hoje lidero cada projeto pessoalmente: do briefing inicial à entrega e suporte. Não tem intermediário entre você e a pessoa que vai construir o seu digital.
            </p>
            <div className="founder-tags">
              <span className="ftag-pill">Estratégia digital</span>
              <span className="ftag-pill">UI/UX Design</span>
              <span className="ftag-pill">Desenvolvimento web</span>
              <span className="ftag-pill">Automação</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-header">
            <div className="sec-eyebrow">Como pensamos</div>
            <div className="projects-title-row">
              <h2 className="sec-h2">De problema à<br /><em>solução funcionando.</em></h2>
              <p className="sec-sub">Quatro princípios que guiam cada decisão em cada projeto.</p>
            </div>
          </div>
          <div className="values-grid">
            {[
              {
                icon: <Eye size={20} strokeWidth={1.8} />,
                title: 'Entender primeiro',
                desc: 'Nenhum projeto começa com design ou código. Começa com perguntas. Qual é o problema real? Quem vai usar? O que define sucesso? Só depois partimos para a solução.',
              },
              {
                icon: <Target size={20} strokeWidth={1.8} />,
                title: 'Design com função',
                desc: 'Beleza é critério, não objetivo. Todo elemento visual existe por um motivo — guiar o olhar, reduzir fricção, comunicar valor. Se não cumpre função, não está lá.',
              },
              {
                icon: <Wrench size={20} strokeWidth={1.8} />,
                title: 'Tecnologia sem teoria',
                desc: 'Usamos a tecnologia que resolve o problema — não a mais nova, não a mais impressionante. O critério é sempre: vai funcionar para o seu negócio, na prática, a longo prazo?',
              },
              {
                icon: <Zap size={20} strokeWidth={1.8} />,
                title: 'Qualidade que se mantém',
                desc: 'Código limpo, estrutura sólida, documentação clara. O projeto precisa funcionar hoje e ser fácil de evoluir amanhã — sem refazer do zero quando o negócio crescer.',
              },
            ].map((v) => (
              <div key={v.title} className="value-card">
                <div className="vcard-icon">{v.icon}</div>
                <h3 className="vcard-title">{v.title}</h3>
                <p className="vcard-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="local-section">
        <div className="local-inner">
          <div className="local-copy">
            <div className="sec-eyebrow">Onde estamos</div>
            <h2 className="sec-h2">Raiz local.<br /><em>Projetos sem fronteiras.</em></h2>
            <p className="sec-sub">
              Nascemos em Canoinhas, SC — e atendemos negócios em todo o Brasil. A proximidade com o cliente é uma escolha, não uma limitação geográfica.
            </p>
            <div className="local-items">
              <div className="local-item">
                <MapPin size={14} strokeWidth={2} />
                <span>Canoinhas, Santa Catarina</span>
              </div>
              <div className="local-item">
                <span className="li-dot" style={{ background: 'var(--green)' }} />
                <span>Atendimento remoto em todo o Brasil</span>
              </div>
              <div className="local-item">
                <span className="li-dot" style={{ background: 'var(--blue)' }} />
                <span>Projetos internacionais (IE, PT)</span>
              </div>
            </div>
          </div>
          <div className="local-visual">
            <div className="local-map-card">
              <div className="lmap-pin-area">
                <div className="lmap-pin">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div className="lmap-pulse" />
              </div>
              <div className="lmap-label">Canoinhas · SC</div>
              <div className="lmap-sub">Brasil & Internacional</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sobre-cta-section">
        <div className="sobre-cta-inner">
          <div className="sec-eyebrow">Próximo passo</div>
          <h2 className="sobre-cta-h2">Seu digital precisa<br /><em>trabalhar por você.</em></h2>
          <p className="sobre-cta-sub">Vender melhor. Atender melhor. Funcionar melhor. Crescer com base sólida.<br />Isso começa com uma conversa.</p>
          <a href="/#orcamento" className="btn-p">
            Começar meu projeto <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{ marginBottom: 12 }}>
                <span className="logo-dot" />webfun
              </a>
              <p className="footer-tagline">Tecnologia e design para<br />negócios que querem crescer.</p>
              <div className="footer-socials">
                <a href="#" className="fsoc" aria-label="Instagram"><Camera size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="WhatsApp"><MessageCircle size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="LinkedIn"><Briefcase size={16} strokeWidth={1.8} /></a>
              </div>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <div className="fcol-title">Serviços</div>
                <a href="#">Site institucional</a>
                <a href="#">Loja virtual</a>
                <a href="#">Landing page</a>
                <a href="#">Sistemas sob medida</a>
                <a href="#">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/#projetos">Projetos</a>
                <a href="/#processo">Como trabalhamos</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="#">agenciawebfun@gmail.com</a>
                <a href="#">WhatsApp</a>
                <a href="#">Florianópolis, SC</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Webfun. Todos os direitos reservados.</span>
            <span className="footer-credits">Feito com cuidado em Florianópolis</span>
          </div>
        </div>
      </footer>
    </>
  );
}
