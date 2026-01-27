import React, { useState } from 'react';
// 确保 import 路径简洁
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroCard from './components/IntroCard';
import FAQSection from './components/FAQSection';
import TreadmillSection from './components/TreadmillSection';
import Footer from './components/Footer';
import PistonRingPage from './components/PistonRingPage';
import DisplayPage from './components/DisplayPage';
import SocialNotifications from './components/SocialNotifications';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'piston-ring' | 'display'>('home');

  const handleNavigate = (view: 'home' | 'piston-ring' | 'display') => {
    setCurrentView(view);
    window.scrollTo(0, 0); // 每次跳转回到顶部
  };

  return (
    // 这里的 flex-col 确保 Navbar 在顶部，main 撑开剩下空间
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 关键：Navbar 放在这里，确保它在所有页面都显示 */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main className="flex-grow pt-16"> {/* pt-16 是为了防止导航栏遮挡内容 */}
        {currentView === 'home' && (
          <>
            <Hero />
            <IntroCard />
            {/* ... 你的其他首页内容 ... */}
            <FAQSection />
            <TreadmillSection />
          </>
        )}

        {/* 这里的跳转页面 */}
        {currentView === 'piston-ring' && <PistonRingPage />}
        {currentView === 'display' && <DisplayPage />}
      </main>

      <Footer />
      <SocialNotifications />
    </div>
  );
};

export default App;
