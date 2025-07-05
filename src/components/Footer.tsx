import React from 'react';
import { Mountain, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white/95 to-slate-100/80 border-t border-slate-200/30 backdrop-blur-sm">
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Mountain className="w-8 h-8 text-slate-700" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/60 rounded-full blur-sm"></div>
                </div>
                <span className="text-xl font-light text-slate-800 tracking-wide">Portfolio</span>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                Desarrollador Full Stack apasionado por crear experiencias digitales 
                excepcionales con código limpio y diseño elegante.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-light text-slate-800">Enlaces Rápidos</h3>
              <nav className="space-y-2">
                {['Inicio', 'Sobre Mí', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-slate-600 hover:text-slate-800 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-light text-slate-800">Contacto</h3>
              <div className="space-y-2 text-slate-600">
                <p>esantiagoespinoza08@gmail.com</p>
                <p>Loja, Ecuador</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-600">
                <span>© {currentYear} Portfolio. Hecho con</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>y mucho café</span>
              </div>
              
              <div className="text-slate-500 text-sm">
                Diseñado y desarrollado por Edgar Santiago Espinoza Velásquez
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;