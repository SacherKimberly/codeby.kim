
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#262525'}}>
          Lass uns zusammenarbeiten
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: '#262525'}}>
          Ich bin immer interessiert an neuen Möglichkeiten und spannenden Projekten. 
          Lass uns in Kontakt treten und besprechen, wie wir deine Ideen zum Leben erwecken können.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
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
          <h3 className="text-xl font-semibold mb-4" style={{color: '#262525'}}>Bereit für ein neues Projekt?</h3>
          <p className="mb-6" style={{color: '#262525'}}>
            Schreib mir eine Nachricht und lass uns über deine nächste große Idee sprechen.
          </p>
          <a 
            href="mailto:kim@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-medium"
            style={{backgroundColor: '#262525'}}
          >
            <Mail className="w-5 h-5" />
            Kontakt aufnehmen
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t-2" style={{borderColor: '#262525'}}>
          <p style={{color: '#262525'}}>
            © 2024 Kim Sacher. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
