import type { Project } from "@/types/portfolio";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  if (!projects?.length) return null;

  return (
    <section id="projects" className="section-container section-spacing border-t border-border">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">
        <span className="text-primary">Projects</span>
      </h2>
      <div className="mx-auto mb-10 mt-3 h-1 w-12 rounded-full bg-primary" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group rounded-xl border border-border p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:scale-[1.02]"
          >
            <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            {project.impact?.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {project.tech?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag shimmer-tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
