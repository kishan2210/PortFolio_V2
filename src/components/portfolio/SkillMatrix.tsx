import type { Skills } from "@/types/portfolio";

interface SkillMatrixProps {
  skills: Skills;
}

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  architecture: "Architecture",
  android: "Android / Jetpack",
  payments: "Payments & Hardware",
  tools: "Tools & CI/CD",
};

const SkillMatrix = ({ skills }: SkillMatrixProps) => {
  if (!skills) return null;

  const entries = Object.entries(skills).filter(
    ([, items]) => Array.isArray(items) && items.length > 0
  );

  if (entries.length === 0) return null;

  return (
    <section id="skills" className="section-container section-spacing border-t border-border">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">
        <span className="text-primary">Skills</span>
      </h2>
      <div className="mx-auto mb-10 mt-3 h-1 w-12 rounded-full bg-primary" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([key, items]) => (
          <div key={key} className="group rounded-xl border border-border p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:scale-[1.02]">
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {categoryLabels[key] ?? key}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((skill) => (
                <span key={skill} className="tech-tag shimmer-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillMatrix;
