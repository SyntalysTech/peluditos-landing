import {
  Navbar,
  Hero,
  Benefit,
  HowItWorks,
  Stats,
  Emotional,
  Features,
  MobileApp,
  SpainMap,
  Pricing,
  ContactForm,
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
        <MobileApp />
        <SpainMap />
        <Pricing />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
