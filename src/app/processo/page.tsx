import '../site.css';
import './processo.css';
import { ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProcessoSteps from './ProcessoSteps';

export const metadata = {
  title: 'Processo — Webfun',
  description: 'Como a Webfun trabalha: do primeiro contato à entrega. Transparência e resultado em cada etapa.',
};

const guarantees = [
  {
    icon: '⏱',
    title: 'Prazo real',
    desc: 'Só prometemos o que conseguimos cumprir. Se houver atraso por nossa parte, avisamos antes — não depois com desculpas.',
  },
  {
    icon: '📄',
    title: 'Sem letra miúda',
    desc: 'Tudo documentado em linguagem simples. Você sabe exatamente o que está contratando antes de assinar qualquer coisa.',
  },
  {
    icon: '🎯',
    title: 'Comunicação direta',
    desc: 'Sem gerente de contas no meio. Você fala diretamente com quem está construindo o seu projeto.',
  },
];

const faqs = [
  {
    q: 'Quanto tempo demora um projeto completo?',
    a: 'Depende do escopo. Um site institucional leva de 2 a 4 semanas. Uma loja virtual ou sistema sob medida, de 4 a 8 semanas. O prazo exato é definido na proposta.',
  },
  {
    q: 'Preciso ter todo o conteúdo pronto antes de começar?',
    a: 'Não. Trabalhamos com o que você tem e orientamos sobre o que falta. Textos, fotos e informações podem ser enviados durante o processo sem travar o andamento.',
  },
  {
    q: 'Como acompanho o andamento do projeto?',
    a: 'Você recebe atualizações semanais e acesso a uma área de preview para visualizar o desenvolvimento em tempo real. Nada de "tá pronto semana que vem" sem mostrar nada.',
  },
  {
    q: 'Quantas revisões estão incluídas?',
    a: 'Não limitamos por número. Trabalhamos por rodadas: você vê, consolida o feedback e a gente aplica. O objetivo é entregar certo, não cobrar por ajuste.',
  },
  {
    q: 'O que acontece se eu quiser mudar algo depois de entregue?',
    a: 'Os 30 dias de suporte cobrem ajustes pequenos. Para mudanças maiores ou novas funcionalidades, fazemos um escopo rápido e propomos um valor justo.',
  },
  {
    q: 'Vocês trabalham com clientes fora de Canoinhas?',
    a: 'Sim. Atendemos em todo o Brasil e no exterior. O processo é 100% remoto e funciona muito bem assim — já entregamos projetos para clientes em Dublin, São Paulo e no interior do país.',
  },
];

export default function ProcessoPage() {
  return (
    <>
      <NavBar active="processo" />

      {/* HERO */}
      <section className="proc-hero">
        <div className="proc-hero-inner">
          <div className="proc-hero-copy">
            <div className="eyebrow">Como trabalhamos</div>
            <h1 className="proc-h1">
              6 etapas.<br /><em>Zero enrolação.</em>
            </h1>
            <p className="proc-sub">
              Do primeiro contato à entrega no ar. Um processo claro, com prazos reais e comunicação direta — para você saber exatamente o que esperar em cada fase.
            </p>
          </div>
          <div className="proc-hero-stats">
            <div className="phs-item">
              <div className="phs-val">14+</div>
              <div className="phs-label">projetos entregues</div>
            </div>
            <div className="phs-div" />
            <div className="phs-item">
              <div className="phs-val">4+</div>
              <div className="phs-label">anos de mercado</div>
            </div>
            <div className="phs-div" />
            <div className="phs-item">
              <div className="phs-val">30d</div>
              <div className="phs-label">suporte incluso</div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="proc-steps-section">
        <ProcessoSteps />
      </section>

      {/* GUARANTEES */}
      <section className="proc-guar-section">
        <div className="proc-guar-inner">
          <div className="proc-guar-header">
            <div className="sec-eyebrow">Nossa promessa</div>
            <h2 className="sec-h2">O que você pode<br /><em>sempre esperar.</em></h2>
          </div>
          <div className="proc-guar-grid">
            {guarantees.map((g) => (
              <div key={g.title} className="proc-guar-card">
                <div className="proc-guar-icon">{g.icon}</div>
                <h3 className="proc-guar-title">{g.title}</h3>
                <p className="proc-guar-desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="proc-faq-section">
        <div className="proc-faq-inner">
          <div className="proc-faq-header">
            <div className="sec-eyebrow">Perguntas frequentes</div>
            <h2 className="sec-h2">Dúvidas que<br /><em>todo mundo tem.</em></h2>
          </div>
          <div className="proc-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="proc-faq-item">
                <summary className="proc-faq-q">{f.q}</summary>
                <p className="proc-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="proc-cta-section">
        <div className="proc-cta-inner">
          <div className="sec-eyebrow">Próximo passo</div>
          <h2 className="proc-cta-h2">Pronto para<br /><em>começar?</em></h2>
          <p className="proc-cta-sub">Traga o briefing — mesmo que seja só uma ideia. A conversa é gratuita e sem compromisso.</p>
          <a href="/#orcamento" className="btn-p">
            Agendar diagnóstico <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
