import '../site.css';
import './projetos.css';
import { Camera, MessageCircle, Briefcase, ArrowRight, ExternalLink } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';
import ProjetosGrid from './ProjetosGrid';
import { PROJECTS } from './data';

export const metadata = {
  title: 'Projetos — Webfun',
  description: 'Portfólio de sites, lojas virtuais, sistemas e automações entregues pela Webfun.',
};

const featured = PROJECTS.filter(p => p.featured);

export default function ProjetosPage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <span className="logo-dot" />webfun
        </a>
        <ul className="nav-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/projetos" className="nav-active">Projetos</a></li>
          <li><a href="/#orcamento">Contato</a></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/#orcamento" className="nav-cta">Começar projeto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="proj-hero">
        <div className="proj-hero-inner">
          <div className="proj-hero-copy">
            <div className="eyebrow">Portfólio</div>
            <h1 className="proj-h1">
              Do briefing ao<br /><em>resultado.</em>
            </h1>
            <p className="proj-sub">
              {PROJECTS.length} projetos entregues. Cada um com um problema real para resolver, uma identidade para construir e um resultado para alcançar.
            </p>
          </div>
          <div className="proj-hero-stats">
            <div className="phs-item">
              <div className="phs-val">{PROJECTS.length}</div>
              <div className="phs-label">projetos entregues</div>
            </div>
            <div className="phs-div" />
            <div className="phs-item">
              <div className="phs-val">5</div>
              <div className="phs-label">categorias</div>
            </div>
            <div className="phs-div" />
            <div className="phs-item">
              <div className="phs-val">4+</div>
              <div className="phs-label">anos de mercado</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="feat-section">
        <div className="feat-inner">
          <div className="feat-eyebrow">
            <span className="feat-dot" />
            Projetos em destaque
          </div>

          {/* Top row: AZAFF (lg) + LUME (sm) */}
          <div className="feat-row-top">
            {featured.filter(p => p.featSize !== 'full').map((p) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`feat-card feat-${p.featSize}`}
              >
                <div className="feat-img">
                  {p.img && (
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 100vw, 60vw"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  )}
                  <div className="feat-gradient" />
                  <div className="feat-info">
                    <span className="feat-tag">{p.tag}</span>
                    <h2 className="feat-title">{p.title}</h2>
                    <p className="feat-desc">{p.desc}</p>
                    <div className="feat-link">
                      Ver projeto <ExternalLink size={13} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Full-width: MATCH */}
          {featured.filter(p => p.featSize === 'full').map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="feat-card feat-full"
            >
              <div className="feat-img">
                {p.img && (
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                    priority
                  />
                )}
                <div className="feat-gradient feat-gradient-side" />
                <div className="feat-info feat-info-side">
                  <span className="feat-tag">{p.tag}</span>
                  <h2 className="feat-title feat-title-lg">{p.title}</h2>
                  <p className="feat-desc feat-desc-lg">{p.desc}</p>
                  <div className="feat-link">
                    Ver projeto <ExternalLink size={13} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section className="all-proj-section">
        <div className="all-proj-inner">
          <div className="all-proj-header">
            <div className="sec-eyebrow">Todos os projetos</div>
            <h2 className="sec-h2">O portfólio<br /><em>completo.</em></h2>
          </div>
          <ProjetosGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="proj-cta-section">
        <div className="proj-cta-inner">
          <div className="sec-eyebrow">Próximo passo</div>
          <h2 className="proj-cta-h2">Seu projeto<br /><em>é o próximo.</em></h2>
          <p className="proj-cta-sub">Traga o briefing — mesmo que seja só uma ideia. A gente descobre juntos o que faz mais sentido pro seu negócio.</p>
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
                <a href="/servicos#site-institucional">Site institucional</a>
                <a href="/servicos#loja-virtual">Loja virtual</a>
                <a href="/servicos#landing-page">Landing page</a>
                <a href="/servicos#sistema-sob-medida">Sistemas sob medida</a>
                <a href="/servicos#automacao-ia">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/projetos">Projetos</a>
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
