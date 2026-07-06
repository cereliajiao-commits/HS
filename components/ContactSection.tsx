'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
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

  const openWeChatModal = () => {
    const event = new CustomEvent('openWeChatModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label fade-up">{t('contact.label')}</div>
        <h2 className="section-title fade-up stagger-1" style={{ marginBottom: '3rem' }}>
          {t('contact.title')}
        </h2>
        <div className="contact-grid">
          <div className="contact-info fade-up stagger-2">
            <p>
              {t('contact.subtitle')}
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">&#128222;</div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <p>
                    <a href="tel:+8613613183888">+86 136 1318 3888</a><br />
                    <a href="tel:+8618732893111">+86 187 3289 3111</a><br />
                    <a href="tel:+8603187739998">+86 0318-7739998</a>
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">&#9993;</div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <p><a href="mailto:chinahs@hotmail.com">chinahs@hotmail.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">&#128172;</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>
                    <a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer">+86 177 5109 7209</a><br />
                    Click to chat directly
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">&#128241;</div>
                <div>
                  <h4>WeChat</h4>
                  <p>
                    <a href="#" onClick={(e) => { e.preventDefault(); openWeChatModal(); }} style={{ color: 'var(--white)', textDecoration: 'underline' }}>
                      Click to view QR code
                    </a><br />
                    ID: <strong style={{ color: 'var(--white)' }}>hongsheng_qipei</strong>
                  </p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">&#128205;</div>
                <div>
                  <h4>{t('contact.address')}</h4>
                  <p>{t('contact.addressValue')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper fade-up stagger-3">
            <h3>{t('contact.formTitle')}</h3>
            <p>{t('contact.formSubtitle')}</p>
            {!submitted ? (
              <form id="inquiryForm" action="" method="POST" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.name')}</label>
                    <input type="text" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label>{t('contact.company')}</label>
                    <input type="text" name="company" placeholder="Your Company Ltd." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.emailField')}</label>
                    <input type="email" name="email" required placeholder="you@company.com" />
                  </div>
                  <div className="form-group">
                    <label>{t('contact.phoneField')}</label>
                    <input type="tel" name="phone" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('contact.productInterest')}</label>
                  <select name="product">
                    <option value="">{t('contact.selectCategory')}</option>
                    <option value="steering-arms">{t('products.steeringArms')}</option>
                    <option value="steering-knuckles">{t('products.steeringKnuckles')}</option>
                    <option value="vertical-arms">{t('products.verticalArms')}</option>
                    <option value="drive-shafts">{t('products.driveShafts')}</option>
                    <option value="custom">OEM / Custom</option>
                    <option value="other">{t('products.others')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('contact.message')}</label>
                  <textarea name="message" required placeholder="Please describe the parts you need, including model numbers, quantities, and any specifications..." />
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                  {submitting ? t('contact.sending') : t('contact.submit')}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#10003;</div>
                <h3 style={{ color: 'var(--white)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                  {t('contact.success')}
                </h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>
                  {t('contact.successMsg')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
