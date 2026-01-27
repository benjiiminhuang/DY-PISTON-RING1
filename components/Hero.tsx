import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* 使用标准 GitHub Raw 长链接格式，确保 100% 访问成功 */}
      <img
        src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/banner.jpg"
        alt="DY Piston Ring Engineering"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        onError={(e) => {
          // 备选方案：如果 banner.jpg 加载失败，回退到 Unsplash 工业图
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000";
        }}
      />
      
      {/* 遮罩层：增加质感 */}
      <div className="absolute inset-0 bg-navy/10"></div>
      
      {/* 底部装饰：平滑过渡 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight to-transparent opacity-30"></div>
    </div>
  );
};

export default Hero;
