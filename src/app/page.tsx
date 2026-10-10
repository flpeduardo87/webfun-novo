import './site.css';
import { ArrowRight } from 'lucide-react';
import ServiceWindow from '@/components/ServiceWindow';
import BudgetSection from '@/components/BudgetSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import CountUp from '@/components/CountUp';
import TypewriterText from '@/components/TypewriterText';
import HeroNet from '@/components/HeroNet';

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="hero">
        <HeroNet />
        <div className="hero-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-stars">★★★★★</span> 4.8 · +50 projetos entregues</p>
              <h1 className="hero-h1">
                <span className="row">Seu site aparece</span>
                <span className="row">no <span className="stamp">Google.</span></span>
                <span className="row">Seu cliente chega.</span>
              </h1>
              <p className="hero-sub">
                A Webfun cria sites, lojas e sistemas que{' '}
                <strong>trabalham por você</strong> — mesmo quando você não está olhando.
              </p>
              <div className="hero-typewriter">
                <TypewriterText />
              </div>
              <div className="hero-actions">
                <span className="btn-ring">
                  <a href="#orcamento" className="btn-p">
                    Quero meu site funcionando<ArrowRight size={15} strokeWidth={2} />
                  </a>
                </span>
                <a href="/projetos" className="btn-g">Ver projetos</a>
              </div>
              <div className="proof">
                <div className="proof-avs">
                  <img className="av" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" />
                  <img className="av" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente" />
                  <img className="av" src="https://randomuser.me/api/portraits/men/67.jpg" alt="Cliente" />
                </div>
                <div className="proof-txt">
                  <strong>+50 projetos entregues</strong>
                  para negócios em SC e Brasil
                </div>
              </div>
            </div>

            <ServiceWindow />
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <div className="logos-strip">
        <div className="logos-label">Empresas que confiam</div>
        <div className="logos-track">
          <div className="logos-inner">
            {['Frigorífico Três Reis', 'Mielke Energia Solar', 'Canoinhas TC', 'Flávia Sussenbach', 'AZAFF', 'Wasabi Sushi Bar', 'Com Cristo Kids', 'Perform Engenharia', 'Elisangela Pontes', 'Frigorífico Três Reis', 'Mielke Energia Solar', 'Canoinhas TC', 'Flávia Sussenbach', 'AZAFF', 'Wasabi Sushi Bar', 'Com Cristo Kids', 'Perform Engenharia', 'Elisangela Pontes'].map((name, i) => (
              <span key={i} className="logo-name">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testi-section">
        <div className="testi-inner">
          <RevealOnScroll>
            <div className="testi-header">
              <div className="sec-eyebrow">Avaliações no Google</div>
              <div className="projects-title-row">
                <h2 className="sec-h2">Quem já contratou<br /><span className="sec-h2-muted">conta como foi.</span></h2>
                <p className="sec-sub">Opiniões reais de clientes que confiaram na Webfun para seus projetos.</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <div className="testi-google-card">
              <div className="testi-google-top">
                <svg className="testi-google-g" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
                <div className="testi-google-rating">
                  <span className="testi-google-num">4,8</span>
                  <div>
                    <div className="testi-google-stars">★★★★★</div>
                    <div className="testi-google-count">5 avaliações no Google</div>
                  </div>
                </div>
              </div>
              <div className="testi-google-divider" />
              <a href="https://maps.app.goo.gl/webfun" target="_blank" rel="noopener" className="testi-google-link">
                Ver no Google <span>↗</span>
              </a>
            </div>
          </RevealOnScroll>

          <div className="testi-grid">
            {[
              {
                quote: 'Atendimento excelente, entrega rápida e resultado acima do esperado. Recomendo para quem busca qualidade.',
                name: 'Flávia Sussenbach',
                role: 'Site institucional',
                init: 'FS',
                color: '#1a73e8',
                date: 'agosto de 2024',
              },
              {
                quote: 'Foi muito bom ver o trabalho começar a aparecer no Google para buscas importantes do negócio. O resultado fez diferença na nossa presença online.',
                name: 'João Kühl',
                role: 'Site + SEO',
                init: 'JK',
                color: '#34a853',
                date: 'março de 2024',
              },
              {
                quote: 'Atendimento rápido e transparente do início ao fim. Tudo foi explicado com clareza e o resultado ficou do jeito que precisávamos.',
                name: 'Jean Mielke',
                role: 'Site institucional',
                init: 'JM',
                color: '#ea4335',
                date: 'outubro de 2023',
              },
              {
                quote: 'Perfeito, muito obrigada por todo o trabalho. Nós gostamos muito do resultado!',
                name: 'Karen Hames',
                role: 'Loja virtual',
                init: 'KH',
                color: '#1a73e8',
                date: 'junho de 2024',
              },
              {
                quote: 'Testei a calculadora e parece perfeita! Obrigada pelo ótimo trabalho.',
                name: 'Nicole Zanellato',
                role: 'Sistema web',
                init: 'NZ',
                color: '#34a853',
                date: 'setembro de 2024',
              },
            ].map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 80}>
                <div className="testi-card">
                  <div className="testi-card-top">
                    <div className="testi-av" style={{ background: t.color }}>{t.init}</div>
                    <div className="testi-author-info">
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                    <svg className="testi-card-g" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      <path fill="none" d="M0 0h48v48H0z"/>
                    </svg>
                  </div>
                  <div className="testi-meta">
                    <span className="testi-stars">★★★★★</span>
                    <span className="testi-date">{t.date}</span>
                  </div>
                  <p className="testi-text">{t.quote}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* HOW WE WORK */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <div className="sec-eyebrow">Como trabalhamos</div>
            <div className="projects-title-row">
              <h2 className="sec-h2">Do primeiro papo<br />ao <em>site no ar.</em></h2>
              <p className="sec-sub">Um processo claro e sem surpresas — você sabe o que acontece em cada etapa e acompanha tudo de perto.</p>
            </div>
          </div>

          <div className="process-cards">
            {[
              { n: '01', dur: '30–60 min', title: 'Briefing', desc: 'A gente entende seu negócio antes de qualquer coisa. Nenhum template, nenhum achismo — só o que faz sentido pra você.', theme: 'light' },
              { n: '02', dur: '24–48h', title: 'Design', desc: 'Montamos as telas e você aprova tudo antes de qualquer código. O que você vê é o que vai ao ar — sem surpresa no final.', theme: 'dark' },
              { n: '03', dur: 'Semanas', title: 'Desenvolvimento', desc: 'Código limpo, rápido e testado. Cada recurso sai do jeito combinado — sem enrolação, sem escopo inflado.', theme: 'light' },
              { n: '04', dur: 'Contínuo', title: 'Entrega & Suporte', desc: 'Colocamos no ar, mostramos como usar e continuamos por perto. Entregar é o começo da parceria, não o fim.', theme: 'acid' },
            ].map((step, i, arr) => (
              <div key={step.n} className={`pcard pcard-${step.theme}`} style={{ '--card-index': i } as React.CSSProperties}>
                <div className="pcard-meta">
                  <span className="pcard-label">ETAPA {step.n}</span>
                  <span className="pcard-dur">{step.dur}</span>
                </div>
                <div className="pcard-bars">
                  {arr.map((_, j) => (
                    <div key={j} className={`pcard-bar${j <= i ? ' filled' : ''}`} />
                  ))}
                </div>
                <h3 className="pcard-title">{step.title}</h3>
                <p className="pcard-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers-section">
        <div className="numbers-inner">
          {[
            { val: '+50', label: 'projetos entregues', sub: 'sites, lojas e sistemas' },
            { val: '+8', label: 'estados atendidos', sub: 'de SC ao exterior' },
            { val: '4.8', label: 'de avaliação média', sub: 'nos projetos entregues' },
            { val: '4+', label: 'anos no mercado', sub: 'atendendo todo o Brasil' },
          ].map((n, i) => (
            <RevealOnScroll key={n.label} delay={i * 80} from="bottom">
              <div className="num-card">
                <div className="num-val"><CountUp value={n.val} /></div>
                <div className="num-label">{n.label}</div>
                <div className="num-sub">{n.sub}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* BUDGET */}
      <BudgetSection />

      <Footer />
    </>
  );
}
