import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Target, CalendarCheck, TrendingUp, Award } from "lucide-react";
import performanceImg from "@assets/generated_images/abstract_performance_indicators_and_analytics_concept_in_blue_and_teal.png";

export default function Initiatives() {
  const objectives = [
    {
      id: "obj1",
      title: "الهدف الأول",
      desc: "تقديم الخدمات اللوجستية في النقل البري",
      owner: "المشاريع",
      initiatives: [
        "مبادرة إمدادات لوجستية (حلول/خدمات)"
      ],
      kpis: [
        "عدد الخدمات المقدمة",
        "عدد المستفيدين",
        "قياس رضا المستفيدين"
      ],
      icon: <TruckIcon className="w-6 h-6" />
    },
    {
      id: "obj2",
      title: "الهدف الثاني",
      desc: "تعزيز التوعية المجتمعية في مجال النقل البري",
      owner: "المشاريع",
      initiatives: [
        "مبادرة مجتمع واعي (حملات توعوية، فيديوهات، انفوجرافيك...)",
        "ديوانية دعم النقل المعرفية (تدريب، ورش، زيارات...)"
      ],
      kpis: [
        "عدد المناشط المنفذة",
        "عدد المستفيدين",
        "قياس رضا المستفيدين"
      ],
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: "obj3",
      title: "الهدف الثالث",
      desc: "بناء شراكات استراتيجية فاعلة وطرح فرص تطوعية",
      owner: "الاتصال المؤسسي / التطوع",
      initiatives: [
        "شراكات فاعلة",
        "وسام دعم النقل للتطوع"
      ],
      kpis: [
        "عدد الشراكات الموقعة",
        "نسبة فاعلية الشراكات",
        "عدد الفرص التطوعية",
        "عدد المتطوعين",
        "عدد الساعات التطوعية"
      ],
      icon: <HandshakeIcon className="w-6 h-6" />
    },
    {
      id: "obj4",
      title: "الهدف الرابع",
      desc: "تطوير البنية المؤسسية وتجويد الأداء العام",
      owner: "المدير التنفيذي",
      initiatives: [
        "التميز المؤسسي",
        "تعزيز الصورة الذهنية",
        "الاستدامة المالية"
      ],
      kpis: [
        "نسبة كفاءة الموظفين",
        "نسبة درجة الحوكمة",
        "عدد الحملات الإعلامية",
        "قيمة الإيرادات المالية",
        "نسبة رضا أصحاب المصلحة"
      ],
      icon: <BuildingIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">مؤشرات القياس والمبادرات</h2>
          <p className="text-muted-foreground text-lg">
            خارطة الطريق التنفيذية لتحقيق الأهداف الاستراتيجية للجمعية
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Image Card */}
          <div className="lg:col-span-1">
            <Card className="h-full overflow-hidden border-none shadow-lg bg-primary text-white relative">
              <img 
                src={performanceImg} 
                alt="Performance" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <BarChart3 className="w-16 h-16 mb-6 text-secondary" />
                <h3 className="text-3xl font-bold mb-4">قياس الأداء</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                  نعتمد منهجية دقيقة في قياس الأثر من خلال مؤشرات أداء واضحة ومبادرات تنفيذية محددة لضمان تحقيق مستهدفاتنا الاستراتيجية.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-secondary" />
                    <span>4 أهداف استراتيجية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    <span>8 مبادرات رئيسية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary" />
                    <span>16 مؤشر قياس</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="obj1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-2 bg-transparent">
                {objectives.map((obj) => (
                  <TabsTrigger 
                    key={obj.id} 
                    value={obj.id}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md py-3 rounded-xl border border-transparent data-[state=active]:border-border"
                  >
                    <span className="hidden md:inline">{obj.title}</span>
                    <span className="md:hidden text-xs">{obj.title.replace("الهدف ", "")}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {objectives.map((obj) => (
                <TabsContent key={obj.id} value={obj.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-none shadow-md overflow-hidden">
                      <CardHeader className="bg-white border-b pb-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl font-bold text-primary mb-2">
                              {obj.desc}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              <span>مالك الهدف: {obj.owner}</span>
                            </div>
                          </div>
                          <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                            {obj.icon}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse">
                          
                          <div className="p-6 bg-blue-50/30">
                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                              <CalendarCheck className="w-5 h-5 text-secondary" />
                              المبادرات والأنشطة
                            </h4>
                            <ul className="space-y-3">
                              {obj.initiatives.map((init, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  {init}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-6 bg-teal-50/30">
                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                              <BarChart3 className="w-5 h-5 text-secondary" />
                              مؤشرات القياس
                            </h4>
                            <ul className="space-y-3">
                              {obj.kpis.map((kpi, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {kpi}
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

      </div>
    </section>
  );
}

function TruckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
  )
}

function UsersIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )
}

function HandshakeIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-1.73l-1-1.73"/><path d="m11 17-1.9-2.08a2 2 0 0 0-2.7-2.97L5 14a4 4 0 0 0 0 8c4.55 0 7.2-3.4 8-6Z"/><path d="m20.3 13.7-3-3.6a2 2 0 0 0-2.7-2.2L14 8"/><path d="m15 11-1-1"/><path d="M17.7 11.6 22 16a4 4 0 0 1 0 6c-4.6 0-7.3-3.4-8-6.6"/></svg>
  )
}

function BuildingIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  )
}
