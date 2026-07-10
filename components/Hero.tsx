"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [solidHover, setSolidHover] = useState(false);
  const [outlineHover, setOutlineHover] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#111110]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.webp"
          alt="Private personal training session"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#111110]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/40 to-transparent" />
      </div>

      {/* Content — pushed to bottom */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-20 lg:pb-20 w-full">
        <div className="max-w-3xl">
          <p className="mb-6 text-[10px] tracking-[0.25em] uppercase text-[#F5F2EC]/50">
            Tampa Bay · Private Training · 2026
          </p>

          <h1 className="font-display font-light text-[#F5F2EC] leading-[1.05]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Private personal training, <em className="font-light italic text-[#E8E4DC]">delivered to your home.</em>
          </h1>

          <p className="mt-6 text-[#F5F2EC]/60 text-base lg:text-lg leading-relaxed max-w-xl font-body font-light">
            Certified trainers come to your home, fully equipped. No gym. No commute. No wasted time. Just consistent, professional training built around your life.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Apply for Membership — solid */}
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-12 py-5 text-[10px] font-medium leading-[15px] uppercase tracking-[0.25em] transition-all duration-300"
              style={{
                backgroundColor: solidHover ? "#E8E4DC" : "#F5F2EC",
                color: "#0C0C0B",
                border: "1px solid #F5F2EC",
              }}
              onMouseEnter={() => setSolidHover(true)}
              onMouseLeave={() => setSolidHover(false)}
            >
              Apply for Membership
            </Link>

            {/* See How It Works — outline */}
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-12 py-5 text-[10px] font-medium leading-[15px] uppercase tracking-[0.25em] transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                color: outlineHover ? "#F5F2EC" : "rgba(245,242,236,0.7)",
                border: outlineHover ? "1px solid #ffffff" : "1px solid rgba(245,242,236,0.3)",
                opacity: outlineHover ? 1 : 0.8,
              }}
              onMouseEnter={() => setOutlineHover(true)}
              onMouseLeave={() => setOutlineHover(false)}
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Trust row — inside content flow */}
        <div className="mt-16 pt-8 border-t border-[#F5F2EC]/10 grid grid-cols-3 gap-6 max-w-lg">
          <div>
            <p className="text-[#F5F2EC] text-xs font-body font-medium leading-tight">Vetted Trainers</p>
            <p className="text-[#F5F2EC]/40 text-[10px] leading-snug mt-1 font-body">Every trainer certified &amp; background checked</p>
          </div>
          <div>
            <p className="text-[#F5F2EC] text-xs font-body font-medium leading-tight">Equipment Included</p>
            <p className="text-[#F5F2EC]/40 text-[10px] leading-snug mt-1 font-body">Professional gear at every session</p>
          </div>
          <div>
            <p className="text-[#F5F2EC] text-xs font-body font-medium leading-tight">Not a Marketplace</p>
            <p className="text-[#F5F2EC]/40 text-[10px] leading-snug mt-1 font-body">Direct, curated training experience</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-10 z-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-16 bg-[#F5F2EC]/60" style={{ animation: "pulse 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}