import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-4 text-3xl font-bold text-ink sm:text-[2.75rem]">
              Start the conversation.
            </h2>
            <p className="mt-5 max-w-md text-ink-soft">
              Reach us directly, or send a quick brief and we&apos;ll get back to
              you. Based in Lusaka, working with businesses across Zambia.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow icon="MapPin" title="Visit us">
                {site.address.line1}
                <br />
                {site.address.line2}
              </ContactRow>
              <ContactRow icon="Phone" title="Call us">
                <a href="tel:+260979373283" className="link-underline hover:text-ink">
                  {site.phones[0]}
                </a>
                <br />
                <a href="tel:+260966220398" className="link-underline hover:text-ink">
                  {site.phones[1]}
                </a>
              </ContactRow>
              <ContactRow icon="Mail" title="Email us">
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline break-all hover:text-ink"
                >
                  {site.email}
                </a>
              </ContactRow>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6 shadow-card md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-white p-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-flame-deep">
        <Icon name={icon} className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-2">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{children}</p>
      </div>
    </div>
  );
}
