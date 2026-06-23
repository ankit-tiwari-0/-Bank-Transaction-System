require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
    },
});

// Verify the connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email server:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Bank Transaction System " <${process.env.EMAIL_USER}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

async function sendRegistrationEmail(userEmail, name) {
    const subject = "🎉 Welcome to Bank Transaction System";

    const text = `
Hello ${name},

Thank you for registering with Bank Transaction System.

Your account has been successfully created and we're excited to have you on board.

Best regards,
Bank Transaction System Team
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#f4f7fa;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.1);">

<!-- Header -->
<tr>
<td align="center"
style="background:linear-gradient(135deg,#0f172a,#1d4ed8);padding:40px;color:white;">

<h1 style="margin:0;font-size:34px;">
🏦 Bank Transaction System
</h1>

<p style="margin-top:15px;font-size:16px;color:#e2e8f0;">
Secure • Fast • Reliable
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px;color:#374151;line-height:1.8;">

<h2 style="color:#111827;">
Hello ${name} 👋
</h2>

<p>
Thank you for registering with <strong>Bank Transaction System</strong>.
Your account has been created successfully.
</p>

<p>
You can now securely manage transactions and access your account anytime.
</p>

<div style="text-align:center;margin:35px 0;">
<a href="http://localhost:5173"
style="
background:#2563eb;
color:white;
text-decoration:none;
padding:14px 30px;
border-radius:8px;
font-size:16px;
font-weight:bold;
display:inline-block;
">
Open Dashboard
</a>
</div>

<hr style="border:none;border-top:1px solid #e5e7eb;">

<p style="color:#6b7280;">
If you didn't create this account, please contact support immediately.
</p>

<p style="margin-top:30px;">
Best Regards,<br>
<strong>Bank Transaction System Team</strong>
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="background:#f9fafb;padding:20px;color:#9ca3af;font-size:13px;">

© 2026 Bank Transaction System. All rights reserved.

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;

    await sendEmail(userEmail, subject, text, html);
}

module.exports = {
    sendEmail};