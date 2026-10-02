'use client';

import { useEffect, useRef, useState } from 'react';

const TABS = [
  { id: 'site', label: 'Site' },
  { id: 'loja', label: 'Loja virtual' },
  { id: 'sistemas', label: 'Sistemas' },
  { id: 'ia', label: 'Automação & IA' },
];
const DURATION = 4400;

export default function ServiceWindow() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());

  const startTimer = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startRef.current = Date.now();
    setActive(idx);
    setProgress(0);
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        const next = (idx + 1) % TABS.length;
        startTimer(next);
      }
    }, 80);
  };

  useEffect(() => {
    startTimer(0);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="win-wrap">
      <div className="win-card">
        {/* Chrome bar */}
        <div className="win-chrome">
          <div className="chrome-bar">
            <div className="cdot" />
            <div className="cdot" />
            <div className="cdot" />
            <div className="curl">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                <circle cx="4.5" cy="4.5" r="3.8" stroke="currentColor" strokeWidth=".9" opacity=".5" />
                <path d="M4.5 1v7M1 4.5h7" stroke="currentColor" strokeWidth=".9" strokeLinecap="round" opacity=".4" />
              </svg>
              webfun.com.br
            </div>
          </div>
          <div className="win-tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                className={`wtab${active === i ? ' on' : ''}`}
                role="tab"
                onClick={() => startTimer(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panels */}
        <div className="win-body">
          {/* SITE */}
          <div className={`panel${active === 0 ? ' active' : ''}`}>
            <div className="site-hero">
              <div className="sh-copy">
                <div className="sh-tag">Sua marca</div>
                <h3>Sua marca,<br /><em>apresentada.</em></h3>
                <p>Sites que comunicam valor e geram contato.</p>
                <div className="sh-btns">
                  <div className="sh-btn a">Contratar</div>
                  <div className="sh-btn b">Ver mais</div>
                </div>
              </div>
              <div className="sh-img">
                <div className="sh-img-blk" />
                <small>HERO IMAGE</small>
              </div>
            </div>
            <div className="site-feats">
              <div className="sfeat">
                <div className="sfi">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="var(--acid)" strokeWidth="1.5" />
                    <path d="M6 9h6M9 6v6" stroke="var(--acid)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <b>Conversão</b>
                <small>Estruturado para gerar contato</small>
              </div>
              <div className="sfeat">
                <div className="sfi">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="var(--acid)" strokeWidth="1.5" />
                    <path d="M6 4V3M12 4V3" stroke="var(--acid)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <b>Responsivo</b>
                <small>Perfeito em qualquer tela</small>
              </div>
              <div className="sfeat">
                <div className="sfi">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="8" cy="8" r="5" stroke="var(--acid)" strokeWidth="1.5" />
                    <path d="M13 13l2.5 2.5" stroke="var(--acid)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <b>SEO</b>
                <small>Encontrado no Google</small>
              </div>
            </div>
          </div>

          {/* LOJA */}
          <div className={`panel${active === 1 ? ' active' : ''}`}>
            <div className="loja-hd">
              <h4>Sua loja online</h4>
              <div className="cart-pill">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1h1.5l1.8 5.5h5.2l1-3.5H3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="10" r="1" fill="currentColor" />
                  <circle cx="9.5" cy="10" r="1" fill="currentColor" />
                </svg>
                R$387
              </div>
            </div>
            <div className="prod-grid">
              {[
                { cls: 'c1', name: 'Tênis Runner', price: 'R$129,00' },
                { cls: 'c2', name: 'Bolsa Couro', price: 'R$249,00' },
                { cls: 'c3', name: 'Kit Natural', price: 'R$89,00' },
                { cls: 'c4', name: 'Colar Prata', price: 'R$349,00' },
              ].map((p) => (
                <div key={p.name} className="prod">
                  <div className={`prod-thumb ${p.cls}`} />
                  <div className="prod-info">
                    <div className="pname">{p.name}</div>
                    <div className="pprice">{p.price}</div>
                    <button className="padd">+ Carrinho</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SISTEMAS */}
          <div className={`panel${active === 2 ? ' active' : ''}`}>
            <div className="stats3">
              <div className="st"><small>PEDIDOS</small><b>48</b><div className="tr">↑ 12%</div></div>
              <div className="st hi"><small>RECEITA</small><b>R$12,4k</b><div className="tr">↑ 8%</div></div>
              <div className="st"><small>CLIENTES</small><b>231</b><div className="tr">↑ 3%</div></div>
            </div>
            <div className="dash-row">
              <div className="chart-card">
                <small>VENDAS — 7 DIAS</small>
                <div className="bars">
                  {[42, 60, 50, 75, 62, 90, 55].map((h, i) => (
                    <div key={i} className={`bar${i === 5 ? ' hi' : ''}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="list-card">
                {[
                  { cls: 'b', init: 'F', name: 'Felipe M.', num: '#1042', ok: true },
                  { cls: 'o', init: 'G', name: 'Gabriela S.', num: '#1043', ok: false },
                  { cls: 'g', init: 'O', name: 'Oscar T.', num: '#1044', ok: true },
                ].map((r) => (
                  <div key={r.num} className="lrow">
                    <div className={`lav ${r.cls}`}>{r.init}</div>
                    <div className="linfo"><b>{r.name}</b><small>{r.num}</small></div>
                    <span className={`spill ${r.ok ? 'ok' : 'pend'}`}>{r.ok ? 'Entregue' : 'Pendente'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IA */}
          <div className={`panel${active === 3 ? ' active' : ''}`}>
            <div className="ia-lede">Seu negócio trabalhando <em>enquanto você dorme.</em></div>
            <div className="ia-flow">
              {[
                { live: true, icon: '📥', title: 'Pedido recebido', desc: 'Cliente finaliza compra na loja', tag: '✓ Automático', tagLive: true },
                { live: true, icon: '⚡', title: 'Notificação instantânea', desc: 'WhatsApp + e-mail para cliente e equipe', tag: '✓ Automático', tagLive: true },
                { live: false, icon: '🗂️', title: 'CRM atualizado', desc: 'Histórico do cliente registrado', tag: 'Integrado', tagLive: false },
              ].map((s, i) => (
                <div key={i} className="ia-step">
                  <div className="ia-line" />
                  <div className={`ia-ic${s.live ? ' live' : ''}`}>{s.icon}</div>
                  <div className="ia-body">
                    <b>{s.title}</b>
                    <small>{s.desc}</small>
                    <div><span className={`ia-tag${s.tagLive ? ' live' : ''}`}>{s.tag}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ia-gains">
              {[
                { color: 'var(--green)', label: 'Menos retrabalho' },
                { color: 'var(--blue)', label: 'Mais velocidade' },
                { color: 'var(--acid)', label: 'IA no fluxo' },
                { color: '#e07444', label: '0 tarefas manuais' },
              ].map((g) => (
                <div key={g.label} className="ia-gain">
                  <span className="dot8" style={{ background: g.color }} />
                  {g.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress footer */}
        <div className="win-foot">
          <div className="prog-track">
            <div className="prog-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="prog-lbl">{TABS[active].label}</div>
        </div>
      </div>
    </div>
  );
}
