import { motion } from "framer-motion";
import { Users, Building2, UserCircle, Briefcase, Landmark, Handshake, HeartHandshake, Eye } from "lucide-react";

export default function Stakeholders() {
  const stakeholders = [
    { name: "الإدارة العليا", icon: <Briefcase className="w-8 h-8" /> },
    { name: "الجهات الرقابية والإشرافية", icon: <Eye className="w-8 h-8" /> },
    { name: "المجتمع", icon: <Users className="w-8 h-8" /> },
    { name: "المستفيد", icon: <UserCircle className="w-8 h-8" /> },
    { name: "الموظفون", icon: <Building2 className="w-8 h-8" /> },
    { name: "الجهات المماثلة", icon: <Landmark className="w-8 h-8" /> },
    { name: "الشركاء", icon: <Handshake className="w-8 h-8" /> },
    { name: "المانحون", icon: <HeartHandshake className="w-8 h-8" /> },
  ];

  return (
    <section id="stakeholders" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">أصحاب المصلحة</h2>
            <div className="h-1 w-20 bg-secondary rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl">
              شركاء النجاح الذين نعتز بالعمل معهم لخدمة قطاع النقل وتطويره
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stakeholders.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-8 bg-muted/20 border border-border rounded-xl hover:bg-white hover:shadow-lg hover:border-secondary/20 transition-all duration-300 cursor-default h-full">
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-center text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
