
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
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Linke Spalte */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-light font-tt-norms tracking-wide" style={{color: '#262525'}}>
            LASS UNS<br/>ZUSAMMENARBEITEN
          </h2>
          
          <p className="text-xl font-light font-tt-norms leading-relaxed max-w-xl" style={{color: '#262525'}}>
            Ich bin immer interessiert an neuen Möglichkeiten und spannenden Projekten. 
            Lass uns in Kontakt treten und besprechen, wie wir deine Ideen zum Leben erwecken können.
          </p>
          
          <div className="flex gap-6 pt-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group w-16 h-16 flex items-center justify-center border hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                style={{backgroundColor: '#E4E2DD', borderColor: '#262525'}}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" style={{color: '#262525'}} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Rechte Spalte */}
        <div className="space-y-8">
          <div className="p-12 border" style={{backgroundColor: '#E4E2DD', borderColor: '#262525'}}>
            <h3 className="text-2xl font-light mb-6 font-tt-norms" style={{color: '#262525'}}>
              BEREIT FÜR EIN NEUES PROJEKT?
            </h3>
            <p className="text-lg mb-8 font-light font-tt-norms leading-relaxed" style={{color: '#262525'}}>
              Schreib mir eine Nachricht und lass uns über deine nächste große Idee sprechen.
            </p>
            <a 
              href="mailto:kim@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-light font-tt-norms tracking-widest hover:bg-gray-700 transition-all duration-300"
              style={{backgroundColor: '#262525'}}
            >
              <Mail className="w-5 h-5" />
              KONTAKT AUFNEHMEN
            </a>
          </div>
          
          <div className="pt-8 border-t" style={{borderColor: '#262525'}}>
            <p className="text-sm font-light font-tt-norms" style={{color: '#262525'}}>
              © 2024 Kim Sacher. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
