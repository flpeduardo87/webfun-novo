import '../site.css';
import './processo.css';
import { Camera, MessageCircle, Briefcase, ArrowRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Processo — Webfun',
  description: 'Como a Webfun trabalha: do primeiro contato à entrega. Transparência e resultado em cada etapa.',
};

const steps = [
  {
    n: '01',
    label: 'Diagnóstico',
    title: 'Entendemos o problema antes de propor qualquer solução',
    desc: 'Uma conversa de 15 a 30 minutos para mapear o negócio, os objetivos e o que precisa ser construído. Sem formulário genérico — ouvimos de verdade antes de falar.',
    duration: '15–30 min',
    format: 'Chamada ou reunião',
    delivers: ['Diagnóstico do negócio', 'Clareza sobre o projeto', 'Alinhamento de expectativas'],
  },
  {
    n: '02',
    label: 'Proposta',
    title: 'Escopo, prazo e investimento. Tudo documentado antes de começar.',
    desc: 'Com base no diagnóstico, enviamos uma proposta detalhada com o que será feito, em quanto tempo e por quanto. Sem surpresas depois — tudo combinado antes.',
    duration: '24–48h',
    format: 'Documento enviado',
    delivers: ['Escopo detalhado', 'Cronograma realista', 'Investimento fixo'],
  },
  {
    n: '03',
    label: 'Design',
    title: 'A identidade visual aprovada antes de uma linha de código',
    desc: 'Criamos protótipos navegáveis para você ver e testar como vai ficar. Só partimos para o desenvolvimento quando você estiver satisfeito com cada detalhe.',
    duration: '3–7 dias',
    format: 'Protótipo navegável',
    delivers: ['Identidade visual', 'Protótipo interativo', 'Aprovação antes do código'],
  },
  {
    n: '04',
    label: 'Desenvolvimento',
    title: 'Construção com tecnologia atual, rápida e escalável',
    desc: 'Desenvolvemos com as melhores ferramentas do mercado. Design responsivo, carregamento rápido e SEO técnico incluído — não como extra, como padrão.',
    duration: '7–21 dias',
    format: 'Atualizações semanais',
    delivers: ['Site 100% responsivo', 'Performance otimizada', 'SEO técnico incluso'],
  },
  {
    n: '05',
    label: 'Revisão',
    title: 'Ajustes até estar exatamente como você imaginou',
    desc: 'Rodadas de revisão incluídas no escopo. Você testa, aponta o que quer ajustar e a gente entrega. Sem cobranças extras por cada solicitação de mudança.',
    duration: '2–5 dias',
    format: 'Revisão por etapas',
    delivers: ['Revisões incluídas', 'Testes em múltiplos dispositivos', 'Aprovação final sua'],
  },
  {
    n: '06',
    label: 'Entrega & Suporte',
    title: 'No ar. Treinado. Com suporte garantido nos primeiros 30 dias.',
    desc: 'Fazemos o deploy, configuramos domínio e analytics. Treinamos você para gerenciar o conteúdo e ficamos de suporte para qualquer dúvida no pós-lançamento.',
    duration: '1–2 dias',
    format: 'Deploy + treinamento',
    delivers: ['Deploy completo', 'Treinamento incluído', '30 dias de suporte'],
  },
];

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
    q: 'Vocês trabalham com clientes fora de Florianópolis?',
    a: 'Sim. Atendemos em todo o Brasil e no exterior. O processo é 100% remoto e funciona muito bem assim — já entregamos projetos para clientes em Dublin, São Paulo e no interior do Paraná.',
  },
];

export default function ProcessoPage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <span className="logo-dot" />webfun
        </a>
        <ul className="nav-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/servicos">Serviços</a></li>
          <li><a href="/projetos">Projetos</a></li>
          <li><a href="/#orcamento">Contato</a></li>
        </ul>
        <div className="nav-right">
          <ThemeToggle />
          <a href="/#orcamento" className="nav-cta">Começar projeto</a>
        </div>
      </nav>

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
        <div className="proc-steps-inner">
          {steps.map((s) => (
            <div key={s.n} className="proc-step">
              <div className="proc-step-left">
                <div className="proc-step-num">{s.n}</div>
              </div>
              <div className="proc-step-right">
                <div className="proc-step-label" data-n={s.n}>{s.label}</div>
                <h2 className="proc-step-title">{s.title}</h2>
                <p className="proc-step-desc">{s.desc}</p>
                <div className="proc-step-meta">
                  <span className="proc-meta-pill">⏱ {s.duration}</span>
                  <span className="proc-meta-pill">📋 {s.format}</span>
                </div>
                <div className="proc-delivers">
                  {s.delivers.map((d) => (
                    <div key={d} className="proc-deliver-item">
                      <span className="proc-deliver-dot" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{ marginBottom: 12 }}>
                <span className="logo-dot" />webfun
              </a>
              <p className="footer-tagline">Tecnologia e design para<br />negócios que querem crescer.</p>
              <div className="footer-socials">
                <a href="#" className="fsoc" aria-label="Instagram"><Camera size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="WhatsApp"><MessageCircle size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="LinkedIn"><Briefcase size={16} strokeWidth={1.8} /></a>
              </div>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <div className="fcol-title">Serviços</div>
                <a href="/servicos#site-institucional">Site institucional</a>
                <a href="/servicos#loja-virtual">Loja virtual</a>
                <a href="/servicos#landing-page">Landing page</a>
                <a href="/servicos#sistema-sob-medida">Sistemas sob medida</a>
                <a href="/servicos#automacao-ia">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/projetos">Projetos</a>
                <a href="/processo">Como trabalhamos</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="#">agenciawebfun@gmail.com</a>
                <a href="#">WhatsApp</a>
                <a href="#">Florianópolis, SC</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Webfun. Todos os direitos reservados.</span>
            <span className="footer-credits">Feito com cuidado em Florianópolis</span>
          </div>
        </div>
      </footer>
    </>
  );
}
