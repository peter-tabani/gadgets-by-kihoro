export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-4 pt-16 xl:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold">
                GK
              </div>
              <div>
                <p className="text-[20px] font-semibold tracking-[-0.03em]">
                  Gadgets by Kihoro
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-white/65">
              Premium phones, accessories, and smart gadgets with a cleaner
              shopping experience in Kenya.
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Quick links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[15px] text-white/75">
              <a href="#" className="transition hover:text-white">
                Home
              </a>
              <a href="#" className="transition hover:text-white">
                Phones
              </a>
              <a href="#" className="transition hover:text-white">
                Accessories
              </a>
              <a href="#" className="transition hover:text-white">
                Deals
              </a>
              <a href="#" className="transition hover:text-white">
                About
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[15px] text-white/75">
              <a href="#" className="transition hover:text-white">
                iPhones
              </a>
              <a href="#" className="transition hover:text-white">
                Samsung
              </a>
              <a href="#" className="transition hover:text-white">
                Refurbished
              </a>
              <a href="#" className="transition hover:text-white">
                Smart accessories
              </a>
              <a href="#" className="transition hover:text-white">
                Bestsellers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-[15px] text-white/75">
              <p>Nairobi, Kenya</p>
              <p>+254 700 123 456</p>
              <p>hello@gadgetsbykihoro.com</p>
              <p>Mon - Sat · 8:30am - 8:00pm</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-[14px] font-medium text-white transition hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-[14px] font-medium text-white transition hover:bg-white hover:text-black"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[14px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Gadgets by Kihoro. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}