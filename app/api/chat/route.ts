import { NextRequest, NextResponse } from 'next/server';
import { generateChatReply } from '@/lib/chat-engine';
import { sendNotification } from '@/lib/notify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const message = String(body?.message ?? '').trim();

    if (!message) {
      return NextResponse.json({ success: false, message: 'Message is required' }, { status: 400 });
    }

    const result = generateChatReply(message);
    if (result.needsHuman || result.action === 'handoff' || result.action === 'draft_for_human') {
      void sendNotification({
        subject: 'HS Website Chat Handoff',
        text: JSON.stringify(
          {
            message,
            language: result.language,
            intent: result.intent,
            riskLevel: result.riskLevel,
            reply: result.reply,
          },
          null,
          2
        ),
      });
    }
    return NextResponse.json({ success: true, ...result }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process chat message',
      },
      { status: 500 }
    );
  }
}
