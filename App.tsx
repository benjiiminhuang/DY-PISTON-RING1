import React, { useState, useEffect } from 'react';
// 1. 移除 .tsx 后缀，确保 Vite 识别
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TreadmillSection from './components/TreadmillSection';
import IntroCard from './components/IntroCard';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PistonRingPage from './components/PistonRingPage';
import DisplayPage from './components/DisplayPage';
import SocialNotifications from './components/SocialNotifications';

const App: React.FC = () => {
  // 确保初始状态为 'home'
  const [currentView, setCurrentView] = useState<'home' | 'piston-ring' | 'display'>('home');

  // 增加一个调试日志，在浏览器控制台（F12）可以看到当前视图
  useEffect(() => {
    console.log("当前视图已切换为:", currentView);
  }, [currentView]);

  const displayProducts = [
    {
      id: 1,
      image: "./DLC-PVD-PVD.jpg", // ⚠️ 请二次确认 GitHub 上的文件名
      title: "DLC / PVD / PVD Piston Ring Set",
      highlightTitle: "DLC / PVD / PVD",
      description: "High-end coating configuration for motorcycle engines."
    },
    {
      id: 2,
      image: "./N-P-PCr.jpg", 
      title: "N / P / Pcr Piston Ring Set",
      highlightTitle: "N / P / Pcr",
      description: "Standard solution for motorcycle engines."
    },
    {
      id: 3,
      image: "./P+Cr-P-Cr.jpg", 
      title: "P + Cr / P / Cr Piston Ring Set",
      highlightTitle: "P + Cr / P / Cr",
      description: "Reliable wear resistance for automotive engines."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 2. 检查这里：确保 Navbar 组件被正确调用并传递了函数 */}
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <IntroCard />
            
            <section id="display" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                   <h2 className="text-3xl font-bold text-navy oswald uppercase tracking-tight">Product <span className="text-highlight">Display</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {displayProducts.map((product) => (
                    <div key={product.id} className="relative group overflow-hidden bg-white shadow-md rounded-lg h-96">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-8 text-center transition-opacity">
                        <h3 className="text-white text-xl mb-4">{product.title}</h3>
                        <p className="text-gray-300 text-sm">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            <FAQSection />
            <TreadmillSection />
          </div>
        )}
        
        {/* 3. 视图切换逻辑 */}
        {currentView === 'piston-ring' && <PistonRingPage />}
        {currentView === 'display' && <DisplayPage />}
      </main>

      <Footer />
      <SocialNotifications />
    </div>
  );
};

export default App;
