import { PhotoRoll } from "./PhotoRoll";
import type { Project } from "@/lib/types";

/**
 * A project's screenshots as a scrolling roll (see PhotoRoll). Renders
 * nothing if the project has none. Pass `priority` when this roll is
 * actually visible on first paint (e.g. the card is open by default).
 */
export function ScreenshotRoll({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (!project.screenshots) return null;

  return (
    <PhotoRoll
      images={project.screenshots}
      label={`${project.title} screenshots`}
      altPrefix={`${project.title} screenshot`}
      placeholderHint={`add to public/projects/${project.slug}/ and list in data/projects.ts`}
      accent={project.accent}
      priorityFirst={priority}
    />
  );
}
