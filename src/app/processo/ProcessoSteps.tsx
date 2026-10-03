'use client';

import { useEffect, useRef } from 'react';

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

export default function ProcessoSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = wrapRef.current?.querySelectorAll<HTMLElement>('.proc-step');
    if (!items) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="proc-steps-inner">
      {steps.map((s, i) => (
        <div key={s.n} className="proc-step">
          {/* Timeline column */}
          <div className="proc-tl">
            <div className="proc-tl-dot" />
            {i < steps.length - 1 && <div className="proc-tl-line" />}
          </div>

          {/* Number */}
          <div className="proc-step-left">
            <div className="proc-step-num">{s.n}</div>
          </div>

          {/* Content */}
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
  );
}
