import React from 'react';

const Hero: React.FC = () => {
  return (
    /* 通过添加 -mt-px (负 1 像素外边距) 或确保没有 margin 来消除与导航栏之间的白条。
       同时使用 block 消除行内元素间隙。
    */
    <div className="relative h-[70vh] w-full overflow-hidden block -mt-1 shadow-none border-none outline-none">
      {/* 确保图片完全填充容器且没有任何边距 */}
      <img
        src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/banner.png"
        alt="DY Piston Ring Engineering"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 block m-0 p-0 border-none"
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
