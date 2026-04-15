// Button — design-system.md §5 (Component Style Rules → Buttons)
// Variants: primary | secondary | ghost | ghost-light
// Typography: Lato 700, 14px, letter-spacing 0.03em (per design-system.md §5)

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  // Deep Forest Green bg, warm white text — primary actions
  primary:
    "text-[var(--text-on-dark)] border-transparent transition-colors duration-200 hover:opacity-90 active:opacity-80",
  // Dusty Rose bg, warm white text — secondary CTAs
  secondary:
    "text-[var(--text-on-dark)] border-transparent transition-colors duration-200 hover:opacity-90 active:opacity-80",
  // Transparent with forest green border — on light backgrounds
  ghost:
    "bg-transparent text-[var(--primary)] border-[var(--primary)] hover:text-[var(--text-on-dark)] transition-all duration-200",
  // Transparent with warm white border — on dark sections/hero
  "ghost-light":
    "bg-transparent text-[var(--text-on-dark)] border-[var(--text-on-dark)] hover:bg-white/10 transition-all duration-200",
};

const variantBg: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary)] hover:bg-[#3a5240]",
  secondary: "bg-[var(--accent-rose)] hover:bg-[#b07d68]",
  ghost: "hover:bg-[var(--primary)]",
  "ghost-light": "",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full border-[1.5px] font-bold tracking-[0.03em] whitespace-nowrap select-none disabled:opacity-40 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  disabled = false,
  className,
  onClick,
  children,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    variantBg[variant],
    sizeStyles[size],
    className
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
