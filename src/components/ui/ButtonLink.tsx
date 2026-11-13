import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 motion-safe:hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary:
    "border-accent-strong bg-accent-strong text-white shadow-[0_0_24px] shadow-accent-hover/30 hover:border-accent-hover hover:bg-accent-hover hover:shadow-accent-hover/50",
  outline: "border-accent/40 text-accent hover:border-accent hover:bg-accent/10",
  ghost: "border-line bg-white/5 text-white hover:border-accent/50 hover:text-accent",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  /** Abre en una pestaña nueva con rel seguro */
  external?: boolean;
};

export default function ButtonLink({
  variant = "ghost",
  external = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
