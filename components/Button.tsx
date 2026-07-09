import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: ReactNode;
}

/**
 * Matches the two button styles inspected on the FORMED hero:
 * - solid:   cream fill (#F5F2EC), dark text, sharp corners, uppercase, wide tracking
 * - outline: transparent fill, hairline border, cream text, same corners/tracking
 *
 * Sharp corners (no border-radius) + uppercase + letter-spacing is the
 * signature of this button system — keep both consistent across the app.
 */
export default function Button({
  variant = "solid",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-200";

  const variants: Record<Variant, string> = {
    solid:
      "bg-[#F5F2EC] text-[#111110] hover:bg-white",
    outline:
      "bg-transparent text-[#F5F2EC] border border-[#F5F2EC]/30 hover:border-[#F5F2EC]/70",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}