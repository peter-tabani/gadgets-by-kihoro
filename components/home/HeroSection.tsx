import { heroActions, quickCategories } from "@/data/home";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/20" />

      <div className="relative mx-auto grid min-h-[650px] max-w-[1600px] grid-cols-1 gap-8 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center xl:px-16">
        <div className="max-w-[760px] pt-10">
          <h1 className="text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[62px] xl:text-[70px]">
            Gadgets by Kihoro
          </h1>

          <div className="mt-8 flex w-full max-w-[760px] overflow-hidden bg-white shadow-lg">
            <input
              type="text"
              placeholder="Search all inventory..."
              className="h-[62px] flex-1 px-6 text-[16px] text-black outline-none"
            />
            <button className="mr-2 h-[54px] self-center bg-black px-10 text-[16px] font-bold text-white transition hover:bg-[#1a1a1a]">
              Go
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {quickCategories.map((item) => (
              <button
                key={item.id}
                className="border border-white/35 bg-black px-6 py-3 text-[15px] font-bold text-white transition hover:bg-white hover:text-black"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ml-auto grid w-full max-w-[560px] grid-cols-1 gap-5 sm:grid-cols-2">
          {heroActions.map((item) => (
            <button
              key={item.id}
              className="flex min-h-[180px] items-center justify-center border border-white/10 bg-black px-6 text-center text-[20px] font-bold leading-tight text-white transition hover:bg-white hover:text-black md:text-[22px]"
            >
              {item.label}
            </button>
          ))}

          <div className="flex flex-wrap gap-4 sm:col-span-2 sm:justify-end">
            <button className="border border-white/10 bg-black px-7 py-4 text-[18px] font-bold text-white transition hover:bg-white hover:text-black">
              Chat Live
            </button>
            <button className="border border-white/10 bg-black px-7 py-4 text-[18px] font-bold text-white transition hover:bg-white hover:text-black">
              Text Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}