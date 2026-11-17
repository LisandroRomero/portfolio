import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "border-accent bg-accent text-surface hover:border-ink hover:bg-ink",
  secondary: "border-line text-ink hover:border-accent hover:text-accent",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  /** Abre en una pestaña nueva con rel seguro */
  external?: boolean;
};

export default function ButtonLink({
  variant = "secondary",
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
