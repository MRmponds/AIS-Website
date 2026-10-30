import { Counter } from "@/components/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Where we stand</p>
          <h2 className="display mt-4 text-3xl font-bold text-ink sm:text-4xl">
            A grounded technology partner,{" "}
            <span className="text-muted">not a promise.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-white p-7 md:p-8">
              <div className="display text-4xl font-extrabold text-ink md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} isYear={s.isYear} />
              </div>
              <div className="mt-2 text-sm font-medium text-ink-soft">{s.label}</div>
              {s.note && (
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted-2">
                  {s.note}
                </div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
