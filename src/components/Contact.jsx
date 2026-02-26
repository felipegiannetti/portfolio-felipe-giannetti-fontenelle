import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ language = 'pt' }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      id: 1,
      icon: <FaEnvelope />,
      name: 'E-mail',
      link: 'mailto:felipegiannettifontenelle@gmail.com',
      color: 'hover:bg-red-500',
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      link: 'https://wa.me/5531999900355',
      color: 'hover:bg-green-500',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/felipe-giannetti-fontenelle-095501312/',
      color: 'hover:bg-blue-600',
    },
    {
      id: 4,
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/felipegiannetti',
      color: 'hover:bg-gray-700',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Configure suas credenciais do EmailJS em https://www.emailjs.com/
    // Substitua pelos seus IDs reais
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    // Para demonstração, vamos simular o envio
    // Descomente o código abaixo quando configurar o EmailJS
    
    /*
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatus({
            type: 'success',
            message: 'Mensagem enviada com sucesso! Retornarei em breve.',
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          setStatus({
            type: 'error',
            message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
          });
          setIsSubmitting(false);
        }
      );
    */

    // Simulação para demonstração
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! (Modo de demonstração - Configure o EmailJS para envio real)',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-primary-blue to-primary-dark py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-white">{language === 'en' ? 'Contact' : 'Contato'}</h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-16 text-lg">
          {language === 'en' ? 'Get in touch with me through social networks or the form' : 'Entre em contato comigo através das redes sociais ou pelo formulário'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">{language === 'en' ? 'Connect with Me' : 'Conecte-se Comigo'}</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 bg-primary-dark p-4 rounded-lg border-2 border-primary-blue ${social.color} transition-all duration-300 group`}
                >
                  <div className="text-accent-green text-3xl group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-white text-xl font-semibold">{social.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-10 bg-primary-dark p-6 rounded-lg border-2 border-accent-green">
              <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? 'Contact Information' : 'Informações de Contato'}</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-accent-green">{language === 'en' ? 'Email:' : 'E-mail:'}</strong> felipegiannettifontenelle@gmail.com
                </p>
                <p>
                  <strong className="text-accent-green">{language === 'en' ? 'Phone:' : 'Telefone:'}</strong> +55 (31) 99990-0355
                </p>
                <p>
                  <strong className="text-accent-green">{language === 'en' ? 'Location:' : 'Localização:'}</strong> {language === 'en' ? 'Belo Horizonte, MG - Brazil' : 'Belo Horizonte, MG - Brasil'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">{language === 'en' ? 'Send a Message' : 'Envie uma Mensagem'}</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  {language === 'en' ? 'Name' : 'Nome'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-dark border-2 border-primary-blue focus:border-accent-green outline-none rounded-lg text-white transition-colors"
                  placeholder={language === 'en' ? 'Your full name' : 'Seu nome completo'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  {language === 'en' ? 'Email' : 'E-mail'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-dark border-2 border-primary-blue focus:border-accent-green outline-none rounded-lg text-white transition-colors"
                  placeholder={language === 'en' ? 'your@email.com' : 'seu@email.com'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  {language === 'en' ? 'Message' : 'Mensagem'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-primary-dark border-2 border-primary-blue focus:border-accent-green outline-none rounded-lg text-white transition-colors resize-none"
                  placeholder={language === 'en' ? 'Write your message...' : 'Escreva sua mensagem...'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-green text-primary-dark font-bold py-3 rounded-lg hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (language === 'en' ? 'Sending...' : 'Enviando...') : (language === 'en' ? 'Send Message' : 'Enviar Mensagem')}
              </button>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border-2 border-green-500 text-green-300'
                      : 'bg-red-500/20 border-2 border-red-500 text-red-300'
                  }`}
                >
                  {status.type === 'success' && language === 'en' ? 'Message sent successfully! I will get back to you soon.' : status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
