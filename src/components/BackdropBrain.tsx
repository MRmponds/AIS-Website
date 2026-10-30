/**
 * Ambient, always-present background: the AIS neural brain (from the company
 * profile) rotating very slowly behind the whole page as the user scrolls.
 * Fixed to the viewport, low opacity, non-interactive — it sits behind all
 * content and never competes with it. A small orbiting "bubble" rides along
 * with the rotation. Rotation is paused for reduced-motion users.
 */
export function BackdropBrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative animate-[spin-slow_90s_linear_infinite] opacity-[0.7] motion-reduce:animate-none"
        style={{ width: "min(58vw, 420px)", height: "min(58vw, 420px)" }}
      >
        <img
          src="/assets/brain-ghost-v3.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
