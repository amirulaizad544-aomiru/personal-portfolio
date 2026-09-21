import { Section } from "./Section";
import { SkillChip } from "./SkillChip";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      tinted
      eyebrow="Skills"
      title="Tools I work with"
      description="Grouped by area. No percentages, just what I use."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ name, icon: Icon, items }) => (
          <li
            key={name}
            className="rounded-2xl border border-border bg-background p-6 text-left"
          >
            <h3 className="flex items-center gap-3 font-semibold">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              {name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <SkillChip name={item} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
