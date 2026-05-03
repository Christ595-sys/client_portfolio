export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-slate-400 leading-7">
          {subtitle}
        </p>
      )}
    </div>
  );
}