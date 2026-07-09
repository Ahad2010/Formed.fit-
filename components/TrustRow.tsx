/**
 * Typography per WhatFont inspection:
 * - Title ("Vetted Trainers" etc.): DM Sans 500, 12px/15px, full opacity cream
 * - Copy ("Every trainer certified..."): DM Sans 400, 10px/14px, 40% opacity cream
 */
export default function TrustRow() {
  return (
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
  );
}

function TrustItem({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <p className="text-[12px] font-medium leading-[15px] text-[#F5F2EC]">
        {title}
      </p>
      <p className="mt-1 max-w-[160px] text-[10px] font-normal leading-[14px] text-[#F5F2EC]/40">
        {copy}
      </p>
    </div>
  );
}