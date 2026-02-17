import { Linkedin, Mail } from "lucide-react";
import type { Profile, Contact } from "@/types/portfolio";
import AndroidMascot from "./AndroidMascot";

interface HeroSectionProps {
  profile: Profile;
  contact: Contact;
}

const HeroSection = ({ profile, contact }: HeroSectionProps) => {
  return (
    <section className="section-container flex min-h-[85vh] flex-col justify-center py-20 pt-28 overflow-visible">
      <div className="flex items-center justify-between gap-8 overflow-visible">
        <div className="max-w-2xl">
          <p
            className="font-mono text-base text-primary animate-fade-in-up"
          >
            Hi, my name is
          </p>
          <h1
            className="mt-4 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            {profile.name}.
          </h1>
          <h2
            className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            I build things for Android.
          </h2>
          <p
            className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-xl animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            I am a {profile.role} with 6+ years of experience,{" "}
            specialized in{" "}
            <span className="text-primary">POS Hardware Integration</span>,{" "}
            <span className="text-primary">Native Audio/Video (NDK)</span>,{" "}
            and architecting offline-first enterprise applications.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>
        </div>
        <AndroidMascot />
      </div>
    </section>
  );
};

export default HeroSection;
