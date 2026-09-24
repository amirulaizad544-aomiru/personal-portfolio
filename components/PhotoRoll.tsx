"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";

const PLACEHOLDER_TILES = 3;
/** Shape (width / height) assumed for an image until it has loaded. */
const DEFAULT_RATIO = 0.75;
/** Beyond this many photos, a scrolling row gets unwieldy — offer a grid view instead. */
const EXPAND_THRESHOLD = 3;

/**
 * Row of images that always spans the full width.
 * - Few or narrow images stretch to fill the row; each tile grows in
 *   proportion to its shape, so portrait and landscape images end up the same
 *   height and nothing is cropped.
 * - Too many to fit: the row keeps a fixed height and scrolls sideways (swipe,
 *   scrollbar, or the arrows on wider screens).
 * - Click an image to view it full size (arrow keys or buttons to move between
 *   images, Esc or a click outside to close).
 * With no images it shows a clearly marked placeholder row (`placeholderHint`
 * says where to add them). `accent` tints the placeholder tiles.
 * `fixedSize` swaps the shape-proportioned tiles for a uniform frame size
 * (photos are cropped with `object-cover` to fit).
 * `priorityFirst` marks the first tile's image as a priority load — only pass
 * this when the roll is actually visible on first paint (e.g. an
 * already-open accordion), otherwise it just preloads an offscreen image.
 */
export function PhotoRoll({
  images,
  label,
  altPrefix,
  placeholderHint,
  accent = "#60a5fa",
  fixedSize = false,
  priorityFirst = false,
}: {
  images: string[];
  label: string;
  altPrefix: string;
  placeholderHint: string;
  accent?: string;
  fixedSize?: boolean;
  priorityFirst?: boolean;
}) {
  const track = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  // The grid expand view is only for the fixed-size "camera roll" style galleries
  // (e.g. Education photos) — project screenshot rolls keep their original frame.
  const canExpand = fixedSize && images.length > EXPAND_THRESHOLD;

  const rememberRatio = (src: string, img: HTMLImageElement) => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    setRatios((current) => (current[src] === ratio ? current : { ...current, [src]: ratio }));
  };

  // Images that finished loading before hydration never fire onLoad, so read them here.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.querySelectorAll("img").forEach((img, index) => {
      if (img.complete) rememberRatio(images[index], img);
    });
  }, [images]);

  // Arrows only make sense when the row is wider than its container.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setCanScroll(el.scrollWidth > el.clientWidth + 1);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [images.length]);

  // Open / close the native dialog, and stop the page scrolling behind it.
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (active !== null && !el.open) el.showModal();
    if (active === null && el.open) el.close();
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const scroll = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = (direction: 1 | -1) =>
    setActive((current) =>
      current === null ? null : (current + direction + images.length) % images.length,
    );

  const arrow =
    "absolute top-1/2 z-10 size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg transition-colors hover:bg-surface";
  // Phones swipe, so the arrows are for wider screens and only when there is more to see.
  const arrowVisibility = canScroll && !canExpand ? "hidden sm:inline-flex" : "hidden";
  const lightboxButton =
    "absolute z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-black/80";

  return (
    <div className="relative">
      <ul
        ref={track}
        tabIndex={0}
        aria-label={label}
        className={
          canExpand
            ? "hidden"
            : "flex snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin]"
        }
      >
        {images.length > 0
          ? images.map((src, index) => {
              const ratio = ratios[src] ?? DEFAULT_RATIO;
              return (
                <li
                  key={src}
                  style={fixedSize ? undefined : ({ "--r": ratio } as CSSProperties)}
                  className={
                    fixedSize
                      ? "relative h-56 w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:h-72 sm:w-96"
                      : "shrink-0 grow-[var(--r)] basis-[calc(var(--r)*22rem)] snap-start overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:basis-[calc(var(--r)*24rem)]"
                  }
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`View ${altPrefix} ${index + 1} full size`}
                    className={
                      fixedSize
                        ? "relative block h-full w-full cursor-zoom-in"
                        : "block w-full cursor-zoom-in"
                    }
                  >
                    {fixedSize ? (
                      <Image
                        src={src}
                        alt={`${altPrefix} ${index + 1}`}
                        fill
                        sizes="(min-width: 640px) 24rem, 18rem"
                        quality={90}
                        priority={priorityFirst && index === 0}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={src}
                        alt={`${altPrefix} ${index + 1}`}
                        width={0}
                        height={0}
                        sizes="(min-width: 1024px) 30vw, 60vw"
                        quality={90}
                        priority={priorityFirst && index === 0}
                        onLoad={(event) => rememberRatio(src, event.currentTarget)}
                        className="h-auto w-full"
                      />
                    )}
                  </button>
                </li>
              );
            })
          : Array.from({ length: PLACEHOLDER_TILES }, (_, index) => (
              <li
                key={index}
                className="flex h-56 w-72 shrink-0 snap-start flex-col items-center justify-center gap-1 rounded-xl border border-dashed text-center sm:h-72 sm:w-96"
                style={{
                  borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
                  backgroundColor: `color-mix(in srgb, ${accent} 6%, transparent)`,
                }}
              >
                <span className="font-mono text-xs text-warn">
                  [placeholder] photo {index + 1}
                </span>
                {index === 0 && (
                  <span className="max-w-[80%] font-mono text-[10px] text-muted">
                    {placeholderHint}
                  </span>
                )}
              </li>
            ))}
      </ul>

      <button
        type="button"
        aria-label={`Scroll ${label} left`}
        onClick={() => scroll(-1)}
        className={`${arrow} ${arrowVisibility} left-2`}
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={`Scroll ${label} right`}
        onClick={() => scroll(1)}
        className={`${arrow} ${arrowVisibility} right-2`}
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      {canExpand && (
        <ul aria-label={label} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {(expanded ? images : images.slice(0, EXPAND_THRESHOLD)).map((src, index) => (
            <li
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View ${altPrefix} ${index + 1} full size`}
                className="block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={`${altPrefix} ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  quality={90}
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {expanded ? (
            <>
              Show fewer photos
              <ChevronUp className="size-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Show all {images.length} photos
              <ChevronDown className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      )}

      <dialog
        ref={dialog}
        aria-label={`${label}, full size`}
        onClose={() => setActive(null)}
        onClick={(event) => {
          // A tap or click anywhere except the buttons closes it.
          if (!(event.target as HTMLElement).closest("button")) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 text-white backdrop:bg-black/90"
      >
        {active !== null && (
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-10">
            <Image
              src={images[active]}
              alt={`${altPrefix} ${active + 1}`}
              fill
              sizes="100vw"
              quality={90}
              className="pointer-events-none object-contain p-4 sm:p-10"
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className={`${lightboxButton} right-4 top-4`}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => step(-1)}
                  className={`${lightboxButton} left-3 top-1/2 -translate-y-1/2 sm:left-6`}
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => step(1)}
                  className={`${lightboxButton} right-3 top-1/2 -translate-y-1/2 sm:right-6`}
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs">
                  {active + 1} / {images.length}
                </p>
              </>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
