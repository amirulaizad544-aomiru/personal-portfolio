import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "./icons";
import { Placeholder } from "./Placeholder";
import { ScrollPreview } from "./ScrollPreview";
import { Section } from "./Section";
import { site } from "@/data/site";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: site.email ? `mailto:${site.email}` : null,
    Icon: Mail,
    hint: "add email in data/site.ts",
  },
  {
    label: "GitHub",
    value: site.github,
    href: site.github,
    Icon: GithubIcon,
    hint: "add GitHub URL in data/site.ts",
  },
  ...(site.phone
    ? [
        {
          label: "Phone",
          value: site.phone,
          // digits (and a leading +) only, so the number can be dialled
          href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
          Icon: Phone,
          hint: "",
        },
      ]
    : []),
];

/** "https://www.linkedin.com/in/name/" -> "linkedin.com/in/name" */
const linkedinAddress = site.linkedin
  ? site.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
  : "linkedin.com/in/your-username";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description="I'm open to Software Developer and AI Developer opportunities. If you're hiring or want to talk about a project, get in touch."
    >
      <div className="mx-auto grid max-w-5xl gap-8 text-left lg:grid-cols-5">
        <ul className="space-y-3 lg:col-span-2 lg:self-start">
          {contacts.map(({ label, value, href, Icon, hint }) => (
            <li key={label}>
              {href && value ? (
                <a
                  href={href}
                  {...(/^(mailto|tel):/.test(href)
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/60"
                >
                  <Icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-xs text-muted">{value}</span>
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-2xl border border-dashed border-warn/50 bg-surface p-4">
                  <Icon className="size-5 shrink-0 text-warn" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{label}</span>
                    <Placeholder>{hint}</Placeholder>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:col-span-3">
          <ScrollPreview
            image={site.linkedinPreview}
            href={site.linkedin}
            address={linkedinAddress}
            alt="My LinkedIn profile"
            linkLabel="Open LinkedIn profile"
            placeholderHint={
              site.linkedin
                ? "add a full-page screenshot of your LinkedIn profile (data/site.ts, linkedinPreview)"
                : "add your LinkedIn URL and a full-page screenshot of your profile (data/site.ts)"
            }
          />
        </div>
      </div>
    </Section>
  );
}
