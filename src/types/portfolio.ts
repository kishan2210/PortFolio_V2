export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  impact: string[];
  tech: string[];
}

export interface Skills {
  languages: string[];
  architecture: string[];
  android: string[];
  payments: string[];
  tools: string[];
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
}

export interface CurrentFocus {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  branding: Branding;
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  contact: Contact;
  currentFocus: CurrentFocus[];
}
