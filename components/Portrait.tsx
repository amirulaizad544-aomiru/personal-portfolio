import Image from "next/image";
import { site } from "@/data/site";

/**
 * Optional round profile photo for the hero. Renders nothing unless
 * `site.photo` is set. A compact circle on mobile, large on the right of the
 * hero on desktop.
 */
export function Portrait({ className = "" }: { className?: string }) {
  if (!site.photo) return null;

  return (
    <div className={`flex justify-end lg:justify-center ${className}`}>
      <div className="relative size-20 shrink-0 overflow-hidden rounded-full shadow-[0_0_70px_-8px_rgb(59_130_246/0.5)] ring-2 ring-accent/40 sm:size-28 lg:size-64 xl:size-72">
        <Image
          src={site.photo}
          alt={`Portrait of ${site.fullName}`}
          fill
          priority
          sizes="(min-width: 1280px) 288px, (min-width: 1024px) 256px, 112px"
          className="object-cover object-[50%_12%]"
        />
      </div>
    </div>
  );
}
