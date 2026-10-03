/* Mini UI mockups for each service card */

export function VisualSite() {
  return (
    <div className="sv-wrap">
      {/* browser chrome */}
      <div className="sv-chrome">
        <div className="sv-dots">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="sv-url">webfun.com.br</div>
      </div>
      {/* nav */}
      <div className="sv-sitenav">
        <div className="sv-logo-blk" />
        <div style={{ display: 'flex', gap: 8 }}>
          <div className="sv-navlink" />
          <div className="sv-navlink" />
          <div className="sv-navbtn" />
        </div>
      </div>
      {/* hero */}
      <div className="sv-sitebody">
        <div className="sv-col" style={{ flex: 1, gap: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="sv-tag-pill" />
          <div className="sv-h1-line" style={{ width: '88%' }} />
          <div className="sv-h1-line" style={{ width: '70%', opacity: .6 }} />
          <div className="sv-subline" />
          <div className="sv-subline" style={{ width: '60%' }} />
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            <div className="sv-cta-btn" />
            <div className="sv-ghost-btn" />
          </div>
        </div>
        <div className="sv-hero-img" />
      </div>
    </div>
  );
}

export function VisualLanding() {
  return (
    <div className="sv-wrap">
      <div className="sv-chrome">
        <div className="sv-dots">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="sv-url">lançamento.com.br</div>
      </div>
      <div className="sv-landing-body">
        {/* social proof */}
        <div className="sv-stars-row">
          {[0,1,2,3,4].map(i => (
            <svg key={i} width="9" height="9" viewBox="0 0 10 10" fill="var(--acid)">
              <polygon points="5,1 6.2,3.8 9.5,4.1 7.2,6.2 7.9,9.5 5,7.9 2.1,9.5 2.8,6.2 0.5,4.1 3.8,3.8" />
            </svg>
          ))}
          <span className="sv-proof-txt">+2.400 alunos</span>
        </div>
        {/* headline */}
        <div className="sv-lp-h1" style={{ width: '92%' }} />
        <div className="sv-lp-h1" style={{ width: '75%', opacity: .55 }} />
        <div className="sv-lp-sub" style={{ width: '80%', marginTop: 6 }} />
        {/* cta */}
        <div className="sv-lp-cta" />
        {/* trust */}
        <div className="sv-trust-row">
          {['Sem risco', 'Acesso imediato', 'Suporte incluso'].map(t => (
            <div key={t} className="sv-trust-item">
              <svg width="8" height="8" viewBox="0 0 10 10">
                <polyline points="1,5 4,8 9,2" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisualLoja() {
  const products = [
    { label: 'Vestido', price: 'R$ 189', color: '#3a2a4a' },
    { label: 'Blazer',  price: 'R$ 249', color: '#1e2e3a' },
    { label: 'Calça',   price: 'R$ 159', color: '#2a3a2a' },
  ];
  return (
    <div className="sv-wrap">
      <div className="sv-chrome">
        <div className="sv-dots">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="sv-url">minhaloja.com.br</div>
        <div className="sv-cart-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          </svg>
        </div>
      </div>
      <div className="sv-store-cats">
        {['Todos','Vestidos','Blazers','Calças'].map((c,i) => (
          <span key={c} className={`sv-cat${i===0?' sv-cat-on':''}`}>{c}</span>
        ))}
      </div>
      <div className="sv-product-grid">
        {products.map(p => (
          <div key={p.label} className="sv-product">
            <div className="sv-prod-img" style={{ background: p.color }} />
            <div className="sv-prod-name">{p.label}</div>
            <div className="sv-prod-price">{p.price}</div>
            <div className="sv-prod-add">+ Add</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisualSistema() {
  return (
    <div className="sv-wrap sv-dark">
      {/* header */}
      <div className="sv-dash-header">
        <div className="sv-dash-title">Dashboard</div>
        <div className="sv-dash-user">
          <div className="sv-dash-av" style={{ background: '#4d63f0' }}>F</div>
          <span>Felipe M.</span>
        </div>
      </div>
      {/* stats */}
      <div className="sv-stats-row">
        <div className="sv-stat"><div className="sv-stat-val">48</div><div className="sv-stat-lbl">Pedidos</div><div className="sv-stat-up">↑ 12%</div></div>
        <div className="sv-stat sv-stat-hi"><div className="sv-stat-val">R$12,4k</div><div className="sv-stat-lbl">Receita</div><div className="sv-stat-up">↑ 8%</div></div>
        <div className="sv-stat"><div className="sv-stat-val">231</div><div className="sv-stat-lbl">Clientes</div><div className="sv-stat-up">↑ 3%</div></div>
      </div>
      {/* chart + list */}
      <div className="sv-dash-body">
        <div className="sv-mini-chart">
          <div className="sv-chart-label">VENDAS — 7 DIAS</div>
          <div className="sv-bars-mini">
            {[42,58,50,75,62,90,55].map((h,i) => (
              <div key={i} className="sv-bar-mini" style={{ height: `${h}%`, background: i===5 ? 'var(--acid)' : 'rgba(255,255,255,.15)' }} />
            ))}
          </div>
        </div>
        <div className="sv-order-list">
          {[
            { init: 'F', color: '#4d63f0', name: 'Felipe M.', ok: true },
            { init: 'G', color: '#e07820', name: 'Gabriela S.', ok: false },
          ].map(r => (
            <div key={r.name} className="sv-order-row">
              <div className="sv-order-av" style={{ background: r.color }}>{r.init}</div>
              <span className="sv-order-name">{r.name}</span>
              <span className={`sv-order-pill ${r.ok ? 'sv-pill-ok' : 'sv-pill-pend'}`}>
                {r.ok ? 'Entregue' : 'Pendente'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisualAutomacao() {
  const steps = [
    { icon: '📦', label: 'Pedido recebido', tag: '✓ Automático', live: true },
    { icon: '💬', label: 'WhatsApp enviado', tag: '✓ Automático', live: true },
    { icon: '📊', label: 'CRM atualizado',   tag: 'Integrado',    live: false },
  ];
  return (
    <div className="sv-wrap sv-dark">
      <div className="sv-flow-header">
        <div className="sv-flow-dot" />
        <span>Fluxo ativo</span>
        <div className="sv-flow-count">+47 hoje</div>
      </div>
      <div className="sv-flow-steps">
        {steps.map((s, i) => (
          <div key={s.label} className="sv-flow-step">
            {i > 0 && <div className="sv-flow-connector" />}
            <div className={`sv-flow-ic${s.live ? ' sv-flow-ic-live' : ''}`}>{s.icon}</div>
            <div className="sv-flow-info">
              <div className="sv-flow-name">{s.label}</div>
              <div className={`sv-flow-tag${s.live ? ' sv-flow-tag-live' : ''}`}>{s.tag}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sv-flow-footer">
        <div className="sv-flow-prog-track"><div className="sv-flow-prog-bar" /></div>
        <span>Sistemas</span>
      </div>
    </div>
  );
}

export function VisualApp() {
  return (
    <div className="sv-phone-wrap">
      <div className="sv-phone">
        {/* notch */}
        <div className="sv-phone-notch" />
        {/* status bar */}
        <div className="sv-phone-status">
          <span>9:41</span>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <div className="sv-sig" /><div className="sv-sig" style={{ height: 5 }} /><div className="sv-sig" style={{ height: 7 }} />
          </div>
        </div>
        {/* app header */}
        <div className="sv-app-header">
          <div>
            <div className="sv-app-greeting">Olá, Felipe 👋</div>
            <div className="sv-app-sub">Seus pedidos de hoje</div>
          </div>
          <div className="sv-app-av">F</div>
        </div>
        {/* card */}
        <div className="sv-app-card">
          <div className="sv-app-card-top">
            <div className="sv-app-pill">Em andamento</div>
            <span className="sv-app-num">#1042</span>
          </div>
          <div className="sv-app-card-title">Pizza Margherita</div>
          <div className="sv-app-card-sub">Chegada em ~12 min</div>
          <div className="sv-app-prog-track"><div className="sv-app-prog-bar" /></div>
        </div>
        {/* bottom nav */}
        <div className="sv-app-nav">
          {['🏠','📦','📅','⚙'].map((ic, i) => (
            <div key={i} className={`sv-app-nav-ic${i===0?' sv-nav-on':''}`}>{ic}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
