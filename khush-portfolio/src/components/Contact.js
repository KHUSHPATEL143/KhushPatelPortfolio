import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const toEmail = process.env.REACT_APP_EMAILJS_TO_EMAIL || 'khushpatel9979@gmail.com';

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'warning',
        message: 'EmailJS keys are not configured yet. Add the values in .env before deploying.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            to_email: toEmail,
            message: form.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('EmailJS request failed');
      }

      setForm({ name: '', email: '', message: '' });
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Thank you for reaching out.',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Sending failed. Please email me directly at khushpatel9979@gmail.com',
      });
    }

    setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-label">08 — Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project idea, freelance inquiry, or just want to say hi? My inbox is always open.
        </p>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <div className="contact__info-card card">
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div>
                  <div className="contact__info-label">Email</div>
                  <a href="mailto:khushpatel9979@gmail.com" className="contact__info-value">
                    khushpatel9979@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <div className="contact__info-label">Location</div>
                  <span className="contact__info-value">Gujarat, India</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📱</span>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <a href="tel:+919409223427" className="contact__info-value">
                    +91 9409223427
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__availability">
              <div className="contact__avail-dot" />
              <span>Available for freelance & internships</span>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact__form card" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Khush Patel"
                className="contact__input"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="contact__input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or just say hi..."
                className="contact__input contact__textarea"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary contact__submit ${status.type === 'loading' ? 'loading' : ''}`}
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Sending...' : '→ Send Message'}
            </button>

            {status.message && (
              <div className={`contact__feedback contact__feedback--${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
