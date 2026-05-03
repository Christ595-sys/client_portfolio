export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative ml-3 border-l border-white/10 pl-8">
      {items.map((item) => (
        <div key={item.title} className="relative mb-10">
          <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />

          <p className="text-sm uppercase tracking-[0.18em] text-sky-400">
            {item.period}
          </p>

          <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
          <p className="mt-1 text-white/80">{item.company}</p>
          <p className="mt-3 text-slate-400 leading-7">{item.description}</p>
        </div>
      ))}
    </div>
  );
}