import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Structure from "@/components/Structure";

export default function StructurePage() {
  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        <Structure />
      </main>
      <Footer />
    </div>
  );
}
