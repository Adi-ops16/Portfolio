import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { user_name, user_email, subject, message } = await request.json();

        if (!user_name || !user_email || !subject || !message) {
            return Response.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: user_email,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #8A2BE2;">New Contact Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Name</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${user_name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${user_email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Subject</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${subject}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
                    <p style="color: #999; font-size: 12px;">This email was sent from your portfolio website contact form.</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return Response.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email send failed:', error);
        return Response.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
