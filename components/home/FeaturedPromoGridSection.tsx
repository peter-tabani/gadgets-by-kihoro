const promoCards = [
  {
    id: 1,
    size: "large",
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
    size: "wide",
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
    size: "small",
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
    size: "small",
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
  className = "",
  imageClassName = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[28px] border border-black/10 bg-[#f3f3f3] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-black/[0.02]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div className="max-w-[55%]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
            {title}
          </h3>
          <p className="mt-4 text-[16px] leading-7 text-black/65">
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
        className={`absolute bottom-0 right-0 object-cover ${imageClassName}`}
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

        <div className="grid gap-5 lg:grid-cols-[1.35fr_1.05fr_0.95fr] lg:grid-rows-[320px_320px]">
          <PromoCard
            eyebrow={promoCards[0].eyebrow}
            title={promoCards[0].title}
            description={promoCards[0].description}
            cta={promoCards[0].cta}
            image={promoCards[0].image}
            className="lg:row-span-2 min-h-[420px] lg:min-h-0"
            imageClassName="h-[78%] w-[52%] rounded-tl-[28px]"
          />

          <PromoCard
            eyebrow={promoCards[1].eyebrow}
            title={promoCards[1].title}
            description={promoCards[1].description}
            cta={promoCards[1].cta}
            image={promoCards[1].image}
            className="lg:col-span-1 min-h-[300px]"
            imageClassName="h-[72%] w-[45%] rounded-tl-[24px]"
          />

          <PromoCard
            eyebrow={promoCards[2].eyebrow}
            title={promoCards[2].title}
            description={promoCards[2].description}
            cta={promoCards[2].cta}
            image={promoCards[2].image}
            className="min-h-[300px]"
            imageClassName="h-[68%] w-[44%] rounded-tl-[24px]"
          />

          <PromoCard
            eyebrow={promoCards[3].eyebrow}
            title={promoCards[3].title}
            description={promoCards[3].description}
            cta={promoCards[3].cta}
            image={promoCards[3].image}
            className="min-h-[300px]"
            imageClassName="h-[70%] w-[44%] rounded-tl-[24px]"
          />
        </div>
      </div>
    </section>
  );
}