import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { clients, site } from "@/lib/site";

const credentials = [
  { label: "PACRA registered", note: site.compliance.trading, icon: "BadgeCheck" },
  { label: "ZRA compliant", note: site.compliance.tpin, icon: "ShieldCheck" },
  { label: `Operating since ${site.established}`, note: "Lusaka, Zambia", icon: "Building2" },
];

export function Clients() {
  return (
    <section id="clients" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Clientele</p>
          <h2 className="display mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Trusted by businesses building in Zambia.
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {clients.map((c) => (
            <StaggerItem key={c.name}>
              <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-paper px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:bg-white hover:shadow-card">
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="h-12 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-2">
                  {c.industry}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Credibility strip — genuine registration facts */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {credentials.map((cr) => (
              <div key={cr.label} className="flex items-center gap-3 bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-flame-deep">
                  <Icon name={cr.icon} className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{cr.label}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted-2">
                    {cr.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
