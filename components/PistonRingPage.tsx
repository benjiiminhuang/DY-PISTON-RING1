import React from 'react';

const PistonRingPage: React.FC = () => {
  return (
    // 改用 min-h-screen 并增加顶部内边距 pt-20，确保不被 Navbar 挡住
    <div className="min-h-screen bg-white flex flex-col items-center pt-24 pb-12 px-4">
      
      {/* 增加一个简单的标题，有助于确认页面已经跳转成功 */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-navy oswald uppercase tracking-tighter">
          Technical <span className="text-highlight">Classification</span>
        </h2>
        <div className="h-1 w-12 bg-highlight mx-auto mt-2"></div>
      </div>

      <div className="max-w-7xl w-full flex justify-center items-center shadow-sm rounded-xl overflow-hidden border border-gray-50 p-2">
        <img 
          src="./DY category.png" 
          alt="Piston Ring Technical Detail" 
          className="w-full h-auto max-h-[75vh] object-contain animate-fade-in"
          // 增加加载失败的备选方案
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Loading+Failed";
          }}
        />
      </div>
    </div>
  );
};

export default PistonRingPage;
