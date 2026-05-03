import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function About({ data }) {
  return (
    
    <section className="section-container py-20 mt-16 md:mt-0">
      <br></br>
      {/* TITLE */}
      <Reveal>
        <SectionTitle
          eyebrow="About"
          title="Profile Overview"
          subtitle="A closer look at background, skills, and experience."
        />
      </Reveal>

      {/* MAIN GRID */}
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT SIDE (ABOUT TEXT) */}
        <Reveal>
          <div className="glass rounded-[2rem] p-8 text-slate-300 leading-8">
            {data.about.map((paragraph, index) => (
              <p key={index} className={index !== 0 ? "mt-5" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* RIGHT SIDE (PROFILE CARD) */}
        <Reveal delay={0.08}>
          <div className="glass rounded-[2rem] p-8">

            {/* IMAGE */}
            <div className="mb-6 h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src={data.profileImage}
                alt={data.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* INFO */}
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Name:</span> {data.name}
              </p>

              <p>
                <span className="font-semibold text-white">Role:</span> {data.role}
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span> {data.email}
              </p>

              <p>
                <span className="font-semibold text-white">Phone:</span> {data.phone}
              </p>

              <p>
                <span className="font-semibold text-white">Location:</span> {data.location}
              </p>

              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  {data.linkedin}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-16">
        <Reveal>
          <SectionTitle title="Skills" />
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-20">
        <Reveal>
          <SectionTitle title="Experience" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass rounded-[2rem] p-8">
            <ExperienceTimeline items={data.experience} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}