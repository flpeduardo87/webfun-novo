'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const PROJECTS = [
  {
    tag: 'Site institucional',
    title: 'LUME Odontologia',
    desc: 'Site de alta conversão para clínica odontológica com agendamento online e área do paciente.',
    img: '/projects/lume.jpg',
    year: '2025',
  },
  {
    tag: 'Loja virtual',
    title: 'AZAFF',
    desc: 'E-commerce de moda feminina com identidade minimalista, catálogo e checkout otimizado.',
    img: '/projects/azaff.jpg',
    year: '2025',
  },
  {
    tag: 'Site institucional',
    title: 'AURA Estética',
    desc: 'Site premium para clínica estética avançada com foco em conversão e identidade visual sofisticada.',
    img: '/projects/aura.jpg',
    year: '2025',
  },
  {
    tag: 'Sistema',
    title: 'Canoinhas Tênis Clube',
    desc: 'Site institucional + sistema de reservas de quadras, churrasqueiras e gestão de sócios.',
    img: '/projects/canoinhas-tc.jpg',
    year: '2025',
  },
  {
    tag: 'Site institucional',
    title: 'Casa Serena',
    desc: 'Hotel boutique na Serra da Mantiqueira com sistema de reservas integrado e identidade visual premium.',
    img: '/projects/casa-serena.jpg',
    year: '2025',
  },
  {
    tag: 'Sistema',
    title: 'MATCH Racquet Club',
    desc: 'Plataforma completa para clube de raquete com reservas, planos de sócios e agenda de eventos.',
    img: '/projects/match.jpg',
    year: '2025',
  },
  {
    tag: 'Site institucional',
    title: 'Mielke Energia Solar',
    desc: 'Site de geração de leads para instaladora solar com portfólio de projetos entregues.',
    img: '/projects/mielke.jpg',
    year: '2024',
  },
  {
    tag: 'Site institucional',
    title: 'NEXO Estratégia',
    desc: 'Site institucional para consultoria B2B com foco em diagnóstico executivo e autoridade de marca.',
    img: '/projects/nexo.jpg',
    year: '2025',
  },
  {
    tag: 'Landing page',
    title: 'Com Cristo Kids',
    desc: 'Landing page de alta conversão para biblioteca cristã infantil digital com checkout integrado.',
    img: '/projects/com-cristo-kids.webp',
    year: '2025',
  },
  {
    tag: 'Delivery',
    title: 'Forno Alto Pizzaria',
    desc: 'Cardápio digital com pedido online, controle de horário e integração direta com a cozinha.',
    img: '/projects/forno-alto.webp',
    year: '2025',
  },
  {
    tag: 'Site institucional',
    title: 'MAPEAR Florestal',
    desc: 'Site institucional para assessoria em engenharia florestal com portfólio técnico e captação de leads.',
    img: '/projects/mapear.jpg',
    year: '2024',
  },
];

const FILTERS = ['Todos', 'Site institucional', 'Landing page', 'Loja virtual', 'Sistema', 'Delivery'];

export default function ProjectsSection() {
  const [active, setActive] = useState('Todos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = active === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.tag === active);

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-inner">
        <div className="projects-header">
          <div className="sec-eyebrow">Projetos recentes</div>
          <div className="projects-title-row">
            <h2 className="sec-h2">Do briefing ao<br /><em>resultado.</em></h2>
            <p className="sec-sub">Cada projeto é construído com propósito — design que comunica e código que entrega.</p>
          </div>
        </div>

        <div className="proj-filters" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pfil${active === f ? ' on' : ''}`}
              role="tab"
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((p) => (
            <div key={p.title} className="proj-card" onClick={() => setLightbox(p.img)} style={{ cursor: 'pointer' }}>
              <div className="proj-thumb proj-img-wrap">
                <Image src={p.img} alt={p.title} fill sizes="(max-width:900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                <span className="proj-tag">{p.tag}</span>
              </div>
              <div className="proj-body">
                <div className="proj-meta">{p.year}</div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <span className="proj-link">Ver mockup <span>→</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lb-overlay" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Fechar">
            <X size={20} strokeWidth={2} />
          </button>
          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Mockup" fill sizes="90vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </section>
  );
}
