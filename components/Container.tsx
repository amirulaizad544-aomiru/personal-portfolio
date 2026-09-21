/** Centred page-width wrapper. Use `as="span"` inside phrasing-only parents (e.g. a button). */
export function Container({
  children,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span";
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-5xl px-5 sm:px-6 ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
