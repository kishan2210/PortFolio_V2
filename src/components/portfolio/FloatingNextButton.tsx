import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const SECTIONS = [
  { id: "about", next: "skills", label: "Skills" },
  { id: "skills", next: "focus", label: "What I'm Doing Now" },
  { id: "focus", next: "experience", label: "Experience" },
  { id: "experience", next: "projects", label: "Projects" },
  { id: "projects", next: "contact", label: "Contact" },
];

const FloatingNextButton = () => {
  const [current, setCurrent] = useState<typeof SECTIONS[number] | null>(SECTIONS[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.6) {
          setCurrent(SECTIONS[i]);
          return;
        }
      }
      setCurrent(SECTIONS[0]);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!current) return null;

  return (
    <a
      href={`#${current.next}`}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-primary bg-background px-4 py-2.5 text-xs font-medium text-primary shadow-md transition-all hover:bg-primary hover:text-primary-foreground animate-bounce-gentle"
    >
      {current.label}
      <ArrowDown className="h-3.5 w-3.5" />
    </a>
  );
};

export default FloatingNextButton;
