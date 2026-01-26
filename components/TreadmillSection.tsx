
import React, { useMemo } from 'react';

const TreadmillSection: React.FC = () => {
  const messages = [
    "Wish you all the best",
    "积极向上",
    "新年进步",
    "Keep moving forward",
    "Every thing will be fine",
    "You can do this"
  ];

  const floatingItems = useMemo(() => {
    return messages.map((text, i) => ({
      text,
      top: `${15 + (i * 12) % 65}%`,
      left: `${10 + (i * 17) % 60}%`,
      delay: `${i * 1.5}s`
    }));
  }, []);

  return (
    <div className="bg-[#f7f4f8] h-64 md:h-80 overflow-hidden relative flex flex-col justify-center">
      
      {/* Dynamic Floating Text Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingItems.map((item, index) => (
          <div
            key={index}
            className="absolute animate-float-fade whitespace-nowrap"
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay
            }}
          >
            <span className="text-red-600 font-bold oswald uppercase tracking-widest text-base md:text-xl drop-shadow-sm">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Video Container */}
      <div className="flex justify-end pr-4 md:pr-16 lg:pr-32 z-10">
        <div 
          className="relative w-48 h-32 md:w-64 md:h-40 flex items-end overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
          }}
        >
          {/* USER ASSET: Treadmill Loop Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-contain mix-blend-multiply opacity-95 pointer-events-none"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/uLfmrNOfmtjryqwc.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default TreadmillSection;
