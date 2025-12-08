import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        <About />
      </main>
      <Footer />
    </div>
  );
}
