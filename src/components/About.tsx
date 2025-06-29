
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const bereiche = [
    {
      icon: Code,
      title: "ENTWICKLUNG",
      description: "Full-Stack Entwicklung mit React, Node.js und modernen Frameworks für skalierbare Webanwendungen."
    },
    {
      icon: Palette,
      title: "DESIGN",
      description: "UI/UX Design mit Fokus auf Benutzererfahrung, visuelle Ästhetik und moderne Designprinzipien."
    },
    {
      icon: Zap,
      title: "PERFORMANCE",
      description: "Optimierte, schnell ladende Anwendungen nach Best Practices für maximale Leistung."
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto" style={{backgroundColor: '#E4E2DD'}}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Linke Spalte - Titel und Beschreibung */}
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
            ÜBER MICH
          </h2>
          <p className="text-xl leading-relaxed font-light font-tt-norms mb-8" style={{color: '#262525'}}>
            Ich bin ein leidenschaftlicher Entwickler, der gerne digitale Erlebnisse schafft, 
            die einen Unterschied machen. Mit Expertise in modernen Web-Technologien und einem Auge für Design.
          </p>
          <p className="text-lg leading-relaxed font-light font-tt-norms" style={{color: '#262525'}}>
            Meine Mission ist es, innovative Lösungen zu entwickeln, die sowohl funktional als auch ästhetisch ansprechend sind.
          </p>
        </div>
        
        {/* Rechte Spalte - Services */}
        <div className="space-y-12">
          {bereiche.map((bereich, index) => (
            <div 
              key={bereich.title}
              className="group border-b pb-8 last:border-b-0"
              style={{borderColor: '#262525'}}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                  <bereich.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-4 font-tt-norms" style={{color: '#262525'}}>{bereich.title}</h3>
                  <p className="text-lg font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>{bereich.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
