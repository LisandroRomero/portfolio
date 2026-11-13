import type { PropsWithChildren } from "react";

type Variant = "accent" | "neutral";

const variants: Record<Variant, string> = {
  accent: "border-accent/30 bg-accent/5 text-accent",
  neutral: "border-line bg-white/5 text-gray-300",
};

type Props = PropsWithChildren<{ variant?: Variant }>;

export default function Tag({ variant = "neutral", children }: Props) {
  return (
    <span className={`rounded-md border px-2.5 py-1 font-mono text-xs ${variants[variant]}`}>
      {children}
    </span>
  );
}
