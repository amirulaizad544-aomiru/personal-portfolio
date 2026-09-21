import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Full-bleed background for a project banner. Fills its positioned parent.
 * Uses the project's image, or a clearly marked placeholder if none was added.
 */
export function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} cover`}
        fill
        sizes="100vw"
        quality={90}
        className="object-cover"
        loading="eager"
      />
    );
  }

  return (
    <span
      className="absolute inset-0 block"
      style={{
        backgroundColor: "var(--color-background)",
        backgroundImage: `radial-gradient(ellipse 70% 120% at 85% 15%, color-mix(in srgb, ${project.accent} 24%, var(--color-background)), transparent), linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)`,
        backgroundSize: "auto, 32px 32px, 32px 32px",
      }}
    >
      <span className="absolute right-4 top-4 max-w-[45%] text-right font-mono text-[10px] leading-4 text-warn sm:right-6 sm:top-5 sm:text-xs">
        [placeholder] cover image not added yet
      </span>
    </span>
  );
}
