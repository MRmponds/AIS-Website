import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { Capabilities } from "@/components/home/Capabilities";
import { Approach } from "@/components/home/Approach";
import { Clients } from "@/components/home/Clients";
import { CTA } from "@/components/home/CTA";
import { Contact } from "@/components/home/Contact";
import { site, services } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legal,
  alternateName: site.short,
  description: site.description,
  foundingDate: String(site.established),
  email: site.email,
  telephone: site.phones,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Lusaka",
    addressCountry: "ZM",
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.summary },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden static form so Netlify detects and captures submissions
          (the visible form is JS-rendered and posts to this form's name). */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" />
        <input name="company" />
        <input name="email" type="email" />
        <input name="service" />
        <textarea name="message" />
        <input name="bot-field" />
      </form>

      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Capabilities />
      <Approach />
      <Clients />
      <CTA />
      <Contact />
    </>
  );
}
