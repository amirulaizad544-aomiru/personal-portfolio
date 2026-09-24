import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { Container } from "./Container";
import { PlaceholderBlock } from "./Placeholder";
import { ProjectLinks } from "./ProjectLinks";
import { Tag } from "./Tag";
import type { Project } from "@/lib/types";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-semibold tracking-tight first-letter:uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
      <h2 className="text-sm font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function TextOrPlaceholder({
  text,
  hint,
}: {
  text: string | null;
  hint: string;
}) {
  return text ? (
    <p className="text-pretty leading-7 text-muted">{text}</p>
  ) : (
    <PlaceholderBlock>{hint}</PlaceholderBlock>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2 text-sm leading-6 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-(--pa)" aria-hidden="true">
            →
          </span>
          <span className="text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Project page: main write-up on the left, sticky summary card column on the
 * right (links, technologies, goals). On mobile the summary comes first.
 */
export function ProjectDetail({ project }: { project: Project }) {
  return (
    <Container
      className="pb-16 pt-28 sm:pt-32"
      style={{ "--pa": project.accent } as React.CSSProperties}
    >
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-6">
        <p className="text-sm font-medium text-(--pa)">{project.categoryLabel}</p>
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        {project.meta && <p className="mt-2 text-sm text-muted">{project.meta}</p>}
        {project.award && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-(--pa)/30 bg-(--pa)/10 px-3 py-1 text-sm font-medium text-(--pa)">
            <Trophy className="size-4 shrink-0" aria-hidden="true" />
            {project.award}
          </p>
        )}
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <aside className="space-y-4 lg:order-2 lg:sticky lg:top-28 lg:self-start">
          {!project.hideLinks && (
            <SidebarCard title="Links">
              <ProjectLinks project={project} />
            </SidebarCard>
          )}
          <SidebarCard title="Technologies">
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Tag color={project.accent}>{tech}</Tag>
                </li>
              ))}
            </ul>
          </SidebarCard>
          {project.sdgs && (
            <SidebarCard title="Related goals">
              <ul className="flex flex-wrap gap-1.5">
                {project.sdgs.map((sdg) => (
                  <li key={sdg}>
                    <Tag color={project.accent}>{sdg}</Tag>
                  </li>
                ))}
              </ul>
            </SidebarCard>
          )}
        </aside>

        <div className="min-w-0 lg:order-1">
          <DetailSection title="overview">
            <p className="text-pretty leading-7 text-muted">{project.overview}</p>
          </DetailSection>

          <DetailSection title="problem / goal">
            <TextOrPlaceholder
              text={project.problem}
              hint="describe the problem this work addresses (data/projects.ts)"
            />
          </DetailSection>

          <DetailSection title="solution">
            <TextOrPlaceholder
              text={project.solution}
              hint="describe the solution (data/projects.ts)"
            />
          </DetailSection>

          <DetailSection title="features">
            <BulletList items={project.features} />
            {project.demonstrates && (
              <>
                <h3 className="mt-6 text-sm font-semibold">What it demonstrates</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.demonstrates.map((item) => (
                    <li key={item}>
                      <Tag color={project.accent}>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </DetailSection>

          <DetailSection title="my contribution">
            <TextOrPlaceholder
              text={project.contribution}
              hint="describe exactly what you built or owned (data/projects.ts)"
            />
          </DetailSection>

          <DetailSection title="technical architecture">
            {project.architecture ? (
              <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
                {project.architecture.map((item) => (
                  <div
                    key={item.layer}
                    className="grid gap-1 px-4 py-3 sm:grid-cols-4 sm:gap-4"
                  >
                    <dt className="text-xs font-semibold text-(--pa) sm:pt-0.5">
                      {item.layer}
                    </dt>
                    <dd className="text-sm leading-6 text-muted sm:col-span-3">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <PlaceholderBlock>
                add an architecture summary (data/projects.ts)
              </PlaceholderBlock>
            )}
          </DetailSection>

          {project.screenshots && (
            <DetailSection title="screenshots">
              {project.screenshots.length > 0 ? (
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((src) => (
                    <li
                      key={src}
                      className="relative aspect-video overflow-hidden rounded-2xl border border-border"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <PlaceholderBlock>
                  add screenshots to public/projects/{project.slug}/ and list them in
                  data/projects.ts
                </PlaceholderBlock>
              )}
            </DetailSection>
          )}

          <DetailSection title="challenges">
            <TextOrPlaceholder
              text={project.challenges}
              hint="add real challenges you ran into (data/projects.ts)"
            />
          </DetailSection>

          <DetailSection title="what I learned">
            <TextOrPlaceholder
              text={project.learned}
              hint="add what you actually learned (data/projects.ts)"
            />
          </DetailSection>
        </div>
      </div>
    </Container>
  );
}
