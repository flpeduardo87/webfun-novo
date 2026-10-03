import './site.css';
import { Camera, MessageCircle, Briefcase } from 'lucide-react';
import ServiceWindow from '@/components/ServiceWindow';
import BudgetSection from '@/components/BudgetSection';
import ProjectsSection from '@/components/ProjectsSection';
import FAQSection from '@/components/FAQSection';

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
                  Falar sobre meu projeto<i className="ic">→</i>
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

      {/* NUMBERS */}
      <section className="numbers-section">
        <div className="numbers-inner">
          {[
            { val: '+50', label: 'projetos entregues', sub: 'sites, lojas e sistemas' },
            { val: '3×', label: 'mais leads gerados', sub: 'pelos projetos dos clientes' },
            { val: '98%', label: 'de satisfação', sub: 'avaliações pós-entrega' },
            { val: '4+', label: 'anos no mercado', sub: 'atendendo todo o Brasil' },
          ].map((n) => (
            <div key={n.label} className="num-card">
              <div className="num-val">{n.val}</div>
              <div className="num-label">{n.label}</div>
              <div className="num-sub">{n.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section">
        <div className="testi-inner">
          <div className="testi-header">
            <div className="sec-eyebrow">Depoimentos</div>
            <div className="projects-title-row">
              <h2 className="sec-h2">Quem trabalhou<br />com a <em>gente fala.</em></h2>
              <p className="sec-sub">Resultados reais de negócios que apostaram em tecnologia e design.</p>
            </div>
          </div>
          <div className="testi-grid">
            {[
              {
                quote: 'Em 3 meses após o lançamento da loja, triplicamos as vendas online. O processo foi transparente do início ao fim — sabia exatamente o que esperar em cada semana.',
                name: 'Fernanda Alves',
                role: 'Fundadora · Moda Única Store',
                init: 'FA',
                color: 'var(--blue)',
              },
              {
                quote: 'Nossa clínica cresceu 40% em agendamentos novos. O site virou nosso melhor vendedor — funciona enquanto dormimos. Recomendo sem hesitar.',
                name: 'Dr. Marcos Oliveira',
                role: 'Diretor · Clínica Saúde Total',
                init: 'MO',
                color: 'var(--green)',
              },
              {
                quote: 'O sistema de gestão que a Webfun desenvolveu economiza 3 horas por dia da minha equipe. Investimento que se pagou no primeiro mês de uso.',
                name: 'Gabriela Santos',
                role: 'Sócia · Distribuidora Gestão Fácil',
                init: 'GS',
                color: 'var(--acid)',
              },
            ].map((t) => (
              <div key={t.name} className="testi-card">
                <div className="testi-quote">❝</div>
                <p className="testi-text">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-av" style={{ background: t.color, color: t.color === 'var(--acid)' ? 'var(--acid-fg)' : '#fff' }}>{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* BUDGET */}
      <BudgetSection />
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="nav-logo" style={{ marginBottom: 12 }}>
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
                <a href="#">Site institucional</a>
                <a href="#">Loja virtual</a>
                <a href="#">Landing page</a>
                <a href="#">Sistemas sob medida</a>
                <a href="#">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="#">Sobre a Webfun</a>
                <a href="#">Projetos</a>
                <a href="#">Como trabalhamos</a>
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
