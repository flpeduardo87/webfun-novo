'use client';

import { useEffect, useRef } from 'react';

const BLOB_COUNT = 7;

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    el.appendChild(canvas);

    const ctx = canvas.getContext('2d')!;

    const accentHex = getComputedStyle(document.documentElement)
      .getPropertyValue('--acid').trim() || '#b6c828';

    const tmp = document.createElement('div');
    tmp.style.color = accentHex;
    document.body.appendChild(tmp);
    const rgb = getComputedStyle(tmp).color;
    document.body.removeChild(tmp);
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);

    let W = 0, H = 0;
    const resize = () => { W = canvas.width = el.clientWidth; H = canvas.height = el.clientHeight; };
    resize();
    window.addEventListener('resize', resize);

    interface Blob {
      cx: number; cy: number;
      radius: number;
      alpha: number;
      speed: number;
      driftX: number; driftY: number;
      phase: number; phaseY: number;
    }

    const blobs: Blob[] = Array.from({ length: BLOB_COUNT }, () => ({
      cx: 0.1 + Math.random() * 0.8,
      cy: 0.1 + Math.random() * 0.8,
      radius: 0.22 + Math.random() * 0.22,
      alpha: 0.055 + Math.random() * 0.055,
      speed: 0.00025 + Math.random() * 0.00035,
      driftX: 0.08 + Math.random() * 0.08,
      driftY: 0.08 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
    }));

    const mouse = { x: -1, y: -1 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', onMouseMove);

    let t = 0;
    let raf: number;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      t++;
      ctx.clearRect(0, 0, W, H);

      for (const blob of blobs) {
        const bx = (blob.cx + Math.sin(t * blob.speed + blob.phase) * blob.driftX) * W;
        const by = (blob.cy + Math.cos(t * blob.speed + blob.phaseY) * blob.driftY) * H;
        const br = blob.radius * Math.min(W, H);

        const grd = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grd.addColorStop(0, `rgba(${r},${g},${b},${blob.alpha})`);
        grd.addColorStop(0.45, `rgba(${r},${g},${b},${blob.alpha * 0.35})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      if (mouse.x >= 0) {
        const mx = mouse.x * W, my = mouse.y * H;
        const spotR = Math.min(W, H) * 0.24;
        const spot = ctx.createRadialGradient(mx, my, 0, mx, my, spotR);
        spot.addColorStop(0, `rgba(${r},${g},${b},0.07)`);
        spot.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(mx, my, spotR, 0, Math.PI * 2);
        ctx.fillStyle = spot;
        ctx.fill();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
    />
  );
}
