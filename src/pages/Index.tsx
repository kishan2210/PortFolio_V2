import { usePortfolioData } from "@/hooks/usePortfolioData";
import TopBar from "@/components/portfolio/TopBar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import CurrentFocusSection from "@/components/portfolio/CurrentFocusSection";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import ProjectList from "@/components/portfolio/ProjectList";
import SkillMatrix from "@/components/portfolio/SkillMatrix";
import ContactSection from "@/components/portfolio/ContactSection";
import SectionWrapper from "@/components/portfolio/SectionWrapper";
import FloatingNextButton from "@/components/portfolio/FloatingNextButton";

const Index = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Failed to load portfolio data.</p>
      </div>
    );
  }

  return (
    <>
      <TopBar contact={data.contact} name={data.profile.name} />
      <main className="mx-auto max-w-[1200px]">
        <HeroSection profile={data.profile} contact={data.contact} />

        <SectionWrapper>
          <AboutSection profile={data.profile} />
        </SectionWrapper>

        <SectionWrapper>
          <SkillMatrix skills={data.skills} />
        </SectionWrapper>

        <SectionWrapper>
          <CurrentFocusSection currentFocus={data.currentFocus} />
        </SectionWrapper>

        <SectionWrapper>
          <ExperienceTimeline experience={data.experience} />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectList projects={data.projects} />
        </SectionWrapper>

        <SectionWrapper>
          <ContactSection contact={data.contact} />
        </SectionWrapper>

        <footer className="section-container border-t border-border py-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {data.profile.name}
          </p>
        </footer>
      </main>
      <FloatingNextButton />
    </>
  );
};

export default Index;