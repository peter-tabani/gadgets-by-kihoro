export default function SignupCtaSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:px-10 md:py-14 lg:px-16">
          <div className="mx-auto max-w-[900px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
              Stay updated
            </p>

            <h2 className="mt-3 text-[36px] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[54px]">
              Get early access to the best phone deals.
            </h2>

            <p className="mt-5 max-w-[720px] text-[18px] leading-8 text-white/70 md:text-[21px]">
              Be the first to know when fresh iPhones, Samsung devices,
              accessories, and limited offers arrive at Gadgets by Kihoro.
            </p>

            <form className="mt-8 flex flex-col gap-3 sm:gap-4 md:flex-row">
  <div className="flex h-[58px] w-full items-center rounded-[16px] border border-white/10 bg-white px-4 sm:h-[64px] sm:px-5 md:flex-1">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full bg-transparent text-[16px] text-black outline-none placeholder:text-black/35 sm:text-[17px]"
    />
  </div>

  <button
    type="submit"
    className="h-[58px] w-full rounded-[16px] border border-white/15 bg-white px-6 text-[16px] font-semibold text-black transition hover:bg-[#ededed] sm:h-[64px] sm:text-[17px] md:w-auto md:min-w-[150px] md:px-8"
  >
    Sign up
  </button>
</form>

            <p className="mt-5 text-[14px] text-white/45">
              No spam. Just restocks, deals, and new arrivals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}