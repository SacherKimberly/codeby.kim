
import React from 'react';

const TechImage = () => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <img 
        src="/lovable-uploads/a713ca57-736d-4b6f-a9e8-74bb4b8b6818.png" 
        alt="Developer workspace with multiple monitors"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default TechImage;
