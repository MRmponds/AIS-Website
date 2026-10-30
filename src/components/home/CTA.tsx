import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function CTA() {
  return (
    <section className="py-8 md:py-12">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-60" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-flame/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow eyebrow-dark justify-center">Let&apos;s build</p>
              <h2 className="display mt-4 text-3xl font-extrabold text-white sm:text-5xl">
                Ready to start your next project?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-white/70">
                Tell us what you&apos;re building. We&apos;ll help you scope it,
                cost it and ship it — software, data or infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#contact" className="btn btn-flame">
                  Talk to our team
                  <Icon name="ArrowRight" className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href="tel:+260979373283"
                  className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <Icon name="Phone" className="h-4 w-4" strokeWidth={2} />
                  +260 979 373 283
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
