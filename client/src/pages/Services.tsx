import { motion } from "framer-motion";
import { CheckCircle2, Truck, Users, BookOpen, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import servicesHero from "@assets/generated_images/professional_truck_driver_training_and_support_services_scene.png";

export default function Services() {
  const services = [
    {
      title: "دعم السائقين",
      description: "تقديم الدعم المادي والمعنوي لسائقي النقل البري وتذليل العقبات التي تواجههم في مسيرتهم المهنية.",
      icon: <Truck className="w-10 h-10 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "التدريب والتطوير",
      description: "برامج تدريبية متخصصة لرفع كفاءة العاملين في قطاع النقل وتأهيلهم وفق أحدث المعايير العالمية.",
      icon: <BookOpen className="w-10 h-10 text-white" />,
      color: "bg-teal-600"
    },
    {
      title: "التوعية المجتمعية",
      description: "نشر الوعي بأهمية قطاع النقل ودوره الحيوي في الاقتصاد الوطني وتعزيز ثقافة السلامة المرورية.",
      icon: <Users className="w-10 h-10 text-white" />,
      color: "bg-slate-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={servicesHero}
              alt="Services Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          </div>
          <div className="container relative z-10 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">خدماتنا</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              نقدم حلولاً متكاملة لدعم وتطوير منظومة النقل البري في المملكة
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`${service.color} p-8 flex items-center justify-center md:w-1/3`}>
                    {service.icon}
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[1, 2].map((i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-secondary ml-2" />
                          <span>ميزة خدمة إضافية {i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">هل تحتاج إلى مساعدة؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              فريقنا جاهز للإجابة على استفساراتكم وتقديم الدعم اللازم. لا تتردد في التواصل معنا.
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
              تواصل معنا الآن
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
