import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  subtitle?: string;
}>;

export default function SectionTitle({ subtitle, children }: Props) {
  return (
    <header className="mb-12">
      <p aria-hidden="true" className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        {"// "}
        {children}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{children}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
    </header>
  );
}
