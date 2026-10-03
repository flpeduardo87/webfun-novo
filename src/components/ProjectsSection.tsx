'use client';

import { useState } from 'react';

const PROJECTS = [
  { tag: 'Site institucional', title: 'Clínica Saúde Total', desc: 'Site de conversão com agendamento online e SEO local para clínica médica.', color: 'proj-c2', year: '2024' },
  { tag: 'Loja virtual', title: 'Moda Única Store', desc: 'E-commerce completo com catálogo, checkout e integração com WhatsApp.', color: 'proj-c1', year: '2024' },
  { tag: 'Sistema', title: 'Gestão Fácil', desc: 'Dashboard de pedidos, estoque e clientes para distribuidora regional.', color: 'proj-c3', year: '2025' },
  { tag: 'Automação & IA', title: 'FluxoBot', desc: 'Automação de atendimento e CRM para escola de idiomas com 1.200 alunos.', color: 'proj-c4', year: '2025' },
  { tag: 'Landing page', title: 'Imóvel Certo', desc: 'Landing de alta conversão para lançamento imobiliário em Florianópolis.', color: 'proj-c5', year: '2025' },
  { tag: 'Delivery', title: 'Sabor Artesanal', desc: 'Cardápio digital com pedido online e integração com delivery próprio.', color: 'proj-c6', year: '2025' },
  { tag: 'Site institucional', title: 'Construtora Nova Era', desc: 'Site corporativo com portfólio de obras e captação de leads qualificados.', color: 'proj-c7', year: '2025' },
  { tag: 'Landing page', title: 'Academia Forma+', desc: 'LP de matrícula com countdown, depoimentos e checkout integrado.', color: 'proj-c8', year: '2025' },
  { tag: 'Sistema', title: 'AgendaPro', desc: 'Sistema de agendamento online para salão de beleza com múltiplos profissionais.', color: 'proj-c9', year: '2025' },
];

const FILTERS = ['Todos', 'Site institucional', 'Landing page', 'Loja virtual', 'Sistema', 'Delivery', 'Automação & IA'];

export default function ProjectsSection() {
  const [active, setActive] = useState('Todos');

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
  );
}
