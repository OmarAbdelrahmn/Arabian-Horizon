import { Link } from "wouter";
import heroBg from "@/assets/hero_bg.png";
import logo from "@/assets/l.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Logo - Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-20"
      >
        <img
          src={logo}
          alt="شعار الجمعية"
          className="w-32 md:w-40 lg:w-48 h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Content - Bottom Center */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 md:pb-6 lg:pb-6">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6 text-center"
          >
            <p className="text-md md:text-lg lg:text-2xl text-white leading-relaxed font-medium">
              نسعى لتعظيم الأثر في خدمة المجتمع والمساهمة في تحقيق مستهدفات رؤية المملكة 2030 من خلال دعم قطاع النقل وتطويره.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/services">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-lg">
                  تعرف على خدماتنا
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white/20 text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-lg">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}