import Image from "next/image";
import Header from "./Header";
import Button from "./Button";
import TrustRow from "./TrustRow";

export default function Hero() {
  return (
    <section className="hero relative min-h-screen overflow-hidden bg-[#111110] font-body">
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

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center px-6 md:px-12">
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

        {/* Trust row — mt-16 added so it doesn't sit too close to the buttons */}
        <div className="mt-16 px-6 pb-10 md:px-12 md:pb-14">
          <TrustRow />
        </div>
      </div>
    </section>
  );
}