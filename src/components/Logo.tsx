/**
 * AIS logo — the official brand mark (orange neural brain + "Advanced
 * Intelligent Systems"). Uses the black-text version on light surfaces and a
 * white-text version on dark surfaces (footer).
 */
export function Logo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <img
      src={dark ? "/assets/logo-dark.png" : "/assets/logo.png"}
      alt="Advanced Intelligent Systems"
      className={`h-9 w-auto md:h-10 ${className ?? ""}`}
    />
  );
}
