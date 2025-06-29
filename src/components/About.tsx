
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const bereiche = [
    {
      icon: Code,
      title: "ENTWICKLUNG",
      description: "FULL-STACK ENTWICKLUNG MIT REACT, NODE.JS UND MODERNEN FRAMEWORKS"
    },
    {
      icon: Palette,
      title: "DESIGN",
      description: "UI/UX DESIGN MIT FOKUS AUF BENUTZERERFAHRUNG UND VISUELLE ÄSTHETIK"
    },
    {
      icon: Zap,
      title: "PERFORMANCE",
      description: "OPTIMIERTE, SCHNELL LADENDE ANWENDUNGEN NACH BEST PRACTICES"
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24" style={{backgroundColor: '#E4E2DD'}}>
      <div className="max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 uppercase tracking-wide font-tt-norms" style={{color: '#262525'}}>
            ÜBER MICH
          </h2>
          <p className="text-lg max-w-3xl font-light font-tt-norms" style={{color: '#262525'}}>
            ICH BIN EIN LEIDENSCHAFTLICHER ENTWICKLER, DER GERNE DIGITALE ERLEBNISSE SCHAFFT, DIE EINEN UNTERSCHIED MACHEN. 
            MIT EXPERTISE IN MODERNEN WEB-TECHNOLOGIEN UND EINEM AUGE FÜR DESIGN.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bereiche.map((bereich, index) => (
            <div 
              key={bereich.title}
              className="group p-6 rounded-lg bg-white border-2 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105 shadow-sm"
              style={{borderColor: '#262525'}}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                <bereich.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light mb-2 font-tt-norms" style={{color: '#262525'}}>{bereich.title}</h3>
              <p className="font-light font-tt-norms" style={{color: '#262525'}}>{bereich.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
