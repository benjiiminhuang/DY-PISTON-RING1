import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Primary Banner Image */}
      <img
        src="./banner.png"
        alt="DY Piston Ring Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <div className="h-1 w-20 bg-highlight mx-auto mb-4"></div>
          <h1 className="text-5xl md:text-8xl font-black oswald uppercase tracking-tighter text-white leading-none">
            DY <span className="text-highlight">PISTON RING</span>
          </h1>
          <div className="h-1 w-20 bg-highlight mx-auto mt-4"></div>
        </div>
        <p className="text-lg md:text-2xl text-white font-light uppercase tracking-[0.4em] mb-8 opacity-90">
          Precision Engineering • Global Standards
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight via-white/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
