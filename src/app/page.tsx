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

      {/* BUDGET */}
      <BudgetSection />
    </>
  );
}
