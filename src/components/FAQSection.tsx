'use client';

import { useState } from 'react';

const ITEMS = [
  {
    q: 'Quanto tempo leva para desenvolver meu site?',
    a: 'Depende do escopo: um site institucional sai em 2–3 semanas, uma loja virtual em 4–6 semanas e sistemas sob medida de 6 a 12 semanas. Tudo alinhado no briefing com um cronograma claro antes de começarmos.',
  },
  {
    q: 'Preciso ter domínio e hospedagem antes de contratar?',
    a: 'Não. Cuidamos de tudo — orientamos a aquisição do domínio ideal e indicamos a infraestrutura de hospedagem mais adequada para o seu projeto, com custo-benefício real.',
  },
  {
    q: 'Posso atualizar o conteúdo sozinho depois da entrega?',
    a: 'Sim. Todos os projetos são entregues com painel de administração e treinamento incluído. Textos, imagens, produtos e preços você atualiza sem precisar de nós.',
  },
  {
    q: 'Vocês fazem manutenção e suporte após o lançamento?',
    a: 'Sim. Oferecemos planos de suporte mensal que cobrem atualizações de segurança, performance e pequenas melhorias. Você nunca fica desamparado após a entrega.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Trabalhamos com entrada + parcelas ao longo do projeto, com marco de pagamento vinculado às entregas. Sem surpresas: tudo descrito em contrato antes de começar.',
  },
  {
    q: 'Atendem clientes fora de Santa Catarina?',
    a: 'Sim, atendemos por todo o Brasil de forma 100% remota. Reuniões por videochamada, comunicação ágil pelo WhatsApp e entregáveis sempre documentados.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="sec-eyebrow">Dúvidas frequentes</div>
          <div className="projects-title-row">
            <h2 className="sec-h2">Perguntas que<br />todo mundo <em>faz.</em></h2>
            <p className="sec-sub">Respondemos as dúvidas mais comuns antes do primeiro contato.</p>
          </div>
        </div>
        <div className="faq-list">
          {ITEMS.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
