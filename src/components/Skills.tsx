
import React from 'react';
import { Code, Database, Globe, Palette, Terminal, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "Go", level: 65 }
      ]
    },
    {
      title: "IDEs & Editors",
      icon: Terminal,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "WebStorm", level: 80 },
        { name: "PyCharm", level: 75 },
        { name: "Vim", level: 70 },
        { name: "Eclipse", level: 65 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 65 }
      ]
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
            Entwicklungsumgebungen und modernen Web-Technologien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-slate-700/20 rounded-xl p-8 border border-slate-600/30 hover:border-orange-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="bg-slate-800/40 rounded-lg p-4 border border-slate-600/20 hover:border-orange-400/30 transition-all duration-200 hover:transform hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-slate-200 font-medium text-sm mb-2">{skill.name}</span>
                      <div className="w-full bg-slate-600/50 rounded-full h-1.5 mb-2">
                        <div 
                          className="bg-gradient-to-r from-orange-400 to-red-400 h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-400 text-xs">{skill.level}%</span>
                    </div>
                  </div>
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
