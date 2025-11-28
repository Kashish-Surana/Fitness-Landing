import  Hero from "@/components/Hero";
import  Features from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { PricingSection as Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
