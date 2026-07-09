import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

/**
 * Nav typography per WhatFont inspection:
 * - Logo subtitle "Tampa Bay · Private Training · 2026": DM Sans 400, 10px, ~50% opacity
 * - Nav links (Services/About/FAQ/Tampa Bay): DM Sans 400 (not 500), 13px/20px, 80% opacity, full on hover
 *
 * Both header buttons ("Log In" and "Apply Now") are solid cream fills on
 * the real site — not one solid + one outline. Only the hero's
 * "See How It Works" uses the outline style.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-6 md:px-12 md:py-8">
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo.webp"
            alt="Formed"
            width={200}
            height={80}
          />
          <p className="mt-1 text-[10px] font-normal uppercase tracking-[0.25em] text-[#F5F2EC]/50">
            Tampa Bay · Private Training · 2026
          </p>
        </div>

        <nav className="flex justify-center items-center gap-10 text-[10px] font-400 uppercase leading-[24px] tracking-[0.12em] text-[#F5F2EC]/80">
          <Link href="#services" className="transition-colors hover:text-[#F5F2EC]">
            Services
          </Link>
          <Link href="#about" className="transition-colors hover:text-[#F5F2EC]">
            About
          </Link>
          <Link href="#faq" className="transition-colors hover:text-[#F5F2EC]">
            FAQ
          </Link>
          <Link href="#tampa-bay" className="transition-colors hover:text-[#F5F2EC]">
            Tampa Bay
          </Link>
        </nav>

        <div className="flex justify-end items-center gap-3">
          <Button variant="solid" href="/login" className="hidden sm:inline-flex px-6 py-3 text-[12px] tracking-[0.25em]">
            Log In
          </Button>
          <Button variant="solid" href="/apply" className="px-6 py-3 text-[12px] tracking-[0.25em]">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
}