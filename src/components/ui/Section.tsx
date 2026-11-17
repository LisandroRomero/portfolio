import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  title: string;
}>;

// Título en una columna angosta a la izquierda y contenido a la derecha (en mobile, apilados).
// scroll-mt compensa la navbar fija al navegar con #anclas.
export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid scroll-mt-20 gap-6 border-t border-line py-16 md:grid-cols-[9rem_1fr] md:gap-10"
    >
      <h2 id={`${id}-title`} className="text-base font-semibold text-ink">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
