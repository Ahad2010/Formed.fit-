import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "solid",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-12 py-5 text-[10px] font-medium leading-[15px] uppercase tracking-[0.25em] transition-all duration-300";

  const variants: Record<Variant, string> = {
    solid:
      "bg-[#F5F2EC] text-[#0C0C0B] border border-[#F5F2EC] hover:bg-[#E8E4DC]",
    outline:
      "bg-transparent text-[#F5F2EC]/70 border border-[#F5F2EC]/30 opacity-80 hover:opacity-100 hover:border-white hover:text-[#F5F2EC]",
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
