
import React from 'react';
import { GraduationCap, Briefcase, Code2, Calendar } from 'lucide-react';

const Career = () => {
  const milestones = [
    {
      year: "2022 - heute",
      icon: GraduationCap,
      title: "Studium Medieninformatik",
      organization: "Ludwig-Maximilians-Universität München",
      description: "Vertiefung in Web-Technologien, Programmierung und digitale Medien",
      type: "education"
    },
    {
      year: "2024 - heute", 
      icon: Code2,
      title: "Freiberufliche Tätigkeit",
      organization: "Webdesign & Programmierung",
      description: "Eigenständige Projekte in Webentwicklung, WordPress und individuellen Lösungen",
      type: "freelance"
    },
    {
      year: "März 2024 - August 2024",
      icon: Briefcase,
      title: "Python Programmiererin",
      organization: "Burda",
      description: "Backend-Entwicklung und Datenverarbeitung mit Python",
      type: "employment"
    },
    {
      year: "Ab September 2024",
      icon: Code2,
      title: "Rückkehr zur Freiberuflichkeit",
      organization: "Vollzeit Webentwicklung",
      description: "Fokus auf umfassende Web-Projekte und Kundenlösungen",
      type: "future"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return '#8B7355';
      case 'employment':
        return '#A67C52';
      case 'freelance':
        return '#262525';
      case 'future':
        return '#6B5B47';
      default:
        return '#262525';
    }
  };

  return (
    <section className="py-16 md:py-32 px-6 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto" style={{backgroundColor: '#F8F6F3'}}>
      <div className="mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-light mb-6 md:mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          Werdegang
        </h2>
        <p className="text-lg md:text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-8 md:mb-12" style={{color: '#262525'}}>
          Mein beruflicher Weg von der akademischen Ausbildung bis zur 
          selbstständigen Webentwicklung mit praktischer Erfahrung in der Industrie.
        </p>
        <div className="w-16 md:w-24 h-0.5 md:h-1 mb-8 md:mb-16" style={{backgroundColor: '#262525'}}></div>
      </div>
      
      <div className="relative">
        {/* Timeline Line - Responsiv */}
        <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 opacity-20" style={{backgroundColor: '#262525'}}></div>
        
        <div className="space-y-8 md:space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.title}
              className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
            >
              {/* Timeline Dot - Responsiv */}
              <div 
                className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 z-10 mt-2"
                style={{
                  backgroundColor: getTypeColor(milestone.type),
                  borderColor: '#F8F6F3'
                }}
              ></div>
              
              {/* Content Card - Responsiv */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12 lg:pr-16 ml-12 md:ml-0' : 'md:pl-12 lg:pl-16 ml-12 md:ml-0'
              }`}>
                <div 
                  className="p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-opacity-10"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: '#262525'
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl mr-3 md:mr-4"
                      style={{backgroundColor: getTypeColor(milestone.type)}}
                    >
                      <milestone.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <span 
                        className="text-xs md:text-sm font-medium font-tt-norms tracking-wide uppercase"
                        style={{color: getTypeColor(milestone.type)}}
                      >
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-light font-tt-norms mb-2" style={{color: '#262525'}}>
                    {milestone.title}
                  </h3>
                  
                  <h4 className="text-base md:text-lg font-medium font-tt-norms mb-3 md:mb-4" style={{color: getTypeColor(milestone.type)}}>
                    {milestone.organization}
                  </h4>
                  
                  <p className="text-sm md:text-base font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 md:mt-20 text-center">
        <div className="inline-flex items-center space-x-3 md:space-x-4 px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
          <Calendar className="w-5 h-5 md:w-6 md:h-6" style={{color: '#262525'}} />
          <span className="text-base md:text-lg font-light font-tt-norms" style={{color: '#262525'}}>
            Kontinuierliche Weiterentwicklung seit 2022
          </span>
        </div>
      </div>
    </section>
  );
};

export default Career;
