import { Link } from "wouter";
import heroBg from "@/assets/hero_bg.png";
import logo from "@assets/WhatsApp_Image_2025-12-06_at_16.29.21_5c430c44_1765027956774.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="شعار الجمعية"
              className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            نسعى لتعظيم الأثر في خدمة المجتمع والمساهمة في تحقيق مستهدفات رؤية المملكة 2030 من خلال دعم قطاع النقل وتطويره.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/services">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                تعرف على خدماتنا
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
