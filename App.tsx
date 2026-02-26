import React, { useState } from 'react';
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
  const [currentView, setCurrentView] = useState<'home' | 'piston-ring' | 'display'>('home');

  const handleNavigate = (view: 'home' | 'piston-ring' | 'display') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayProducts = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/DLC-PVD-PVD.jpg.jpg",
      title: "DLC / PVD / PVD Piston Ring Set",
      highlightTitle: "DLC / PVD / PVD",
      description: "High-end coating configuration for motorcycle engines, ideal for racing and high-performance applications."
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/N-P-PCr.jpg",
      title: "N / P / Pcr Piston Ring Set",
      highlightTitle: "N / P / Pcr",
      description: "The most popular standard solution for motorcycle engines, offering excellent balance and reliable durability."
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/P%2BCr-P-Cr.jpg.jpg",
      title: "P + Cr / P / Cr Piston Ring Set",
      highlightTitle: "P + Cr / P / Cr",
      description: "Phosphating and hard chrome plated configuration for automotive engines, offering reliable wear resistance."
    }
  ];

  const coatingData = [
    {
      label: "Technological Principle",
      values: ["Gas nitriding", "Physical vapor deposition", "PVD + Magnetic Filtered Cathodic Vacuum Arc", "Physical vapor deposition", "PVD + Magnetic Filtered Cathodic Vacuum Arc"]
    },
    {
      label: "Coating Hardness (HV)",
      values: ["Above 900", "1200 +/- 300", "1500 ~ 3000", "1200 +/- 300", "1800 ~ 3300"]
    },
    {
      label: "Coating Thickness (mm)",
      values: ["Above 0.03", "Above 0.001", "Above 0.001", "Above 0.01", "Above 0.003"]
    },
    {
      label: "Wear Resistance",
      values: ["1 Star", "2 Stars", "3 Stars", "5 Stars", "6 Stars"]
    },
    {
      label: "Longevity",
      values: ["1 Star", "2 Stars", "3 Stars", "5 Stars", "6 Stars"]
    }
  ];

  const coatingHeaders = ["Nitriding (N)", "PCr (CrN)", "DTC (ta-C)", "PVD (CrN)", "DLC (ta-C)"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
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
            <section id="coating-comparison" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-navy oswald uppercase tracking-tight">Coating <span className="text-highlight">Technology</span> Comparison</h2>
                  <div className="h-1 w-12 bg-highlight mx-auto mt-4 mb-2"></div>
                  <p className="text-gray-500 text-sm mt-3">Performance comparison across all available coating types</p>
                </div>
                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#0a1628' }}>
                        <th style={{ padding: '16px 20px', textAlign: 'left', color: '#aaa', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', borderRight: '1px solid #1e2d47', minWidth: '180px' }}>Parameter</th>
                        {coatingHeaders.map((header, i) => (
                          <th key={i} style={{ padding: '16px 20px', textAlign: 'center', color: 'white', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', borderRight: i < coatingHeaders.length - 1 ? '1px solid #1e2d47' : 'none', minWidth: '140px' }}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {coatingData.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#f7f8fa', borderBottom: '1px solid #e8eaed' }}>
                          <td style={{ padding: '14px 20px', fontWeight: 700, fontSize: '13px', color: '#1a2a4a', borderRight: '1px solid #e8eaed', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{row.label}</td>
                          {row.values.map((val, colIndex) => (
                            <td key={colIndex} style={{ padding: '14px 20px', textAlign: 'center', fontSize: '13px', color: '#444', borderRight: colIndex < row.values.length - 1 ? '1px solid #e8eaed' : 'none' }}>{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
