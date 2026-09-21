import {
  siBitbucket,
  siComposer,
  siCplusplus,
  siCss,
  siDart,
  siDocker,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGoogle,
  siGooglebigquery,
  siGooglechrome,
  siGooglecloud,
  siGooglecloudstorage,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siJson,
  siJupyter,
  siLaravel,
  siLivewire,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPandas,
  siPhp,
  siPhpmyadmin,
  siPostman,
  siPython,
  siReact,
  siSelenium,
  siSubversion,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import {
  BookOpenText,
  Database,
  Image,
  KeyRound,
  Languages,
  MessageSquareText,
  MousePointerClick,
  Package,
  PenTool,
  Plug,
  Rocket,
  Server,
  Webhook,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** A skill's icon: a brand logo (simple-icons) or a generic lucide icon. */
export type SkillIcon =
  | { kind: "brand"; icon: SimpleIcon }
  | { kind: "generic"; icon: LucideIcon };

const brand = (icon: SimpleIcon): SkillIcon => ({ kind: "brand", icon });
const generic = (icon: LucideIcon): SkillIcon => ({ kind: "generic", icon });

/**
 * Icon for every skill listed in data/skills.ts, keyed by the skill's name.
 * Brand logos where one exists; a generic icon for concepts (RAG, REST...) and
 * for products with no logo in simple-icons (Cloud Run, Adobe, IIS...).
 * A skill missing from this map simply renders without an icon.
 */
export const skillIcons: Record<string, SkillIcon> = {
  // Languages
  JavaScript: brand(siJavascript),
  TypeScript: brand(siTypescript),
  Python: brand(siPython),
  PHP: brand(siPhp),
  Java: brand(siOpenjdk),
  "C++": brand(siCplusplus),
  Dart: brand(siDart),
  SQL: generic(Database),
  HTML5: brand(siHtml5),
  CSS3: brand(siCss),
  "HTML/CSS": brand(siHtml5),

  // Frontend / backend
  "Next.js": brand(siNextdotjs),
  React: brand(siReact),
  "Tailwind CSS": brand(siTailwindcss),
  Livewire: brand(siLivewire),
  "Node.js": brand(siNodedotjs),
  Laravel: brand(siLaravel),
  "RESTful APIs": generic(Webhook),
  JSON: brand(siJson),

  // Mobile
  Flutter: brand(siFlutter),

  // AI / ML
  "Gemini API": brand(siGooglegemini),
  RAG: generic(BookOpenText),
  "TensorFlow Lite": brand(siTensorflow),
  "AI API integration": generic(Plug),
  "Prompt-based applications": generic(MessageSquareText),

  // Cloud
  "Google Cloud Platform": brand(siGooglecloud),
  "Cloud Functions": generic(Zap),
  "Cloud Storage": brand(siGooglecloudstorage),
  "Cloud Run": generic(Rocket),
  BigQuery: brand(siGooglebigquery),
  "Artifact Registry": generic(Package),
  "Secret Manager": generic(KeyRound),
  "Google APIs": brand(siGoogle),

  // Databases / backend services
  MySQL: brand(siMysql),
  Supabase: brand(siSupabase),
  Firebase: brand(siFirebase),
  phpMyAdmin: brand(siPhpmyadmin),

  // Automation
  Selenium: brand(siSelenium),
  Pandas: brand(siPandas),
  "Browser automation": generic(MousePointerClick),
  "Google Extensions": brand(siGooglechrome),

  // Tools
  Git: brand(siGit),
  GitHub: brand(siGithub),
  Bitbucket: brand(siBitbucket),
  Docker: brand(siDocker),
  Postman: brand(siPostman),
  Composer: brand(siComposer),
  SVN: brand(siSubversion),
  "Jupyter Notebook": brand(siJupyter),
  IIS: generic(Server),

  // Design
  "Figma (UI/UX)": brand(siFigma),
  "Adobe Photoshop": generic(Image),
  "Adobe Illustrator": generic(PenTool),

  // Spoken languages
  "English (Fluent)": generic(Languages),
  "Malay (Native)": generic(Languages),
  "German (Basic)": generic(Languages),
};

/** Relative luminance (0-1) of a hex colour, per WCAG. */
function luminance(hex: string): number {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Colour to draw a brand logo in on the dark theme. Uses the brand colour when
 * it has at least 3:1 contrast against the card background, otherwise `null`
 * (the caller falls back to the text colour), so near-black logos such as
 * Next.js, GitHub or Pandas do not disappear.
 */
export function brandColorOnDark(hex: string, backgroundHex = "080d19"): string | null {
  const [light, dark] = [luminance(hex), luminance(backgroundHex)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05) >= 3 ? `#${hex}` : null;
}
