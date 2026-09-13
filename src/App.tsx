import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Showcase from "./components/Showcase";
import StickyCTA from "./components/StickyCTA";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <StickyCTA />

      <div aria-hidden className="noise" />
    </div>
  );
}
