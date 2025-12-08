import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stakeholders from "@/components/Stakeholders";

export default function StakeholdersPage() {
  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        <Stakeholders />
      </main>
      <Footer />
    </div>
  );
}
