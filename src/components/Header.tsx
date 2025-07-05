import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Inicio', 'Sobre Mí', 'Proyectos', 'Habilidades', 'Contacto'];

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'scale-95 translate-y-0' 
        : 'scale-100 translate-y-0'
    } w-[95%] sm:w-auto max-w-5xl`}>
      <nav className={`relative bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl transition-all duration-500 ${
        scrolled 
          ? 'bg-white/20 border-white/30 shadow-xl' 
          : 'bg-white/10 border-white/20'
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <Mountain className="w-6 h-6 mr-3 sm:w-7 sm:h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/60 rounded-full blur-sm group-hover:bg-blue-500/80 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-light tracking-wide group py-2 text-sm xl:text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-slate-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-slate-700 hover:text-slate-900 transition-colors hover:bg-white/20 rounded-full"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Floating Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 mt-4 transition-all duration-500 origin-top ${
          isMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl p-6 mx-2 sm:mx-4 relative overflow-hidden">
            {/* Enhanced background for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-slate-50/95 to-blue-50/90 rounded-2xl" />
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-100" />
            </div>
            
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative block text-slate-800 hover:text-blue-600 transition-all duration-300 font-medium tracking-wide py-4 px-6 rounded-xl hover:bg-white/80 hover:shadow-md transform hover:translate-x-2 text-center sm:text-left border border-transparent hover:border-slate-200/30 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item}</span>
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-slate-50/50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
                  
                  {/* Active indicator */}
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-500 to-slate-600 rounded-full group-hover:h-6 transition-all duration-300" />
                </a>
              ))}
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;