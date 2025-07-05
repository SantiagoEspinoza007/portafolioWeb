import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'esantiagoespinoza08@gmail.com',
      href: 'mailto:esantiagoespinoza08@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Loja, Ecuador',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SantiagoEspinoza007', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/santiago-espinoza-velasquez11/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-slate-50/80 to-white/95 backdrop-blur-sm">
      {/* Subtle Mountain Silhouette - Only in Contact Section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: 'url(/hermosa-foto-de-montanas-y-colinas-nevadas-y-rocosas-empinadas.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          filter: 'blur(3px)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
        }}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-6">
              Trabajemos <span className="text-blue-600">Juntos</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y 
              ayudarte a convertirlas en realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
              <h3 className="text-2xl font-light text-slate-800 mb-8">Envíame un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-light mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-slate-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-light mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/70 border border-slate-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-700 font-light mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/70 border border-slate-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 font-light mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/70 border border-slate-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-700 to-blue-600 text-white py-4 rounded-lg font-light tracking-wide hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
                <h3 className="text-2xl font-light text-slate-800 mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, title, value, href }) => (
                    <a
                      key={title}
                      href={href}
                      target={href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="text-slate-800 font-light">{title}</h4>
                        <p className="text-slate-600">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
                <h3 className="text-2xl font-light text-slate-800 mb-8">Sígueme</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-2xl p-8 border border-slate-200/30">
                <h3 className="text-xl font-light text-slate-800 mb-4">¿Listo para empezar?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Estoy disponible para proyectos freelance y oportunidades de colaboración. 
                  ¡Hablemos sobre tu próxima gran idea!
                </p>
                <a
                  href="mailto:esantiagoespinoza08@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-blue-600 text-white px-6 py-3 rounded-lg font-light tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contactar Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;