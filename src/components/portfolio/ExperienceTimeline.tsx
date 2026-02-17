import type { Experience } from "@/types/portfolio";

interface ExperienceTimelineProps {
  experience: Experience[];
}

function highlightMetrics(text: string): JSX.Element {
  const metricRegex = /(\d+%|<\d+ms|\d+fps|\d+ms\+?)/g;
  const parts = text.split(metricRegex);

  return (
    <>
      {parts.map((part, i) =>
        metricRegex.test(part) ? (
          <span key={i} className="metric-highlight">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => {
  if (!experience?.length) return null;

  return (
    <section id="experience" className="section-container section-spacing border-t border-border">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">
        <span className="text-primary">Experience</span>
      </h2>
      <div className="mx-auto mb-12 mt-3 h-1 w-12 rounded-full bg-primary" />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        {experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div key={idx} className="relative mb-6 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-1 h-2.5 w-2.5 -translate-x-[4px] md:-translate-x-[5px] rounded-full border-2 border-primary bg-background z-10" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                <div className="group rounded-lg border border-border p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-[11px] font-medium text-primary whitespace-nowrap">{exp.duration}</p>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">{exp.company}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {highlightMetrics(h)}
                      </li>
                    ))}
                  </ul>
                  {exp.tech?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag shimmer-tag text-[10px] px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
