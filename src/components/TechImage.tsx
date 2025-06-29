
import React from 'react';

const TechImage = () => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <img 
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop" 
        alt="AI Technology Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default TechImage;
