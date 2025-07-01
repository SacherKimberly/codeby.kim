
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
        return '#4A90E2';
      case 'employment':
        return '#50C878';
      case 'freelance':
        return '#FF6B35';
      case 'future':
        return '#9B59B6';
      default:
        return '#262525';
    }
  };

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto" style={{backgroundColor: '#E4E2DD'}}>
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          Werdegang
        </h2>
        <p className="text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-12" style={{color: '#262525'}}>
          Mein beruflicher Weg von der akademischen Ausbildung bis zur 
          selbstständigen Webentwicklung mit praktischer Erfahrung in der Industrie.
        </p>
        <div className="w-24 h-1 mb-16" style={{backgroundColor: '#262525'}}></div>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-gray-300"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.title}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
            >
              {/* Timeline Dot */}
              <div 
                className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10"
                style={{backgroundColor: getTypeColor(milestone.type)}}
              ></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 ml-16 md:ml-0' : 'md:pl-16 ml-16 md:ml-0'}`}>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-full mr-4"
                      style={{backgroundColor: getTypeColor(milestone.type)}}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span 
                        className="text-sm font-medium font-tt-norms"
                        style={{color: getTypeColor(milestone.type)}}
                      >
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-light font-tt-norms mb-2" style={{color: '#262525'}}>
                    {milestone.title}
                  </h3>
                  
                  <h4 className="text-lg font-medium font-tt-norms mb-4" style={{color: getTypeColor(milestone.type)}}>
                    {milestone.organization}
                  </h4>
                  
                  <p className="text-base font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-lg">
          <Calendar className="w-6 h-6" style={{color: '#262525'}} />
          <span className="text-lg font-light font-tt-norms" style={{color: '#262525'}}>
            Kontinuierliche Weiterentwicklung seit 2022
          </span>
        </div>
      </div>
    </section>
  );
};

export default Career;
