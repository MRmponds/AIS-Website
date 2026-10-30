import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const svc = services.find((s) => s.id === params.slug);
  if (!svc) return { title: "Service" };
  return {
    title: svc.name,
    description: svc.summary,
    openGraph: { title: `${svc.name} — ${site.short}`, description: svc.summary },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = services.find((s) => s.id === params.slug);
  if (!svc) notFound();

  const others = services.filter((s) => s.id !== svc.id);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-flame/10 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_70%)]" />
        </div>

        <div className="shell">
          <Reveal>
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <Icon
                name="ArrowRight"
                className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
              All services
            </Link>
          </Reveal>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="eyebrow">
                  {svc.index} — Service
                </p>
                <h1 className="display mt-5 text-[2.5rem] font-extrabold leading-[1.02] text-ink sm:text-6xl">
                  {svc.name}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  {svc.summary}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/#contact" className="btn btn-flame">
                    Start a project
                    <Icon name="ArrowUpRight" className="h-4 w-4" strokeWidth={2} />
                  </Link>
                  <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="btn btn-ghost">
                    <Icon name="Phone" className="h-4 w-4" strokeWidth={2} />
                    Talk to us
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-ink shadow-card">
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-ink/40 px-3.5 py-1.5 backdrop-blur">
                  <Icon name={svc.icon} className="h-4 w-4 text-ember" strokeWidth={1.8} />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/85">
                    {site.short}
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview + what's included */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <h2 className="display mt-4 text-2xl font-bold text-ink sm:text-3xl">
              What this covers
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft">{svc.detail}</p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {svc.points.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper text-flame-deep">
                      <Icon name="Check" className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="font-medium text-ink">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Explore more</p>
            <h2 className="display mt-4 text-2xl font-bold text-ink sm:text-3xl">
              Other services
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <StaggerItem key={o.id}>
                <Link
                  href={`/services/${o.id}/`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper text-flame-deep">
                    <Icon name={o.icon} className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="display block font-semibold text-ink">{o.name}</span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-2">
                      {o.index}
                    </span>
                  </span>
                  <Icon
                    name="ArrowUpRight"
                    className="ml-auto h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-flame"
                    strokeWidth={2}
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center md:px-16 md:py-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-flame/30 blur-3xl" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="display text-2xl font-extrabold text-white sm:text-4xl">
                Ready to talk about {svc.name.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/70">
                Tell us what you need and we&apos;ll scope it with you.
              </p>
              <Link href="/#contact" className="btn btn-flame mt-7">
                Start a project
                <Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
