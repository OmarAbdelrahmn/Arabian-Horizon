import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import visionImg from "@assets/generated_images/abstract_vision_concept_with_horizon_and_futuristic_compass_in_blue_and_teal.png";
import missionImg from "@assets/generated_images/abstract_mission_concept_with_arrow_or_path_in_blue_and_teal.png";
import valuesImg from "@assets/generated_images/abstract_values_concept_with_shield_or_heart_in_blue_and_teal.png";
import goalsImg from "@assets/generated_images/abstract_goals_concept_with_target_or_growth_chart_in_blue_and_teal.png";
import { CheckCircle2 } from "lucide-react";

export default function Strategy() {
  const features = [
    {
      title: "الرؤية",
      image: visionImg,
      description: "منظومة مستدامة في تقديم الخدمات اللوجستية للنقل البري وتعظيم أثرها.",
      details: "تحدد الرؤية الشكل والاتجاه المستقبلي للجمعية وتصف الطموح المستقبلي الذي تسعى الجمعية إلى تحقيقه، حيث تكون طموحة ومحفزة وذات أثر واضح.",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "الرسالة",
      image: missionImg,
      description: "تقديم أفضل خدمات الدعم اللوجستي في مجال النقل البري للمستفيدين وتمكين العاملين والمهتمين به وتعزيز دورهم في المجتمع من خلال مبادرات نوعية وشراكات مستدامة للمساهمة في مستهدفات رؤية المملكة 2030.",
      details: "تحدد سبب وجود الجمعية وما تقدمه للمستفيدين (ماذا نقدم؟ لمن نقدم؟ كيف نقدم؟ ولماذا؟).",
      bg: "bg-teal-50 dark:bg-teal-900/20"
    }
  ];

  const values = [
    { title: "الريادة", desc: "الريادة في تعزيز كفاءة تقديم خدمات الدعم اللوجستي." },
    { title: "الابتكار", desc: "تبني الابتكار الداعم إلى التميز لإيجاد بيئة عمل جاذبة للكفاءات ومحفزة للإبداع." },
    { title: "الجودة", desc: "نسعى إلى التمسك بأعلى المعايير المهنية ومتحرين الجودة في جميع أعمالنا." },
    { title: "التمكين", desc: "نعمل بجهد لتطوير نموذج عمل مستدام لتمكين المستفيد." },
    { title: "التكامل", desc: "نتكامل مع الأطراف ذات العلاقة ونستثمر الطاقات." }
  ];

  const objectives = [
    "تقديم الخدمات اللوجستية في النقل البري.",
    "تعزيز التوعية المجتمعية في مجال النقل البري.",
    "بناء شراكات استراتيجية فاعلة وطرح فرص تطوعية جاذبة.",
    "تطوير البنية المؤسسية وتجويد الأداء العام."
  ];

  return (
    <section id="strategy" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">التوجه الاستراتيجي</h2>
          <p className="text-muted-foreground text-lg">
            الأسس والمبادئ التي توجه نشاطات الجمعية وتشكل هويتها المستقبلية
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md mb-2">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-8 p-8">
                  <p className="text-lg font-semibold text-primary mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-justify text-sm border-t pt-4">
                    {item.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary mb-2">القيم المؤسسية</h3>
            <div className="h-1 w-20 bg-secondary rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm border hover:border-secondary/50 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">{val.title}</h4>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">الأهداف الاستراتيجية</h3>
              <div className="space-y-4">
                {objectives.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/70 transition-colors"
                  >
                    <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg font-medium text-foreground">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src={goalsImg} 
                alt="Strategic Objectives" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply" />
              <div className="absolute bottom-8 right-8 text-white max-w-xs">
                <p className="text-lg font-medium opacity-90">
                  "نسعى لتعظيم الأثر في خدمة المجتمع وتحقيق الاستدامة"
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
