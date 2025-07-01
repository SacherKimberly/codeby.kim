
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
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
          ÜBER MICH
        </h2>
      </div>

      {/* Main Content - Large Image Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
        {/* Large Profile Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="w-full max-w-lg mx-auto lg:mx-0 aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/6c44fc9f-822a-495e-a6de-0f75dd5bf8f8.png" 
                alt="Kim Sacher - Professionelles Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30" style={{backgroundColor: '#262525'}}></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl opacity-20" style={{backgroundColor: '#CCC7BC'}}></div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl leading-relaxed font-light font-tt-norms" style={{color: '#262525'}}>
              Ich bin ein <span className="font-normal">leidenschaftlicher Entwickler</span>, der gerne digitale Erlebnisse schafft, die einen Unterschied machen.
            </p>
            <p className="text-xl leading-relaxed font-light font-tt-norms" style={{color: '#262525'}}>
              Mit Expertise in modernen Web-Technologien und einem Auge für Design entwickle ich innovative Lösungen, die sowohl funktional als auch ästhetisch ansprechend sind.
            </p>
          </div>
          
          {/* Key Stats or Highlights */}
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-light font-tt-norms mb-2" style={{color: '#262525'}}>2024</div>
              <div className="text-sm font-light font-tt-norms uppercase tracking-widest" style={{color: '#262525'}}>Freiberuflich</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-light font-tt-norms mb-2" style={{color: '#262525'}}>LMU</div>
              <div className="text-sm font-light font-tt-norms uppercase tracking-widest" style={{color: '#262525'}}>Medieninformatik</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="space-y-12">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
            EXPERTISE
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {bereiche.map((bereich, index) => (
            <div 
              key={bereich.title}
              className="group text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                <bereich.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-light mb-4 font-tt-norms tracking-widest" style={{color: '#262525'}}>{bereich.title}</h4>
              <p className="text-base font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>{bereich.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
