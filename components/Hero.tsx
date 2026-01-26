
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Reverted to the previous high-precision industrial banner */}
      <img
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        alt="DY Piston Ring Engineering"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />
      
      {/* Dark overlay for better text contrast if needed later */}
      <div className="absolute inset-0 bg-navy/10"></div>
      
      {/* Subtle bottom accent to transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight to-transparent opacity-30"></div>
    </div>
  );
};

export default Hero;
