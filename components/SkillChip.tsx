import { brandColorOnDark, skillIcons } from "@/lib/skillIcons";

/** Skill name with its icon (brand logo or generic). Falls back to text only. */
export function SkillChip({ name }: { name: string }) {
  const skill = skillIcons[name];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      {skill?.kind === "brand" && (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-3.5 shrink-0"
          style={{ fill: brandColorOnDark(skill.icon.hex) ?? "currentColor" }}
        >
          <path d={skill.icon.path} />
        </svg>
      )}
      {skill?.kind === "generic" && (
        <skill.icon className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
      )}
      {name}
    </span>
  );
}
