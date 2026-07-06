import { NextRequest, NextResponse } from 'next/server';
import { sendNotification } from '@/lib/notify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    void sendNotification({
      subject: 'HS Website Inquiry',
      text: JSON.stringify(body, null, 2),
    });

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
