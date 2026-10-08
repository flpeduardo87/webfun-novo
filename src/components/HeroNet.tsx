'use client';

import { useEffect, useRef } from 'react';

export default function HeroNet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    const W = () => canvas!.width;
    const H = () => canvas!.height;

    const CFG = {
      n: 32, speed: .32, dotAlpha: .28, lineAlpha: .14,
      lineWidth: .6, dotR: 1.3, accentRatio: .22, maxDist: 95,
    };

    const dots = Array.from({ length: CFG.n }, () => {
      const isAccent = Math.random() < CFG.accentRatio;
      const isBlue   = isAccent && Math.random() > .5;
      return {
        x:     Math.random() * W(),
        y:     Math.random() * H(),
        vx:    (Math.random() - .5) * CFG.speed,
        vy:    (Math.random() - .5) * CFG.speed,
        r:     isAccent ? CFG.dotR * 1.4 : CFG.dotR,
        color: isAccent ? (isBlue ? '#4d63f0' : '#8a9a00') : '#17181b',
        alpha: isAccent ? CFG.dotAlpha * 1.4 : CFG.dotAlpha * .7,
      };
    });

    function draw() {
      ctx!.clearRect(0, 0, W(), H());

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W()) d.vx *= -1;
        if (d.y < 0 || d.y > H()) d.vy *= -1;
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CFG.maxDist) {
            const t = 1 - dist / CFG.maxDist;
            const hasAccent = dots[i].color !== '#17181b' || dots[j].color !== '#17181b';
            const lineColor = hasAccent
              ? (dots[i].color !== '#17181b' ? dots[i].color : dots[j].color)
              : '#17181b';
            ctx!.beginPath();
            ctx!.strokeStyle   = lineColor;
            ctx!.lineWidth     = CFG.lineWidth;
            ctx!.globalAlpha   = t * CFG.lineAlpha;
            ctx!.moveTo(dots[i].x, dots[i].y);
            ctx!.lineTo(dots[j].x, dots[j].y);
            ctx!.stroke();
          }
        }
      }

      dots.forEach(d => {
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle   = d.color;
        ctx!.globalAlpha = d.alpha;
        ctx!.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
