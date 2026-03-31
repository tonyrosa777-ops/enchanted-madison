interface WaveDividerProps {
  fill?: string;       // color of the wave shape (the section BELOW)
  background?: string; // color behind the svg (the section ABOVE)
  flip?: boolean;      // flip vertically
  className?: string;
}

export function WaveDivider({ fill = "#F5F0EB", background = "transparent", flip = false, className }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className ?? ""}`}
      style={{ height: "80px", background, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", bottom: 0, width: "100%", height: "100%", animation: "waveBreathe 6s ease-in-out infinite" }}
      >
        <path
          d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
