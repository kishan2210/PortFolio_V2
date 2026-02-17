import { Smartphone, Code, Database, Rocket } from "lucide-react";
import type { CurrentFocus } from "@/types/portfolio";

interface CurrentFocusSectionProps {
  currentFocus: CurrentFocus[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Code,
  Database,
  Rocket,
};

const CurrentFocusSection = ({ currentFocus }: CurrentFocusSectionProps) => {
  if (!currentFocus?.length) return null;

  return (
    <section id="focus" className="section-container section-spacing border-t border-border">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">
        What I'm Doing <span className="text-primary">Right Now</span>
      </h2>
      <div className="mx-auto mb-10 mt-3 h-1 w-12 rounded-full bg-primary" />
      <div className="grid gap-6 sm:grid-cols-2">
        {currentFocus.map((item, idx) => {
          const Icon = iconMap[item.icon] || Code;
          return (
            <div
              key={idx}
              className="group rounded-xl border border-border p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:scale-[1.02]"
            >
              <Icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CurrentFocusSection;
