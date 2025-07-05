import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desarrollo',
      description: 'Código limpio y eficiente con las mejores prácticas'
    },
    {
      icon: Palette,
      title: 'Diseño',
      description: 'Interfaces elegantes y experiencias de usuario excepcionales'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimización y velocidad en cada proyecto'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Dedicación completa en cada línea de código'
    }
  ];

  return (
    <section id="sobre-mí" className="py-24 bg-gradient-to-b from-white/95 to-slate-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-6">
              Sobre <span className="text-blue-600">Mí</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Desarrollador apasionado por crear soluciones digitales que combinan funcionalidad 
              excepcional con diseño elegante y experiencias de usuario memorables.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
                <h3 className="text-2xl font-light text-slate-800 mb-6">Mi Historia</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Con más de X años de experiencia en desarrollo web, he tenido el privilegio 
                    de trabajar en proyectos diversos que van desde startups innovadoras hasta 
                    empresas establecidas.
                  </p>
                  <p>
                    Mi enfoque se centra en crear código limpio, mantenible y escalable, 
                    siempre buscando las mejores soluciones para cada desafío técnico.
                  </p>
                  <p>
                    Creo firmemente que la tecnología debe servir a las personas, por eso 
                    cada proyecto lo abordo pensando en el usuario final y la experiencia 
                    que queremos crear.
                  </p>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-2xl p-6 border border-slate-200/30">
                <h4 className="text-lg font-light text-slate-800 mb-4">Tecnologías Principales</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Angular', 'Python', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/70 text-slate-700 rounded-full text-sm font-light border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/50 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                  <h4 className="text-lg font-light text-slate-800 mb-2">{title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;