import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { ProjectList } from "./ProjectList";
import { Section } from "./Section";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured projects" fullWidth>
      <ProjectList projects={getFeaturedProjects()} />
      <Container className="text-center">
        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          View all projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </Section>
  );
}
