import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic Server-side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // TODO: Add your email sending logic here (e.g., using Resend, SendGrid, or Nodemailer)
    // Example: 
    // await sendEmail({ to: 'info@srpss.edu.in', subject: 'New Inquiry', text: message });

    console.log('New Contact Form Submission:', { name, email, phone, message });

    return NextResponse.json(
      { success: true, message: 'Thank you! Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}