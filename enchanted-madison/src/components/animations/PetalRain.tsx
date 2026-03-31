"use client";
import { useEffect, useRef } from "react";

export function PetalRain({ count = 14 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Petal = { x: number; y: number; vy: number; vx: number; rotation: number; rotationSpeed: number; size: number; opacity: number };
    const petals: Petal[] = [];
    let raf = 0, w = 0, h = 0;

    function resize() { w = canvas!.width = canvas!.offsetWidth; h = canvas!.height = canvas!.offsetHeight; }

    function spawnPetal(yOverride?: number): Petal {
      return {
        x: Math.random() * w,
        y: yOverride ?? -20,
        vy: Math.random() * 0.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 8 + 5,
        opacity: Math.random() * 0.5 + 0.25,
      };
    }

    function drawPetal(p: Petal) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.globalAlpha = p.opacity;
      ctx!.beginPath();
      ctx!.ellipse(0, 0, p.size * 0.45, p.size, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "#C4917B";
      ctx!.fill();
      ctx!.restore();
    }

    function init() {
      petals.length = 0;
      for (let i = 0; i < count; i++) petals.push(spawnPetal(Math.random() * h));
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      petals.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (p.y > h + 30) petals[i] = spawnPetal();
        drawPetal(p);
      });
      raf = requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { resize(); init(); raf = requestAnimationFrame(tick); }
      else cancelAnimationFrame(raf);
    });
    io.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
