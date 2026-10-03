'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const TIPOS = [
  'Site institucional',
  'Loja virtual',
  'Landing page',
  'Sistema',
  'Automação & IA',
  'Não sei ainda',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContatoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const data = new FormData();
      data.append('Nome', nome);
      data.append('Email', email);
      data.append('WhatsApp', whatsapp);
      data.append('Tipo de projeto', tipo || 'Não informado');
      data.append('Mensagem', mensagem);
      data.append('_subject', `Novo contato: ${nome}`);
      data.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/ajax/agenciawebfun@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="ctf-success">
        <div className="ctf-success-icon">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="ctf-success-title">Mensagem enviada!</h3>
        <p className="ctf-success-sub">
          Recebemos o seu contato e retornaremos em até 24 horas no e-mail ou WhatsApp informado.
        </p>
        <button className="ctf-success-back" onClick={() => {
          setStatus('idle');
          setNome(''); setEmail(''); setWhatsapp(''); setTipo(''); setMensagem('');
        }}>
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="ctf-form" onSubmit={handleSubmit} noValidate>
      <div className="ctf-row">
        <div className="ctf-field">
          <label className="ctf-label">Nome *</label>
          <input
            className="ctf-input"
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="ctf-row ctf-row-2">
        <div className="ctf-field">
          <label className="ctf-label">E-mail *</label>
          <input
            className="ctf-input"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="ctf-field">
          <label className="ctf-label">WhatsApp</label>
          <input
            className="ctf-input"
            type="tel"
            placeholder="(48) 99999-9999"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
      </div>

      <div className="ctf-field">
        <label className="ctf-label">Tipo de projeto</label>
        <div className="ctf-type-grid">
          {TIPOS.map((t) => (
            <button
              key={t}
              type="button"
              className={`ctf-type-pill${tipo === t ? ' active' : ''}`}
              onClick={() => setTipo(tipo === t ? '' : t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="ctf-field">
        <label className="ctf-label">Sobre o projeto *</label>
        <textarea
          className="ctf-input ctf-textarea"
          placeholder="Descreva brevemente o que você precisa — mesmo que seja só uma ideia, já é suficiente para começarmos."
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
      </div>

      {status === 'error' && (
        <p className="ctf-error">Erro ao enviar. Tente novamente ou mande um WhatsApp.</p>
      )}

      <button
        className="ctf-submit btn-p"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando…' : <>Enviar mensagem <ArrowRight size={15} strokeWidth={2} /></>}
      </button>
    </form>
  );
}
