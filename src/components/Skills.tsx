
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
            A comprehensive overview of my technical expertise across various programming languages, 
            development environments, and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-slate-700/20 rounded-lg p-6 border border-slate-600/30 hover:border-orange-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
