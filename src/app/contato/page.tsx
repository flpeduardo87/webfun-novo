import '../site.css';
import './contato.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContatoForm from './ContatoForm';

export const metadata = {
  title: 'Contato — Webfun',
  description: 'Entre em contato com a Webfun. Diagnóstico gratuito e sem compromisso.',
};

const afterSteps = [
  { n: '1', text: 'Lemos e entendemos o seu projeto (em até 2h)' },
  { n: '2', text: 'Entramos em contato para alinhar os próximos passos' },
  { n: '3', text: 'Diagnóstico gratuito e sem compromisso' },
];

export default function ContatoPage() {
  return (
    <>
      <NavBar active="contato" />

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <div className="eyebrow">Contato</div>
          <h1 className="ct-h1">
            Vamos construir<br /><em>algo juntos?</em>
          </h1>
          <p className="ct-sub">
            Traga o briefing — mesmo que seja só uma ideia. A conversa é gratuita, sem compromisso e sem formulário genérico.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="ct-main">
        <div className="ct-main-inner">

          {/* LEFT: info */}
          <div className="ct-info">
            <div className="ct-info-block">
              <div className="ct-info-title">Fale diretamente</div>
              <div className="ct-contacts">
                <a href="mailto:agenciawebfun@gmail.com" className="ct-contact-item">
                  <div className="ct-contact-icon"><Mail size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">E-mail</div>
                    <div className="ct-contact-val">agenciawebfun@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/5547997618824" target="_blank" rel="noopener noreferrer" className="ct-contact-item">
                  <div className="ct-contact-icon"><Phone size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">WhatsApp</div>
                    <div className="ct-contact-val">(47) 99761-8824</div>
                  </div>
                </a>
                <div className="ct-contact-item ct-contact-static">
                  <div className="ct-contact-icon"><MapPin size={16} strokeWidth={1.8} /></div>
                  <div>
                    <div className="ct-contact-label">Localização</div>
                    <div className="ct-contact-val">Canoinhas, SC — Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ct-info-block">
              <div className="ct-info-title">O que acontece depois</div>
              <div className="ct-after-steps">
                {afterSteps.map((s) => (
                  <div key={s.n} className="ct-after-step">
                    <div className="ct-after-num">{s.n}</div>
                    <p className="ct-after-text">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-info-block ct-guarantee">
              <div className="ct-guarantee-icon">🔒</div>
              <p className="ct-guarantee-text">
                Suas informações são confidenciais e nunca serão compartilhadas com terceiros.
              </p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="ct-form-wrap">
            <ContatoForm />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
