import Image from "next/image";
import Button from "./Button";

/**
 * Typography per WhatFont inspection:
 * - Heading "Train smarter. We handle the rest.": Cormorant Garamond 300,
 *   96px/143px, full-opacity cream (#F5F2EC). "We handle the rest." italic,
 *   same weight/color — unlike other sections, the italic line here isn't
 *   dimmed, it matches the upright line at full brightness.
 * - Sub-paragraph: DM Sans 400, 16px/26px, cream at 50% opacity.
 * - Eyebrow "Get Started": small, tracked, muted cream — matching the
 *   pattern used for every other section eyebrow on the page.
 */
export default function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-[#111110] font-body">
      <div className="absolute inset-0">
        <Image
          src="/images/get-started.webp"
          alt="Silhouette of a woman in a backbend yoga pose against a sunset over the water"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#111110]/50" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center md:py-40">
        <p className="text-[10px] font-normal uppercase tracking-[0.25em] text-[#F5F2EC]/50">
          Get Started
        </p>

        <h2 className="mt-6 font-display text-[44px] font-light leading-[1.15] text-[#F5F2EC] md:text-[72px] md:leading-[1.1] lg:text-[96px] lg:leading-[143px]">
          Train smarter.
          <br />
          <em className="italic font-normal">We handle the rest.</em>
        </h2>

        <p className="mt-6 max-w-lg text-[16px] font-normal leading-[26px] text-[#F5F2EC]/50">
          Limited trainer availability in Tampa Bay. Apply today to check
          your area and get matched within 48 hours.
        </p>

        <div className="mt-10">
          <Button    variant="solid" href="/apply">
            Apply for Membership
          </Button>
        </div>
      </div>
    </section>
  );
}