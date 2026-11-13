import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  /** Retraso en ms, para escalonar elementos de una misma grilla */
  delay?: number;
}>;

// Fade-in + translate al entrar en pantalla. Con prefers-reduced-motion,
// el CSS de .reveal lo deja visible desde el principio.
export default function Reveal({ className = "", delay = 0, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // solo la primera vez
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
