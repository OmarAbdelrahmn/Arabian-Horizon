import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Strategy from "@/components/Strategy";

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        <Strategy />
      </main>
      <Footer />
    </div>
  );
}
