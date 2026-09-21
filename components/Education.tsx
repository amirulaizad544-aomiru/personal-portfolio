import { PhotoRoll } from "./PhotoRoll";
import { Section } from "./Section";
import { education, highlights } from "@/data/education";

export function Education() {
  return (
    <Section id="education" tinted eyebrow="Education" title="Education & Achievements">
      <ul className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <li
            key={item.institution}
            className={`rounded-2xl border border-border bg-background p-6 text-left ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <h3 className="font-semibold">{item.institution}</h3>
            <p className="mt-1 text-sm text-muted">{item.programme}</p>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              {item.period && (
                <span className="rounded-full bg-surface px-2.5 py-1 text-muted">
                  {item.period}
                </span>
              )}
              {item.grade && (
                <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                  {item.grade}
                </span>
              )}
            </p>
            {item.achievements && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-accent">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Each highlight card is its own full-width row. */}
      <ul className="mt-4 space-y-4">
        {highlights.map((group) => (
          <li
            key={group.title}
            className="rounded-2xl border border-border bg-background p-6 text-left"
          >
            <h3 className="font-semibold">{group.title}</h3>
            <div
              className={`mt-4 grid gap-x-10 gap-y-6 ${
                group.sections.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {group.sections.map((section) => (
                <div key={section.label ?? "items"}>
                  {section.label && (
                    <p className="text-xs font-semibold text-accent">{section.label}</p>
                  )}
                  <ul
                    className={`list-disc space-y-1 pl-5 text-sm marker:text-accent ${
                      section.label ? "mt-2" : "grid gap-x-10 md:grid-cols-3"
                    }`}
                  >
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {group.photos && (
              <div className="mt-6">
                <PhotoRoll
                  images={group.photos}
                  label={`${group.title} photos`}
                  altPrefix={`${group.title} photo`}
                  placeholderHint="add to public/assets/activities/ and list in data/education.ts"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
