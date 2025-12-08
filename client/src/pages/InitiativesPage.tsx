import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Initiatives from "@/components/Initiatives";

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        <Initiatives />
      </main>
      <Footer />
    </div>
  );
}
