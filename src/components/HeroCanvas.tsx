'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 120;
const CONNECTION_DIST = 0.45;
const FLOAT_SPEED = 0.00055;

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Renderer ──────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 2;

    // ── Detect accent color ───────────────────────────────
    const accentHex = getComputedStyle(document.documentElement)
      .getPropertyValue('--acid').trim() || '#b6c828';
    const accentColor = new THREE.Color(accentHex);

    // ── Particles ─────────────────────────────────────────
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(new THREE.Vector3(
        (Math.random() - 0.5) * 3.2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 0.6,
      ));
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * FLOAT_SPEED * 2,
        (Math.random() - 0.5) * FLOAT_SPEED * 2,
        0,
      ));
    }

    // Circular sprite texture
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = 32; spriteCanvas.height = 32;
    const ctx2d = spriteCanvas.getContext('2d')!;
    const grad = ctx2d.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx2d.fillStyle = grad;
    ctx2d.fillRect(0, 0, 32, 32);
    const spriteTex = new THREE.CanvasTexture(spriteCanvas);

    // Dot geometry
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(PARTICLE_COUNT * 3);
    positions.forEach((p, i) => { dotPositions[i * 3] = p.x; dotPositions[i * 3 + 1] = p.y; dotPositions[i * 3 + 2] = p.z; });
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({ color: accentColor, size: 0.028, map: spriteTex, transparent: true, opacity: 0.85, depthWrite: false });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Lines geometry (max connections)
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.18 })
    );
    scene.add(lineMat);

    // ── Mouse ─────────────────────────────────────────────
    const mouse = new THREE.Vector2(9999, 9999);
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ────────────────────────────────────────────
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop ────────────────────────────────────
    let raf: number;
    let frame = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame++;

      // Move particles
      const dp = dotGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = positions[i];
        const v = velocities[i];

        // Subtle mouse attraction
        const mx = (mouse.x * el.clientWidth / el.clientHeight) * 1.6;
        const my = mouse.y * 1.0;
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.5) {
          v.x += dx * 0.000006;
          v.y += dy * 0.000006;
        }

        p.add(v);

        // Dampen
        v.multiplyScalar(0.998);

        // Bounce off bounds
        if (Math.abs(p.x) > 1.65) v.x *= -1;
        if (Math.abs(p.y) > 1.05) v.y *= -1;

        dp.setXYZ(i, p.x, p.y, p.z);
      }
      dp.needsUpdate = true;

      // Update lines
      let lineIdx = 0;
      const lp = lineGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const d = positions[i].distanceTo(positions[j]);
          if (d < CONNECTION_DIST) {
            lp.setXYZ(lineIdx, positions[i].x, positions[i].y, positions[i].z);
            lp.setXYZ(lineIdx + 1, positions[j].x, positions[j].y, positions[j].z);
            lineIdx += 2;
          }
        }
      }
      // Zero out unused slots
      for (let k = lineIdx; k < maxLines * 2; k++) {
        lp.setXYZ(k, 0, 0, 0);
      }
      lp.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
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
      }}
    />
  );
}
