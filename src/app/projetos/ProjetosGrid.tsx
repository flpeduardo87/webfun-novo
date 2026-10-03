'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import { PROJECTS, FILTERS, type Project } from './data';

export default function ProjetosGrid() {
  const [active, setActive] = useState('Todos');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = active === 'Todos'
    ? PROJECTS.filter(p => !p.featured)
    : PROJECTS.filter(p => !p.featured && p.tag === active);

  return (
    <>
      {/* Filters */}
      <div className="pg-filters" role="tablist">
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

      {/* Grid */}
      <div className="pg-grid">
        {visible.map((p) => (
          <div
            key={p.slug}
            className="pg-card"
            onClick={() => p.url && setSelected(p)}
            style={{ cursor: p.url ? 'pointer' : 'default' }}
          >
            <div className={`pg-thumb${p.img ? ' pg-img-wrap' : ''} ${p.color ?? ''}`}>
              {p.img && (
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
              <div className="pg-thumb-overlay">
                <span className="pg-tag-pill">{p.tag}</span>
                {p.url && (
                  <div className="pg-hover-cta">
                    Ver projeto <ExternalLink size={13} strokeWidth={2} />
                  </div>
                )}
              </div>
            </div>
            <div className="pg-body">
              <div className="pg-meta">{p.year}</div>
              <h3 className="pg-title">{p.title}</h3>
              <p className="pg-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
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
            <iframe src={selected.url} className="lb-iframe" title={selected.title} />
          </div>
        </div>
      )}
    </>
  );
}
