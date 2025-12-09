import {
  Navbar,
  Hero,
  Benefit,
  HowItWorks,
  Stats,
  Emotional,
  Features,
  SpainMap,
  Pricing,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefit />
        <HowItWorks />
        <Stats />
        <Emotional />
        <Features />
        <SpainMap />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
