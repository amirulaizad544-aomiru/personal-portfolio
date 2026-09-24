import type { NavLink } from "@/lib/types";

/**
 * Site-wide details. `null` means "not provided yet" and renders as a
 * placeholder. Fill these in, do not guess them.
 */
export const site = {
  name: "Amirul Aizad",
  fullName: "Mohamad Amirul Aizad Bin Roslee",
  role: "Software Developer",
  location: "Kuala Lumpur, Malaysia",
  title: "Amirul Aizad | Software Developer",
  description:
    "Software developer focused on web development, AI, automation and cloud technologies.",
  /** Set NEXT_PUBLIC_SITE_URL in production so Open Graph URLs are correct. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Hero landscape background: put the file in /public and set the path, e.g.
  // "/assets/hero-bg.jpg". While null, the hero shows a soft blue glow instead.
  heroBackground: "/assets/hero.png" as string | null,
  // Which part of the image stays in view when it is cropped to fit (CSS
  // object-position: "x% y%"). Tuned for a cut-out of you on the right; move
  // the x value down to shift the image right, up to shift it left.
  heroBackgroundPosition: { mobile: "78% 0%", desktop: "55% 50%" },

  // Optional round profile photo in the hero, e.g. "/assets/personal-pic.jpeg".
  // While null, nothing is shown (no placeholder).
  photo: null as string | null,

  // TODO: add your real contact details.
  email: "amirulaizad544@gmail.com" as string | null,
  // Shown publicly in the Contact section and dialled with a tap on phones.
  // Set to null to hide the phone row.
  phone: "017-4621544" as string | null,
  github: null as string | null, // e.g. "https://github.com/<username>"
  linkedin: "https://www.linkedin.com/in/mohamad-amirul-aizad-roslee-260b04305/", // e.g. "https://www.linkedin.com/in/<username>"

  // Tall full-page screenshot of your LinkedIn profile, shown as a scrollable
  // preview in the Contact section (click opens `linkedin`). Put the file in
  // /public, e.g. "/assets/linkedin.png". While null, a placeholder shows.
  linkedinPreview: "/assets/linkedin.png",

  // Résumé PDF, linked from the hero's "My Resume" button. Put the file in
  // /public and set the path here. While null, the button is not shown.
  resume: "/assets/Resume_Mohamad Amirul Aizad Roslee.pdf" as string | null,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
