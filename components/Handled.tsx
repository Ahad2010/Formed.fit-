"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Vetted, certified trainers",
    copy: "Every trainer is nationally certified, background checked, and professionally vetted before working with any FORMED client.",
  },
  {
    number: "02",
    title: "Equipment included",
    copy: "Your trainer arrives with professional-grade equipment. Resistance bands, kettlebells, suspension straps — all of it.",
  },
  {
    number: "03",
    title: "Private, in-home sessions",
    copy: "Train in your home, condo gym, or private space. Never in a public gym. Never sharing equipment.",
  },
  {
    number: "04",
    title: "Consistent scheduling",
    copy: "Same trainer, same time, every week. Consistency is the foundation of every result.",
  },
  {
    number: "05",
    title: "Progress tracked",
    copy: "Session notes, monthly progress reviews, and milestone tracking built in to every membership.",
  },
  {
    number: "06",
    title: "No contracts",
    copy: "Month-to-month memberships. Pause or cancel with notice through your client portal.",
  },
];

export default function Handled() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#F3F0E9] font-body pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <p className="text-[10px] font-normal uppercase tracking-[0.25em] text-[#C2996B]">
          Why Formed
        </p>

        <h2 className="mt-4 max-w-2xl font-display text-[40px] font-light leading-[1.05] text-[#0C0C0B] md:text-[56px] lg:text-[68px] lg:leading-[85px]">
          Everything handled.{" "}
          <em className="italic font-normal text-[#8C8880]">
            You just train.
          </em>
        </h2>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-px bg-[#0C0C0B]/10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.number}
              className="cursor-pointer p-8 md:p-10"
              style={{
                backgroundColor: hoveredIdx === idx ? "#E8E4DC" : "#F3F0E9",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <p
                className="font-display text-[48px] font-light leading-[48px]"
                style={{
                  color: hoveredIdx === idx ? "#C2996B" : "#C8C2B4",
                  transition: "color 0.3s ease",
                }}
              >
                {feature.number}
              </p>

              <h3 className="mt-5 text-[14px] font-medium leading-[20px] text-[#0C0C0B]">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-[300px] text-[14px] font-normal leading-[23px] text-[#8C8880]">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
