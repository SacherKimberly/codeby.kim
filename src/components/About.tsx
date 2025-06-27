
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const bereiche = [
    {
      icon: Code,
      title: "Entwicklung",
      description: "Full-Stack Entwicklung mit React, Node.js und modernen Frameworks"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX Design mit Fokus auf Benutzererfahrung und visuelle Ästhetik"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimierte, schnell ladende Anwendungen nach Best Practices"
    }
  ];

  return (
    <section className="py-20 px-6 bg-orange-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">
            Über mich
          </h2>
          <p className="text-lg text-amber-200 max-w-3xl mx-auto">
            Ich bin ein leidenschaftlicher Entwickler, der gerne digitale Erlebnisse schafft, die einen Unterschied machen. 
            Mit Expertise in modernen Web-Technologien und einem Auge für Design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bereiche.map((bereich, index) => (
            <div 
              key={bereich.title}
              className="group p-6 rounded-lg bg-amber-800/30 border border-orange-600/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <bereich.icon className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-100">{bereich.title}</h3>
              <p className="text-amber-200">{bereich.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
