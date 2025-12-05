# EmailJS Setup Instructions

## 📧 Setting Up Email Functionality

I've integrated EmailJS into your contact form. Follow these steps to complete the setup:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email: **hasibadi22@gmail.com**
5. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Message from {{user_name}}

**Body:**
```
You have received a new message from your portfolio contact form:

From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save and copy the **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update Your Code
Open `src/components/sections/Contact.tsx` and replace these values (around line 23-27):

```typescript
const result = await emailjs.sendForm(
    'YOUR_SERVICE_ID',        // Replace with your Service ID
    'YOUR_TEMPLATE_ID',       // Replace with your Template ID
    formRef.current!,
    'YOUR_PUBLIC_KEY'         // Replace with your Public Key
);
```

### Step 6: Test
1. Fill out the contact form on your website
2. Submit the form
3. Check **hasibadi22@gmail.com** for the email!

## ✨ Features Implemented
- ✅ Form validation (all fields required)
- ✅ Loading state while sending
- ✅ Success/error messages
- ✅ Auto-reset form after successful submission
- ✅ Email sent directly to hasibadi22@gmail.com

## 🔒 Security Note
EmailJS handles emails client-side securely. Your Public Key is safe to expose in the frontend code.

## 📝 Alternative: Environment Variables (Optional)
For better security, you can use environment variables:

1. Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use:
```typescript
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

That's it! Your contact form will now send emails directly to your inbox! 🎉
