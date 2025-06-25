
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with React, Node.js, and modern frameworks"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design with focus on user experience and visual aesthetics"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized, fast-loading applications with best practices"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
            About Me
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies and a keen eye for design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="group p-6 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{skill.title}</h3>
              <p className="text-slate-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
