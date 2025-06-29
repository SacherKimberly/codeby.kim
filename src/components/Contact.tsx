import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GITHUB" },
    { icon: Linkedin, href: "#", label: "LINKEDIN" },
    { icon: Twitter, href: "#", label: "TWITTER" },
    { icon: Mail, href: "mailto:kim@example.com", label: "E-MAIL" }
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-light mb-6 uppercase tracking-wide font-tt-norms" style={{color: '#262525'}}>
          LASS UNS ZUSAMMENARBEITEN
        </h2>
        <p className="text-lg mb-12 max-w-2xl font-light font-tt-norms" style={{color: '#262525'}}>
          ICH BIN IMMER INTERESSIERT AN NEUEN MÖGLICHKEITEN UND SPANNENDEN PROJEKTEN. 
          LASS UNS IN KONTAKT TRETEN UND BESPRECHEN, WIE WIR DEINE IDEEN ZUM LEBEN ERWECKEN KÖNNEN.
        </p>
        
        <div className="flex gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group w-14 h-14 rounded-full flex items-center justify-center border-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              style={{backgroundColor: '#E4E2DD', borderColor: '#262525'}}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" style={{color: '#262525'}} />
            </a>
          ))}
        </div>
        
        <div className="rounded-lg p-8 border-2 shadow-sm" style={{backgroundColor: '#E4E2DD', borderColor: '#262525'}}>
          <h3 className="text-xl font-light mb-4 uppercase font-tt-norms" style={{color: '#262525'}}>BEREIT FÜR EIN NEUES PROJEKT?</h3>
          <p className="mb-6 font-light font-tt-norms" style={{color: '#262525'}}>
            SCHREIB MIR EINE NACHRICHT UND LASS UNS ÜBER DEINE NÄCHSTE GROSSE IDEE SPRECHEN.
          </p>
          <a 
            href="mailto:kim@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-light font-tt-norms uppercase tracking-wider"
            style={{backgroundColor: '#262525'}}
          >
            <Mail className="w-5 h-5" />
            KONTAKT AUFNEHMEN
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t-2" style={{borderColor: '#262525'}}>
          <p className="font-light font-tt-norms" style={{color: '#262525'}}>
            © 2024 KIM SACHER. ALLE RECHTE VORBEHALTEN.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
