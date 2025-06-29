
import React from 'react';

const TechImage = () => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop" 
        alt="Technology Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default TechImage;
