"use client";

import { Icon } from "@/components/Icon";

const nodes = [
  { name: "Code2", label: "Software" },
  { name: "BarChart3", label: "Data" },
  { name: "ServerCog", label: "Hosting" },
  { name: "Compass", label: "Consulting" },
  { name: "Cpu", label: "Hardware" },
  { name: "Megaphone", label: "Growth" },
];

/**
 * The signature element: AIS's "intelligence core". A branded, original
 * take on an orbiting-capability ring — flame gradient, dashed orbits,
 * six service nodes rotating around the AIS monogram.
 */
export function HeroCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* ambient glow */}
      <div className="absolute inset-[12%] rounded-full bg-flame/20 blur-3xl" />
      <div className="absolute inset-0 grid-bg rounded-[2.5rem] opacity-60" />

      {/* dashed orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#0B0B0F"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="110"
          fill="none"
          stroke="#FF5A1F"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="2 8"
        />
        <circle
          cx="200"
          cy="200"
          r="72"
          fill="none"
          stroke="#0B0B0F"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeDasharray="1 6"
        />
      </svg>

      {/* rotating node ring */}
      <div className="absolute inset-0 animate-spin-slow motion-reduce:animate-none">
        {nodes.map((n, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const r = 37.5; // % radius
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* counter-rotate so icons stay upright */}
              <div className="animate-spin-rev motion-reduce:animate-none">
                <div className="group flex flex-col items-center gap-1.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white shadow-card">
                    <Icon name={n.name} className="h-6 w-6 text-flame-deep" strokeWidth={1.7} />
                  </div>
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                    {n.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-ink shadow-glow">
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-flame/50 motion-reduce:animate-none" />
          <div className="text-center">
            <div className="display text-3xl font-extrabold text-white">AIS</div>
            <div className="font-mono text-[0.5rem] uppercase tracking-[0.22em] text-ember">
              Core
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
