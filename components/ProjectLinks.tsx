import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/lib/types";

function LinkButton({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium";

  if (!href) {
    return (
      <span
        title={`${label} link not added yet`}
        className={`${base} border-dashed border-warn/50 bg-warn/5 font-mono text-xs text-warn`}
      >
        {icon}
        {label} · TBA
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-border bg-background text-foreground transition-colors hover:bg-surface`}
    >
      {icon}
      {label}
    </a>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <LinkButton
        href={project.repoUrl}
        label="GitHub"
        icon={<GithubIcon className="size-3.5" />}
      />
      <LinkButton
        href={project.demoUrl}
        label={project.demoLabel ?? "Live demo"}
        icon={<ExternalLink className="size-3.5" aria-hidden="true" />}
      />
    </div>
  );
}
