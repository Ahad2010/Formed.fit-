import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111110] font-body">
      {/* Background photo + dark overlay so type stays legible */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg.webp"
          alt="Certified personal trainer coaching a client through a push-up session at home"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/70 to-[#111110]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/60 via-transparent to-transparent" />
      </div>

      {/* Thin vertical accent rule, pinned to the right edge */}
      <div className="pointer-events-none absolute right-6 top-0 hidden h-full w-px bg-[#F5F2EC]/15 md:block" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Nav */}
        <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <div>
             <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#F5F2EC]/50">
              Tampa Bay · Private Training · 2026
            </p>
          </div>

          <nav className="hidden items-center gap-10 text-[13px] uppercase tracking-[0.15em] text-[#F5F2EC]/80 lg:flex">
            <a href="#services" className="transition-colors hover:text-[#F5F2EC]">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-[#F5F2EC]">
              About
            </a>
            <a href="#faq" className="transition-colors hover:text-[#F5F2EC]">
              FAQ
            </a>
            <a href="#tampa-bay" className="transition-colors hover:text-[#F5F2EC]">
              Tampa Bay
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" href="/login" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button variant="solid" href="/apply">
              Apply Now
            </Button>
          </div>
        </header>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center px-6 md:px-12">
          {/*
            No hard <br> — the real site relies on natural text wrap inside
            a fixed max-width, so the break point shifts with viewport width
            (confirmed by comparing wraps at two different screen sizes).
            Only "delivered to your home." is italic; "Personal training,"
            stays upright.
          */}
          <h1 className="max-w-4xl font-display text-[56px] font-light leading-[1.05] text-[#F5F2EC] sm:text-[72px] md:text-[96px] lg:text-[109px] lg:leading-[115px]">
            Private personal training, <em className="italic font-normal">delivered to your home.</em>
          </h1>

          <p className="mt-8 max-w-md text-lg font-light leading-[28px] text-[#F5F2EC]/60">
            Certified trainers come to your home, fully equipped. No gym
            membership, no commute. No wasted time. Just consistent,
            professional training built around your life.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="solid" href="/apply">
              Apply for Membership
            </Button>
            <Button variant="outline" href="#how-it-works">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Trust row */}
        <div className="px-6 pb-10 md:px-12 md:pb-14">
          <div className="h-px w-full bg-[#F5F2EC]/15" />
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            <TrustItem
              title="Vetted Trainers"
              copy="Every trainer certified & background checked"
            />
            <TrustItem
              title="Equipment Included"
              copy="Professional gear at every session"
            />
            <TrustItem
              title="Not a Marketplace"
              copy="Direct, curated training experience"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <p className="text-[15px] font-medium text-[#F5F2EC]">{title}</p>
      <p className="mt-1 text-sm font-light text-[#F5F2EC]/50">{copy}</p>
    </div>
  );
}