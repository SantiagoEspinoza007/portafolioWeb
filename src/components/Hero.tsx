import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const words = ['Innovadoras', 'Elegantes', 'Modernas', 'Escalables'];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background Image with Optimized Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url(/hermosa-foto-de-montanas-y-colinas-nevadas-y-rocosas-empinadas.webp)',
          transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0) translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Optimized Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50" />
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Animated Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-200/20 rounded-full blur-lg animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-slate-200/15 rounded-full blur-md animate-float-slow" />
        
        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/3 animate-sparkle">
          <Sparkles className="w-6 h-6 text-white/30" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-sparkle-delayed">
          <Sparkles className="w-4 h-4 text-blue-200/40" />
        </div>
        <div className="absolute top-2/3 left-1/4 animate-sparkle-slow">
          <Sparkles className="w-5 h-5 text-slate-200/30" />
        </div>

        {/* Code symbols floating */}
        <div className="absolute top-1/5 right-1/5 animate-code-float">
          <Code className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/5 animate-code-float-delayed">
          <Palette className="w-6 h-6 text-blue-200/25" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 text-center px-6 max-w-4xl mx-auto">
        {/* Enhanced Glassmorphism Card */}
        <div className={`bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-2xl transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <div className="space-y-8">
            {/* Animated Greeting */}
            <div className={`inline-block transform transition-all duration-700 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <span className="text-slate-700 text-lg font-light tracking-widest uppercase opacity-80 animate-fade-in">
                Hola, soy
              </span>
            </div>

            {/* Animated Name with Typewriter Effect */}
            <div className={`transform transition-all duration-700 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <h1 className="text-5xl md:text-7xl font-extralight text-slate-800 tracking-tight">
                <span className="block animate-slide-in-left">Santiago</span>
                <span className="block bg-gradient-to-r from-slate-700 via-blue-600 to-slate-800 bg-clip-text text-transparent animate-slide-in-right">
                  Espinoza
                </span>
              </h1>
            </div>

            {/* Animated Title */}
            <div className={`space-y-3 transform transition-all duration-700 delay-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <h2 className="text-xl md:text-2xl font-light text-slate-700 tracking-wide">
                Desarrollador Full Stack
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto animate-expand" />
            </div>

            {/* Dynamic Description with Word Animation */}
            <div className={`transform transition-all duration-700 delay-900 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <p className="text-slate-800 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Creando experiencias digitales{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-slate-400/20 rounded px-2 animate-highlight" />
                  <span className="relative font-medium transition-all duration-500">
                    {words[currentWord]}
                  </span>
                </span>
                {' '}con código limpio y diseño elegante. 
                Especializado en tecnologías modernas y soluciones innovadoras.
              </p>
            </div>

            {/* Animated Social Links */}
            <div className={`flex justify-center space-x-6 pt-6 transform transition-all duration-700 delay-1100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              {[
                { icon: Github, href: 'https://github.com/SantiagoEspinoza007', label: 'GitHub', delay: '0ms' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/santiago-espinoza-velasquez11/', label: 'LinkedIn', delay: '100ms' },
                { icon: Mail, href: 'mailto:esantiagoespinoza08@gmail.com', label: 'Email', delay: '200ms' },
              ].map(({ icon: Icon, href, label, delay }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce-in"
                  style={{ animationDelay: delay }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors group-hover:scale-110" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                    {label}
                  </div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className={`pt-8 transform transition-all duration-700 delay-1300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <a
                href="#proyectos"
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-blue-600 text-white px-8 py-4 rounded-full font-light tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Ver Mi Trabajo</span>
                <ChevronDown className="relative z-10 w-4 h-4 group-hover:animate-bounce" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 z-40 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        <div className="flex flex-col items-center space-y-2 animate-float">
          <span className="text-white/70 text-xs font-light tracking-wide">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Optimized Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;