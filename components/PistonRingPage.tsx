import React from 'react';

const PistonRingPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white py-12 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold oswald uppercase tracking-tighter text-navy">
            Technical <span className="text-highlight">Classification</span>
          </h2>
          <div className="h-1 w-12 bg-highlight mx-auto mt-4"></div>
        </div>
        
        {/* 核心展示：DY category.png */}
        <div className="bg-gray-50 rounded-3xl p-4 md:p-10 shadow-inner border border-gray-100 overflow-hidden flex justify-center">
          <img 
            src="./DY category.png" 
            alt="DY Piston Ring Categories" 
            className="max-w-full h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
        
        <p className="mt-8 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold">
          Standard Specifications for Global Distribution
        </p>
      </div>
    </div>
  );
};

export default PistonRingPage;
