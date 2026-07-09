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
  return (
    <section className="bg-[#F3F0E9] font-body">
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
        <div className="grid grid-cols-1 border-t border-[#0C0C0B]/10 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.number}
              className={`
                group relative overflow-hidden
                px-0 py-10 md:px-10 md:py-12
                transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                hover:-translate-y-1 hover:shadow-xl cursor-pointer
                ${i % 3 !== 0 ? "md:border-l md:border-[#0C0C0B]/10" : ""}
                ${i >= 3 ? "border-t border-[#0C0C0B]/10" : ""}
              `}
            >
              {/* Animated Hover Background */}
              <span
                className="
                  absolute inset-0
                  origin-top
                  scale-y-0
                  bg-[#BDBAB3]
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:scale-y-100
                "
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-display text-[48px] font-light leading-[48px] text-[#C8C2B4] transition-colors duration-500 group-hover:text-white">
                  {feature.number}
                </p>

                <h3 className="mt-4 text-[14px] font-medium leading-[20px] text-[#0C0C0B] transition-colors duration-500 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[300px] text-[14px] font-normal leading-[23px] text-[#8C8880] transition-colors duration-500 group-hover:text-white/90">
                  {feature.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}