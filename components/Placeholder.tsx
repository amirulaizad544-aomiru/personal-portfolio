/** Clearly marked "not provided yet" markers, so nothing is silently invented. */

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-dashed border-warn/50 bg-warn/5 px-1.5 py-0.5 font-mono text-xs text-warn">
      [placeholder] {children}
    </span>
  );
}

export function PlaceholderBlock({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-warn/40 bg-warn/5 px-4 py-3 font-mono text-sm text-warn">
      [placeholder] {children}
    </p>
  );
}
