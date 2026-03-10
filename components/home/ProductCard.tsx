type ProductCardProps = {
  title: string;
  image: string;
  price: string;
  oldPrice?: string;
  stockLeft: number;
  progress: number;
};

export default function ProductCard({
  title,
  image,
  price,
  oldPrice,
  stockLeft,
  progress,
}: ProductCardProps) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-[180px] items-center justify-center rounded-xl bg-[#f6f6f6] p-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="pt-4">
        <h3 className="line-clamp-2 min-h-[44px] text-[15px] leading-6 text-[#222]">
          {title}
        </h3>

        <p className="mt-2 text-[15px] font-semibold text-black">{price}</p>

        {oldPrice && (
          <p className="mt-1 text-[13px] text-black/35 line-through">
            {oldPrice}
          </p>
        )}

        <p className="mt-3 text-[13px] text-black/60">
          {stockLeft} items left
        </p>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/8">
          <div
            className="h-full rounded-full bg-black"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}