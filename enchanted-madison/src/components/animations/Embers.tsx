"use client";
import { useEffect, useRef } from "react";

export function Embers({ count = 22 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Ember = { x: number; y: number; vy: number; vx: number; life: number; maxLife: number; size: number };
    const embers: Ember[] = [];
    let raf = 0, w = 0, h = 0;

    function resize() { w = canvas!.width = canvas!.offsetWidth; h = canvas!.height = canvas!.offsetHeight; }

    function spawnEmber(): Ember {
      return {
        x: w * 0.3 + Math.random() * w * 0.4,
        y: h,
        vy: -(Math.random() * 1.2 + 0.5),
        vx: (Math.random() - 0.5) * 0.6,
        life: 0,
        maxLife: Math.random() * 120 + 80,
        size: Math.random() * 2 + 0.8,
      };
    }

    function init() {
      embers.length = 0;
      for (let i = 0; i < count; i++) {
        const e = spawnEmber();
        e.life = Math.random() * e.maxLife;
        embers.push(e);
      }
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      embers.forEach((e, i) => {
        e.life++;
        e.x += e.vx;
        e.y += e.vy;
        e.vx += (Math.random() - 0.5) * 0.05;
        const progress = e.life / e.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : (1 - progress);
        if (e.life >= e.maxLife) embers[i] = spawnEmber();

        const color = progress < 0.5 ? `rgba(255,160,50,${alpha * 0.85})` : `rgba(184,100,40,${alpha * 0.7})`;
        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();
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
