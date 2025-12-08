import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendToTelegram } from "./services/telegram";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact Form Route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;

      // التحقق من البيانات
      if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'جميع الحقول مطلوبة' 
        });
      }

      const formData = { name, email, phone, subject, message };

      // إرسال البيانات بشكل متوازٍ
      const results = await Promise.allSettled([
        sendToTelegram(formData),
      ]);

      // التحقق من النتائج
      const [telegramResult] = results;

      const response = {
        success: true,
        message: 'تم إرسال الرسالة بنجاح',
        details: {
          telegram: telegramResult.status === 'fulfilled',
        }
      };

      // تسجيل الأخطاء إن وجدت
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const service = ['Telegram', 'WhatsApp', 'Google Sheets'][index];
          console.error(`${service} failed:`, result.reason);
        }
      });

      // إرجاع استجابة ناجحة حتى لو فشلت إحدى الخدمات
      res.status(200).json(response);

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'حدث خطأ في إرسال الرسالة' 
      });
    }
  });

  return httpServer;
}