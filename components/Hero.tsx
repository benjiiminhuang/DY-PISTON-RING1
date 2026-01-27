import React from 'react';

const Hero: React.FC = () => {
  return (
    /* 使用 min-h 而不是固定 h-[70vh] 有助于确保容器至少填充视口高度的一部分，并移除可能的间距 */
    <div className="relative h-[70vh] w-full overflow-hidden block">
      {/* 确保图片使用 block 布局并移除底部间隙 */}
      <img
        src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/banner.png"
        alt="DY Piston Ring Engineering"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 block m-0 p-0"
        onError={(e) => {
          // 备选方案：如果 banner.png 加载失败，回退到高质量工业背景图
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000";
        }}
      />
      
      {/* 遮罩层：增加质感，让页面看起来更深邃 */}
      <div className="absolute inset-0 bg-navy/10"></div>
      
      {/* 底部装饰：使用渐变色带平滑过渡到下一个区域 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight to-transparent opacity-30"></div>
    </div>
  );
};

export default Hero;
