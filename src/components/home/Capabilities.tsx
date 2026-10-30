import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { capabilities } from "@/lib/site";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-70 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-flame/20 blur-3xl" />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Capabilities</p>
            <h2 className="display mt-4 text-3xl font-bold sm:text-[2.75rem]">
              Depth across the whole stack — not a single trick.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              AIS combines software engineering, data intelligence and
              infrastructure under one roof. That range is what lets us take a
              project from idea to a running, supported system.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line-dark bg-ink-2 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-flame">
                <Icon name="Zap" className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm text-white/75">
                One team, end-to-end — design, build, host and maintain.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => (
              <StaggerItem key={c.label}>
                <div className="group h-full rounded-2xl border border-line-dark bg-ink-2/70 p-6 transition-colors duration-300 hover:border-flame/50">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-dark bg-ink-3 text-ember transition-colors group-hover:text-flame-hot">
                      <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="display text-lg font-semibold">{c.label}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
