import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function addToGoogleSheet(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const range = 'الرسائل!A:F'; // يمكنك تغيير اسم الورقة

  const timestamp = new Date().toLocaleString('ar-SA', {
    timeZone: 'Asia/Riyadh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const values = [
    [
      timestamp,
      formData.name,
      formData.email,
      formData.phone,
      formData.subject,
      formData.message
    ]
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return { success: true, updatedRange: response.data.updates?.updatedRange };
  } catch (error) {
    console.error('Google Sheets Error:', error);
    throw new Error('Failed to add to Google Sheets');
  }
}