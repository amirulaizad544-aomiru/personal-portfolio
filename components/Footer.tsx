import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-1 text-xs">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
