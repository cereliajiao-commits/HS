type NotifyPayload = {
  subject: string;
  text: string;
};

export async function sendNotification(payload: NotifyPayload) {
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  if (!webhookUrl) return { sent: false, reason: 'missing_webhook' as const };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return { sent: res.ok, reason: res.ok ? 'ok' : 'webhook_failed' as const };
  } catch {
    return { sent: false, reason: 'webhook_error' as const };
  }
}
