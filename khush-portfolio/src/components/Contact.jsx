import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const toEmail = process.env.REACT_APP_EMAILJS_TO_EMAIL || 'khushpatel9979@gmail.com';

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Your email app has been opened with the message ready to send.' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
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
      setStatus({ type: 'success', message: 'Message sent successfully. Thank you.' });
    } catch {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      setStatus({ type: 'warning', message: 'Direct sending failed, so your email app was opened instead.' });
    }

    setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
  };

  const statusColors = {
    success: 'text-green-400 bg-green-400/10',
    error: 'text-red-400 bg-red-400/10',
    warning: 'text-yellow-400 bg-yellow-400/10',
    loading: 'text-accent bg-accent/10',
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container-main">
        <div className="font-mono text-xs tracking-widest uppercase text-text-dim mb-3">08 - Contact</div>
        <h2 className="font-display text-4xl font-extrabold text-text mb-3">Get In Touch</h2>
        <p className="text-text-muted max-w-xl mb-12">Have a project idea, freelance inquiry, or just want to say hi? My inbox is always open.</p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          <div>
            <div className="card-base p-6 mb-5">
              {[
                ['Email', 'khushpatel9979@gmail.com', 'mailto:khushpatel9979@gmail.com'],
                ['Location', 'Gujarat, India', null],
              ].map(([label, value, href]) => (
                <div key={label} className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-text-dim">{label}</div>
                    {href ? (
                      <a href={href} className="text-text text-sm hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <span className="text-text text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-text-dim">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-dot" />
              Available for freelance and internships
            </div>
          </div>

          <form className="card-base p-7" onSubmit={handleSubmit}>
            {[
              { id: 'contact-name', label: 'Your Name', name: 'name', type: 'text', placeholder: 'Khush Patel' },
              { id: 'contact-email', label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
            ].map((field) => (
              <div key={field.name} className="mb-5">
                <label htmlFor={field.id} className="block font-mono text-[0.65rem] uppercase tracking-widest text-text-dim mb-2">{field.label}</label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-dim/40 focus:outline-none focus:border-accent/50 transition"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="contact-message" className="block font-mono text-[0.65rem] uppercase tracking-widest text-text-dim mb-2">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-dim/40 focus:outline-none focus:border-accent/50 transition resize-y"
              />
            </div>

            <button type="submit" disabled={status.type === 'loading'} className="btn-primary w-full justify-center disabled:opacity-60">
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <p className="mt-3 font-mono text-xs text-text-dim">
              If direct sending is unavailable, the form will open your email app with the message filled in.
            </p>

            {status.message && (
              <p className={`mt-4 text-sm px-4 py-3 rounded-xl font-mono ${statusColors[status.type] || ''}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
