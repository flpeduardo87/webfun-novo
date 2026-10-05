import '../../site.css';
import '../servico.css';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Globe, ShoppingBag, Megaphone, Settings, Bot, Smartphone } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { SERVICES_DATA } from '../services-data';

const ICONS: Record<string, React.ReactNode> = {
  'site-institucional': <Globe size={28} strokeWidth={1.6} />,
  'loja-virtual':       <ShoppingBag size={28} strokeWidth={1.6} />,
  'landing-page':       <Megaphone size={28} strokeWidth={1.6} />,
  'sistema-sob-medida': <Settings size={28} strokeWidth={1.6} />,
  'automacao-ia':       <Bot size={28} strokeWidth={1.6} />,
  'aplicativo':         <Smartphone size={28} strokeWidth={1.6} />,
};

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
              {ICONS[s.slug]}
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
            <div className="sv-hero-card-icon">{ICONS[s.slug]}</div>
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
                  <span className="sv-other-icon">{ICONS[o.slug]}</span>
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

      <Footer />
    </>
  );
}
