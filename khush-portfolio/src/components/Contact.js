import React, { useState, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      // Using EmailJS — replace these with your actual IDs from emailjs.com
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-label">09 — Contact</div>
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
          <form ref={formRef} className="contact__form card" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">Your Name</label>
              <input
                id="name"
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
              <label className="contact__label" htmlFor="email">Email Address</label>
              <input
                id="email"
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
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                id="message"
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
              className={`btn btn-primary contact__submit ${status === 'sending' ? 'loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' && <span className="contact__spinner" />}
              {status === 'idle' && '→ Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && '✕ Failed — Try Again'}
            </button>

            {status === 'success' && (
              <div className="contact__feedback contact__feedback--success">
                ✓ Thanks! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__feedback contact__feedback--error">
                Something went wrong. Please email me directly at khushpatel9979@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
