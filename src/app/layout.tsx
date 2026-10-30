import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://advancedintelligentsystems.co.zm";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Advanced Intelligent Systems (AIS) — Software, IT Consultancy & Web Hosting | Lusaka, Zambia",
    template: "%s — AIS",
  },
  description:
    "AIS is a Lusaka-based technology company empowering SMEs with bespoke software development, business intelligence, web hosting and dependable IT support.",
  keywords: [
    "software development Zambia",
    "IT consultancy Lusaka",
    "web hosting Zambia",
    "business intelligence",
    "AIS",
    "Advanced Intelligent Systems",
  ],
  authors: [{ name: "Advanced Intelligent Systems" }],
  openGraph: {
    type: "website",
    locale: "en_ZM",
    url: SITE_URL,
    siteName: "Advanced Intelligent Systems",
    title: "Advanced Intelligent Systems — Software, Data & IT for Zambian SMEs",
    description:
      "Bespoke software, business intelligence, hosting and IT support — engineered for small and medium enterprises in Zambia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Intelligent Systems (AIS)",
    description:
      "Software development, BI, web hosting and IT consultancy in Lusaka, Zambia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
