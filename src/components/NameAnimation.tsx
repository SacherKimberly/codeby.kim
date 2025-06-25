
import React, { useEffect, useState } from 'react';

const NameAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start the entrance animation
    const enterTimer = setTimeout(() => setIsVisible(true), 200);
    
    // Start the exit animation after 3 seconds
    const exitTimer = setTimeout(() => setIsExiting(true), 3000);
    
    // Complete the animation after exit transition
    const completeTimer = setTimeout(() => onComplete(), 3800);
    
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center transition-all duration-800 ${
      isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20 animate-pulse"></div>
      
      <div className={`relative z-10 text-center transform transition-all duration-1000 ease-out ${
        isVisible && !isExiting
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-12 opacity-0 scale-95'
      }`}>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
          Kim Sacher
        </h1>
        <div className="mt-4 w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default NameAnimation;
