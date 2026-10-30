"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { services, type Service } from "@/lib/site";

// Vertical rhythm of the stack: how far below the nav the first card pins,
// and how much lower each subsequent card pins (so headers peek like 01/02/03).
const BASE_TOP = 100;
const STEP = 34;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="display mt-4 text-3xl font-bold text-ink sm:text-[2.75rem]">
              Six services, one accountable partner.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-ink-soft">
              From the first line of code to the server it runs on, AIS handles
              every layer so SMEs can focus on their business.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stacking deck */}
      <div className="shell mt-14">
        <div className="relative mx-auto max-w-4xl">
          {services.map((s, i) => (
            <StackCard key={s.id} service={s} index={i} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  service,
  index,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Shrink + dim slightly as the next card slides over this one.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0, 0.12]);

  const top = BASE_TOP + index * STEP;

  return (
    <div
      ref={ref}
      className="sticky pb-16 md:pb-28"
      style={{ top: reduce ? undefined : `${top}px` }}
    >
      <motion.article
        style={reduce ? undefined : { scale }}
        className="group relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-ink shadow-card transition-shadow duration-300 hover:shadow-card-lift md:min-h-[360px]"
      >
        {/* Visual — full-height panel on the right, blended into the dark bed */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%]">
          <img
            src={service.image}
            alt={`${service.name} — AIS`}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          {/* blend the visual's left edge into the ink so it reads as one card */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink from-0% via-ink/20 via-40% to-transparent to-100%" />
        </div>
        {/* extra grounding scrim on small screens where the image sits full-width */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent md:hidden" />

        {/* View tag — top-right over the visual */}
        <span className="pointer-events-none absolute right-5 top-5 z-30 flex items-center gap-2 rounded-full border border-white/25 bg-ink/40 px-3.5 py-1.5 backdrop-blur transition-colors group-hover:border-flame/60 md:right-8 md:top-8">
          <Icon name={service.icon} className="h-4 w-4 text-ember" strokeWidth={1.8} />
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/85">
            View
          </span>
          <Icon name="ArrowUpRight" className="h-3.5 w-3.5 text-white/85" strokeWidth={2} />
        </span>

        {/* Index badge — top-left, peeks when the card is stacked */}
        <span className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-ink/45 font-mono text-sm text-white backdrop-blur md:left-8 md:top-8">
          {service.index}
        </span>

        {/* Overlaid content — anchored high so the title + summary appear first
            and stay readable the whole time the card is pinned, before the next
            card slides over it */}
        <div className="relative flex h-full min-h-[300px] flex-col justify-center p-6 pt-16 md:min-h-[360px] md:max-w-[58%] md:justify-center md:p-10 md:pt-16">
          <h3 className="display text-2xl font-bold text-white sm:text-[1.7rem] md:text-[2rem]">
            {service.name}
          </h3>
          <p className="mt-2.5 max-w-md text-[0.98rem] leading-relaxed text-white/85">
            {service.summary}
          </p>
          <ul className="mt-5 flex max-w-md flex-wrap gap-x-5 gap-y-2">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="Check" className="h-3.5 w-3.5 shrink-0 text-flame-hot" strokeWidth={2.5} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Whole card links to the service page */}
        <Link
          href={`/services/${service.id}/`}
          aria-label={`View ${service.name}`}
          className="absolute inset-0 z-20"
        />

        {/* Dim overlay as it gets covered */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-ink"
            style={{ opacity: overlay }}
          />
        )}
      </motion.article>
    </div>
  );
}
