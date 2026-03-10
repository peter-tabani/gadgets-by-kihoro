const categories = [
  {
    id: 1,
    title: "Shop iPhones",
    items: [
      {
        name: "iPhone 14",
        image:
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "iPhone 13",
        image:
          "https://images.unsplash.com/photo-1664478546384-d57ffe74a77b?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "iPhone 15",
        image:
          "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Refurbished",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Samsung picks",
    items: [
      {
        name: "Galaxy A Series",
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Galaxy S Series",
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Budget phones",
        image:
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "New arrivals",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "Accessories",
    items: [
      {
        name: "Earbuds",
        image:
          "https://images.unsplash.com/photo-1606741965509-3a2c6d7ec2d9?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Headphones",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Power banks",
        image:
          "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Chargers",
        image:
          "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: 4,
    title: "Smart gadgets",
    items: [
      {
        name: "Smart watches",
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Tablets",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Bluetooth speakers",
        image:
          "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Phone add-ons",
        image:
          "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#f3f4f6] py-14">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
            Browse with ease
          </p>
          <h2 className="mt-1 text-[34px] font-semibold tracking-[-0.04em] text-black">
            Shop by category
          </h2>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:px-0">
  <div className="flex gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
    {categories.map((category) => (
      <article
        key={category.id}
        className="w-[84vw] min-w-[84vw] rounded-[24px] border border-black/5 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:w-[380px] sm:min-w-[380px] md:min-w-0 md:p-5"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-black">
            {category.title}
          </h3>

          <button className="text-[14px] font-medium text-black/65 transition hover:text-black">
            Explore
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {category.items.map((item) => (
            <div key={item.name}>
              <div className="flex h-[120px] items-center justify-center rounded-[18px] bg-[#f7f7f7] p-3 md:h-[140px] md:p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-3 text-[14px] font-medium text-[#202124]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </article>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}