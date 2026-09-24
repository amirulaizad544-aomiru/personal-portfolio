import { Placeholder } from "./Placeholder";
import { Section } from "./Section";
import { Tag } from "./Tag";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative mx-auto max-w-3xl space-y-5 border-l border-border pl-6 text-left">
        {experience.map((job) => (
          <li key={`${job.role}-${job.company ?? "tbd"}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-background bg-accent ring-1 ring-border"
            />
            <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">
                  {job.role} ·{" "}
                  {job.company ?? <Placeholder>company name</Placeholder>}
                </h3>
                <p className="text-sm text-muted">
                  {job.period ?? <Placeholder>dates</Placeholder>}
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted marker:text-accent">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {job.technologies.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {job.technologies.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
