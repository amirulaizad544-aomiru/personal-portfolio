import { PhotoRoll } from "./PhotoRoll";
import type { Project } from "@/lib/types";

/** A project's screenshots as a scrolling roll (see PhotoRoll). */
export function ScreenshotRoll({ project }: { project: Project }) {
  return (
    <PhotoRoll
      images={project.screenshots}
      label={`${project.title} screenshots`}
      altPrefix={`${project.title} screenshot`}
      placeholderHint={`add to public/projects/${project.slug}/ and list in data/projects.ts`}
      accent={project.accent}
    />
  );
}
