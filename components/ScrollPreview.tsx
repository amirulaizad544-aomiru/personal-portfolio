import Image from "next/image";
import { ExternalLink } from "lucide-react";

/**
 * A scrollable "browser window" showing a tall, full-page screenshot of a page.
 * Visitors scroll it in place; clicking it opens the real page (`href`) in a
 * new tab. A screenshot is used because sites like LinkedIn refuse to be
 * embedded in other pages. Without `image`, or without `href`, it shows a
 * clearly marked placeholder instead.
 */
export function ScrollPreview({
  image,
  href,
  address,
  alt,
  linkLabel,
  placeholderHint,
}: {
  image: string | null;
  href: string | null;
  /** Text for the fake address bar, e.g. "linkedin.com/in/your-name". */
  address: string;
  alt: string;
  /** What clicking does, e.g. "Open LinkedIn profile". */
  linkLabel: string;
  placeholderHint: string;
}) {
  return (
    <figure>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-30px_rgb(0_0_0/0.8)] transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
        <div className="flex items-center gap-3 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-full bg-background px-3 py-1 text-xs text-muted">
            {address}
          </span>
        </div>

        {href && image && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-14 z-10 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
          >
            {linkLabel}
            <ExternalLink className="size-3" />
          </span>
        )}

        <div
          tabIndex={0}
          role="region"
          aria-label={`${alt} (scrollable)`}
          className="h-96 overflow-y-auto sm:h-[30rem] [scrollbar-width:thin]"
        >
          {image ? (
            href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${linkLabel} (opens in a new tab)`}
                className="block cursor-pointer"
              >
                <PreviewImage src={image} alt={alt} />
              </a>
            ) : (
              <PreviewImage src={image} alt={alt} />
            )
          ) : (
            <div className="flex h-full items-center justify-center p-6">
              <p className="max-w-xs text-center font-mono text-xs leading-5 text-warn">
                [placeholder] {placeholderHint}
              </p>
            </div>
          )}
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-muted">
        {image && href
          ? `Scroll to look around · click to ${linkLabel.toLowerCase()}`
          : "Scroll to look around · click opens the link once it is added"}
      </figcaption>
    </figure>
  );
}

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(min-width: 1024px) 600px, 100vw"
      quality={90}
      className="h-auto w-full"
    />
  );
}
