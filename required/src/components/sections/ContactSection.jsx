import { useState } from 'react';
import { CheckCircle2, ExternalLink, Mail, Send } from 'lucide-react';
import { readinessChecks, siteMeta } from '../../data/portfolio';
import SectionIntro from '../common/SectionIntro.jsx';

function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL || siteMeta.email;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: 'warning',
        message:
          'EmailJS keys are not configured yet. Add the values from .env.example before deploying this contact form.',
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formState.name,
            from_email: formState.email,
            to_email: toEmail,
            message: formState.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('EmailJS request failed');
      }

      setFormState({ name: '', email: '', message: '' });
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully. Thank you for reaching out.',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message:
          'Sending failed. Re-check the EmailJS service, template, and public key values before deployment.',
      });
    }
  }

  return (
    <section className="section-shell" id="contact">
      <SectionIntro
        eyebrow="Contact"
        title="Frontend contact form prepared for EmailJS"
        copy="The form is wired for direct frontend sending through EmailJS. Configure the environment variables before deployment to make it live."
      />
      <div className="contact-layout">
        <form className="contact-form panel-card" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
              placeholder="Tell me about your project or opportunity."
              rows="5"
              required
            />
          </label>

          <button className="primary-btn submit-btn" type="submit">
            <Send size={16} />
            Send message
          </button>

          {formStatus.message ? <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p> : null}
        </form>

        <div className="contact-side">
          <article className="panel-card contact-card">
            <div className="card-top">
              <h3>Direct contact</h3>
              <Mail size={18} />
            </div>
            <p className="card-copy">
              If EmailJS is not configured yet, the verified direct routes below are still ready to use.
            </p>
            <a className="inline-link" href={`mailto:${siteMeta.email}`}>
              {siteMeta.email}
            </a>
            <a className="inline-link" href={siteMeta.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ExternalLink size={14} />
            </a>
          </article>

          <article className="panel-card contact-card">
            <div className="card-top">
              <h3>Submission readiness</h3>
              <CheckCircle2 size={18} />
            </div>
            <ul className="readiness-list">
              {readinessChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
