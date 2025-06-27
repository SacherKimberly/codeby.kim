
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg text-amber-200 max-w-3xl mx-auto">
            Eine kuratierte Auswahl meiner Arbeiten, die moderne Web-Entwicklungspraktiken 
            und sauberes, benutzerorientiertes Design zeigen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projekte.map((projekt, index) => (
            <div 
              key={projekt.title}
              className="group bg-orange-900/50 rounded-lg overflow-hidden border border-orange-600/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={projekt.image} 
                  alt={projekt.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-100">{projekt.title}</h3>
                <p className="text-amber-200 mb-4">{projekt.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projekt.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-orange-800/50 text-amber-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={projekt.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-amber-900 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={projekt.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-800 text-amber-200 rounded-lg hover:bg-orange-700 transition-all duration-300"
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
