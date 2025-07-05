import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Rifas Oyola',
      description: 'Pagina web de compra de tickets aleatorios con pasarela de pagos para rifas vista a usuario y admin.',
      image: '/proyectoRifas.png',
      technologies: ['Angular', 'Tailwindcss', 'Go'],
      github: '#',
      demo: 'https://rifasoyolaec.com/',
      featured: true
    },
    {
      title: 'Portafolio Personal',
      description: 'Pagina web de portafolio y presentación de imagen y servicios de la Doctora Gabriela Ruiz Medica internista.',
      image: '/proyectoDoctora.png',
      technologies: ['React', 'Typescript', 'TailwindCss', 'EmailJS'],
      github: '#',
      demo: 'https://dragabrielaruiz.com/',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración de compañias y equipos, manejo de Stock y ubicaciones.',
      image: '/proyectoTask.png',
      technologies: ['React', 'Typescript', 'TailwindCss'],
      github: '#',
      demo: 'https://task4hub.com/',
      featured: false
    },
    
    // {
    //   title: 'Social Media Platform',
    //   description: 'Red social moderna con funciones de chat en tiempo real, stories y sistema de recomendaciones inteligente.',
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
    //   github: '#',
    //   demo: '#',
    //   featured: true
    // }
  ];

  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b from-slate-50/80 to-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-6">
              Mis <span className="text-blue-600">Proyectos</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Una selección de proyectos que demuestran mi experiencia en desarrollo y mi pasión por crear soluciones innovadoras.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="w-5 h-5 text-slate-700" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="Ver demo en vivo"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-700" />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-light rounded-full backdrop-blur-sm">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100/70 text-slate-700 text-sm rounded-full border border-slate-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.demo}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-light transition-colors group/link"
                    >
                      <span>Ver Proyecto</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-blue-600 text-white px-8 py-4 rounded-full font-light tracking-wide hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Ver Todos los Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;