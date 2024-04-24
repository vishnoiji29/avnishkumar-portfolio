import { EmailTemplate } from '../../..//components/email-template.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;
    try {
        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ['hi@theavnishkumar.in'],
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name: name, email: email }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error:error.message });
    }
}
