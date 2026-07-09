import Image from "next/image";
import Button from "./Button";

/**
 * Typography per WhatFont inspection:
 * - Card label ("1X / WEEK" etc.): DM Sans 400, 10px/15px, ~40% opacity.
 * - Price ("$980" etc.): Cormorant Garamond 300, 48px/48px.
 * - Sessions line ("8 sessions / month"): DM Sans 400, 10px/15px,
 *   tan at 40% opacity on dark cards; full-opacity terracotta accent on
 *   the "Most Popular" card specifically (visibly distinct in the screenshot).
 * - Card description: DM Sans 400, 14px/23px, ~50% opacity.
 * - Feature-list items: DM Sans 400, 14px/20px, cream at 70% opacity.
 * - "Membership is by application only..." paragraph: DM Sans 400,
 *   14px/23px, cream at 40% opacity.
 *
 * Assumption flagged: the teal-ish tint on the "$" in the dark-card prices
 * wasn't isolated in a WhatFont capture — implemented as a styled span so
 * it's easy to correct the exact hex if it's off. The "Most Popular" card
 * uses uniform ink text with no such accent, matching the screenshot.
 */

const tiers = [
  {
    label: "1x / Week",
    price: "520",
    sessions: "4 sessions / month",
    duration: "45–60 minute sessions",
    description: "Ideal for getting started and building routine",
    popular: false,
  },
  {
    label: "2x / Week",
    price: "980",
    sessions: "8 sessions / month",
    duration: "45–60 minute sessions",
    description: "Most popular — measurable results, manageable commitment",
    popular: true,
  },
  {
    label: "3x / Week",
    price: "1,380",
    sessions: "12 sessions / month",
    duration: "45–60 minute sessions",
    description: "Maximum results for committed clients",
    popular: false,
  },
];

const features = [
  "Session notes after every session",
  "Monthly progress reviews",
  "Consistent weekly schedule",
  "Dedicated personal trainer",
  "In-home or private-space sessions",
];

export default function Membership() {
  return (
    <section className="bg-[#111110] font-body">
      <div className="px-6 pt-16 md:px-12 md:pt-20">
        <p className="text-[10px] font-normal uppercase tracking-[0.25em] text-[#F5F2EC]/40">
          Membership
        </p>

        <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-display text-[40px] font-light leading-[1.05] text-[#F5F2EC] md:text-[56px] lg:text-[68px] lg:leading-[85px]">
            Starting at{" "}
            <em className="italic font-normal text-[#F5F2EC]/80">
              $520 / month.
            </em>
          </h2>

          <p className="max-w-xs text-[14px] font-normal leading-[23px] text-[#F5F2EC]/60 lg:text-right">
            No contracts. No long-term commitments. Month-to-month, built
            around you.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 px-6 md:px-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={
              tier.popular
                ? "rounded-sm bg-[#F5F2EC] px-8 py-10 lg:-mt-6 lg:py-14"
                : "px-0 py-10 lg:px-2"
            }
          >
            {tier.popular && (
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#9C5A34]">
                Most Popular
              </p>
            )}

            <p
              className={`${tier.popular ? "mt-4" : ""} text-[10px] font-normal uppercase tracking-[0.2em] ${
                tier.popular ? "text-[#0C0C0B]/40" : "text-[#F5F2EC]/40"
              }`}
            >
              {tier.label}
            </p>

            <p
              className={`mt-3 font-display text-[48px] font-light leading-[48px] ${
                tier.popular ? "text-[#0C0C0B]" : "text-[#F5F2EC]"
              }`}
            >
              {!tier.popular && (
                <span className="italic text-[#6B8F86]">$</span>
              )}
              {tier.popular && "$"}
              {tier.price}
            </p>

            <p
              className={`mt-2 text-[10px] font-normal leading-[15px] ${
                tier.popular ? "text-[#9C5A34]" : "text-[#C8C2B4]/40"
              }`}
            >
              {tier.sessions}
            </p>
            <p
              className={`text-[10px] font-normal leading-[15px] ${
                tier.popular ? "text-[#0C0C0B]/30" : "text-[#C8C2B4]/25"
              }`}
            >
              {tier.duration}
            </p>

            <p
              className={`mt-8 max-w-[240px] text-[14px] font-normal leading-[23px] ${
                tier.popular ? "text-[#0C0C0B]/60" : "text-[#F5F2EC]/50"
              }`}
            >
              {tier.description}
            </p>
          </div>
        ))}
      </div>

      {/* Feature list + image/CTA */}
      <div className="mt-20 grid grid-cols-1 gap-12 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:gap-16 lg:pb-20">
        <ul className="border-t border-[#F5F2EC]/10">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-[#F5F2EC]/10 py-4 text-[14px] font-normal leading-[20px] text-[#F5F2EC]/70"
            >
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#F5F2EC]/40" />
              {item}
            </li>
          ))}
        </ul>

        <div>
          <div className="group relative h-[220px] w-full overflow-hidden">
            <Image
              src="/images/membership.webp"
              alt="Close-up of hands racking a dumbbell in a home gym"
              fill
              className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <p className="mt-6 text-[14px] font-normal leading-[23px] text-[#F5F2EC]/40">
            Membership is by application only. We review every request
            personally to confirm fit and trainer availability.
          </p>

          <div className="mt-6">
            <Button variant="solid" href="/apply">
              Apply for Membership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}