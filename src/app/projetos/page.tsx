import '../site.css';
import './projetos.css';
import { ArrowRight, ExternalLink } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
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
      <NavBar active="projetos" />

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
                  <span className="feat-tag feat-tag-top">{p.tag}</span>
                  <div className="feat-info">
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
                <span className="feat-tag feat-tag-top">{p.tag}</span>
                <div className="feat-info feat-info-side">
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

      <Footer />
    </>
  );
}
