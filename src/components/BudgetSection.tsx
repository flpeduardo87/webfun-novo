'use client';

import { useState } from 'react';

const SERVICES = [
  { label: 'Site institucional', val: 1700, from: 'Site institucional · ~3 semanas' },
  { label: 'Landing page', val: 2400, from: 'Landing page · ~2 semanas' },
  { label: 'Loja virtual', val: 3800, from: 'Loja virtual · ~5 semanas' },
  { label: 'Sistema sob medida', val: 5500, from: 'Sistema sob medida · ~8 semanas' },
  { label: 'Automação & IA', val: 2200, from: 'Automação & IA · ~3 semanas' },
  { label: 'Redesign', val: 1400, from: 'Redesign · ~2 semanas' },
];

const EXTRAS = [
  { label: 'Blog / Notícias', val: 600 },
  { label: 'Área do cliente', val: 800 },
  { label: 'Múltiplos idiomas', val: 400 },
  { label: 'Integrações externas', val: 500 },
  { label: 'Chat / WhatsApp', val: 350 },
];

function fmt(n: number) {
  return n.toLocaleString('pt-BR');
}

export default function BudgetSection() {
  const [service, setService] = useState(0);
  const [extras, setExtras] = useState<number[]>([]);

  const toggleExtra = (i: number) =>
    setExtras((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const total = SERVICES[service].val + extras.reduce((s, i) => s + EXTRAS[i].val, 0);

  return (
    <section className="budget-section" id="orcamento">
      <div className="budget-inner">
        <div className="budget-copy">
          <div className="budget-tag">Orçamento rápido</div>
          <h2 className="budget-h2">Já sabe o que precisa?<br /><em>Vamos dar um norte.</em></h2>
          <p className="budget-note">Selecione o que você precisa ao lado. Sem compromisso — em 2 minutos você tem uma estimativa real para começar a planejar.</p>
          <div style={{ marginTop: 32 }}>
            <div className="budget-price-label">Estimativa a partir de</div>
            <div className="budget-price-val"><span className="bpref">R$</span>{fmt(total)}</div>
            <div className="budget-price-from">{SERVICES[service].from}</div>
          </div>
        </div>

        <div className="budget-form">
          <div>
            <div className="bgroup-label">O que você precisa?</div>
            <div className="chip-row">
              {SERVICES.map((s, i) => (
                <span
                  key={s.label}
                  className={`chip${service === i ? ' on' : ''}`}
                  onClick={() => setService(i)}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="bgroup-label">Adicionar ao projeto</div>
            <div className="chip-row">
              {EXTRAS.map((e, i) => (
                <span
                  key={e.label}
                  className={`chip extra${extras.includes(i) ? ' on' : ''}`}
                  onClick={() => toggleExtra(i)}
                >
                  {e.label}
                </span>
              ))}
            </div>
          </div>
          <div className="budget-cta">
            <a href="#" className="bcta-btn">Quero um orçamento completo →</a>
            <span className="bcta-note">Sem compromisso.<br />Resposta em até 24h.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
