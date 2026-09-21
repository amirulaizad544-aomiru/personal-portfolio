import {
  Bot,
  Cloud,
  Code2,
  Database,
  Languages,
  Monitor,
  Palette,
  Server,
  Smartphone,
  Wrench,
  Workflow,
} from "lucide-react";
import type { SkillGroup } from "@/lib/types";

// Skills are listed as categories only, with no proficiency levels or percentages.
// Sources: the resume plus the original brief (which adds TypeScript, React,
// Node.js, Docker, Bitbucket, the AI and automation groups and more cloud services).
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    icon: Code2,
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Java",
      "C++",
      "Dart",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Frontend",
    icon: Monitor,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Livewire", "HTML/CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    items: ["Node.js", "PHP", "Laravel", "RESTful APIs", "JSON", "Livewire"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart"],
  },
  {
    name: "AI / Machine Learning",
    icon: Bot,
    items: [
      "Gemini API",
      "RAG",
      "TensorFlow Lite",
      "AI API integration",
      "Prompt-based applications",
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    items: [
      "Google Cloud Platform",
      "Cloud Functions",
      "Cloud Storage",
      "Cloud Run",
      "BigQuery",
      "Artifact Registry",
      "Secret Manager",
      "Google APIs",
    ],
  },
  {
    name: "Database / Backend Services",
    icon: Database,
    items: ["MySQL", "Supabase", "Firebase", "phpMyAdmin"],
  },
  {
    name: "Automation",
    icon: Workflow,
    items: [
      "Python",
      "Selenium",
      "Pandas",
      "Browser automation",
      "Google Extensions",
    ],
  },
  {
    name: "Development Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "Postman",
      "Composer",
      "SVN",
      "Jupyter Notebook",
      "IIS",
    ],
  },
  {
    name: "Design & Creative",
    icon: Palette,
    items: ["Figma (UI/UX)", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    name: "Spoken Languages",
    icon: Languages,
    items: ["English (Fluent)", "Malay (Native)", "German (Basic)"],
  },
];
