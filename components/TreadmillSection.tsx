import React, { useState, useEffect } from 'react';

const TreadmillSection: React.FC = () => {
  const messages = [
    "Wish you all the best",
    "积极向上",
    "新年进步",
    "Keep moving forward",
    "Everything will be fine",
    "You can do this",
    "DY PISTON RING",
    "Precision & Quality"
  ];

  // 状态：当前正在显示的文字信息流
  const [activeTexts, setActiveTexts] = useState<{id: number, text: string, top: string, left: string}[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const spawnText = () => {
      const newText = {
        id: idCounter++,
        text: messages[Math.floor(Math.random() * messages.length)],
        // 随机位置：限制在容器内部 (10% - 80% 之间防止出界)
        top: `${Math.random() * 70 + 10}%`,
        left: `${Math.random() * 70 + 10}%`,
      };

      setActiveTexts(prev => [...prev.slice(-10), newText]); // 最多同时存在 10 个

      // 4秒后移除该文字，保持页面整洁
      setTimeout(() => {
        setActiveTexts(prev => prev.filter(t => t.id !== newText.id));
      }, 4000);
    };

    // 每 800 毫秒生成一个新的文字
    const interval = setInterval(spawnText, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f7f4f8] h-64 md:h-80 overflow-hidden relative flex flex-col justify-center border-t border-white/10">
      
      {/* 随机浮现文字层 */}
      <div className="absolute inset-0 pointer-events-none">
        {activeTexts.map((item) => (
          <div
            key={item.id}
            className="absolute animate-random-fade whitespace-nowrap"
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            <span className="text-red-600 font-bold oswald uppercase tracking-widest text-lg md:text-2xl drop-shadow-md opacity-0">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* 视频容器 */}
      <div className="flex justify-end pr-4 md:pr-16 lg:pr-32 z-10">
        <div 
          className="relative w-48 h-32 md:w-64 md:h-40 flex items-end overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
          }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-contain mix-blend-multiply opacity-95"
          >
            <source src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/DY%20Walking..mp4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* 动画定义 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes randomFade {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          20% { opacity: 0.7; transform: scale(1) translateY(0); }
          80% { opacity: 0.7; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(1.1) translateY(-10px); }
        }
        .animate-random-fade span {
          animation: randomFade 4s ease-in-out forwards;
        }
      `}} />
    </div>
  );
};

export default TreadmillSection;
