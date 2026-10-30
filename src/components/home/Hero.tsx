"use client";

import { motion } from "framer-motion";
import { HeroCore } from "./HeroCore";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[38rem] w-[38rem] rounded-full bg-flame/10 blur-3xl" />
        <div className="absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      </div>

      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            custom={0}
            variants={rise}
            initial="hidden"
            animate="show"
            className="eyebrow"
          >
            Advanced Intelligent Systems
          </motion.p>

          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="display mt-5 text-[2.6rem] font-extrabold text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            Engineering the{" "}
            <span className="flame-text">intelligent systems</span> that move
            business forward.
          </motion.h1>

          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {site.short} builds bespoke software, business intelligence and
            dependable IT infrastructure for small and medium enterprises across
            Zambia — from first concept to deployment and support.
          </motion.p>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#services" className="btn btn-primary">
              Explore services
              <Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
          >
            {[
              { k: "Est.", v: String(site.established) },
              { k: "Based in", v: "Lusaka, Zambia" },
              { k: "Registered", v: "PACRA · ZRA" },
            ].map((f) => (
              <div key={f.k} className="flex items-center gap-2">
                <Icon name="BadgeCheck" className="h-4 w-4 text-flame" strokeWidth={2} />
                <span className="text-sm text-muted">
                  <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-2">
                    {f.k}
                  </span>{" "}
                  <span className="font-medium text-ink-soft">{f.v}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroCore />
        </motion.div>
      </div>
    </section>
  );
}
