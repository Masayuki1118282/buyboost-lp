import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Channels from "@/components/Channels";
import Merits from "@/components/Merits";
import Pricing from "@/components/Pricing";
import Strengths from "@/components/Strengths";
import Testimonials from "@/components/Testimonials";
import Risks from "@/components/Risks";
import Flow from "@/components/Flow";
import Company from "@/components/Company";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Channels />
        <Merits />
        <Pricing />
        <Strengths />
        <Testimonials />
        <Risks />
        <Flow />
        <Company />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
