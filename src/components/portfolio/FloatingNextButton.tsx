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
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Consider "at bottom" if within 100px of the bottom
      const atBottom = scrollHeight - scrollTop - clientHeight < 100;
      setIsAtBottom(atBottom);

      // Determine current section
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
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide button if we're on the last section (contact) and at the bottom
  if (!current || (current.id === "projects" && isAtBottom)) return null;

  return (
    <a
      href={`#${current.next}`}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-primary bg-background px-4 py-2.5 text-xs font-medium text-primary shadow-md transition-all hover:bg-primary hover:text-primary-foreground animate-bounce-gentle overflow-hidden"
    >
      <span
        key={current.label}
        className="inline-block animate-fade-slide-in"
      >
        {current.label}
      </span>
      <ArrowDown className="h-3.5 w-3.5 flex-shrink-0" />
    </a>
  );
};

export default FloatingNextButton;
