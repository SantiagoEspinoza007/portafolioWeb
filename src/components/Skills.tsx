import React from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, Palette } from 'lucide-react';

const Skills = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
        { name: 'React Native', level: 70 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 50 },
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'MongoDB', level: 75 },
        { name: 'Node.js', level: 23 },
        { name: 'GraphQL', level: 10 },
      ]
    },
    // {
    //   icon: Cloud,
    //   title: 'DevOps & Cloud',
    //   skills: [
    //     { name: 'AWS', level: 85 },
    //     { name: 'Docker', level: 88 },
    //     { name: 'CI/CD', level: 82 },
    //     { name: 'Kubernetes', level: 75 },
    //     { name: 'Terraform', level: 70 }
    //   ]
    // },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility', level: 88 },
        { name: 'Design Systems', level: 82 }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-24 bg-gradient-to-b from-white/95 to-slate-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-800 mb-6">
              Mis <span className="text-blue-600">Habilidades</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Tecnologías y herramientas que domino para crear soluciones digitales 
              completas y de alta calidad.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map(({ icon: Icon, title, skills }, categoryIndex) => (
              <div
                key={title}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-light text-slate-800">{title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {skills.map(({ name, level }, skillIndex) => (
                    <div key={name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-light">{name}</span>
                        <span className="text-slate-500 text-sm">{level}%</span>
                      </div>
                      <div className="w-full bg-slate-200/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-slate-600 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${level}%`,
                            animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light text-slate-800 mb-8">Otras Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'Git', 'Zustand', 'Tailwindcss ', 'Shadcn-ui',
                'Vite', 'Supabase', 'Firebase', 'Vercel', 'Netlify'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm text-slate-700 rounded-full text-sm font-light border border-slate-200/50 hover:bg-white/90 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;