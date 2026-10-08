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
                  <div className="av">F</div>
                  <div className="av">A</div>
                  <div className="av">M</div>
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
              <div className="sec-eyebrow">Depoimentos</div>
              <div className="projects-title-row">
                <h2 className="sec-h2">Quem trabalhou<br />com a <em>gente fala.</em></h2>
                <p className="sec-sub">Resultados reais de negócios que apostaram em tecnologia e design.</p>
              </div>
            </div>
          </RevealOnScroll>
          <div className="testi-grid">
            {[
              {
                quote: 'Atendimento excelente, entrega rápida e resultado acima do esperado. Recomendo para quem busca qualidade.',
                name: 'Flávia Sussenbach',
                role: 'Flávia Sussenbach Advocacia',
                init: 'FS',
                color: 'var(--blue)',
              },
              {
                quote: 'Foi muito bom ver o trabalho começar a aparecer no Google para buscas importantes do negócio. O resultado fez diferença na nossa presença online.',
                name: 'João Kühl',
                role: 'Frigorífico Três Reis',
                init: 'JK',
                color: 'var(--green)',
              },
              {
                quote: 'Atendimento rápido e transparente do início ao fim. Tudo foi explicado com clareza e o resultado ficou do jeito que precisávamos.',
                name: 'Jean Mielke',
                role: 'Mielke Energia Solar',
                init: 'JM',
                color: 'var(--acid)',
              },
              {
                quote: 'Perfeito, muito obrigada por todo o trabalho. Nós gostamos muito do resultado!',
                name: 'Karen Hames',
                role: 'Brasileirinho · brasileirinho.ie',
                init: 'KH',
                color: 'var(--blue)',
              },
              {
                quote: 'Testei a calculadora e parece perfeita! Obrigada pelo ótimo trabalho.',
                name: 'Nicole Zanellato',
                role: 'Keep Clean · keepcleanireland.ie',
                init: 'NZ',
                color: 'var(--green)',
                wide: true,
              },
            ].map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 80} className={t.wide ? 'testi-wide-wrap' : ''}>
                <div className={`testi-card${t.wide ? ' testi-card-wide' : ''}`}>
                  <div className="testi-stars">★★★★★</div>
                  <p className="testi-text">{t.quote}</p>
                  <div className="testi-author">
                    <div className="testi-av" style={{ background: t.color, color: t.color === 'var(--acid)' ? 'var(--acid-fg)' : '#fff' }}>{t.init}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
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
          <RevealOnScroll>
            <div className="process-header">
              <div className="sec-eyebrow">Como trabalhamos</div>
              <div className="projects-title-row">
                <h2 className="sec-h2">Do primeiro papo<br />ao <em>site no ar.</em></h2>
                <p className="sec-sub">Um processo claro e sem surpresas — você sabe o que acontece em cada etapa e acompanha tudo de perto.</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="process-steps">
            {[
              {
                n: '01',
                title: 'Briefing',
                desc: 'A gente entende seu negócio antes de qualquer coisa. Nenhum template, nenhum achismo — só o que faz sentido pra você.',
                tags: ['Diagnóstico', 'Proposta', 'Cronograma'],
              },
              {
                n: '02',
                title: 'Design',
                desc: 'Montamos as telas e você aprova tudo antes de qualquer código. O que você vê é o que vai ao ar — sem surpresa no final.',
                tags: ['Wireframe', 'UI/UX', 'Aprovação'],
              },
              {
                n: '03',
                title: 'Desenvolvimento',
                desc: 'Código limpo, rápido e testado. Cada recurso sai do jeito combinado — sem enrolação, sem escopo inflado.',
                tags: ['Sprint', 'Testes', 'Revisão'],
              },
              {
                n: '04',
                title: 'Entrega & Suporte',
                desc: 'Colocamos no ar, mostramos como usar e continuamos por perto. Pra gente, entregar é o começo da parceria, não o fim.',
                tags: ['Deploy', 'Treinamento', 'Suporte'],
              },
            ].map((step, i) => (
              <RevealOnScroll key={step.n} delay={i * 100}>
                <div className="pstep">
                  <div className="pstep-num">{step.n}</div>
                  {i < 3 && <div className="pstep-connector" />}
                  <div className="pstep-body">
                    <h3 className="pstep-title">{step.title}</h3>
                    <p className="pstep-desc">{step.desc}</p>
                    <div className="pstep-tags">
                      {step.tags.map((t) => (
                        <span key={t} className="pstep-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
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
