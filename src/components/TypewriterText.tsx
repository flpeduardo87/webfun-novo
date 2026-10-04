'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'Sites que convertem.',
  'Lojas que vendem.',
  'Sistemas que escalam.',
  'Resultados que aparecem.',
];

export default function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'hold' | 'erasing'>('typing');

  useEffect(() => {
    const full = PHRASES[idx];
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), 72);
      } else {
        t = setTimeout(() => setPhase('hold'), 2200);
      }
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erasing'), 0);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 38);
      } else {
        setIdx((i) => (i + 1) % PHRASES.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return (
    <span className="tw-line" aria-live="polite">
      {text}
      <span className="tw-cursor" aria-hidden="true" />
    </span>
  );
}
