
import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
    }`}>
      {/* Hauptkreis mit Fortschrittsanzeige */}
      <div className="relative w-16 h-16">
        {/* Hintergrundkreis */}
        <div 
          className="absolute inset-0 border-2 opacity-20"
          style={{ borderColor: '#CCC7BC' }}
        ></div>
        
        {/* Fortschrittskreis */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#262525"
            strokeWidth="2"
            strokeDasharray={`${scrollProgress * 2.83} 283`}
            className="transition-all duration-150 ease-out"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(38, 37, 37, 0.1))' }}
          />
        </svg>
        
        {/* Innerer Punkt */}
        <div 
          className="absolute inset-4 transition-all duration-300"
          style={{ 
            backgroundColor: '#262525',
            transform: `scale(${0.3 + (scrollProgress / 100) * 0.7})`
          }}
        ></div>
      </div>
      
      {/* Kleine Akzentpunkte */}
      <div className="absolute -top-2 -right-2 w-3 h-3 animate-pulse" style={{ backgroundColor: '#E4E2DD' }}></div>
      <div className="absolute -bottom-2 -left-2 w-2 h-2 animate-pulse delay-500" style={{ backgroundColor: '#CCC7BC' }}></div>
      
      {/* Prozentanzeige */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
        <div className="text-xs font-light font-tt-norms opacity-60" style={{ color: '#262525' }}>
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
