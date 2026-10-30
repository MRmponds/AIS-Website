"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

const serviceOptions = [
  "Software Development",
  "BI & Data Analysis",
  "Web Hosting & IT Support",
  "Business Consultancy",
  "Affordable Hardware",
  "Social Media & SEO",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function ContactForm() {
  const [service, setService] = useState(serviceOptions[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { "form-name": "contact", service };
    data.forEach((v, k) => (payload[k] = String(v)));

    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-paper px-6 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flame text-white">
          <Icon name="Check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="display mt-5 text-xl font-bold text-ink">
          Thank you — message sent.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          We&apos;ve received your enquiry and will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      {/* Netlify form plumbing */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="service" value={service} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" required>
          <input name="name" required autoComplete="name" placeholder="Jane Banda" className="field" />
        </Field>
        <Field label="Company">
          <input name="company" autoComplete="organization" placeholder="Your business" className="field" />
        </Field>
      </div>

      <Field label="Email" required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="field"
        />
      </Field>

      <Field label="What do you need?">
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                service === s
                  ? "border-flame bg-flame text-white"
                  : "border-line bg-white text-ink-soft hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Project details" required>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us a little about what you're building…"
          className="field resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-1 w-full disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        {status !== "sending" && (
          <Icon name="ArrowUpRight" className="h-4 w-4" strokeWidth={2} />
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-flame-deep" role="alert">
          Something went wrong sending your message. Please email us directly at
          michelosinkende@gmail.com or call +260 979 373 283.
        </p>
      )}
      <p className="text-xs text-muted">
        Your enquiry is sent straight to our team. We typically reply within one
        business day.
      </p>

      <style jsx>{`
        :global(.field) {
          width: 100%;
          border: 1px solid #eae7e1;
          background: #fff;
          border-radius: 0.9rem;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          color: #0b0b0f;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        :global(.field:focus) {
          outline: none;
          border-color: #ff5a1f;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.14);
        }
        :global(.field::placeholder) {
          color: #b3b3ba;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-flame"> *</span>}
      </span>
      {children}
    </label>
  );
}
