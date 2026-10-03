'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Menu, ArrowRight, Globe, ShoppingCart, Zap, Settings, Bot, Smartphone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const SERVICES = [
  {
    Icon: Globe,
    name: 'Site institucional',
    desc: 'Presença digital completa e profissional',
    href: '/servicos/site-institucional',
  },
  {
    Icon: ShoppingCart,
    name: 'Loja virtual',
    desc: 'E-commerce com foco em conversão',
    href: '/servicos/loja-virtual',
  },
  {
    Icon: Zap,
    name: 'Landing page',
    desc: 'Páginas que convertem visitantes em clientes',
    href: '/servicos/landing-page',
  },
  {
    Icon: Settings,
    name: 'Sistema sob medida',
    desc: 'Software feito para o seu processo',
    href: '/servicos/sistema-sob-medida',
  },
  {
    Icon: Bot,
    name: 'Automação & IA',
    desc: 'Fluxos inteligentes que economizam tempo',
    href: '/servicos/automacao-ia',
  },
  {
    Icon: Smartphone,
    name: 'Aplicativo',
    desc: 'PWA e apps nativos para iOS e Android',
    href: '/servicos/aplicativo',
  },
];

const LINKS = [
  { href: '/projetos', label: 'Projetos' },
  { href: '/processo', label: 'Processo' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
];

export default function NavBar({ active }: { active?: string }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    if (megaOpen) document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [megaOpen]);

  return (
    <>
      <div className="np-wrap" ref={wrapRef}>
        {/* ── PILL ── */}
        <div className={`np-pill${megaOpen ? ' np-pill--open' : ''}`}>
          <a href="/" className="nav-logo">
            <span className="logo-dot" />webfun
          </a>

          <nav className="np-links">
            <button
              className={`np-link np-link-btn${active === 'servicos' ? ' np-link--active' : ''}${megaOpen ? ' np-link--mega' : ''}`}
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
            >
              Serviços
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className="np-chevron"
                style={{ transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
              />
            </button>

            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`np-link${active === l.href.slice(1) ? ' np-link--active' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="np-right">
            <ThemeToggle />
            <a href="/contato" className="nav-cta">Começar projeto</a>
          </div>

          {/* Mobile burger */}
          <button
            className="np-burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen
              ? <X size={18} strokeWidth={2} />
              : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>

        {/* ── MEGA MENU ── */}
        <div className={`np-mega${megaOpen ? ' np-mega--open' : ''}`} aria-hidden={!megaOpen}>
          <div className="np-mega-inner">
            <div className="np-mega-header">
              <div className="np-mega-headline">Nossos serviços</div>
              <p className="np-mega-sub">Do site ao sistema — tudo com design e resultado.</p>
              <a href="/servicos" className="np-mega-all" onClick={() => setMegaOpen(false)}>
                Ver todos <ArrowRight size={12} strokeWidth={2} />
              </a>
            </div>
            <div className="np-mega-grid">
              {SERVICES.map(({ Icon, name, desc, href }) => (
                <a key={href} href={href} className="np-mega-card" onClick={() => setMegaOpen(false)}>
                  <div className="np-mega-icon">
                    <Icon size={15} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="np-mega-name">{name}</div>
                    <div className="np-mega-desc">{desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`np-mobile${mobileOpen ? ' np-mobile--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="np-mobile-inner">
          <div className="np-mobile-group">
            <div className="np-mobile-label">Serviços</div>
            {SERVICES.map(({ Icon, name, href }) => (
              <a key={href} href={href} className="np-mobile-link" onClick={() => setMobileOpen(false)}>
                <Icon size={14} strokeWidth={1.8} />
                {name}
              </a>
            ))}
          </div>
          <div className="np-mobile-group">
            <div className="np-mobile-label">Menu</div>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="np-mobile-link" onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="/contato" className="btn-p np-mobile-cta" onClick={() => setMobileOpen(false)}>
            Começar projeto <ArrowRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </>
  );
}
