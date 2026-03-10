const promoCards = [
  {
    id: 1,
    eyebrow: "Special orders made simple",
    title: "Get the phone you really want.",
    description:
      "Looking for a specific iPhone, Samsung device, or premium gadget? We help you secure the right device with a smooth process and clear communication.",
    cta: "Start your order",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    eyebrow: "Fresh arrivals",
    title: "New gadgets, weekly highlights, and smart picks.",
    description:
      "Discover quality phones, accessories, and standout tech selected for everyday value.",
    cta: "Browse arrivals",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    eyebrow: "Accessories",
    title: "Power, sound, and everyday essentials.",
    description:
      "Chargers, earbuds, power banks, cables, and more.",
    cta: "Shop accessories",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    eyebrow: "Support that helps",
    title: "Need help choosing the right device?",
    description:
      "Get simple guidance before you buy, whether you want flagship performance or budget-friendly value.",
    cta: "Talk to us",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80",
  },
];

function PromoCard({
  eyebrow,
  title,
  description,
  cta,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
}) {
  return (
    <article className="relative w-[86vw] min-w-[86vw] overflow-hidden rounded-[24px] border border-black/10 bg-[#f3f3f3] sm:w-[420px] sm:min-w-[420px] md:w-auto md:min-w-0">
      <div className="absolute inset-0 bg-gradient-to-br from-white/75 to-black/[0.02]" />

      <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-5 sm:min-h-[320px] sm:p-6 lg:min-h-[340px] lg:p-8">
        <div className="max-w-[62%]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">
            {eyebrow}
          </p>

          <h3 className="mt-3 text-[28px] font-semibold leading-[1.02] tracking-[-0.05em] text-black sm:text-[32px]">
            {title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-black/65">
            {description}
          </p>

          <button className="mt-6 rounded-full border border-black/15 bg-white px-5 py-3 text-[14px] font-semibold text-black transition hover:bg-black hover:text-white">
            {cta}
          </button>
        </div>
      </div>

      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 h-[72%] w-[44%] object-cover sm:h-[76%] sm:w-[42%]"
      />
    </article>
  );
}

export default function FeaturedPromoGridSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-8 max-w-[760px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
            Featured highlights
          </p>
          <h2 className="mt-2 text-[34px] font-semibold tracking-[-0.05em] text-black md:text-[48px]">
            More ways to shop with Kihoro.
          </h2>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            {promoCards.map((card) => (
              <PromoCard
                key={card.id}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                cta={card.cta}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}