import { deals } from "@/data/home";
import DealCard from "./DealCard";
import SectionHeader from "./SectionHeader";

export default function DealsSection() {
  return (
    <section className="bg-[#050505] py-8">
      <div className="mx-auto max-w-[1600px] px-2 md:px-4 xl:px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {deals.map((item) => (
              <DealCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <SectionHeader title="Top Deals | Gadgets by Kihoro" />

          <div className="grid gap-3 p-3 md:grid-cols-3">
            <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 text-white">
              <div className="max-w-[58%]">
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/65">
                  Apple
                </p>
                <h3 className="mt-3 text-[28px] font-extrabold leading-tight">
                  AirPods Pro
                </h3>
                <p className="mt-3 text-[15px] text-white/72">
                  Clean sound. Clean design.
                </p>
                <div className="mt-5 inline-block rounded-md border border-white/10 bg-white px-4 py-2 text-[24px] font-bold text-black">
                  KSh 3,999
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1606741965509-3a2c6d7ec2d9?auto=format&fit=crop&w=900&q=80"
                alt="AirPods"
                className="absolute bottom-0 right-0 h-[85%] w-[46%] object-contain"
              />
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 text-white">
              <div className="max-w-[58%]">
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/65">
                  Samsung
                </p>
                <h3 className="mt-3 text-[28px] font-extrabold leading-tight">
                  Galaxy A Series
                </h3>
                <p className="mt-3 text-[15px] text-white/72">
                  Reliable daily performance.
                </p>
                <div className="mt-5 inline-block rounded-md border border-white/10 bg-white px-4 py-2 text-[24px] font-bold text-black">
                  KSh 15,999
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80"
                alt="Samsung phone"
                className="absolute bottom-0 right-0 h-[88%] w-[46%] object-contain"
              />
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 text-white">
              <div className="max-w-[58%]">
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/65">
                  Accessories
                </p>
                <h3 className="mt-3 text-[28px] font-extrabold leading-tight">
                  Smart Gadgets
                </h3>
                <p className="mt-3 text-[15px] text-white/72">
                  Chargers, cases, audio and more.
                </p>
                <div className="mt-5 inline-block rounded-md border border-white/10 bg-white px-4 py-2 text-[24px] font-bold text-black">
                  From KSh 999
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=900&q=80"
                alt="Accessories"
                className="absolute bottom-0 right-0 h-[88%] w-[46%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}