import '../site.css';
import './blog.css';
import { Camera, MessageCircle, Briefcase } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import BlogGrid from './BlogGrid';
import { POSTS } from './data';

export const metadata = {
  title: 'Blog — Webfun',
  description: 'Artigos sobre desenvolvimento web, performance, SEO e estratégia digital para negócios brasileiros.',
};

export default function BlogPage() {
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
          <li><a href="/contato">Contato</a></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/contato" className="nav-cta">Começar projeto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bl-hero">
        <div className="bl-hero-inner">
          <div className="eyebrow">Blog</div>
          <h1 className="bl-h1">
            Conteúdo direto<br /><em>ao ponto.</em>
          </h1>
          <p className="bl-sub">
            {POSTS.length} artigos sobre web, performance, SEO e estratégia digital — sem enrolação e sem paywalls.
          </p>
        </div>
      </section>

      {/* GRID WITH FILTERS */}
      <div className="bl-hero-inner" style={{ maxWidth: 1160, margin: '0 auto', paddingInline: 40 }}>
        <BlogGrid />
      </div>

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
                <a href="/blog">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="mailto:agenciawebfun@gmail.com">agenciawebfun@gmail.com</a>
                <a href="https://wa.me/5547997618824">WhatsApp</a>
                <a href="#">Canoinhas, SC</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Webfun. Todos os direitos reservados.</span>
            <span className="footer-credits">Feito com cuidado em Canoinhas</span>
          </div>
        </div>
      </footer>
    </>
  );
}
