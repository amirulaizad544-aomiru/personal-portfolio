/**
 * A project/skill accent (a light blue-family hex) works as text on the dark
 * theme, but is too pale on white. This returns a CSS colour that is the accent
 * itself on dark and a darkened version on light, driven by the `--tone`
 * variable set per theme in globals.css. Use it for text and icons; tints and
 * borders can keep using the raw accent.
 */
export const readable = (color: string) =>
  `color-mix(in srgb, ${color} var(--tone, 100%), black)`;
