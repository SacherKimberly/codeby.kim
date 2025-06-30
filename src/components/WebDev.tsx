
import React from 'react';
import { Code2, Palette, Wrench, Globe } from 'lucide-react';

const WebDev = () => {
  const services = [
    {
      icon: Globe,
      title: "WORDPRESS ENTWICKLUNG",
      description: "Individuelle WordPress-Lösungen, Theme-Entwicklung und Plugin-Anpassungen für einzigartige Web-Auftritte.",
      features: ["Custom Themes", "Plugin Development", "Performance Optimierung", "SEO Integration"]
    },
    {
      icon: Code2,
      title: "CUSTOM PROGRAMMIERUNG", 
      description: "Vollständig maßgeschneiderte Websites und Webanwendungen, programmiert von Grund auf für maximale Flexibilität.",
      features: ["React/Vue.js Apps", "Full-Stack Development", "API Integration", "Responsive Design"]
    },
    {
      icon: Palette,
      title: "UI/UX DESIGN",
      description: "Moderne Benutzeroberflächen mit Fokus auf Usability, Ästhetik und optimaler User Experience.",
      features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"]
    },
    {
      icon: Wrench,
      title: "WARTUNG & SUPPORT",
      description: "Kontinuierliche Betreuung, Updates und technischer Support für alle entwickelten Projekte.",
      features: ["Security Updates", "Performance Monitoring", "Content Management", "Technical Support"]
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          WEB DEVELOPMENT
        </h2>
        <p className="text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-12" style={{color: '#262525'}}>
          Von WordPress-Anpassungen bis hin zu komplett individuell programmierten Webanwendungen - 
          ich biete umfassende Web-Development-Lösungen für jeden Bedarf.
        </p>
        <div className="w-24 h-1 mb-16" style={{backgroundColor: '#262525'}}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="group p-8 transition-all duration-300 hover:transform hover:scale-[1.02]"
            style={{backgroundColor: '#E4E2DD'}}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light font-tt-norms" style={{color: '#262525'}}>
                {service.title}
              </h3>
            </div>
            
            <p className="text-lg font-light font-tt-norms leading-relaxed mb-8" style={{color: '#262525'}}>
              {service.description}
            </p>
            
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
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
      
      <div className="mt-20 p-12 text-center" style={{backgroundColor: '#E4E2DD'}}>
        <h3 className="text-2xl md:text-3xl font-light font-tt-norms mb-6" style={{color: '#262525'}}>
          VON WORDPRESS BIS CUSTOM CODE
        </h3>
        <p className="text-lg font-light font-tt-norms leading-relaxed max-w-4xl mx-auto" style={{color: '#262525'}}>
          Meine Reise begann mit WordPress, wo ich gelernt habe, individuelle Lösungen zu schaffen. 
          Heute entwickle ich sowohl angepasste WordPress-Sites als auch komplett selbst programmierte 
          Webanwendungen - je nach Projekt-Anforderungen die optimale Lösung.
        </p>
      </div>
    </section>
  );
};

export default WebDev;
