
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projekte = [
    {
      title: "Portfolio Website",
      description: "Persönliches Portfolio erstellt mit React und modernen Web-Technologien",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Web-Anwendung",
      description: "Full-Stack Anwendung mit moderner Architektur und sauberem Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Eine kuratierte Auswahl meiner Arbeiten, die moderne Web-Entwicklungspraktiken 
            und sauberes, benutzerorientiertes Design zeigen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projekte.map((projekt, index) => (
            <div 
              key={projekt.title}
              className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-600/30 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={projekt.image} 
                  alt={projekt.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{projekt.title}</h3>
                <p className="text-slate-400 mb-4">{projekt.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projekt.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={projekt.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={projekt.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
