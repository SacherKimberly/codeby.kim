
import React from 'react';
import { Wordpress, Code2, Palette, Wrench, CheckCircle, ArrowRight, Zap, Shield, Globe, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WebDev = () => {
  const { isVisible: headerVisible, setElementRef: setHeaderRef } = useScrollAnimation();
  const { isVisible: timelineVisible, setElementRef: setTimelineRef } = useScrollAnimation();

  const startOptions = [
    {
      icon: Wordpress,
      title: "WordPress",
      description: "Schneller Start mit bewährten CMS-Lösungen",
      advantages: [
        "Schnelle Entwicklung",
        "Benutzerfreundliche Verwaltung", 
        "Große Plugin-Bibliothek",
        "SEO-optimiert"
      ],
      color: "#21759B"
    },
    {
      icon: Code2,
      title: "Custom Programming",
      description: "Maßgeschneiderte Lösungen für individuelle Anforderungen",
      advantages: [
        "Vollständige Kontrolle",
        "Optimale Performance",
        "Skalierbare Architektur",
        "Einzigartige Features"
      ],
      color: "#262525"
    }
  ];

  const nextSteps = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Benutzerorientiertes Design für optimale Erfahrung",
      features: ["Responsive Design", "User Experience", "Brand Identity", "Accessibility"]
    },
    {
      icon: Wrench,
      title: "Wartung & Support",
      description: "Kontinuierliche Betreuung und Optimierung",
      features: ["Updates & Patches", "Performance Monitoring", "Backup & Security", "Technical Support"]
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div 
        ref={setHeaderRef}
        className={`text-center mb-20 transition-all duration-1000 ease-out ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide hover:scale-105 transition-transform duration-300" style={{color: '#262525'}}>
          WEBENTWICKLUNG
        </h2>
        <p className="text-xl max-w-3xl mx-auto font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>
          Von der ersten Idee bis zur finalen Umsetzung - ein strukturierter Weg zu Ihrer perfekten Website
        </p>
        <div className="w-24 h-1 mx-auto mt-8" style={{backgroundColor: '#262525'}}></div>
      </div>

      {/* Timeline */}
      <div ref={setTimelineRef} className="relative">
        {/* Zentrale Timeline-Linie */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block" style={{backgroundColor: '#E4E2DD'}}>
          <div 
            className={`w-full transition-all duration-2000 ease-out ${
              timelineVisible ? 'h-full' : 'h-0'
            }`} 
            style={{backgroundColor: '#262525'}}
          ></div>
        </div>

        {/* Schritt 1: Ausgangspunkt */}
        <div className={`mb-20 transition-all duration-1000 ease-out ${
          timelineVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse" style={{backgroundColor: '#262525'}}>
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
                AUSGANGSPUNKT WÄHLEN
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {startOptions.map((option, index) => (
              <div 
                key={option.title}
                className={`group p-8 border-2 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  timelineVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{
                  borderColor: '#E4E2DD',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-16 h-16 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{backgroundColor: option.color}}
                  >
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-light font-tt-norms mb-2" style={{color: '#262525'}}>
                      {option.title}
                    </h4>
                    <p className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                      {option.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {option.advantages.map((advantage, advIndex) => (
                    <div key={advantage} className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-sm font-light font-tt-norms" style={{color: '#262525'}}>
                        {advantage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbindung */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out delay-500 ${
          timelineVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75'
        }`}>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px" style={{backgroundColor: '#262525'}}></div>
            <ArrowRight className="w-8 h-8 animate-pulse" style={{color: '#262525'}} />
            <div className="w-8 h-px" style={{backgroundColor: '#262525'}}></div>
          </div>
          <p className="text-lg font-light font-tt-norms mt-4" style={{color: '#262525'}}>
            Egal welchen Weg Sie wählen, die nächsten Schritte sind identisch
          </p>
        </div>

        {/* Schritt 2: Weitere Komponenten */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          timelineVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animation-delay-500" style={{backgroundColor: '#262525'}}>
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
                WEITERE KOMPONENTEN
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nextSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`group p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
                  timelineVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  backgroundColor: '#E4E2DD',
                  transitionDelay: `${800 + index * 200}ms`
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{backgroundColor: '#262525'}}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light font-tt-norms mb-2" style={{color: '#262525'}}>
                      {step.title}
                    </h4>
                    <p className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 mr-3" style={{backgroundColor: '#262525'}}></div>
                      <span className="text-sm font-light font-tt-norms" style={{color: '#262525'}}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finale Highlights */}
        <div className={`mt-20 text-center transition-all duration-1000 ease-out delay-1000 ${
          timelineVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-8 p-12" style={{backgroundColor: '#F7F6F3'}}>
            <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <Rocket className="w-8 h-8 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#262525'}} />
              <span className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                Schnelle Entwicklung
              </span>
            </div>
            <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <Shield className="w-8 h-8 group-hover:text-green-600 transition-colors duration-300" style={{color: '#262525'}} />
              <span className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                Sichere Lösungen
              </span>
            </div>
            <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <Globe className="w-8 h-8 group-hover:text-purple-600 transition-colors duration-300" style={{color: '#262525'}} />
              <span className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                Moderne Standards
              </span>
            </div>
            <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
              <Zap className="w-8 h-8 group-hover:text-yellow-600 transition-colors duration-300" style={{color: '#262525'}} />
              <span className="text-base font-light font-tt-norms" style={{color: '#262525'}}>
                Optimale Performance
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default WebDev;
