import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-white">
      <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" />
      <div className="shell relative">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/40">
              {site.legal}
            </p>
          </div>

          <FooterCol title="Company">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="footer-link">
                {n.label}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 6).map((s) => (
              <a key={s.id} href="#services" className="footer-link">
                {s.name}
              </a>
            ))}
          </FooterCol>

          <FooterCol title="Get in touch">
            <a href={`mailto:${site.email}`} className="footer-link break-all">
              {site.email}
            </a>
            <a href="tel:+260979373283" className="footer-link">
              {site.phones[0]}
            </a>
            <a href="tel:+260966220398" className="footer-link">
              {site.phones[1]}
            </a>
            <span className="mt-1 flex items-start gap-2 text-sm text-white/60">
              <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-flame" strokeWidth={1.7} />
              {site.address.line1}, {site.address.line2}
            </span>
          </FooterCol>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line-dark py-7 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legal}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Icon name="BadgeCheck" className="h-4 w-4 text-flame" strokeWidth={2} />
              {site.compliance.pacra}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="ShieldCheck" className="h-4 w-4 text-flame" strokeWidth={2} />
              {site.compliance.tpin}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: block;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          transition: color 0.2s ease;
          margin-bottom: 0.6rem;
        }
        .footer-link:hover { color: #fff; }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-flame-hot">
        {title}
      </h3>
      {children}
    </div>
  );
}
