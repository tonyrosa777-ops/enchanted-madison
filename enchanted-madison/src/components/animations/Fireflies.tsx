"use client";
import { useEffect, useRef } from "react";

interface FirefliesProps {
  count?: number;
  className?: string;
}

export function Fireflies({ count = 18, className }: FirefliesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Fly = { x: number; y: number; vx: number; vy: number; phase: number; size: number; maxOpacity: number };
    const flies: Fly[] = [];
    let raf = 0;
    let w = 0, h = 0;

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }

    function spawn(): Fly {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.25 + 0.08),
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 1.8 + 0.8,
        maxOpacity: Math.random() * 0.6 + 0.3,
      };
    }

    function init() {
      flies.length = 0;
      for (let i = 0; i < count; i++) flies.push(spawn());
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      flies.forEach(f => {
        f.phase += 0.018;
        f.x += f.vx;
        f.y += f.vy;
        if (f.y < -10) { f.y = h + 10; f.x = Math.random() * w; }
        if (f.x < -10) f.x = w + 10;
        if (f.x > w + 10) f.x = -10;

        const glow = (Math.sin(f.phase) + 1) * 0.5;
        const alpha = glow * f.maxOpacity;
        const r = f.size * 5;

        const grad = ctx!.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
        grad.addColorStop(0, `rgba(184,150,90,${alpha})`);
        grad.addColorStop(0.4, `rgba(184,150,90,${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(184,150,90,0)`);
        ctx!.beginPath();
        ctx!.arc(f.x, f.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(f.x, f.y, f.size * 0.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,220,120,${alpha * 0.9})`;
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
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
