import { Mail, Phone, Linkedin, FileText } from "lucide-react";
import type { Contact } from "@/types/portfolio";

interface ContactSectionProps {
  contact: Contact;
}

const ContactSection = ({ contact }: ContactSectionProps) => {
  if (!contact) return null;

  return (
    <section id="contact" className="section-container section-spacing border-t border-border">
      <p className="heading-section">Contact</p>
      <div className="flex flex-wrap gap-6">
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-primary" />
            {contact.email}
          </a>
        )}
        {contact.phone && (
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            {contact.phone}
          </a>
        )}
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4 text-primary" />
            LinkedIn
          </a>
        )}
        {contact.resumeUrl && (
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <FileText className="h-4 w-4 text-primary" />
            Download Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
