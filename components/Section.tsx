import { Container } from "./Container";

/** Small rounded label used above headings. */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

/**
 * Titled page section with a centred heading. With `fullWidth`, the heading
 * stays in the centred container but `children` render edge to edge (they add
 * their own Container).
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  fullWidth = false,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  /** Pale-blue background band, to alternate with white sections. */
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-4 py-16 sm:py-24 ${tinted ? "bg-surface" : ""}`}
    >
      <Container className="text-center">
        <Badge>{eyebrow}</Badge>
        <h2
          id={`${id}-title`}
          className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-muted">{description}</p>
        )}
      </Container>
      <div className="mt-10 sm:mt-12">
        {fullWidth ? children : <Container>{children}</Container>}
      </div>
    </section>
  );
}
