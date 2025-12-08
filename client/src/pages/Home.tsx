import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Strategy from "@/components/Strategy";
import Stakeholders from "@/components/Stakeholders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-tajawal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategy />
        <Stakeholders />
      </main>
      <Footer />
    </div>
  );
}
