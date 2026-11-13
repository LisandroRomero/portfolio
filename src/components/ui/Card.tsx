import type { MouseEvent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  /** Spotlight que sigue al mouse + borde que se ilumina */
  interactive?: boolean;
}>;

const base = "rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-sm";
const hover = "spotlight transition-colors duration-300 hover:border-accent/40";

// Escribe la posición del mouse en variables CSS; el gradiente lo dibuja .spotlight::before
const trackPointer = (e: MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

export default function Card({ className = "", interactive = false, children }: Props) {
  return (
    <div
      onMouseMove={interactive ? trackPointer : undefined}
      className={`${base} ${interactive ? hover : ""} ${className}`}
    >
      {children}
    </div>
  );
}
