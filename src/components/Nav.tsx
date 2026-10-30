"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, services } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell">
        <div
          className={`mt-3 flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 md:mt-4 md:px-5 ${
            scrolled
              ? "border-line bg-white/85 shadow-card backdrop-blur-xl"
              : "border-transparent bg-white/40 backdrop-blur-md"
          }`}
        >
          <Link href="/" aria-label="Advanced Intelligent Systems — home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {/* Services dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                aria-haspopup="true"
              >
                Services
                <Icon
                  name="ChevronDown"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                  strokeWidth={2}
                />
              </button>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-card">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}/`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-paper"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper text-flame-deep">
                        <Icon name={s.icon} className="h-4 w-4" strokeWidth={1.7} />
                      </span>
                      <span className="text-sm font-medium text-ink">{s.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/#services"
                    className="mt-1 flex items-center justify-between rounded-xl border-t border-line px-3 py-2.5 text-sm font-medium text-flame-deep hover:bg-paper"
                  >
                    All services
                    <Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/#contact" className="btn btn-flame hidden h-11 md:inline-flex">
              Start a project
              <Icon name="ArrowUpRight" className="h-4 w-4" strokeWidth={2} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-paper lg:hidden"
            >
              <Icon name={open ? "X" : "Menu"} className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-24 max-h-[76vh] w-[92%] max-w-md overflow-y-auto rounded-3xl border border-line bg-white p-4 shadow-card"
              aria-label="Mobile"
            >
              {/* Services expandable */}
              <button
                type="button"
                onClick={() => setMobileServices((v) => !v)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-paper"
                aria-expanded={mobileServices}
              >
                Services
                <Icon
                  name="ChevronDown"
                  className={`h-5 w-5 text-flame transition-transform ${mobileServices ? "rotate-180" : ""}`}
                  strokeWidth={2}
                />
              </button>
              <AnimatePresence initial={false}>
                {mobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}/`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 pl-6 text-[0.95rem] text-ink-soft transition-colors hover:bg-paper"
                      >
                        <Icon name={s.icon} className="h-4 w-4 text-flame-deep" strokeWidth={1.7} />
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-paper"
                >
                  {item.label}
                  <Icon name="ArrowRight" className="h-4 w-4 text-flame" strokeWidth={2} />
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn btn-flame mt-2 w-full"
              >
                Start a project
                <Icon name="ArrowUpRight" className="h-4 w-4" strokeWidth={2} />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
