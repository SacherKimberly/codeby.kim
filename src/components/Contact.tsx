
import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-white relative z-10 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light font-tt-norms tracking-wide mb-16" style={{color: '#262525'}}>
          KONTAKT
        </h2>
        
        <div className="space-y-12">
          <p className="text-xl font-light font-tt-norms leading-relaxed max-w-2xl mx-auto" style={{color: '#262525'}}>
            Ich bin immer interessiert an neuen Möglichkeiten und spannenden Projekten. 
            Lass uns in Kontakt treten und besprechen, wie wir deine Ideen zum Leben erwecken können.
          </p>
          
          <div className="p-12 border max-w-2xl mx-auto" style={{backgroundColor: '#E4E2DD', borderColor: '#262525'}}>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 flex items-center justify-center rounded-full mr-4" style={{backgroundColor: '#262525'}}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-light font-tt-norms" style={{color: '#262525'}}>
                  E-MAIL
                </h3>
              </div>
            </div>
            
            <a 
              href="mailto:kimsacher@yahoo.com"
              className="text-2xl font-light font-tt-norms hover:underline transition-all duration-300"
              style={{color: '#262525'}}
            >
              kimsacher@yahoo.com
            </a>
            
            <div className="mt-8">
              <a 
                href="mailto:kimsacher@yahoo.com"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-light font-tt-norms tracking-widest hover:bg-gray-700 transition-all duration-300"
                style={{backgroundColor: '#262525'}}
              >
                <Mail className="w-5 h-5" />
                NACHRICHT SENDEN
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t max-w-2xl mx-auto" style={{borderColor: '#262525'}}>
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
