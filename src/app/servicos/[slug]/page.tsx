import '../../site.css';
import '../servico.css';
import { notFound } from 'next/navigation';
import { Camera, MessageCircle, Briefcase, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { SERVICES_DATA } from '../services-data';

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES_DATA.find((d) => d.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} — Webfun`,
    description: s.sub,
  };
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES_DATA.find((d) => d.slug === slug);
  if (!s) notFound();

  const others = SERVICES_DATA.filter((d) => d.slug !== s.slug).slice(0, 3);

  return (
    <>
      <NavBar active="servicos" />

      {/* HERO */}
      <section className="sv-hero">
        <div className="sv-hero-inner">
          <div className="sv-hero-copy">
            <a href="/servicos" className="sv-back">
              <ArrowLeft size={14} strokeWidth={2} /> Todos os serviços
            </a>
            <div className="sv-tag">
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              {s.tagline}
            </div>
            <h1 className="sv-h1">{s.headline}</h1>
            <p className="sv-sub">{s.sub}</p>
            <div className="sv-hero-actions">
              <a href="/contato" className="btn-p">
                Solicitar proposta <ArrowRight size={14} strokeWidth={2} />
              </a>
              <a href="/projetos" className="sv-hero-link">Ver projetos →</a>
            </div>
          </div>

          <div className="sv-hero-card">
            <div className="sv-hero-card-icon">{s.icon}</div>
            <div>
              <div className="sv-hero-stat-label">A partir de</div>
              <div className="sv-hero-stat-val">{s.startingPrice}</div>
              <div className="sv-hero-stat-sub">valor varia conforme o escopo</div>
            </div>
            <div className="sv-hero-stat" style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
              <div className="sv-hero-stat-label">Prazo estimado</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--ink)' }}>
                {s.deliveryTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="sv-section">
        <div className="sv-inner">
          <div className="sv-eyebrow">O que está incluído</div>
          <h2 className="sv-h2">Tudo o que você<br /><em>recebe.</em></h2>
          <div className="sv-delivers-grid">
            {s.deliverables.map((d) => (
              <div key={d.title} className="sv-deliver-card">
                <div className="sv-deliver-check">
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <div className="sv-deliver-title">{d.title}</div>
                <div className="sv-deliver-desc">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="sv-section">
        <div className="sv-inner">
          <div className="sv-eyebrow">Para quem é</div>
          <h2 className="sv-h2">Faz sentido<br /><em>para você?</em></h2>
          <div className="sv-ideal-list">
            {s.ideal.map((item) => (
              <div key={item} className="sv-ideal-item">
                <div className="sv-ideal-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sv-section">
        <div className="sv-inner">
          <div className="sv-eyebrow">Como funciona</div>
          <h2 className="sv-h2">Do briefing<br /><em>à entrega.</em></h2>
          <div className="sv-process-list">
            {s.process.map((step) => (
              <div key={step.n} className="sv-process-item">
                <div className="sv-process-num">{step.n}</div>
                <div>
                  <div className="sv-process-title">{step.title}</div>
                  <div className="sv-process-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sv-section">
        <div className="sv-inner">
          <div className="sv-eyebrow">Perguntas frequentes</div>
          <h2 className="sv-h2">Dúvidas sobre<br /><em>{s.name.toLowerCase()}.</em></h2>
          <div className="sv-faq-list">
            {s.faq.map((f) => (
              <details key={f.q} className="sv-faq-item">
                <summary className="sv-faq-q">{f.q}</summary>
                <p className="sv-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      {others.length > 0 && (
        <section className="sv-section">
          <div className="sv-inner">
            <div className="sv-eyebrow">Outros serviços</div>
            <h2 className="sv-h2">Explore<br /><em>mais.</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {others.map((o) => (
                <a
                  key={o.slug}
                  href={`/servicos/${o.slug}`}
                  className="sv-other-card"
                >
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{o.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{o.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{o.tagline}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="sv-cta-section">
        <div className="sv-cta-inner">
          <div className="sv-eyebrow" style={{ color: 'var(--acid)', justifyContent: 'center' }}>Próximo passo</div>
          <h2 className="sv-cta-h2">Pronto para<br /><em>começar?</em></h2>
          <p className="sv-cta-sub">
            Traga o briefing — mesmo que seja só uma ideia. A conversa é gratuita e sem compromisso.
          </p>
          <a href="/contato" className="btn-p">
            Solicitar proposta <ArrowRight size={14} strokeWidth={2} />
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
                <a href="/servicos/site-institucional">Site institucional</a>
                <a href="/servicos/loja-virtual">Loja virtual</a>
                <a href="/servicos/landing-page">Landing page</a>
                <a href="/servicos/sistema-sob-medida">Sistemas sob medida</a>
                <a href="/servicos/automacao-ia">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/projetos">Projetos</a>
                <a href="/processo">Como trabalhamos</a>
                <a href="/blog">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="mailto:agenciawebfun@gmail.com">agenciawebfun@gmail.com</a>
                <a href="https://wa.me/5547997618824">WhatsApp</a>
                <a href="#">Canoinhas, SC</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Webfun. Todos os direitos reservados.</span>
            <span className="footer-credits">Feito com cuidado em Canoinhas</span>
          </div>
        </div>
      </footer>
    </>
  );
}
