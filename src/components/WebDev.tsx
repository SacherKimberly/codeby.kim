
import React from 'react';
import { Code2, Palette, Wrench, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const WebDev = () => {
  const startOptions = [
    {
      icon: Globe,
      title: "WORDPRESS",
      subtitle: "Schnell & Flexibel",
      advantages: [
        "Schnelle Umsetzung",
        "Content Management",
        "Plugin Ökosystem",
        "SEO-optimiert"
      ],
      color: "#E4E2DD"
    },
    {
      icon: Code2,
      title: "CUSTOM CODE",
      subtitle: "Maßgeschneidert & Performant", 
      advantages: [
        "Maximale Flexibilität",
        "Optimale Performance",
        "Unique Features",
        "Skalierbar"
      ],
      color: "#CCC7BC"
    }
  ];

  const followUpSteps = [
    {
      icon: Palette,
      title: "UI/UX DESIGN",
      description: "Professionelles Design und optimale User Experience",
      features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"]
    },
    {
      icon: Wrench,
      title: "WARTUNG & SUPPORT",
      description: "Kontinuierliche Betreuung und technischer Support",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support"]
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          WEB DEVELOPMENT
        </h2>
        <p className="text-xl max-w-3xl mx-auto font-light font-tt-norms leading-relaxed mb-12" style={{color: '#262525'}}>
          Von der ersten Idee bis zur finalen Lösung - ein durchdachter Prozess für nachhaltigen Erfolg.
        </p>
        <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#262525'}}></div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Start Options */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light font-tt-norms tracking-wide mb-4" style={{color: '#262525'}}>
              SCHRITT 1: FUNDAMENT WÄHLEN
            </h3>
            <p className="text-lg font-light font-tt-norms" style={{color: '#262525'}}>
              Je nach Projektanforderungen entscheiden wir uns für den optimalen Ansatz
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {startOptions.map((option, index) => (
              <div 
                key={option.title}
                className="group relative p-8 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
                style={{backgroundColor: option.color}}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-light font-tt-norms tracking-widest" style={{color: '#262525'}}>
                      {option.title}
                    </h4>
                    <p className="text-sm font-light font-tt-norms opacity-70" style={{color: '#262525'}}>
                      {option.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Advantages */}
                <div className="space-y-3">
                  {option.advantages.map((advantage, advIndex) => (
                    <div key={advantage} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 mr-3" style={{color: '#262525'}} />
                      <span className="font-light font-tt-norms" style={{color: '#262525'}}>
                        {advantage}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Arrow indicator for large screens */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: '#262525'}}>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center mb-12">
            <div className="w-12 h-12 flex items-center justify-center" style={{backgroundColor: '#262525'}}>
              <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
            </div>
          </div>
        </div>

        {/* Convergence Point */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4" style={{backgroundColor: '#E4E2DD'}}>
            <span className="text-lg font-light font-tt-norms tracking-widest" style={{color: '#262525'}}>
              EGAL WELCHER WEG - ES FOLGT
            </span>
          </div>
        </div>

        {/* Follow-up Steps */}
        <div className="space-y-12">
          {followUpSteps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Step Number */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 flex items-center justify-center mr-6" style={{backgroundColor: '#262525'}}>
                  <span className="text-white font-light font-tt-norms text-lg">
                    {index + 2}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
                  SCHRITT {index + 2}: {step.title}
                </h3>
              </div>

              {/* Step Content */}
              <div className="ml-18 p-8 transition-all duration-300 hover:shadow-lg" style={{backgroundColor: '#E4E2DD'}}>
                <div className="flex items-start">
                  <div className="w-16 h-16 flex items-center justify-center mr-8" style={{backgroundColor: '#262525'}}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-lg font-light font-tt-norms leading-relaxed mb-6" style={{color: '#262525'}}>
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 mr-3" style={{backgroundColor: '#262525'}}></div>
                          <span className="font-light font-tt-norms" style={{color: '#262525'}}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < followUpSteps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-1 h-12 opacity-30" style={{backgroundColor: '#262525'}}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 p-12 text-center" style={{backgroundColor: '#262525'}}>
          <h3 className="text-2xl md:text-3xl font-light font-tt-norms mb-6 text-white">
            BEREIT FÜR IHR PROJEKT?
          </h3>
          <p className="text-lg font-light font-tt-norms leading-relaxed max-w-3xl mx-auto text-white opacity-90">
            Lassen Sie uns gemeinsam den optimalen Weg für Ihre digitale Lösung finden - 
            von der ersten Idee bis zum nachhaltigen Erfolg.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
