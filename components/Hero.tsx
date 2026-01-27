import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden bg-navy flex items-center justify-center">
      {/* 背景底层：使用 banner.png */}
      <img
        src="./banner.png"
        alt="Engineering Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 左侧文字：核心品牌口号 */}
        <div className="text-white text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-7xl font-black oswald uppercase tracking-tighter mb-4 leading-none">
            DY <span className="text-highlight">PISTON RING</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light uppercase tracking-[0.3em] mb-8">
            High Precision • Euro 7 Compliance
          </p>
          <div className="h-1 w-24 bg-highlight mx-auto md:mx-0"></div>
        </div>

        {/* 右侧：首页核心图标 DY animation.png */}
        <div className="flex-1 max-w-md">
          <img 
            src="./DY animation.png" 
            alt="Product Architecture" 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(71,125,199,0.4)] transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight via-white/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
