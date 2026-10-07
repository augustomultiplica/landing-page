import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import SupportCta from "@/components/SupportCta";
import Stats from "@/components/Stats";
import Feedback from "@/components/Feedback";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <Testimonial />
        <Showcase />
        <Faq />
        <SupportCta />
        <Stats />
        <Feedback />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
