import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ data }) {
  return (
    <section className="section-container py-20 mt-16 md:mt-0">
      <br></br>
      {/* TITLE */}
      <Reveal>
        <SectionTitle
          eyebrow="Projects"
          title="Technical & Academic Work"
          subtitle="A selection of projects focused on database systems, backend development, and data-driven solutions."
        />
      </Reveal>

      {/* PROJECTS GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.07}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

    </section>
  );
}