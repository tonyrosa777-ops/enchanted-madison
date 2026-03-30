export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          <span
            className="h-2 w-2 rounded-full bg-gold"
            style={{ animation: "goldDot 1.2s ease-in-out 0s infinite" }}
          />
          <span
            className="h-2 w-2 rounded-full bg-gold"
            style={{ animation: "goldDot 1.2s ease-in-out 0.2s infinite" }}
          />
          <span
            className="h-2 w-2 rounded-full bg-gold"
            style={{ animation: "goldDot 1.2s ease-in-out 0.4s infinite" }}
          />
        </div>
        <style>{`
          @keyframes goldDot {
            0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
            40%            { opacity: 1;   transform: scale(1.1); }
          }
        `}</style>
      </div>
    </div>
  );
}
