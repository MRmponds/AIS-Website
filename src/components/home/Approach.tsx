import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { values } from "@/lib/site";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-line">
              <img
                src="/assets/approach-2.jpg"
                alt="AIS advising a growing business"
                width={1000}
                height={800}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our approach</p>
              <h2 className="display mt-4 text-3xl font-bold text-ink sm:text-[2.75rem]">
                Cutting-edge technology, made accessible.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                We are a forward-thinking technology company dedicated to
                empowering small and medium enterprises with innovative
                solutions. We leverage modern technology to address the real
                challenges businesses face in today&apos;s digital landscape —
                fostering growth and operational excellence.
              </p>
            </Reveal>

            <Stagger className="mt-10 space-y-3">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-flame/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-flame-deep">
                      <Icon name={v.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="display font-semibold text-ink">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
