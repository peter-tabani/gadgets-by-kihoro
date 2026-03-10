import { DealItem } from "@/types";

type DealCardProps = {
  item: DealItem;
};

export default function DealCard({ item }: DealCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-lg bg-[#f8f8f8]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mt-3">
        <h3 className="line-clamp-2 text-[15px] text-slate-700">
          {item.title}
        </h3>

        <p className="mt-2 text-[18px] font-bold text-slate-900">
          {item.price}
        </p>

        {item.oldPrice && (
          <p className="text-[14px] text-slate-400 line-through">
            {item.oldPrice}
          </p>
        )}

        <p className="mt-2 text-[14px] text-slate-600">
          {item.stockLeft} items left
        </p>

        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-[#111111]"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}