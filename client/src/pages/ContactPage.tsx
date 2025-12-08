import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageSquare, User, AtSign, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactImg from "@assets/generated_images/abstract_contact_and_communication_concept_with_digital_network_in_blue_and_teal.png";

// Form Schema Validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "يجب أن يحتوي الاسم على حرفين على الأقل",
  }),
  email: z.string().email({
    message: "البريد الإلكتروني غير صحيح",
  }),
  phone: z.string().min(10, {
    message: "يجب أن يتكون رقم الهاتف من 10 أرقام على الأقل",
  }),
  subject: z.string().min(5, {
    message: "عنوان الرسالة قصير جداً",
  }),
  message: z.string().min(10, {
    message: "الرسالة قصيرة جداً، يرجى كتابة تفاصيل أكثر",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Handle Submit
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      form.reset();
      toast({
        title: "تم إرسال رسالتك بنجاح!",
        description: "شكراً لتواصلك معنا، سيقوم فريقنا بالرد عليك في أقرب وقت.",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى لاحقاً.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background font-tajawal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        
        {/* Header Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-6"
              >
                تواصل معنا
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                نسعد باستقبال استفساراتكم ومقترحاتكم لخدمة قطاع النقل وتطويره
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info & Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-primary text-white rounded-3xl p-8 shadow-xl overflow-hidden relative">
                <img 
                  src={contactImg} 
                  alt="Contact Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
                <div className="relative z-10 space-y-8">
                  <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">العنوان</p>
                      <p className="font-semibold">جدة، المملكة العربية السعودية</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">البريد الإلكتروني</p>
                      <p className="font-semibold">info@transport-support.sa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">الهاتف</p>
                      <p className="font-semibold">+966 12 345 6789</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-primary">ساعات العمل</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>8:00 صباحاً - 4:00 مساءً</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة - السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">أرسل رسالة</h3>
                <p className="text-muted-foreground">املأ النموذج أدناه وسيتم الرد عليك في أقرب وقت</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الاسم الكامل</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="أدخل اسمك" className="pr-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>رقم الهاتف</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="05xxxxxxxx" className="pr-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <AtSign className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="email@example.com" className="pr-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>عنوان الرسالة</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <FileText className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="بخصوص..." className="pr-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نص الرسالة</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Textarea 
                              placeholder="اكتب تفاصيل رسالتك هنا..." 
                              className="min-h-[120px] pr-10 resize-none" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "جاري الإرسال..."
                    ) : (
                      <span className="flex items-center gap-2">
                        إرسال الرسالة <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
