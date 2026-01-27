import React from 'react';

const Hero: React.FC = () => {
  return (
    /* 方案：强制向上拉升
       使用 -translate-y 配合相对定位，将整个组件向上“抽吸”一段距离，
       确保完全覆盖导航栏下方的缝隙。同时取消任何可能的间距。
    */
    <div className="relative h-[70vh] w-full overflow-hidden block -mt-[2px] transform">
      {/* 确保图片完全填充容器，并稍微向上偏移以确保对齐 */}
      <img
        src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/banner.png"
        alt="DY Piston Ring Engineering"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 block m-0 p-0 border-none"
        style={{ top: '-1px' }} // 极致微调，向上压 1 像素
        onError={(e) => {
          // 备选方案：如果 banner.png 加载失败，回退到高质量工业背景图
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000";
        }}
      />
      
      {/* 遮罩层：增加质感，让页面看起来更深邃 */}
      <div className="absolute inset-0 bg-navy/10 pointer-events-none"></div>
      
      {/* 底部装饰：使用渐变色带平滑过渡到下一个区域 */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-highlight to-transparent opacity-30"></div>
    </div>
  );
};

export default Hero;
