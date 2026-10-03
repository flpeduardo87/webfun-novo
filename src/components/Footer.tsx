import { Camera, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="nav-logo" style={{ marginBottom: 12 }}>
              <span className="logo-dot" />webfun
            </a>
            <p className="footer-tagline">Tecnologia e design para<br />negócios que querem crescer.</p>
            <div className="footer-socials">
              <a href="https://instagram.com/webfun.com.br" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="Instagram">
                <Camera size={16} strokeWidth={1.8} />
              </a>
              <a href="https://wa.me/5547997618824" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="WhatsApp">
                <MessageCircle size={16} strokeWidth={1.8} />
              </a>
              <a href="https://linkedin.com/company/webfun" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="LinkedIn">
                <Briefcase size={16} strokeWidth={1.8} />
              </a>
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
              <a href="/servicos/aplicativo">Aplicativo</a>
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
              <a href="https://wa.me/5547997618824" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <span className="footer-location">Canoinhas, SC — Brasil</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Webfun. Todos os direitos reservados.</span>
          <span className="footer-credits">Feito com cuidado em Canoinhas</span>
        </div>
      </div>
    </footer>
  );
}
