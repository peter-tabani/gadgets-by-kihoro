"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 xl:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-sm font-bold">
            GK
          </div>

          <p className="text-[20px] font-bold leading-none tracking-[-0.03em] sm:text-[18px]">
            Gadgets by Kihoro
          </p>
        </div>

        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          <a href="#" className="transition hover:text-white/75">
            Phones
          </a>
          <a href="#" className="transition hover:text-white/75">
            Accessories
          </a>
          <a href="#" className="transition hover:text-white/75">
            Deals
          </a>
          <a href="#" className="transition hover:text-white/75">
            About
          </a>
          <a href="#" className="transition hover:text-white/75">
            More
          </a>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="text-sm text-white/70">Search</span>
          <span className="text-[18px] font-bold">+254 700 123 456</span>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col px-4 py-4">
            <a href="#" className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90">
              Phones
            </a>
            <a href="#" className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90">
              Accessories
            </a>
            <a href="#" className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90">
              Deals
            </a>
            <a href="#" className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90">
              About
            </a>
            <a href="#" className="py-3 text-[15px] font-medium text-white/90">
              More
            </a>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-[13px] text-white/50">Call us</p>
              <p className="mt-1 text-[18px] font-semibold text-white">
                +254 700 123 456
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}