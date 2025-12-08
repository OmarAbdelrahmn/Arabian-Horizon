# Web3Forms Setup Guide

## Getting Your Access Key

1. **Visit Web3Forms**: Go to [https://web3forms.com/](https://web3forms.com/)

2. **Create Account**: Sign up for a free account (they offer 250 submissions/month for free)

3. **Get Access Key**: After registration, you'll receive an access key

4. **Update ContactPage.tsx**: 
   - Open `client/src/pages/ContactPage.tsx`
   - Find line 68: `formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');`
   - Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key

## Features

- ✅ Free tier: 250 submissions/month
- ✅ Email notifications to your inbox
- ✅ No backend required
- ✅ Spam protection included
- ✅ Custom email templates
- ✅ Webhook support

## Example Configuration

```typescript
formData.append('access_key', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
```

## Alternative Services

If you prefer other services:
- **Formspree**: [https://formspree.io/](https://formspree.io/)
- **EmailJS**: [https://www.emailjs.com/](https://www.emailjs.com/)
- **Getform**: [https://getform.io/](https://getform.io/)

All work similarly with client-side form submissions.
