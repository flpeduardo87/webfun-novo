import '../site.css';
import './contato.css';
import { Camera, MessageCircle, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import ContatoForm from './ContatoForm';

export const metadata = {
  title: 'Contato — Webfun',
  description: 'Entre em contato com a Webfun. Diagnóstico gratuito e sem compromisso.',
};

const afterSteps = [
  { n: '1', text: 'Lemos e entendemos o seu projeto (em até 2h)' },
  { n: '2', text: 'Entramos em contato para alinhar os próximos passos' },
  { n: '3', text: 'Diagnóstico gratuito e sem compromisso' },
];

export default function ContatoPage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <span className="logo-dot" />webfun
        </a>
        <ul className="nav-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/contato" className="nav-active">Contato</a></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/contato" className="nav-cta">Começar projeto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <div className="eyebrow">Contato</div>
          <h1 className="ct-h1">
            Vamos construir<br /><em>algo juntos?</em>
          </h1>
          <p className="ct-sub">
            Traga o briefing — mesmo que seja só uma ideia. A conversa é gratuita, sem compromisso e sem formulário genérico.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="ct-main">
        <div className="ct-main-inner">

          {/* LEFT: info */}
          <div className="ct-info">
            <div className="ct-info-block">
              <div className="ct-info-title">Fale diretamente</div>
              <div className="ct-contacts">
                <a href="mailto:agenciawebfun@gmail.com" className="ct-contact-item">
                  <div className="ct-contact-icon"><Mail size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">E-mail</div>
                    <div className="ct-contact-val">agenciawebfun@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer" className="ct-contact-item">
                  <div className="ct-contact-icon"><Phone size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">WhatsApp</div>
                    <div className="ct-contact-val">(48) 99999-9999</div>
                  </div>
                </a>
                <div className="ct-contact-item ct-contact-static">
                  <div className="ct-contact-icon"><MapPin size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">Localização</div>
                    <div className="ct-contact-val">Florianópolis, SC — Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ct-info-block">
              <div className="ct-info-title">O que acontece depois</div>
              <div className="ct-after-steps">
                {afterSteps.map((s) => (
                  <div key={s.n} className="ct-after-step">
                    <div className="ct-after-num">{s.n}</div>
                    <p className="ct-after-text">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-info-block ct-guarantee">
              <div className="ct-guarantee-icon">🔒</div>
              <p className="ct-guarantee-text">
                Suas informações são confidenciais e nunca serão compartilhadas com terceiros.
              </p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="ct-form-wrap">
            <ContatoForm />
          </div>

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
                <a href="/servicos#site-institucional">Site institucional</a>
                <a href="/servicos#loja-virtual">Loja virtual</a>
                <a href="/servicos#landing-page">Landing page</a>
                <a href="/servicos#sistema-sob-medida">Sistemas sob medida</a>
                <a href="/servicos#automacao-ia">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/projetos">Projetos</a>
                <a href="/processo">Como trabalhamos</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="mailto:agenciawebfun@gmail.com">agenciawebfun@gmail.com</a>
                <a href="https://wa.me/5548999999999">WhatsApp</a>
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
