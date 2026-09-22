"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

/**
 * Full-width vertical list of project banners. One is open at a time and none
 * is open by default. Render it outside a max-width container.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <ul className="border-b border-border">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          open={project.slug === openSlug}
          onToggle={() =>
            setOpenSlug((current) =>
              current === project.slug ? null : project.slug,
            )
          }
        />
      ))}
    </ul>
  );
}
