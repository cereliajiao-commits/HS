'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { trackEvent } from '@/lib/analytics';

const faqKeys = [
  ['faq.company', 'faq.companyAnswer'],
  ['faq.moq', 'faq.moqAnswer'],
  ['faq.brand', 'faq.brandAnswer'],
  ['faq.quality', 'faq.qualityAnswer'],
  ['faq.delivery', 'faq.deliveryAnswer'],
  ['faq.payment', 'faq.paymentAnswer'],
] as const;

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    trackEvent('generate_lead', { method: 'inquiry_form' });
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      form.reset();
    } catch {
      alert(lang === 'zh' ? '提交失败，请稍后再试，或直接通过 WhatsApp 联系我们。' : 'Submission failed. Please try again later or contact us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const openWeChatModal = () => window.dispatchEvent(new CustomEvent('openWeChatModal'));

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label fade-up">{t('contact.label')}</div>
        <h2 className="section-title fade-up stagger-1" style={{ marginBottom: '3rem' }}>{t('contact.title')}</h2>
        <div className="contact-grid">
          <div className="contact-info fade-up stagger-2">
            <p>{t('contact.subtitle')}</p>
            <div className="faq-list" aria-label={t('faq.ariaLabel')}>
              {faqKeys.map(([questionKey, answerKey], index) => (
                <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={questionKey}>
                  <button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                    <span>{t(questionKey)}</span><span className="faq-plus">+</span>
                  </button>
                  <div className="faq-answer"><p>{t(answerKey)}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form-wrapper fade-up stagger-3">
            <h3>{t('contact.formTitle')}</h3>
            <p>{t('contact.formSubtitle')}</p>
            {!submitted ? (
              <form id="inquiryForm" action="" method="POST" onSubmit={handleSubmit}>
                <div className="form-group"><input type="text" name="company" required placeholder={t('contact.companyPlaceholder')} aria-label={t('contact.company')} /></div>
                <div className="form-group"><input type="email" name="email" required placeholder={t('contact.emailPlaceholder')} aria-label={t('contact.emailField')} /></div>
                <div className="form-group"><input type="tel" name="phone" placeholder={t('contact.phonePlaceholder')} aria-label={t('contact.phoneField')} /></div>
                <div className="form-group"><textarea name="message" required placeholder={t('contact.messagePlaceholder')} aria-label={t('contact.message')} /></div>
                <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>{submitting ? t('contact.sending') : t('contact.submit')}</button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#10003;</div><h3>{t('contact.success')}</h3><p>{t('contact.successMsg')}</p></div>
            )}
            <div className="contact-direct"><a href="https://wa.me/8617751097209" onClick={() => trackEvent('whatsapp_click', { location: 'contact_section' })} target="_blank" rel="noopener noreferrer">WhatsApp</a><span>·</span><a href="mailto:chinahs@hotmail.com">chinahs@hotmail.com</a><span>·</span><button type="button" onClick={openWeChatModal}>WeChat</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
