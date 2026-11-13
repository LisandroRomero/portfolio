import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  className?: string;
}>;

// scroll-mt compensa la navbar fija al navegar con #anclas
export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 ${className}`}>
      {children}
    </section>
  );
}
