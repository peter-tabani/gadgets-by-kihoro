import { deals } from "@/data/deals";
import ProductCard from "./ProductCard";

export default function DealsGridSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
              Popular now
            </p>
            <h2 className="mt-1 text-[26px] font-bold tracking-[-0.03em] text-black">
              Trending deals
            </h2>
          </div>

          <button className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-black transition hover:bg-black hover:text-white md:inline-flex">
            View all
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {deals.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              oldPrice={item.oldPrice}
              stockLeft={item.stockLeft}
              progress={item.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}