import { NextRequest, NextResponse } from 'next/server';

// API route for handling form submissions
// This endpoint is ready for Formspree or any other backend integration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Integrate with Formspree or your preferred email service
    // Example Formspree integration:
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // });

    // For now, just return success
    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
