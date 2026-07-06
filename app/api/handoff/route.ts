import { NextRequest, NextResponse } from 'next/server';
import { sendNotification } from '@/lib/notify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const message = String(body?.message ?? '').trim();
    const language = String(body?.language ?? 'en');

    if (!message) {
      return NextResponse.json({ success: false, message: 'Message is required' }, { status: 400 });
    }

    void sendNotification({
      subject: 'HS Website Handoff',
      text: `Language: ${language}\nMessage: ${message}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Handoff recorded',
        status: 'queued',
        language,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to record handoff' },
      { status: 500 }
    );
  }
}
