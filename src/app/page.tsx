import './site.css';
import ServiceWindow from '@/components/ServiceWindow';
import BudgetSection from '@/components/BudgetSection';

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
      <section className="projects-section" id="projetos">
        <div className="projects-inner">
          <div className="projects-header">
            <div className="sec-eyebrow">Projetos recentes</div>
            <h2 className="sec-h2">Do briefing ao<br /><em>resultado.</em></h2>
            <p className="sec-sub">Cada projeto é construído com propósito — design que comunica e código que entrega.</p>
          </div>
          <div className="proj-grid">
            {[
              { tag: 'Loja virtual', title: 'Moda Única Store', desc: 'E-commerce completo com catálogo, checkout e integração com WhatsApp.', color: 'proj-c1', year: '2024' },
              { tag: 'Site institucional', title: 'Clínica Saúde Total', desc: 'Site de conversão com agendamento online e SEO local para clínica médica.', color: 'proj-c2', year: '2024' },
              { tag: 'Sistema sob medida', title: 'Gestão Fácil', desc: 'Dashboard de pedidos, estoque e clientes para distribuidora regional.', color: 'proj-c3', year: '2025' },
              { tag: 'Automação & IA', title: 'FluxoBot', desc: 'Automação de atendimento e CRM para escola de idiomas com 1.200 alunos.', color: 'proj-c4', year: '2025' },
              { tag: 'Landing page', title: 'Imóvel Certo', desc: 'Landing de alta conversão para lançamento imobiliário em Florianópolis.', color: 'proj-c5', year: '2025' },
              { tag: 'Redesign', title: 'Sabor Artesanal', desc: 'Redesign completo de marca e site para confeitaria com delivery próprio.', color: 'proj-c6', year: '2025' },
            ].map((p) => (
              <div key={p.title} className="proj-card">
                <div className={`proj-thumb ${p.color}`}>
                  <span className="proj-tag">{p.tag}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-meta">{p.year}</div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <a href="#" className="proj-link">Ver projeto <span>→</span></a>
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
