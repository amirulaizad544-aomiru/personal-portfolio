"use client";

import { useState } from "react";
import { Container } from "./Container";
import { ProjectList } from "./ProjectList";
import {
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/types";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...PROJECT_CATEGORIES];

/** Category filter plus the full-width project list. Render outside a Container. */
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <div>
      <Container>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => {
            const selected = filter === active;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  selected
                    ? "border-accent bg-accent font-medium text-background"
                    : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-xs text-muted" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </Container>

      <div className="mt-8">
        {visible.length > 0 ? (
          // key remounts the list so the first visible project opens again.
          <ProjectList key={active} projects={visible} />
        ) : (
          <Container>
            <p className="rounded-2xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
              No projects in this category yet.
            </p>
          </Container>
        )}
      </div>
    </div>
  );
}
