


import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type for request body
interface SubscriptionRequest {
  email: string;
}

// Environment variables for email configuration
const OWNER_EMAIL = process.env.OWNER_EMAIL;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Email validation function
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(req: NextRequest) {
  // Check environment variables
  if (!OWNER_EMAIL || !EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    console.error('Missing email configuration in environment variables');
    return NextResponse.json(
      { message: 'Server configuration error: Email settings missing' },
      { status: 500 }
    );
  }

  try {
    // Parse and validate request body
    const { email }: SubscriptionRequest = await req.json();
    
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Only for testing, remove in production
      }
    });

    // Format current time in Cambodia (Asia/Phnom_Penh)
    const timeInCambodia = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Phnom_Penh',
      dateStyle: 'full',
      timeStyle: 'long'
    }).format(new Date());

    // Email content
    const mailOptions = {
      from: `"Origins Studios" <${EMAIL_USER}>`,
      to: OWNER_EMAIL,
      subject: 'New Website Subscription',
      text: `New subscription from: ${email}\nReceived at: ${timeInCambodia}`,
      html: `
        <h2>New Website Subscription</h2>
        <p>Email: <strong>${email}</strong></p>
        <p>Received at: ${timeInCambodia}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Thank you for subscribing! We will be in touch soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing subscription:', error);

    let errorMessage = 'Failed to process subscription. Please try again later.';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email service authentication failed';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Email server connection failed';
      }
    }

    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
