import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TreadmillSection from './components/TreadmillSection.tsx';
import IntroCard from './components/IntroCard.tsx';
import FAQSection from './components/FAQSection.tsx';
import Footer from './components/Footer.tsx';
import PistonRingPage from './components/PistonRingPage.tsx';
import DisplayPage from './components/DisplayPage.tsx';
import SocialNotifications from './components/SocialNotifications.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'piston-ring' | 'display'>('home');

  const displayProducts = [
    {
      id: 1,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/QZNIVeljTZXvecLS.jpg",
      title: "DLC / PVD / PVD Piston Ring Set",
      highlightTitle: "DLC / PVD / PVD",
      description: "High-end coating configuration for motorcycle engines, ideal for racing and high-performance applications."
    },
    {
      id: 2,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/TxkWJxgBrzQrLQip.jpg",
      title: "N / P / Pcr Piston Ring Set",
      highlightTitle: "N / P / Pcr",
      description: "The most popular standard solution for motorcycle engines, offering excellent balance and reliable durability."
    },
    {
      id: 3,
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/avlMucduOqcVyyuE.jpg",
      title: "P + Cr / P / Cr Piston Ring Set",
      highlightTitle: "P + Cr / P / Cr",
      description: "Phosphating and hard chrome plated configuration for automotive engines, offering reliable wear resistance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
                   <div className="h-1 w-12 bg-highlight mx-auto mt-4 mb-2"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {displayProducts.map((product) => (
                    <div key={product.id} className="relative group overflow-hidden bg-white shadow-md rounded-lg h-96 border border-gray-100">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                        <h3 className="text-white oswald text-xl uppercase tracking-widest mb-4">
                          <span className="font-extrabold text-black bg-white px-2 py-0.5 mr-1">{product.highlightTitle}</span>
                          {product.title.replace(product.highlightTitle, '')}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">{product.description}</p>
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
        {currentView === 'piston-ring' && <PistonRingPage />}
        {currentView === 'display' && <DisplayPage />}
      </main>

      <Footer />
      <SocialNotifications />
    </div>
  );
};

export default App;
