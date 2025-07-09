
import React from 'react';
import { Code, Database, Globe, Cloud, Terminal, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { isVisible: headerVisible, setElementRef: setHeaderRef } = useScrollAnimation();
  const { isVisible: skillsVisible, setElementRef: setSkillsRef } = useScrollAnimation();

  const skillCategories = [
    {
      title: "PROGRAMMIERSPRACHEN",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go"]
    },
    {
      title: "WEB DEVELOPMENT", 
      icon: Globe,
      skills: ["React", "Vue.js", "Node.js", "HTML/CSS", "Express.js", "REST APIs"]
    },
    {
      title: "DATENBANKEN",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"]
    },
    {
      title: "CLOUD & AWS",
      icon: Cloud,
      skills: ["AWS Lambda", "S3", "EC2", "CloudFormation", "API Gateway", "CloudWatch"]
    },
    {
      title: "ENTWICKLUNGSTOOLS",
      icon: Terminal,
      skills: ["VS Code", "Git", "Docker", "IntelliJ", "PyCharm", "Postman"]
    },
    {
      title: "SALESFORCE",
      icon: Zap,
      skills: ["Apex", "Lightning", "SOQL", "Admin", "Process Builder", "Flows"]
    }
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto bg-gray-800">
      <div 
        ref={setHeaderRef}
        className={`mb-20 transition-all duration-1000 ease-out ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide hover:scale-105 transition-transform duration-300 text-white">
          TECHNICAL SKILLS
        </h2>
        <p className="text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-12 text-gray-300">
          Eine umfassende Übersicht meiner technischen Expertise in verschiedenen 
          Programmiersprachen, Web-Technologien und Cloud-Plattformen.
        </p>
        <div className="w-24 h-1 bg-blue-500"></div>
      </div>
      
      <div 
        ref={setSkillsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.title}
            className={`group p-8 transition-all duration-1000 ease-out bg-gray-700 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${
              skillsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${categoryIndex * 100}ms`
            }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <category.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-light font-tt-norms group-hover:text-blue-400 transition-colors duration-300 text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill} 
                  className="text-base font-light font-tt-norms py-1 hover:translate-x-2 hover:text-blue-400 transition-all duration-300 cursor-default text-gray-300" 
                  style={{
                    animationDelay: `${skillIndex * 100}ms`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
