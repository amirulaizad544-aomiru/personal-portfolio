import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "./Container";
import { Portrait } from "./Portrait";
import { Badge } from "./Section";
// import { Tag } from "./Tag";
import { site } from "@/data/site";

// const stack = ["Next.js", "TypeScript", "Python", "Flutter", "Laravel", "Google Cloud"];

/**
 * Frameless hero on the page background with a soft blue glow. With
 * `site.heroBackground` set, that image fills the hero (a transparent cut-out
 * or a photo; darkened on the text side so the text stays readable). No
 * placeholder either way. Sized to one
 * screen (100svh minus a small gap) so the whole hero is visible without
 * scrolling. Text on the left, optional photo on the right. On phones
 * shorter than 700px the location line and tech chips are hidden so everything
 * else still fits on the first screen.
 */
export function Hero() {
  const onImage = Boolean(site.heroBackground);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-3rem)] items-center overflow-hidden"
    >
      {/* Soft blue glow (behind the image) so a dark subject stands out from the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_40%_at_82%_18%,rgb(59_130_246/0.28),transparent),radial-gradient(ellipse_45%_8%_at_8%_0%,rgb(59_130_246/0.10),transparent)] lg:bg-[radial-gradient(ellipse_42%_70%_at_84%_62%,rgb(59_130_246/0.28),transparent),radial-gradient(ellipse_45%_35%_at_8%_0%,rgb(59_130_246/0.10),transparent)]"
      />
      {site.heroBackground && (
        <>
          {/*
            Phones: the image fills the hero, nudged down a little from the
            top (under the navbar) via `top-10`. Desktop: it is sized to 82%
            of the hero height and pinned to the bottom right (so it is a bit
            smaller and sits lower), then nudged right so the empty space on
            the image's right side falls off-screen. Change `lg:h-[82%]` to
            make it bigger/smaller and `lg:translate-x-[14%]` to move it
            left/right.
          */}
          <div className="absolute inset-x-0 top-10 bottom-0 lg:inset-auto lg:bottom-0 lg:right-0 lg:aspect-[3/1] lg:h-[82%] lg:translate-x-[1%]">
            <Image
              src={site.heroBackground}
              alt=""
              fill
              priority
              // Drawn about 3x as wide as the hero is tall on phones, and 3 x 82%
              // on desktop (3:1 image), not 100vw. Telling the browser that makes it
              // fetch a big enough copy to stay sharp.
              sizes="(min-width: 1024px) calc((100vh - 3rem) * 2.46), calc((100vh - 3rem) * 3)"
              quality={90}
              style={
                {
                  "--pos-m": site.heroBackgroundPosition.mobile,
                  "--pos-d": site.heroBackgroundPosition.desktop,
                } as CSSProperties
              }
              className="object-cover object-(--pos-m) lg:object-(--pos-d)"
            />
          </div>
          {/* Darkens the text side only, and fades into the page below. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/10 lg:bg-linear-to-r lg:from-background/85 lg:via-background/35 lg:to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent"
          />
        </>
      )}

      <Container className="relative grid items-center gap-6 pb-8 pt-98 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-24">
        <Portrait className="lg:order-2" />

        <div className="lg:order-1">
          <Badge>Open to Software Developer / AI Developer roles</Badge>

          <h1
            id="hero-title"
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl max-lg:[@media(max-height:700px)]:text-2xl"
          >
              Software Engineer 
              <br />
              Web, Mobile,{" "}
              <span className="whitespace-nowrap text-accent">AI &amp; automation.</span>
          </h1>

          <p
            className={`mt-4 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 ${
              onImage ? "text-foreground/90" : "text-muted"
            }`}
          >
            I&rsquo;m {site.name}. a software developer passionate about building practical, scalable, and intelligent software solutions. I develop web and mobile applications, integrate AI capabilities, and automate workflows using modern technologies.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {site.resume && (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                My Resume
              </a>
            )}
            <Link
              href="#projects"
              className={`inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface ${
                onImage ? "bg-background/60" : ""
              }`}
            >
              View Projects
            </Link>
            <span
              className={`inline-flex items-center gap-1.5 text-sm max-lg:[@media(max-height:700px)]:hidden ${
                onImage ? "text-foreground/90" : "text-muted"
              }`}
            >
              {/* <MapPin className="size-4" aria-hidden="true" />
              Based in {site.location} */}
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
}
