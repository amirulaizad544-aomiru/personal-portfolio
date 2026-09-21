"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { navLinks, site } from "@/data/site";

/**
 * Floating pill navbar. The header has zero height so the pill overlays the
 * top of each page; pages leave room for it (see `pt-28` / the hero panel).
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none sticky top-0 z-50 h-0">
      <div className="mx-auto max-w-5xl px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="pointer-events-auto flex h-14 items-center justify-between gap-3 rounded-full border border-border bg-background/95 pl-5 pr-2 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)]">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <SocialLinks className="hidden lg:flex" />
            <Link
              href="/#contact"
              onClick={close}
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Contact
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted md:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="pointer-events-auto mt-2 rounded-3xl border border-border bg-background p-3 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block rounded-xl px-3 py-3 text-sm hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks className="mt-2 border-t border-border px-3 pt-3" />
          </nav>
        )}
      </div>
    </header>
  );
}
