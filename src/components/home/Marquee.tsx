import type { SimpleIcon } from "simple-icons";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siPython,
  siFlutter,
  siAndroid,
  siApple,
  siPhp,
  siLaravel,
  siWordpress,
  siTailwindcss,
  siPostgresql,
  siMysql,
  siDocker,
  siCpanel,
} from "simple-icons";

type Tech = { icon: SimpleIcon; label: string };

// Two rows of the real technologies AIS builds and ships with — web,
// mobile, hosting and data. Curated for legible, on-white brand marks.
const rowA: Tech[] = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siPython, label: "Python" },
  { icon: siFlutter, label: "Flutter" },
  { icon: siAndroid, label: "Android" },
  { icon: siApple, label: "iOS" },
];

const rowB: Tech[] = [
  { icon: siPhp, label: "PHP" },
  { icon: siLaravel, label: "Laravel" },
  { icon: siWordpress, label: "WordPress" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siMysql, label: "MySQL" },
  { icon: siDocker, label: "Docker" },
  { icon: siCpanel, label: "cPanel" },
];

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="h-8 w-8 shrink-0"
      fill={`#${icon.hex}`}
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}

function Card({ tech }: { tech: Tech }) {
  return (
    <div className="group flex w-[136px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-card-lift">
      <span className="grayscale-[0.15] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
        <BrandIcon icon={tech.icon} />
      </span>
      <span className="text-sm font-medium text-ink-soft">{tech.label}</span>
    </div>
  );
}

function Row({
  items,
  reverse = false,
  duration = 46,
}: {
  items: Tech[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className="flex w-max gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationName: "marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((t, i) => (
          <Card key={`${t.label}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Technologies we build with" className="border-y border-line py-16 md:py-20">
      <div className="shell">
        <div className="mb-10 text-center">
          <p className="eyebrow justify-center">Our stack</p>
          <h2 className="display mt-4 text-2xl font-bold text-ink sm:text-3xl">
            The tools behind the work.
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Row items={rowA} duration={48} />
        <Row items={rowB} reverse duration={42} />
      </div>
    </section>
  );
}
