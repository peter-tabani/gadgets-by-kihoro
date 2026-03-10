export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-3 py-4 xl:px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-sm font-bold text-white">
              GK
            </div>
            <p className="text-[18px] font-bold leading-none text-white">
              Gadgets by Kihoro
            </p>
          </div>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-white lg:flex">
            <a href="#">Phones</a>
            <a href="#">Accessories</a>
            <a href="#">Deals</a>
            <a href="#">About</a>
            <a href="#">More</a>
          </nav>
        </div>

        <div className="hidden items-center gap-6 text-white lg:flex">
          <span className="text-sm text-white/70">Search</span>
          <span className="text-[18px] font-bold">+254 700 123 456</span>
        </div>
      </div>
    </header>
  );
}