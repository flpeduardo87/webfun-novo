import './site.css';
import ServiceWindow from '@/components/ServiceWindow';
import BudgetSection from '@/components/BudgetSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <span className="logo-dot" />
          webfun
        </a>
        <ul className="nav-links">
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <a href="#orcamento" className="nav-cta">Começar projeto</a>
      </nav>

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
                  <i className="ic">→</i>Falar sobre meu projeto
                </a>
                <a href="#" className="btn-g">Ver projetos</a>
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

      {/* PROJECTS */}
      <ProjectsSection />

      {/* HOW WE WORK */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <div className="sec-eyebrow">Como trabalhamos</div>
            <div className="projects-title-row">
              <h2 className="sec-h2">Do primeiro contato<br />à <em>entrega.</em></h2>
              <p className="sec-sub">Um processo claro e sem surpresas — você sabe o que acontece em cada etapa e acompanha tudo de perto.</p>
            </div>
          </div>

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
              <div key={step.n} className="pstep">
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
            ))}
          </div>
        </div>
      </section>

      {/* BUDGET */}
      <BudgetSection />
    </>
  );
}
