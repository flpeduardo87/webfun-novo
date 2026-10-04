'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function scramble(el: HTMLElement, text: string, delay: number) {
  let frame = 0;
  const totalFrames = 22;

  setTimeout(() => {
    el.style.opacity = '1';
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

    const copy = document.querySelector('.hero-copy') as HTMLElement;
    if (!copy) return;

    // Eyebrow scramble
    const eyebrow = copy.querySelector('.eyebrow') as HTMLElement;
    if (eyebrow) {
      const txt = eyebrow.textContent ?? '';
      eyebrow.style.opacity = '0';
      eyebrow.style.transition = 'none';
      scramble(eyebrow, txt, 100);
    }

    // H1 lines slide up staggered
    const rows = copy.querySelectorAll<HTMLElement>('.hero-h1 .row');
    rows.forEach((row, i) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(24px)';
      row.style.transition = `opacity 0.6s ease ${300 + i * 120}ms, transform 0.6s cubic-bezier(0.2,1,0.3,1) ${300 + i * 120}ms`;
      requestAnimationFrame(() => {
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
      });
    });

    // Sub + actions + proof fade up
    ['.hero-sub', '.hero-actions', '.proof'].forEach((sel, i) => {
      const el = copy.querySelector<HTMLElement>(sel);
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ease ${700 + i * 100}ms, transform 0.6s cubic-bezier(0.2,1,0.3,1) ${700 + i * 100}ms`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });

    // Parallax — only on pointer:fine devices
    if (!window.matchMedia('(pointer: coarse)').matches) {
      const heroEl = document.querySelector<HTMLElement>('.hero');
      const copyEl = document.querySelector<HTMLElement>('.hero-copy');
      const winEl = document.querySelector<HTMLElement>('.service-window');

      const onScroll = () => {
        if (!heroEl) return;
        const heroH = heroEl.offsetHeight;
        const y = window.scrollY;
        if (y > heroH * 1.2) return;
        if (copyEl) copyEl.style.transform = `translateY(${y * 0.14}px)`;
        if (winEl) winEl.style.transform = `translateY(${y * 0.07}px)`;
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return null;
}
