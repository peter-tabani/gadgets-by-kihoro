"use client";

import { useState } from "react";

type AddToCartButtonProps = {
  label?: string;
};

export default function AddToCartButton({
  label = "Add to cart",
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
      className={`mt-4 w-full rounded-full px-4 py-2.5 text-[13px] font-semibold transition ${
        added
          ? "bg-[#111111] text-white"
          : "border border-black/10 bg-white text-black hover:bg-black hover:text-white"
      }`}
    >
      {added ? "Added" : label}
    </button>
  );
}