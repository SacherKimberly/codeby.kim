
import React from 'react';
import { Code, Database, Globe, Palette, Terminal, Zap, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programmiersprachen",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "Go"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Vue.js", "Node.js", "HTML/CSS", "Express.js", "REST APIs"]
    },
    {
      title: "Datenbanken",
      icon: Database,
      skills: ["MongoDB", "DynamoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      title: "Cloud & AWS",
      icon: Cloud,
      skills: ["AWS Lambda", "AWS S3", "EC2", "CloudFormation", "API Gateway", "CloudWatch"]
    },
    {
      title: "Entwicklungstools",
      icon: Terminal,
      skills: ["VS Code", "Git", "Docker", "IntelliJ IDEA", "PyCharm", "Postman"]
    },
    {
      title: "Salesforce",
      icon: Zap,
      skills: ["Apex", "Lightning Components", "SOQL", "Salesforce Admin", "Process Builder", "Flows"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Eine umfassende Übersicht meiner technischen Expertise in verschiedenen Programmiersprachen, 
            Web-Technologien, Datenbanken und Cloud-Plattformen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-slate-700/20 rounded-xl p-6 border border-slate-600/30 hover:border-orange-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 bg-slate-800/40 text-slate-200 rounded-lg text-sm font-medium border border-slate-600/20 hover:border-orange-400/40 hover:bg-slate-700/40 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
