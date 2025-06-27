
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:kim@example.com", label: "E-Mail" }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
          Lass uns zusammenarbeiten
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Ich bin immer interessiert an neuen Möglichkeiten und spannenden Projekten. 
          Lass uns in Kontakt treten und besprechen, wie wir deine Ideen zum Leben erwecken können.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group w-14 h-14 bg-slate-700/50 rounded-full flex items-center justify-center border border-slate-600/30 hover:border-orange-400/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
        
        <div className="bg-slate-700/30 rounded-lg p-8 border border-slate-600/30">
          <h3 className="text-xl font-semibold mb-4 text-slate-100">Bereit für ein neues Projekt?</h3>
          <p className="text-slate-400 mb-6">
            Schreib mir eine Nachricht und lass uns über deine nächste große Idee sprechen.
          </p>
          <a 
            href="mailto:kim@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Kontakt aufnehmen
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-600/30">
          <p className="text-slate-500">
            © 2024 Kim Sacher. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
