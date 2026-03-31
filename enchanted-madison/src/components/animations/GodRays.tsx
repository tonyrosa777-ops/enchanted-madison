// No "use client" needed — pure CSS

interface GodRaysProps {
  opacity?: number;
}

const rays = [
  { left: "8%",  rotate: "-18deg", width: "45px", delay: "0s",    duration: "6s"  },
  { left: "22%", rotate: "-10deg", width: "30px", delay: "1.2s",  duration: "7s"  },
  { left: "38%", rotate: "-4deg",  width: "55px", delay: "0.6s",  duration: "5.5s"},
  { left: "55%", rotate: "3deg",   width: "35px", delay: "1.8s",  duration: "8s"  },
  { left: "70%", rotate: "11deg",  width: "40px", delay: "0.3s",  duration: "6.5s"},
  { left: "84%", rotate: "18deg",  width: "28px", delay: "2.1s",  duration: "7.5s"},
];

export function GodRays({ opacity = 1 }: GodRaysProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {rays.map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "-10%",
            left: r.left,
            width: r.width,
            height: "75%",
            background: "linear-gradient(to bottom, rgba(184,150,90,0.18) 0%, rgba(184,150,90,0.06) 50%, transparent 100%)",
            transform: `rotate(${r.rotate})`,
            transformOrigin: "top center",
            filter: "blur(12px)",
            animation: `godRayPulse ${r.duration} ease-in-out ${r.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
