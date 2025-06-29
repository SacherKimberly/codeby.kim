
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projekte = [
    {
      title: "PORTFOLIO WEBSITE",
      description: "PERSÖNLICHES PORTFOLIO ERSTELLT MIT REACT UND MODERNEN WEB-TECHNOLOGIEN",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "WEB-ANWENDUNG",
      description: "FULL-STACK ANWENDUNG MIT MODERNER ARCHITEKTUR UND SAUBEREM DESIGN",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      technologies: ["REACT", "NODE.JS", "MONGODB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24" style={{backgroundColor: '#E4E2DD'}}>
      <div className="max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-wide font-tt-norms" style={{color: '#262525'}}>
            AUSGEWÄHLTE PROJEKTE
          </h2>
          <p className="text-lg max-w-3xl font-light font-tt-norms" style={{color: '#262525'}}>
            EINE KURATIERTE AUSWAHL MEINER ARBEITEN, DIE MODERNE WEB-ENTWICKLUNGSPRAKTIKEN 
            UND SAUBERES, BENUTZERORIENTIERTES DESIGN ZEIGEN.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
          {projekte.map((projekt, index) => (
            <div 
              key={projekt.title}
              className="group bg-white rounded-lg overflow-hidden border-2 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105 shadow-sm"
              style={{borderColor: '#262525'}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={projekt.image} 
                  alt={projekt.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light mb-2 font-tt-norms" style={{color: '#262525'}}>{projekt.title}</h3>
                <p className="mb-4 font-light font-tt-norms" style={{color: '#262525'}}>{projekt.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projekt.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-white text-sm rounded-full font-light font-tt-norms"
                      style={{backgroundColor: '#262525'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={projekt.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-light font-tt-norms"
                    style={{backgroundColor: '#262525'}}
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE DEMO
                  </a>
                  <a 
                    href={projekt.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-light font-tt-norms"
                    style={{borderColor: '#262525', color: '#262525'}}
                  >
                    <Github className="w-4 h-4" />
                    CODE
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
