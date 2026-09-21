import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Badge } from "@/components/Section";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web, mobile, AI, automation and cloud projects by Amirul Aizad.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-16 pt-32 sm:pt-36">
      <Container className="text-center">
        <Badge>Projects</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Things I&rsquo;ve built
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
          Web, mobile, AI, automation and cloud work. Filter by category, or
          open a project to see more.
        </p>
      </Container>
      <div className="mt-10">
        <ProjectFilter projects={getAllProjects()} />
      </div>
    </div>
  );
}
