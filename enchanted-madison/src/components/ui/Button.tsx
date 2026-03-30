import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-rose text-ivory hover:bg-forest border border-transparent",
  secondary:
    "border border-gold text-forest hover:bg-gold hover:text-night",
  ghost:
    "border border-transparent text-stone hover:text-forest hover:underline",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-13 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
