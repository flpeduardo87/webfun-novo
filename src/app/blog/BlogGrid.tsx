'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { POSTS } from './data';

const ALL_TAGS = ['Todos', ...Array.from(new Set(POSTS.map((p) => p.tag)))];

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

const TAG_ICONS: Record<string, string> = {
  Estratégia: '🎯',
  Performance: '⚡',
  SEO: '🔍',
  Orçamento: '💰',
  Automação: '🤖',
};

export default function BlogGrid() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? POSTS : POSTS.filter((p) => p.tag === active);

  return (
    <>
      {/* Filters */}
      <div className="bl-filters-wrap">
      <div className="bl-filters">
        {ALL_TAGS.map((t) => (
          <button
            key={t}
            className={`bl-filter-btn${active === t ? ' active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      </div>

      {/* Grid */}
      <section className="bl-section">
        <div className="bl-inner">
          <div className="bl-grid">
            {filtered.length === 0 && (
              <div className="bl-empty">Nenhum artigo nesta categoria ainda.</div>
            )}
            {filtered.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="bl-card">
                <div className="bl-card-cover">
                  <div className="bl-card-cover-inner">
                    <div className="bl-card-cover-pattern" />
                    <div className="bl-card-cover-icon">
                      <span style={{ fontSize: 24 }}>{TAG_ICONS[post.tag] ?? '📝'}</span>
                    </div>
                  </div>
                  <span className="bl-card-cover-tag">{post.tag}</span>
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-meta">
                    <span>{formatDate(post.date)}</span>
                    <div className="bl-card-meta-dot" />
                    <span>{post.readTime} min de leitura</span>
                  </div>
                  <h2 className="bl-card-title">{post.title}</h2>
                  <p className="bl-card-excerpt">{post.excerpt}</p>
                  <div className="bl-card-link">
                    Ler artigo <ArrowRight size={13} strokeWidth={2} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
