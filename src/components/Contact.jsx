import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import { PROFILE } from '../data/profile';
import { Reveal, SectionHeader } from './ui';

const inputClass =
  'w-full rounded-xl border border-line/15 bg-surface/60 px-4 py-3 outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/25';

const Contact = ({ language }) => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = (pt, en) => (language === 'en' ? en : pt);

  const showStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus({ type: '', message: '' }), 15000);
  };

  const socialLinks = [
    { id: 'mail', icon: <FaEnvelope />, name: 'E-mail', detail: PROFILE.email, link: `mailto:${PROFILE.email}` },
    { id: 'whatsapp', icon: <FaWhatsapp />, name: 'WhatsApp', detail: PROFILE.phone, link: PROFILE.whatsapp },
    { id: 'linkedin', icon: <FaLinkedin />, name: 'LinkedIn', detail: '/in/felipe-giannetti-fontenelle', link: PROFILE.linkedin },
    { id: 'github', icon: <FaGithub />, name: 'GitHub', detail: '@felipegiannetti', link: PROFILE.github },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        showStatus('success', t('Mensagem enviada com sucesso! Retornarei em breve.', 'Message sent successfully! I will get back to you soon.'));
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      },
      () => {
        showStatus('error', t('Erro ao enviar mensagem. Tente novamente mais tarde.', 'Failed to send message. Please try again later.'));
        setIsSubmitting(false);
      },
    );
  };

  return (
    <section id="contact" className="px-4 pb-24 pt-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t('Contato', 'Contact')}
          title={t('Vamos construir algo juntos?', "Let's build something together")}
          subtitle={t(
            'Aberto a conversas, troca de conhecimento e oportunidades em projetos de tecnologia ambiciosos e de impacto global.',
            'Open to conversations, knowledge sharing and opportunities in ambitious, globally impactful technology projects.',
          )}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="min-w-0 space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                data-spotlight
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-xl text-accent2 transition-colors group-hover:bg-accent group-hover:text-white">
                  {social.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{social.name}</span>
                  <span className="block truncate text-sm text-muted">{social.detail}</span>
                </span>
              </a>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-line/20 p-4">
              <span className="flex items-center gap-2 text-sm text-muted">
                <FaMapMarkerAlt className="text-accent2" />
                Belo Horizonte, MG · Brasil
              </span>
              <button onClick={copyEmail} className="btn-ghost !px-4 !py-2 !text-xs">
                {copied ? <FaCheck className="text-accent2" /> : <FaCopy />}
                {copied ? t('E-mail copiado!', 'Email copied!') : t('Copiar e-mail', 'Copy email')}
              </button>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <form ref={form} onSubmit={handleSubmit} data-spotlight className="glass space-y-5 rounded-3xl p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  {t('Nome', 'Name')}
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={t('Seu nome completo', 'Your full name')} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  {t('E-mail', 'Email')}
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder={t('seu@email.com', 'your@email.com')} />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  {t('Mensagem', 'Message')}
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputClass} resize-none`} placeholder={t('Escreva sua mensagem...', 'Write your message...')} />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                <FaPaperPlane />
                {isSubmitting ? t('Enviando...', 'Sending...') : t('Enviar mensagem', 'Send message')}
              </button>

              {status.message && (
                <div
                  role="status"
                  className={`animate-fade-up rounded-xl border p-4 text-sm ${
                    status.type === 'success' ? 'border-green-500/40 bg-green-500/10 text-green-400' : 'border-red-500/40 bg-red-500/10 text-red-400'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
