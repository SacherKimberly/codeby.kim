
import React from 'react';
import { Code, Database, Globe, Cloud, Terminal, Zap } from 'lucide-react';

const Skills = () => {
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
    <section className="py-32 px-8 md:px-16 lg:px-24 relative z-10 max-w-7xl mx-auto" style={{backgroundColor: '#E4E2DD'}}>
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light mb-8 font-tt-norms tracking-wide" style={{color: '#262525'}}>
          TECHNICAL SKILLS
        </h2>
        <p className="text-xl max-w-3xl font-light font-tt-norms leading-relaxed mb-12" style={{color: '#262525'}}>
          Eine umfassende Übersicht meiner technischen Expertise in verschiedenen 
          Programmiersprachen, Web-Technologien und Cloud-Plattformen.
        </p>
        <div className="w-24 h-1" style={{backgroundColor: '#262525'}}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.title}
            className="group p-8 transition-all duration-300 hover:transform hover:scale-[1.02] bg-white"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#262525'}}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-light font-tt-norms" style={{color: '#262525'}}>{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill} className="text-base font-light font-tt-norms py-1" style={{color: '#262525'}}>
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
