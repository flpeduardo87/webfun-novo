'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function scramble(el: HTMLElement, text: string, delay: number) {
  let frame = 0;
  const totalFrames = 22;
  setTimeout(() => {
    const raf = () => {
      frame++;
      const revealed = Math.floor((frame / totalFrames) * text.length);
      el.textContent =
        text.slice(0, revealed) +
        Array.from({ length: text.length - revealed }, () =>
          CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('');
      if (frame < totalFrames) requestAnimationFrame(raf);
      else el.textContent = text;
    };
    requestAnimationFrame(raf);
  }, delay);
}

export default function HeroAnimator() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Scramble only changes textContent — CSS @keyframes handles all opacity/transform
    const eyebrow = document.querySelector('.hero-copy .eyebrow') as HTMLElement;
    if (eyebrow) {
      const txt = eyebrow.textContent ?? '';
      scramble(eyebrow, txt, 200);
    }
  }, []);

  return null;
}
