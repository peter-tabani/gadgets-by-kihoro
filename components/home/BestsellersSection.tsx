import AddToCartButton from "@/components/ui/AddToCartButton";

const bestsellers = [
  {
    id: 1,
    name: "iPhone 14",
    subtitle: "128 GB • eSIM",
    price: "KSh 89,999",
    oldPrice: "KSh 97,999",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "iPhone 13",
    subtitle: "128 GB • Physical SIM",
    price: "KSh 74,999",
    oldPrice: "KSh 82,999",
    image:
      "https://images.unsplash.com/photo-1664478546384-d57ffe74a77b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Samsung Galaxy A15",
    subtitle: "128 GB • Dual SIM",
    price: "KSh 24,999",
    oldPrice: "KSh 28,999",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "AirPods Pro",
    subtitle: "Wireless • Noise Cancelling",
    price: "KSh 3,999",
    oldPrice: "KSh 5,499",
    image:
      "https://images.unsplash.com/photo-1606741965509-3a2c6d7ec2d9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Apple Watch Series",
    subtitle: "GPS • 44mm",
    price: "KSh 12,999",
    oldPrice: "KSh 15,999",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BestsellersSection() {
  return (
    <section className="bg-[#f3f4f6] py-12 md:py-14">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-black md:text-[34px]">
              Shop bestsellers
            </h2>
            <p className="mt-1 text-[14px] text-black/55">
              Swipe through our most popular picks.
            </p>
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-5 xl:grid xl:grid-cols-5">
            {bestsellers.map((item) => (
              <article
                key={item.id}
                className="w-[78vw] min-w-[78vw] snap-start rounded-[24px] border border-black/5 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] sm:w-[320px] sm:min-w-[320px] xl:min-w-0"
              >
                <div className="flex h-[220px] items-center justify-center rounded-[20px] bg-[#f7f7f7] p-5 md:h-[250px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#202124]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[14px] text-black/55">{item.subtitle}</p>

                  <p className="mt-3 text-[18px] font-semibold text-black">
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