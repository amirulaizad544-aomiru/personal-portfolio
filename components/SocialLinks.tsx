import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
];

const base = "inline-flex size-9 items-center justify-center rounded-full border";

/** Icon links. A missing URL renders a marked, non-clickable placeholder. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`${base} border-border text-muted transition-colors hover:border-foreground/30 hover:text-foreground`}
            >
              <Icon className="size-4" />
            </a>
          ) : (
            <span
              role="img"
              aria-label={`${label} link not added yet`}
              title={`${label} link not added yet`}
              className={`${base} border-dashed border-warn/50 bg-warn/5 text-warn`}
            >
              <Icon className="size-4" />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
