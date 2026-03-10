type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="border-b border-white/10 bg-white/[0.04] px-6 py-5 text-center backdrop-blur-sm">
      <h2 className="text-[20px] font-bold text-white md:text-[24px]">
        {title}
      </h2>
    </div>
  );
}