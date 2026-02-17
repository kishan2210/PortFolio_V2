import { Mail, Linkedin } from "lucide-react";
import type { Contact } from "@/types/portfolio";

interface TopBarProps {
  contact: Contact;
  name: string;
}

const TopBar = ({ contact, name }: TopBarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
        <a href="#" className="text-sm font-bold tracking-tight text-foreground">
          {name}
        </a>
        <div className="flex items-center gap-3">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span className="hidden sm:inline">Email</span>
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Linkedin className="h-3.5 w-3.5 text-primary" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-80"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
