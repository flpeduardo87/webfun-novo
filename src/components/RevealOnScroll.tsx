'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // stagger delay in ms
  from?: 'bottom' | 'left' | 'right' | 'fade';
}

export default function RevealOnScroll({ children, className, delay = 0, from = 'bottom' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms: Record<string, string> = {
      bottom: 'translateY(32px)',
      left: 'translateX(-32px)',
      right: 'translateX(32px)',
      fade: 'translateY(0)',
    };

    el.style.opacity = '0';
    el.style.transform = transforms[from];
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.2,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, from]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
