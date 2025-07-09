
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { isVisible: headerVisible, setElementRef: setHeaderRef } = useScrollAnimation();
  const { isVisible: projectsVisible, setElementRef: setProjectsRef } = useScrollAnimation();

  const projekte = [
    {
      title: "PORTFOLIO WEBSITE",
      description: "Persönliches Portfolio erstellt mit React und modernen Web-Technologien für optimale Performance und Benutzererfahrung.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      title: "E-COMMERCE PLATFORM",
      description: "Full-Stack E-Commerce Lösung mit moderner Architektur, sauberem Design und nahtloser Benutzererfahrung.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      title: "TASK MANAGEMENT APP",
      description: "Kollaborative Projektmanagement-Anwendung mit Echtzeit-Updates und intuitiver Benutzeroberfläche.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2023"
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto bg-gray-900">
      <div 
        ref={setHeaderRef}
        className={`mb-20 transition-all duration-1000 ease-out ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide hover:scale-105 transition-transform duration-300 text-white">
          AUSGEWÄHLTE PROJEKTE
        </h2>
        <p className="text-xl max-w-2xl font-light font-tt-norms leading-relaxed text-gray-300">
          Eine kuratierte Auswahl meiner Arbeiten, die moderne Web-Entwicklungspraktiken 
          und sauberes, benutzerorientiertes Design zeigen.
        </p>
      </div>
      
      <div ref={setProjectsRef} className="space-y-20">
        {projekte.map((projekt, index) => (
          <div 
            key={projekt.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            } ${
              projectsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Bild */}
            <div className={`relative group overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <img 
                src={projekt.image} 
                alt={projekt.title}
                className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
              
              {/* Overlay mit Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex gap-4">
                  <a 
                    href={projekt.liveUrl}
                    className="p-3 bg-gray-800/90 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6 text-blue-400" />
                  </a>
                  <a 
                    href={projekt.githubUrl}
                    className="p-3 bg-gray-800/90 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="text-sm font-light font-tt-norms tracking-wider opacity-70 hover:opacity-100 transition-opacity duration-300 text-blue-400">
                {projekt.year}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light font-tt-norms hover:text-blue-400 transition-colors duration-300 text-white">
                {projekt.title}
              </h3>
              
              <p className="text-lg font-light font-tt-norms leading-relaxed text-gray-300">
                {projekt.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {projekt.technologies.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-light font-tt-norms hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${techIndex * 100}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={projekt.liveUrl}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-light font-tt-norms hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
                <a 
                  href={projekt.githubUrl}
                  className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 font-light font-tt-norms hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  CODE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
