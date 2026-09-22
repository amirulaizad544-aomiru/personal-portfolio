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
    ],
  },

  {
    name: "Frontend",
    icon: Monitor,
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Livewire",
    ],
  },

  {
    name: "Backend",
    icon: Server,
    items: [
      "Laravel",
      "RESTful APIs",
    ],
  },

  {
    name: "Mobile",
    icon: Smartphone,
    items: [
      "Flutter",
    ],
  },

  {
    name: "AI / Machine Learning",
    icon: Bot,
    items: [
      "RAG",
      "AI API",
      "TensorFlow Lite",
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
    ],
  },

  {
    name: "Database & Services",
    icon: Database,
    items: [
      "MySQL",
      "Supabase",
      "Firebase",
    ],
  },

  {
    name: "Automation & Data",
    icon: Workflow,
    items: [
      "Selenium",
      "Pandas",
    ],
  },

  {
    name: "Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker",
      "Postman",
    ],
  },

  {
    name: "Design",
    icon: Palette,
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },

  {
    name: "Spoken Languages",
    icon: Languages,
    items: [
      "English (Fluent)",
      "Malay (Native)",
      "German (Basic)",
    ],
  },
];
