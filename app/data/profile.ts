// Single source of truth for portfolio content.
// TODO: replace every placeholder below with your real details before publishing.

export type Project = {
  name: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  links: { label: string; href: string }[];
  skills: { group: string; items: string[] }[];
  experience: Experience[];
  projects: Project[];
};

export const profile: Profile = {
  name: "Mohamad Amirul Aizad",
  title: "Software Engineer",
  location: "Malaysia",
  email: "tech@rakyatfintech.com",
  summary:
    "Software engineer who builds reliable, well-tested products and ships them fast. Replace this with two or three sentences on what you build, what you care about, and the kind of role you are looking for.",
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
    { label: "Résumé", href: "/resume.pdf" },
  ],
  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL"] },
    { group: "Tooling", items: ["Git", "Docker", "CI/CD", "Testing"] },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Company Name",
      period: "2023 – Present",
      highlights: [
        "Describe an outcome you delivered, with a number if you have one.",
        "Describe a system you designed, improved, or owned.",
      ],
    },
  ],
  projects: [
    {
      name: "Project One",
      description:
        "One or two sentences on the problem it solves and what you built.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      repoUrl: "https://github.com/your-username/project-one",
      liveUrl: "https://example.com",
    },
    {
      name: "Project Two",
      description:
        "One or two sentences on the problem it solves and what you built.",
      tech: ["React", "Node.js"],
      repoUrl: "https://github.com/your-username/project-two",
    },
  ],
};
