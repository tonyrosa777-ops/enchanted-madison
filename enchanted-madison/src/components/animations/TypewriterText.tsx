"use client";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases: string[];
  speed?: number;       // ms per character
  deleteSpeed?: number; // ms per delete
  pauseMs?: number;     // pause when fully typed
  className?: string;
  style?: React.CSSProperties;
}

export function TypewriterText({ phrases, speed = 60, deleteSpeed = 30, pauseMs = 2000, className, style }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setPhraseIdx(i => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(prev => isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1));
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, phraseIdx, phrases, speed, deleteSpeed, pauseMs]);

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        style={{ animation: "cursorBlink 1s step-end infinite", borderRight: "2px solid currentColor", marginLeft: "1px" }}
        aria-hidden="true"
      />
    </span>
  );
}
