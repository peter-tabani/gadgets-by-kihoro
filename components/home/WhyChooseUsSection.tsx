const reasons = [
  {
    title: "Carefully sourced devices",
    description:
      "We focus on finding the right phones, accessories, and smart gadgets instead of flooding you with random listings.",
  },
  {
    title: "Quality comes first",
    description:
      "Every device we offer is selected with condition, value, and buyer confidence in mind.",
  },
  {
    title: "Clear delivery timelines",
    description:
      "For ready items and special orders, we keep communication simple and timelines straightforward.",
  },
  {
    title: "Direct customer support",
    description:
      "Get quick help on product questions, availability, and recommendations before you buy.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1600px] px-4 xl:px-6">
        <div className="mb-10 max-w-[760px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/40">
            Why choose us
          </p>
          <h2 className="mt-2 text-[34px] font-semibold tracking-[-0.05em] text-black md:text-[48px]">
            A cleaner way to shop gadgets in Kenya.
          </h2>
          <p className="mt-4 max-w-[680px] text-[17px] leading-8 text-black/65 md:text-[19px]">
            Gadgets by Kihoro is built for buyers who want good devices, honest
            communication, and a smoother buying experience from inquiry to
            delivery.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:px-0">
  <div className="flex gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
    {reasons.map((reason, index) => (
      <article
        key={reason.title}
        className="w-[84vw] min-w-[84vw] rounded-[24px] border border-black/10 bg-[#f7f7f7] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.07)] sm:w-[360px] sm:min-w-[360px] md:min-w-0 md:p-6"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[15px] font-semibold text-black md:h-12 md:w-12 md:text-[16px]">
          0{index + 1}
        </div>

        <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-black md:mt-6 md:text-[22px]">
          {reason.title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-black/65 md:mt-4">
          {reason.description}
        </p>
      </article>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}