import Link from "next/link";
import { ArrowRight, ChevronDown, Trophy } from "lucide-react";
import { Container } from "./Container";
import { ProjectCover } from "./ProjectCover";
import { ProjectLinks } from "./ProjectLinks";
import { ScreenshotRoll } from "./ScreenshotRoll";
import { Tag } from "./Tag";
import type { Project } from "@/lib/types";

/** A translucent version of the project's accent colour. */
const mix = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;

/**
 * One full-width banner of the project list.
 * Collapsed: cover image, title, summary and the full tech stack.
 * Expanded: overview, all features, architecture, links and a details link.
 */
export function ProjectCard({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { accent } = project;
  const titleId = `project-${project.slug}-title`;
  const panelId = `project-${project.slug}-panel`;

  return (
    <li
      className="relative border-t border-border transition-colors duration-300"
      style={open ? { borderTopColor: mix(accent, 45) } : undefined}
    >
      {/* Accent stripe down the left edge of the banner. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-1"
        style={{ backgroundColor: accent }}
      />

      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-labelledby={titleId}
          onClick={onToggle}
          className="group relative block min-h-80 w-full overflow-hidden text-left"
        >
          <ProjectCover project={project} />
          {/* Keeps text legible over any cover image. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-background via-background/85 to-background/10 sm:bg-linear-to-r sm:from-background sm:via-background/80 sm:to-background/80"
          />

          <Container
            as="span"
            className="relative flex min-h-80 items-end gap-6 pb-8 pt-16 sm:pb-10"
          >
            <span className="block min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                <span className="font-semibold tabular-nums" style={{ color: accent }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-muted">{project.categoryLabel}</span>
                {project.meta && <span className="text-muted">· {project.meta}</span>}
                {project.award && (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium"
                    style={{
                      color: accent,
                      borderColor: mix(accent, 35),
                      backgroundColor: mix(accent, 9),
                    }}
                  >
                    <Trophy className="size-3.5" aria-hidden="true" />
                    {project.award}
                  </span>
                )}
              </span>

              <span
                id={titleId}
                className="mt-3 block text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {project.title}
              </span>

              <span className="mt-3 block max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {project.overview}
              </span>

              <span className="mt-5 flex max-w-3xl flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Tag key={tech} color={accent}>
                    {tech}
                  </Tag>
                ))}
              </span>
            </span>

            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-background transition-opacity group-hover:opacity-85">
              <span className="hidden sm:inline">{open ? "Less" : "More"}</span>
              <ChevronDown
                aria-hidden="true"
                className={`size-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </span>
          </Container>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        className="accordion-panel"
        data-open={open}
        style={{ backgroundColor: mix(accent, 4) }}
      >
        {/* `inert` keeps links in a collapsed panel out of the tab order. */}
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <Container className="grid gap-8 py-10 md:grid-cols-5">
            {project.screenshots && (
              <div className="min-w-0 md:col-span-5">
                <ScreenshotRoll project={project} priority={open} />
              </div>
            )}

            <div className={project.architecture ? "md:col-span-3" : "md:col-span-5"}>
              {/* <p className="max-w-2xl leading-7 text-muted">{project.overview}</p> */}

              <h4 className="mt-7 text-sm font-semibold">Features</h4>
              <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span style={{ color: accent }} aria-hidden="true">
                      →
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {project.demonstrates && (
                <>
                  <h4 className="mt-7 text-sm font-semibold">What it demonstrates</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.demonstrates.map((item) => (
                      <li key={item}>
                        <Tag color={accent}>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {project.architecture && (
              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold">Architecture</h4>
                <dl className="mt-3 divide-y divide-border rounded-2xl border border-border bg-background">
                  {project.architecture.map((item) => (
                    <div key={item.layer} className="px-4 py-3">
                      <dt className="text-xs font-semibold" style={{ color: accent }}>
                        {item.layer}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-muted">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                {project.sdgs && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Related SDGs">
                    {project.sdgs.map((sdg) => (
                      <li key={sdg}>
                        <Tag color={accent}>{sdg}</Tag>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {!project.hideLinks && (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:col-span-5">
                <ProjectLinks project={project} />
                {/* <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                  style={{ color: accent }}
                >
                  Full project details
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link> */}
              </div>
            )}
          </Container>
        </div>
      </div>
    </li>
  );
}
