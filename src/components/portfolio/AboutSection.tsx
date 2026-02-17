import type { Profile } from "@/types/portfolio";

interface AboutSectionProps {
  profile: Profile;
}

const AboutSection = ({ profile }: AboutSectionProps) => {
  if (!profile.summary) return null;

  return (
    <section id="about" className="section-container section-spacing border-t border-border">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-2">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="mx-auto mb-10 mt-3 h-1 w-12 rounded-full bg-primary" />
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>
    </section>
  );
};

export default AboutSection;
