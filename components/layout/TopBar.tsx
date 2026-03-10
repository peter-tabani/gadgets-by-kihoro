export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-black text-[10px] text-white/85 md:block">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-3 py-1.5 xl:px-6">
        <div className="hidden items-center gap-5 md:flex">
          <span>Trusted gadgets in Kenya</span>
          <span>Phones & accessories</span>
          <span>Open 8:30am - 8:00pm</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <span>Nairobi, Kenya</span>
          <span className="font-semibold">Gadgets by Kihoro</span>
        </div>
      </div>
    </div>
  );
}