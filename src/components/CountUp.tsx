'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  value: string;
}

function parse(val: string) {
  const m = val.match(/^([+]?)(\d+)([^\d]*)$/);
  if (!m) return null;
  return { prefix: m[1], number: parseInt(m[2]), suffix: m[3] };
}

export default function CountUp({ value }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parse(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || fired.current) return;
      fired.current = true;
      observer.disconnect();

      const { prefix, number, suffix } = parsed;
      const duration = 1600;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(`${prefix}${Math.round(eased * number)}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };

      requestAnimationFrame(tick);
    }, { threshold: 0.6 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
