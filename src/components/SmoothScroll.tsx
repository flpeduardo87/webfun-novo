'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let raf: number;

    const init = async () => {
      const { default: Lenis } = await import('lenis');

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      return () => {
        lenis.destroy();
        cancelAnimationFrame(raf);
      };
    };

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });

    return () => { cleanup?.(); };
  }, []);

  return null;
}
