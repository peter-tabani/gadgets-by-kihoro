import AddToCartButton from "@/components/ui/AddToCartButton";

const topDeals = [
  {
    id: 1,
    title: "iPhone 13 Pro Max",
    price: "KSh 109,999",
    oldPrice: "KSh 119,999",
    discount: "-8%",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Samsung Galaxy A24",
    price: "KSh 31,999",
    oldPrice: "KSh 36,500",
    discount: "-12%",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: "KSh 3,999",
    oldPrice: "KSh 5,499",
    discount: "-27%",
    image:
      "https://images.unsplash.com/photo-1606741965509-3a2c6d7ec2d9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Apple Watch Series",
    price: "KSh 12,999",
    oldPrice: "KSh 15,999",
    discount: "-18%",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Fast Type-C Charger",
    price: "KSh 1,290",
    oldPrice: "KSh 1,800",
    discount: "-28%",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "20,000mAh Power Bank",
    price: "KSh 2,499",
    oldPrice: "KSh 3,200",
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TopDealsSection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
              Limited picks
            </p>
            <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.05em] text-black md:text-[46px]">
              Top deals this week
            </h2>
          </div>

          <button className="hidden rounded-full border border-black/10 bg-white px-5 py-2.5 text-[14px] font-semibold text-black transition hover:bg-black hover:text-white md:inline-flex">
            See all deals
          </button>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-5 xl:grid xl:grid-cols-6">
            {topDeals.map((item) => (
              <article
                key={item.id}
                className="group w-[78vw] min-w-[78vw] overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] sm:w-[320px] sm:min-w-[320px] xl:min-w-0"
              >
                <div className="relative flex h-[220px] items-center justify-center bg-[#f6f6f6] p-5">
                  <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-[12px] font-semibold text-white">
                    {item.discount}
                  </span>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="min-h-[44px] text-[15px] leading-6 text-[#202124]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-black">
                    {item.price}
                  </p>

                  <p className="mt-1 text-[14px] text-black/35 line-through">
                    {item.oldPrice}
                  </p>

                  <AddToCartButton />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}