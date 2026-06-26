import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import ForWho from "@/components/sections/ForWho";
import SocialProof from "@/components/sections/SocialProof";
import EventDetails from "@/components/sections/EventDetails";
import Instructor from "@/components/sections/Instructor";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <ForWho />
      <EventDetails />
      <Instructor />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
