import type { LucideIcon } from "lucide-react";

export const PROJECT_CATEGORIES = [
  "Software",
  "AI",
  "Mobile",
  "Web",
  "Automation",
  "Cloud",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ArchitectureItem {
  layer: string;
  detail: string;
}

/**
 * Any field typed `X | null` is "not provided yet". The UI renders a clearly
 * marked placeholder for it instead of inventing content.
 */
export interface Project {
  slug: string;
  title: string;
  /** Human-readable category line, e.g. "AI / Mobile / Education". */
  categoryLabel: string;
  /** Optional context shown next to the category, e.g. "2025 · Final year project". */
  meta?: string;
  /** Categories used by the /projects filter. */
  categories: ProjectCategory[];
  featured: boolean;
  /** Hex colour that identifies this project in the list and on its page. */
  accent: string;
  /** One or two sentences for cards. */
  summary: string;
  technologies: string[];
  /** Path under /public, e.g. "/projects/ecoquest/cover.png". */
  image: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
  award?: string;
  sdgs?: string[];

  overview: string;
  problem: string | null;
  solution: string | null;
  features: string[];
  /** Things the project demonstrates (skills), shown next to features. */
  demonstrates?: string[];
  contribution: string | null;
  architecture: ArchitectureItem[] | null;
  /** Paths under /public. Empty means "not added yet". */
  screenshots: string[];
  challenges: string | null;
  learned: string | null;
}

export interface Experience {
  role: string;
  company: string | null;
  period: string | null;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  programme: string;
  period: string;
  grade?: string;
  achievements?: string[];
}

/** A titled card of short lists, e.g. certificates or activities grouped by year. */
export interface HighlightGroup {
  title: string;
  sections: { label?: string; items: string[] }[];
  /**
   * Optional photo roll under the lists. Leave it out for no roll, use `[]` for
   * a placeholder row, or list image paths (files live in /public).
   */
  photos?: string[];
}

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
