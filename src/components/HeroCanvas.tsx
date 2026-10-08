'use client';

import { useEffect, useRef } from 'react';

const STREAM_COUNT = 18;
const PARTICLE_COUNT = 55;

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

    // Parse accent color to RGB
    const tmp = document.createElement('div');
    tmp.style.color = accentHex;
    document.body.appendChild(tmp);
    const rgb = getComputedStyle(tmp).color; // "rgb(r, g, b)"
    document.body.removeChild(tmp);
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);

    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = el.clientWidth;
      H = canvas.height = el.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Flowing streams ──────────────────────────────────────
    interface Stream {
      // control points expressed as fractions of W/H, updated each pass
      x0: number; y0: number;
      x1: number; y1: number;
      x2: number; y2: number;
      x3: number; y3: number;
      progress: number;  // 0..1 along the bezier
      speed: number;
      width: number;
      alpha: number;
      // tail history (canvas points)
      tail: { x: number; y: number }[];
      tailLen: number;
    }

    const streams: Stream[] = [];

    const bezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number) => {
      const u = 1 - t;
      return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
    };

    const makeStream = (): Stream => {
      // start from left or top edge, end on right or bottom
      const fromLeft = Math.random() > 0.35;
      const x0 = fromLeft ? -0.05 : Math.random() * 0.9 + 0.05;
      const y0 = fromLeft ? Math.random() * 0.8 + 0.1 : -0.05;
      const x3 = fromLeft ? 1.05 : Math.random() * 0.9 + 0.05;
      const y3 = fromLeft ? Math.random() * 0.8 + 0.1 : 1.05;
      return {
        x0, y0, x3, y3,
        x1: Math.random() * 0.6 + 0.2,
        y1: Math.random() * 0.6 + 0.2,
        x2: Math.random() * 0.6 + 0.2,
        y2: Math.random() * 0.6 + 0.2,
        progress: Math.random(),
        speed: 0.0012 + Math.random() * 0.0018,
        width: 0.5 + Math.random() * 1.2,
        alpha: 0.18 + Math.random() * 0.42,
        tail: [],
        tailLen: 55 + Math.floor(Math.random() * 80),
      };
    };

    for (let i = 0; i < STREAM_COUNT; i++) {
      const s = makeStream();
      s.progress = Math.random(); // stagger start positions
      streams.push(s);
    }

    // ── Ambient particles ────────────────────────────────────
    interface Dot {
      x: number; y: number;
      vx: number; vy: number;
      alpha: number; size: number;
    }
    const dots: Dot[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      alpha: 0.15 + Math.random() * 0.55,
      size: 0.8 + Math.random() * 1.8,
    }));

    // Mouse glow
    const mouse = { x: -1, y: -1 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', onMouseMove);

    let raf: number;

    const draw = () => {
      raf = requestAnimationFrame(draw);

      // Clear with a subtle fade trail
      ctx.fillStyle = `rgba(0,0,0,0.22)`;
      ctx.fillRect(0, 0, W, H);

      // ── Draw streams ───────────────────────────────────────
      for (const s of streams) {
        s.progress += s.speed;

        const px = bezierPoint(s.progress, s.x0, s.x1, s.x2, s.x3) * W;
        const py = bezierPoint(s.progress, s.y0, s.y1, s.y2, s.y3) * H;

        s.tail.push({ x: px, y: py });
        if (s.tail.length > s.tailLen) s.tail.shift();

        if (s.tail.length > 2) {
          // Draw tail gradient line
          for (let i = 1; i < s.tail.length; i++) {
            const frac = i / s.tail.length;
            const headFrac = Math.max(0, (frac - 0.7) / 0.3); // bright at the head
            const alpha = s.alpha * frac * (0.35 + headFrac * 0.65);

            ctx.beginPath();
            ctx.moveTo(s.tail[i - 1].x, s.tail[i - 1].y);
            ctx.lineTo(s.tail[i].x, s.tail[i].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = s.width * (0.3 + frac * 0.7);
            ctx.lineCap = 'round';
            ctx.stroke();
          }

          // Bright head glow
          const head = s.tail[s.tail.length - 1];
          const grd = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, s.width * 7);
          grd.addColorStop(0, `rgba(${r},${g},${b},${s.alpha * 0.9})`);
          grd.addColorStop(0.4, `rgba(${r},${g},${b},${s.alpha * 0.4})`);
          grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(head.x, head.y, s.width * 7, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        if (s.progress > 1.05) {
          // Reset stream
          const fresh = makeStream();
          fresh.progress = 0;
          Object.assign(s, fresh);
          s.tail = [];
        }
      }

      // ── Draw ambient dots ──────────────────────────────────
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = 1;
        if (d.x > 1) d.x = 0;
        if (d.y < 0) d.y = 1;
        if (d.y > 1) d.y = 0;

        const sx = d.x * W, sy = d.y * H;
        ctx.beginPath();
        ctx.arc(sx, sy, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${d.alpha * 0.6})`;
        ctx.fill();
      }

      // ── Mouse spotlight ────────────────────────────────────
      if (mouse.x >= 0) {
        const mx = mouse.x * W, my = mouse.y * H;
        const spotR = Math.min(W, H) * 0.28;
        const spot = ctx.createRadialGradient(mx, my, 0, mx, my, spotR);
        spot.addColorStop(0, `rgba(${r},${g},${b},0.06)`);
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
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
}
