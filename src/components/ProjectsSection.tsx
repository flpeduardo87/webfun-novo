'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

type Project = {
  tag: string;
  title: string;
  desc: string;
  img?: string;
  color?: string;
  year: string;
  url?: string;
};

const PROJECTS: Project[] = [
  {
    tag: 'Site institucional',
    title: 'LUME Odontologia',
    desc: 'Site de alta conversão para clínica odontológica com agendamento online e área do paciente.',
    img: '/projects/lume.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/lume/index.html',
  },
  {
    tag: 'Loja virtual',
    title: 'AZAFF',
    desc: 'E-commerce de moda feminina com identidade minimalista, catálogo e checkout otimizado.',
    img: '/projects/azaff.jpg',
    year: '2025',
    url: 'https://lojasazaff.com.br',
  },
  {
    tag: 'Site institucional',
    title: 'AURA Estética',
    desc: 'Site premium para clínica estética avançada com foco em conversão e identidade visual sofisticada.',
    img: '/projects/aura.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/aura/index.html',
  },
  {
    tag: 'Sistema',
    title: 'Canoinhas Tênis Clube',
    desc: 'Site institucional + sistema de reservas de quadras, churrasqueiras e gestão de sócios.',
    img: '/projects/canoinhas-tc.jpg',
    year: '2025',
    url: 'https://canoinhastenisclube.com.br',
  },
  {
    tag: 'Site institucional',
    title: 'Casa Serena',
    desc: 'Hotel boutique na Serra da Mantiqueira com sistema de reservas integrado e identidade visual premium.',
    img: '/projects/casa-serena.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/casa-serena/index.html',
  },
  {
    tag: 'Sistema',
    title: 'MATCH Racquet Club',
    desc: 'Plataforma completa para clube de raquete com reservas, planos de sócios e agenda de eventos.',
    img: '/projects/match.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/match/index.html',
  },
  {
    tag: 'Site institucional',
    title: 'Mielke Energia Solar',
    desc: 'Site de geração de leads para instaladora solar com portfólio de projetos entregues.',
    img: '/projects/mielke.jpg',
    year: '2024',
    url: 'https://mielkenergiasolar.com.br',
  },
  {
    tag: 'Site institucional',
    title: 'NEXO Estratégia',
    desc: 'Site institucional para consultoria B2B com foco em diagnóstico executivo e autoridade de marca.',
    img: '/projects/nexo.jpg',
    year: '2025',
    url: 'https://webfun.com.br/modelos/nexo/index.html',
  },
  {
    tag: 'Landing page',
    title: 'Com Cristo Kids',
    desc: 'Landing page de alta conversão para biblioteca cristã infantil digital com checkout integrado.',
    img: '/projects/com-cristo-kids.webp',
    year: '2025',
    url: 'https://comcristokids.com.br',
  },
  {
    tag: 'Delivery',
    title: 'Forno Alto Pizzaria',
    desc: 'Cardápio digital com pedido online, controle de horário e integração direta com a cozinha.',
    img: '/projects/forno-alto.webp',
    year: '2025',
    url: 'https://webfun.com.br/modelos/forno-alto/index.html',
  },
  {
    tag: 'Site institucional',
    title: 'Perform',
    desc: 'Site institucional para empresa de engenharia, montagens e manutenções industriais com foco em autoridade técnica.',
    img: '/projects/perform.png',
    year: '2025',
    url: 'https://perform.ind.br',
  },
  {
    tag: 'Landing page',
    title: 'Elisangela Pontes',
    desc: 'Landing page para advocacia empresarial especializada em blindagem jurídica de empresas e gestão de riscos.',
    img: '/projects/elisangela.png',
    year: '2025',
    url: 'https://elisangelapontes.adv.br',
  },
  {
    tag: 'Site institucional',
    title: 'Wasabi Sushi Bar',
    desc: 'Site para restaurante japonês em Dublin com cardápio digital, reservas e identidade visual marcante.',
    color: 'proj-wasabi',
    year: '2024',
    url: 'https://wasabisushibar.ie',
  },
  {
    tag: 'Site institucional',
    title: 'Frigorífico Três Reis',
    desc: 'Site institucional para frigorífico com portfólio de cortes, diferenciais e captação de clientes B2B.',
    color: 'proj-tresreis',
    year: '2024',
    url: 'https://frigorificotresreis.com.br',
  },
  {
    tag: 'Site institucional',
    title: 'Flávia Sussenbach',
    desc: 'Site para escritório de advocacia com foco em autoridade, credibilidade e captação de consultas.',
    color: 'proj-flavia',
    year: '2024',
    url: 'https://flaviasussenbachadvogados.com.br',
  },
];

const FILTERS = ['Todos', 'Site institucional', 'Landing page', 'Loja virtual', 'Sistema', 'Delivery'];

export default function ProjectsSection() {
  const [active, setActive] = useState('Todos');
  const [selected, setSelected] = useState<Project | null>(null);

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
            <div key={p.title} className="proj-card" onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
              <div className={`proj-thumb${p.img ? ' proj-img-wrap' : ''} ${p.color ?? ''}`}>
                {p.img && <Image src={p.img} alt={p.title} fill sizes="(max-width:900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />}
                <span className="proj-tag">{p.tag}</span>
              </div>
              <div className="proj-body">
                <div className="proj-meta">{p.year}</div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <span className="proj-link">{p.url ? 'Ver projeto' : 'Em breve'} <ArrowRight size={13} strokeWidth={2} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lb-overlay" onClick={() => setSelected(null)}>
          <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
            <div className="lb-bar-title">{selected.title}</div>
            {selected.url && (
              <a href={selected.url} target="_blank" rel="noopener noreferrer" className="lb-ext">
                <ExternalLink size={14} strokeWidth={2} /> Abrir em nova aba
              </a>
            )}
            <button className="lb-close" onClick={() => setSelected(null)} aria-label="Fechar">
              <X size={18} strokeWidth={2} />
            </button>
          </div>
          <div className="lb-frame-wrap" onClick={(e) => e.stopPropagation()}>
            {selected.url ? (
              <iframe src={selected.url} className="lb-iframe" title={selected.title} />
            ) : (
              <div className="lb-img-wrap">
                <Image src={selected.img!} alt={selected.title} fill sizes="90vw" style={{ objectFit: 'contain' }} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
