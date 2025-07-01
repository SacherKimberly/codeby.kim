
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
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
    }`}>
      {/* Hauptindikator */}
      <div className="relative w-20 h-20">
        {/* Äußerer Ring */}
        <div 
          className="absolute inset-0 rounded-full border opacity-10"
          style={{ borderColor: '#262525', borderWidth: '1px' }}
        ></div>
        
        {/* Dynamischer Fortschrittsring */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#262525"
            strokeWidth="1.5"
            strokeDasharray={`${scrollProgress * 2.64} 264`}
            className="transition-all duration-300 ease-out"
            style={{ 
              filter: 'drop-shadow(0 2px 8px rgba(38, 37, 37, 0.15))',
              strokeLinecap: 'round'
            }}
          />
        </svg>
        
        {/* Zentraler Punkt mit Pulseffekt */}
        <div className="absolute inset-6 rounded-full flex items-center justify-center">
          <div 
            className="w-6 h-6 rounded-full transition-all duration-500"
            style={{ 
              backgroundColor: '#262525',
              transform: `scale(${0.5 + (scrollProgress / 100) * 0.5})`,
              boxShadow: `0 0 ${10 + (scrollProgress / 100) * 15}px rgba(38, 37, 37, 0.3)`
            }}
          ></div>
        </div>
      </div>
      
      {/* Schwebende Akzentpunkte */}
      <div className="absolute -top-3 -right-1 w-2 h-2 rounded-full animate-pulse" 
           style={{ 
             backgroundColor: '#E4E2DD',
             animationDelay: '0s',
             animationDuration: '3s'
           }}></div>
      <div className="absolute -bottom-3 -left-1 w-1.5 h-1.5 rounded-full animate-pulse" 
           style={{ 
             backgroundColor: '#CCC7BC',
             animationDelay: '1.5s',
             animationDuration: '3s'
           }}></div>
      <div className="absolute top-2 -left-4 w-1 h-1 rounded-full animate-pulse" 
           style={{ 
             backgroundColor: '#262525',
             animationDelay: '0.7s',
             animationDuration: '4s',
             opacity: '0.4'
           }}></div>
      
      {/* Subtile Linie */}
      <div 
        className="absolute left-1/2 -bottom-8 w-px transition-all duration-700"
        style={{ 
          backgroundColor: '#262525',
          height: `${scrollProgress * 0.3}px`,
          opacity: '0.2',
          transform: 'translateX(-50%)'
        }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
