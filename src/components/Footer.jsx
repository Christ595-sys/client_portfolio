export default function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="section-container py-10 text-center text-sm text-slate-400">
        <p>{data.role}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>

        <a
          href={data.linkedin}
          target="_blank"
          className="text-sky-400"
        >
          {data.linkedin}
        </a>
      </div>
    </footer>
  );
}