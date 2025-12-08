import { motion } from "framer-motion";
import structureImg from "@assets/generated_images/abstract_organizational_structure_concept_with_connecting_nodes_in_blue_and_teal.png";

export default function Structure() {
  const departments = [
    "الحوكمة",
    "الشؤون الإدارية والمالية",
    "الاتصال المؤسسي",
    "التطوع",
    "تنمية الموارد المالية",
    "المشاريع"
  ];

  return (
    <section id="structure" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">الهيكل التنظيمي</h2>
          <p className="text-muted-foreground text-lg">
            التسلسل الهرمي الذي يوضح الأدوار والمسؤوليات لضمان كفاءة العمل
          </p>
        </div>

        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

          {/* Chart Visualization */}
          <div className="max-w-5xl mx-auto">
            
            {/* Level 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="bg-primary text-white px-12 py-6 rounded-2xl shadow-xl text-xl font-bold relative border-4 border-white ring-4 ring-primary/20">
                الجمعية العمومية
                <div className="absolute -bottom-12 left-1/2 w-1 h-12 bg-primary/30 -translate-x-1/2" />
              </div>
            </motion.div>

            {/* Level 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="bg-white text-primary px-10 py-5 rounded-xl shadow-lg border-2 border-primary text-lg font-bold relative z-10">
                مجلس الإدارة
                <div className="absolute -bottom-12 left-1/2 w-1 h-12 bg-primary/30 -translate-x-1/2" />
              </div>
            </motion.div>

            {/* Level 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-16 relative"
            >
              <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-primary/30 -z-10 hidden md:block" />
              
              <div className="flex gap-8 items-center">
                 {/* Secretary (Side node) */}
                 <div className="hidden md:block bg-slate-100 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium shadow-sm absolute right-[15%]">
                  سكرتير
                </div>

                <div className="bg-secondary text-white px-10 py-5 rounded-xl shadow-lg text-lg font-bold relative z-10">
                  المدير التنفيذي
                  <div className="absolute -bottom-16 left-1/2 w-1 h-16 bg-primary/30 -translate-x-1/2 hidden md:block" />
                </div>
              </div>
            </motion.div>

            {/* Level 4 - Departments Grid */}
            <div className="relative mt-8">
               {/* Connector Line Horizontal */}
               <div className="absolute -top-8 left-4 right-4 h-1 bg-primary/30 rounded-full hidden md:block" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 md:pt-0">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="relative"
                  >
                    {/* Vertical Connector for Desktop */}
                    <div className="absolute -top-8 left-1/2 w-1 h-8 bg-primary/30 -translate-x-1/2 hidden md:block" />
                    
                    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100 h-full flex items-center justify-center text-center hover:shadow-lg hover:border-primary/30 transition-all">
                      <span className="font-medium text-slate-700 text-sm md:text-base">{dept}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
          
          <div className="mt-20 rounded-3xl overflow-hidden h-64 md:h-80 relative">
             <img src={structureImg} alt="Structure Abstract" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8 md:p-16">
               <h3 className="text-3xl md:text-4xl font-bold text-white max-w-lg leading-tight">
                 بنية مؤسسية متينة تضمن الاستدامة والنمو
               </h3>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
