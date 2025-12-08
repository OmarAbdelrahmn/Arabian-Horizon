import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN || '', { polling: false });

export async function sendToTelegram(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const chatId = process.env.TELEGRAM_CHAT_ID || '';
  
  const message = `
🔔 *رسالة جديدة من الموقع*

👤 *الاسم:* ${formData.name}
📧 *البريد الإلكتروني:* ${formData.email}
📱 *الهاتف:* ${formData.phone}
📝 *الموضوع:* ${formData.subject}

💬 *الرسالة:*
${formData.message}
  `.trim();

  try {
    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    return { success: true };
  } catch (error) {
    console.error('Telegram Error:', error);
    throw new Error('Failed to send to Telegram');
  }
}