/** Small rounded chip. Pass `color` (hex) to tint it with a project/skill accent. */
export function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        color ? "" : "border-border bg-surface text-muted"
      }`}
      style={
        color
          ? {
              color,
              borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${color} 9%, transparent)`,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
