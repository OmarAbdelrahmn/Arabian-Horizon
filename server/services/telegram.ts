export async function sendToTelegram(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!botToken || !chatId) {
    console.error('Telegram credentials missing');
    throw new Error('Telegram configuration is missing');
  }
  
  const messageText = `
🔔 *رسالة جديدة من الموقع*

👤 *الاسم:* ${formData.name}
📧 *البريد الإلكتروني:* ${formData.email}
📱 *الهاتف:* ${formData.phone}
📝 *الموضوع:* ${formData.subject}

💬 *الرسالة:*
${formData.message}
  `.trim();

  const url = `https://api.telegram.org/bot8550653245:AAEu0ZjUE0Tb1tU9z5onLN-v1303osh7EO8/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      throw new Error(`Telegram API returned ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send to Telegram:', error);
    throw error;
  }
}