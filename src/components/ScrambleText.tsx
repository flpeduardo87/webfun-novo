'use client';

import React, { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

interface Props {
  text: string;
  className?: string;
  delay?: number; // ms before starting
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrambleText({ text, className, delay = 0, as: Tag = 'span' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let raf: number;
    const totalFrames = 18;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * text.length);

      el.textContent =
        text.slice(0, revealed) +
        Array.from({ length: text.length - revealed }, (_, i) =>
          (frame + i) % 3 === 0
            ? CHARS[Math.floor(Math.random() * CHARS.length)]
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('');

      if (frame < totalFrames) {
        raf = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
