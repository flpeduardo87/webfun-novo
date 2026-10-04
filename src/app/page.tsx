import './site.css';
import { ArrowRight } from 'lucide-react';
import ServiceWindow from '@/components/ServiceWindow';
import BudgetSection from '@/components/BudgetSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroAnimator from '@/components/HeroAnimator';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroAnimator />

      {/* HERO */}
      <section className="hero">
        <div className="hero-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Webfun · Serviços Digitais</div>
              <h1 className="hero-h1">
                <span className="row">Seu negócio</span>
                <span className="row">merece <span className="stamp">mais</span></span>
                <span className="row">do que um site.</span>
              </h1>
              <p className="hero-sub">
                Criamos sites, lojas e sistemas para ajudar seu negócio a{' '}
                <strong>vender mais</strong> e trabalhar melhor — com design que comunica e tecnologia que entrega.
              </p>
              <div className="hero-actions">
                <a href="#orcamento" className="btn-p">
                  Falar sobre meu projeto<ArrowRight size={15} strokeWidth={2} />
                </a>
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
            {['Clínica Saúde Total', 'Moda Única', 'Gestão Fácil', 'Imóvel Certo', 'Sabor Artesanal', 'Nova Era', 'FluxoBot', 'Forma+', 'AgendaPro', 'Clínica Saúde Total', 'Moda Única', 'Gestão Fácil', 'Imóvel Certo', 'Sabor Artesanal', 'Nova Era', 'FluxoBot', 'Forma+', 'AgendaPro'].map((name, i) => (
              <span key={i} className="logo-name">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* HOW WE WORK */}
      <section className="process-section">
        <div className="process-inner">
          <RevealOnScroll>
            <div className="process-header">
              <div className="sec-eyebrow">Como trabalhamos</div>
              <div className="projects-title-row">
                <h2 className="sec-h2">Do primeiro contato<br />à <em>entrega.</em></h2>
                <p className="sec-sub">Um processo claro e sem surpresas — você sabe o que acontece em cada etapa e acompanha tudo de perto.</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="process-steps">
            {[
              {
                n: '01',
                title: 'Briefing',
                desc: 'Entendemos seu negócio, seus objetivos e o que diferencia você no mercado. Nada de formulário genérico — uma conversa de verdade.',
                tags: ['Diagnóstico', 'Proposta', 'Cronograma'],
              },
              {
                n: '02',
                title: 'Design',
                desc: 'Criamos a identidade visual e os protótipos navegáveis. Você aprova antes de qualquer linha de código ser escrita.',
                tags: ['Wireframe', 'UI/UX', 'Aprovação'],
              },
              {
                n: '03',
                title: 'Desenvolvimento',
                desc: 'Código limpo, rápido e testado. Cada recurso é implementado conforme aprovado, sem escopo inflado ou surpresas.',
                tags: ['Sprint', 'Testes', 'Revisão'],
              },
              {
                n: '04',
                title: 'Entrega & Suporte',
                desc: 'Publicamos, treinamos sua equipe e ficamos por perto. O projeto no ar é o começo — não o fim da parceria.',
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
            { val: '3×', label: 'mais leads gerados', sub: 'pelos projetos dos clientes' },
            { val: '98%', label: 'de satisfação', sub: 'avaliações pós-entrega' },
            { val: '4+', label: 'anos no mercado', sub: 'atendendo todo o Brasil' },
          ].map((n, i) => (
            <RevealOnScroll key={n.label} delay={i * 80} from="bottom">
              <div className="num-card">
                <div className="num-val">{n.val}</div>
                <div className="num-label">{n.label}</div>
                <div className="num-sub">{n.sub}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

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

      {/* FAQ */}
      <FAQSection />

      {/* BUDGET */}
      <BudgetSection />

      <Footer />
    </>
  );
}
