import Image from "next/image";

/**
 * Typography per WhatFont inspection:
 * - Heading "Simple. Consistent. Effective.": Cormorant Garamond 300, 68px/85px.
 *   "Simple. Consistent." near-black (#0C0C0B), "Effective." italic + muted (#8C8880).
 * - Numerals (01/02/03): Cormorant Garamond 300, 60px, very pale (#E8E4DC) — decorative, low-contrast on purpose.
 * - Step titles: Cormorant Garamond 500, 24px/32px, near-black.
 * - Step descriptions: DM Sans 400, 14px/23px, muted gray-brown (#8C8880).
 *
 * Note: exact eyebrow/intro-paragraph accent color wasn't fully legible in the
 * inspector screenshot — using a warm clay tone to match the visual. Send a
 * WhatFont capture of just that element if it needs adjusting.
 */

const steps = [
  {
    number: "01",
    title: "Apply",
    copy: "Tell us your goals, schedule, and location. We personally review every application and respond within 24 hours.",
    image: "/images/process-1.webp",
    alt: "Athlete setting up for a barbell deadlift on a gym floor",
  },
  {
    number: "02",
    title: "Get Matched",
    copy: "We pair you with a certified trainer who fits your needs, schedule, and neighbourhood. No marketplace browsing — we do the work.",
    image: "/images/process-2.webp",
    alt: "Trainer performing a barbell curl in a home gym",
  },
  {
    number: "03",
    title: "Train",
    copy: "Your trainer arrives with professional equipment and a programme tailored to you. Same trainer, same time, every week.",
    image: "/images/process-3.webp",
    alt: "Close-up of a hand gripping a barbell mid-lift",
  },
];

export default function Effective() {
  return (
    <section className="bg-[#F3F0E9] font-body">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#8C8880]">
          The Process
        </p>

        <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[40px] font-light leading-[1.05] text-[#0C0C0B] md:text-[56px] lg:text-[68px] lg:leading-[85px]">
            Simple. Consistent. <em className="italic font-normal text-[#8C8880]">Effective.</em>
          </h2>

          <p className="max-w-xs text-[14px] font-normal leading-[23px] text-[#8C8880] md:text-right">
            Three steps. Zero friction. We handle everything so you just show
            up and train.
          </p>
        </div>
      </div>

      {/*
        Measured: each image is 405×309px inside a 1200px-wide, 3-column
        row — not edge-to-edge. Matching that with the same side padding
        as the heading block above, instead of a full-bleed grid.
      */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col ${i > 0 ? "md:border-l md:border-[#0C0C0B]/10" : ""}`}
            >
              <div className="group relative aspect-[405/309] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="px-0 py-10 md:px-8 md:py-12">
                <p className="font-display text-[60px] font-light leading-[60px] text-[#E8E4DC]">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-[24px] font-medium leading-[32px] text-[#0C0C0B]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[280px] text-[14px] font-normal leading-[23px] text-[#8C8880]">
                  {step.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}