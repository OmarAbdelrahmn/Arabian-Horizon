import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">عن الجمعية</h2>
              <div className="h-1 w-20 bg-secondary rounded-full" />
            </div>

            <div className="prose prose-lg text-muted-foreground text-justify leading-loose">
              <p>
                جمعية دعم النقل والخدمات اللوجستية الأهلية هي جمعية أهلية بتصريح رقم (1000736800) ومقرها جدة ونطاق العمل يشمل منطقة مكة المكرمة تحت إشراف وزارة النقل والخدمات اللوجستية.
              </p>
              <p>
                وتعد الجمعية من أوائل الجمعيات المتخصصة في المملكة في مجال دعم النقل وتقديم الخدمات الداعمة والمساندة لسائقي النقل البري وسد احتياجاتهم، وكذلك التوعية المجتمعية الداعمة في هذا المجال والتدريب المتخصص فيه.
              </p>
              <p>
                والمأمول أن تُثبت حضورها في المنطقة من خلال المبادرات النوعية والمتخصصة في هذا المجال خلال فترة زمنية وجيزة، ونتطلع إلى حضور أكبر في المرحلة المقبلة في دعم وإسناد سائقي النقل البري وسد احتياجاتهم وتلبية تطلعاتهم.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "دعم سائقي النقل البري",
                "سد الاحتياجات والمساندة",
                "التدريب المتخصص",
                "التوعية المجتمعية"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary h-6 w-6 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-border/50">
              <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">نحو مستقبل لوجستي واعد</h3>
                  <p className="text-muted-foreground">
                    نعمل جنباً إلى جنب مع القطاع الحكومي والخاص لتحقيق مستهدفات الرؤية الوطنية في قطاع النقل.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center text-sm text-muted-foreground border-t pt-6">
                <div>
                  <span className="block font-bold text-primary text-xl">جدة</span>
                  <span>المقر الرئيسي</span>
                </div>
                <div className="text-left">
                  <span className="block font-bold text-primary text-xl">1000736800</span>
                  <span>رقم التصريح</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
