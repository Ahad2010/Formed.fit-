import Image from "next/image";

/**
 * Typography per WhatFont inspection:
 * - Eyebrow "Who It's For": DM Sans 400, 10px/15px, uppercase, tracked.
 *   (Exact color wasn't fully legible in the capture — used a muted cream
 *   at low opacity to match the visual; send a fresh WhatFont grab of just
 *   this label if it needs to be a distinct accent hue instead.)
 * - Heading "Designed for people who value their time.": Cormorant Garamond
 *   300, 55px/60px, full-opacity cream (#F5F2EC). "time." italic, matching
 *   the same muted-italic pattern used in the hero and process headings.
 * - Paragraph: DM Sans 400, 14px/23px, cream at 50% opacity.
 * - List items: DM Sans 400, divided by hairline rules, brighter than the
 *   paragraph so they read as scannable, distinct list content.
 *
 * Copy confirmed verbatim against the live site's rendered HTML.
 */

const audience = [
  "Busy professionals",
  "Executives & founders",
  "Parents with limited availability",
  "Anyone who wants results without the gym",
];

export default function Designed() {
  return (
    <section className="bg-[#111110] font-body">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-w-0 h-[60vh] overflow-hidden min-h-[500px] lg:h-auto">
          <Image
            src="/images/designed.webp"
            alt="Client stretching through a downward dog on a yoga mat at home"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0C0C0B]/20" />
        </div>

        <div className="flex min-w-0 flex-col justify-start px-6 pt-16 pb-16 lg:px-16 lg:pt-24 lg:pb-20">
          <p className="text-[10px] font-normal uppercase leading-[15px] tracking-[0.25em] text-[#F5F2EC]/50">
            Who It&rsquo;s For
          </p>

          <h2 className="mt-4 max-w-lg font-display text-[36px] font-light leading-[1.1] text-[#F5F2EC] lg:text-[55px] lg:leading-[60px]">
            Designed for people who value their{" "}
            <em className="italic font-normal text-[#F5F2EC]/70">time.</em>
          </h2>

          <p className="mt-6 max-w-md text-[14px] font-normal leading-[23px] text-[#F5F2EC]/50">
            If gyms and fitness apps haven&rsquo;t worked — the commute, the
            crowds, the inconsistency — this will.
          </p>

          <ul className="mt-10 max-w-md border-t border-[#F5F2EC]/10">
            {audience.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-[#F5F2EC]/10 py-4 text-[14px] font-normal leading-[20px] text-[#F5F2EC]/90"
              >
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#F5F2EC]/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}