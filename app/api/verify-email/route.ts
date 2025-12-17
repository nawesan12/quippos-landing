import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Using ZeroBounce API for email validation
    const ZEROBOUNCE_API_KEY = process.env.ZEROBOUNCE_API_KEY;

    if (!ZEROBOUNCE_API_KEY) {
      // If API key is not set, skip verification
      console.warn('ZEROBOUNCE_API_KEY not set, skipping email verification');
      return NextResponse.json({ valid: true, skipVerification: true });
    }

    const response = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Email verification service unavailable');
    }

    const data = await response.json();

    // ZeroBounce status codes:
    // valid - email exists and is safe to send to
    // invalid - email does not exist
    // catch-all - domain accepts all emails (risky)
    // unknown - email verification failed
    // spamtrap - email is a spam trap
    // abuse - email is known for abuse
    // do_not_mail - email should not be mailed

    const validStatuses = ['valid'];
    const isValid = validStatuses.includes(data.status);

    return NextResponse.json({
      valid: isValid,
      status: data.status,
      reason: data.sub_status || data.status,
    });
  } catch (error) {
    console.error('Error verifying email:', error);
    // On error, allow the email through to avoid blocking legitimate users
    return NextResponse.json({
      valid: true,
      error: 'Verification service unavailable',
      skipVerification: true,
    });
  }
}
