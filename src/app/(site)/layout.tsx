import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackdropBrain } from "@/components/BackdropBrain";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <BackdropBrain />
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
