
import React from 'react';
import { Users, User, Code, Handshake } from 'lucide-react';

const WorkApproach = () => {
  const approaches = [
    {
      icon: User,
      title: "Solo Projekte",
      description: "Komplette Übernahme von Projekten von der Konzeption bis zur finalen Umsetzung.",
      features: ["End-to-End Entwicklung", "Vollständige Projektverantwortung", "Direkte Kundenkommunikation", "Flexible Arbeitszeiten"]
    },
    {
      icon: Users,
      title: "Team Kollaboration", 
      description: "Zusammenarbeit mit anderen Entwicklern und Übernahme spezifischer Entwicklungsaufgaben.",
      features: ["Code Reviews", "Agile Entwicklung", "Wissensaustausch", "Spezialisierte Tasks"]
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          Arbeitsweise
        </h2>
        <p className="text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-12" style={{color: '#262525'}}>
          Flexibilität in der Zusammenarbeit - von vollständig eigenständigen Projekten 
          bis hin zur gezielten Unterstützung in Entwicklerteams.
        </p>
        <div className="w-24 h-1 mb-16" style={{backgroundColor: '#262525'}}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
        {approaches.map((approach, index) => (
          <div 
            key={approach.title}
            className="group p-8 transition-all duration-300 hover:transform hover:scale-[1.02]"
            style={{backgroundColor: '#E4E2DD'}}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                <approach.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light font-tt-norms" style={{color: '#262525'}}>
                {approach.title}
              </h3>
            </div>
            
            <p className="text-lg font-light font-tt-norms leading-relaxed mb-8" style={{color: '#262525'}}>
              {approach.description}
            </p>
            
            <div className="space-y-3">
              {approach.features.map((feature, featureIndex) => (
                <div key={feature} className="flex items-center">
                  <div className="w-2 h-2 mr-4" style={{backgroundColor: '#262525'}}></div>
                  <span className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-12 p-12" style={{backgroundColor: '#E4E2DD'}}>
        <div className="flex items-center space-x-4">
          <Code className="w-12 h-12" style={{color: '#262525'}} />
          <span className="text-lg font-light font-tt-norms" style={{color: '#262525'}}>
            Eigenständige Entwicklung
          </span>
        </div>
        <div className="w-16 h-px" style={{backgroundColor: '#262525'}}></div>
        <div className="flex items-center space-x-4">
          <Handshake className="w-12 h-12" style={{color: '#262525'}} />
          <span className="text-lg font-light font-tt-norms" style={{color: '#262525'}}>
            Team Integration
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkApproach;
