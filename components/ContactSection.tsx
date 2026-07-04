'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Form action is empty - ready for Formspree integration
    // To integrate Formspree: change the form action to your Formspree endpoint
    // or use the /api/inquiry route
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };

  const openWeChatModal = () => {
    const event = new CustomEvent('openWeChatModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label fade-up">Get In Touch</div>
        <h2 className="section-title fade-up stagger-1" style={{ marginBottom: '3rem' }}>
          Let&apos;s Discuss Your Needs
        </h2>
        <div className="contact-grid">
          <div className="contact-info fade-up stagger-2">
            <p>
              Whether you need a specific part, a custom solution, or want to discuss bulk orders, our team is ready to help. Reach out through any channel below or fill in the inquiry form.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">&#128222;</div>
                <div>
                  <h4>Phone</h4>
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
                  <h4>Email</h4>
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
                  <h4>Address</h4>
                  <p>Mapdian Development Zone,<br />Anping County, Hebei Province,<br />China</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper fade-up stagger-3">
            <h3>Online Inquiry</h3>
            <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            {!submitted ? (
              <form id="inquiryForm" action="" method="POST" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input type="text" name="company" placeholder="Your Company Ltd." />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="you@company.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" name="phone" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Product Interest</label>
                  <select name="product">
                    <option value="">Select a category...</option>
                    <option value="steering-arms">Steering Arms</option>
                    <option value="steering-knuckles">Steering Knuckles</option>
                    <option value="vertical-arms">Vertical Arms / Drop Arms</option>
                    <option value="drive-shafts">Drive Shafts</option>
                    <option value="agricultural">Agricultural Machinery Parts</option>
                    <option value="john-deere">John Deere Series</option>
                    <option value="custom">Custom / OEM Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea name="message" required placeholder="Please describe the parts you need, including model numbers, quantities, and any specifications..." />
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Inquiry'}
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
                  Inquiry Sent!
                </h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>
                  Thank you for your interest. We&apos;ll respond within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
