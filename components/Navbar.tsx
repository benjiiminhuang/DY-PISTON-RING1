
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'piston-ring' | 'display') => void;
  currentView: 'home' | 'piston-ring' | 'display';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gradientTextClass = "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#a6a6a6]";

  const handleNav = (view: 'home' | 'piston-ring' | 'display', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Far Left: Home Return Icon */}
          <a 
            href="#" 
            onClick={(e) => handleNav('home', e)}
            className="flex-shrink-0 mr-4 group transition-transform hover:scale-110 active:scale-95 hidden md:block"
            title="Return to Home"
          >
            {/* USER ASSET: Home Icon */}
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/fFwbpHywMdsHFesP.png" 
              alt="Home" 
              className="h-16 w-16 object-contain drop-shadow-[0_0_8px_rgba(71,125,199,0.3)]"
            />
          </a>

          {/* Left: Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 items-center">
            <div className="relative w-64">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:text-gray-900 sm:text-sm transition-all duration-300"
                placeholder="Search specs..."
              />
            </div>
          </div>

          {/* Right: Logo & Menu */}
          <div className="flex items-center justify-between w-full md:w-auto md:space-x-12">
            <a 
              href="#"
              onClick={(e) => handleNav('home', e)}
              className="flex-shrink-0 flex items-center group transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center mr-3">
                {/* USER ASSET: Main DY Logo */}
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280755586/boBcfNzRwmZQVGLP.png" 
                  alt="DY Logo" 
                  className="h-12 w-12 object-contain filter drop-shadow-md"
                />
              </div>
              <span className={`text-2xl font-bold tracking-tighter oswald ${gradientTextClass}`}>
                DY PISTON RING
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 uppercase tracking-widest text-sm font-bold">
              <a 
                href="#" 
                onClick={(e) => handleNav('home', e)}
                className={`${gradientTextClass} hover:opacity-70 transition-opacity ${currentView === 'home' ? 'border-b border-highlight' : ''}`}
              >
                Home
              </a>
              <button 
                onClick={(e) => handleNav('piston-ring', e)}
                className={`${gradientTextClass} hover:opacity-70 transition-opacity uppercase tracking-widest text-sm font-bold ${currentView === 'piston-ring' ? 'border-b border-highlight' : ''}`}
              >
                Piston Ring
              </button>
              <button 
                onClick={(e) => handleNav('display', e)}
                className={`${gradientTextClass} hover:opacity-70 transition-opacity uppercase tracking-widest text-sm font-bold ${currentView === 'display' ? 'border-b border-highlight' : ''}`}
              >
                Display
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={(e) => handleNav('home', e)} className={`block px-3 py-4 text-base font-bold ${gradientTextClass}`}>Home</a>
            <button onClick={(e) => handleNav('piston-ring', e)} className={`block w-full text-left px-3 py-4 text-base font-bold ${gradientTextClass}`}>Piston Ring</button>
            <button onClick={(e) => handleNav('display', e)} className={`block w-full text-left px-3 py-4 text-base font-bold ${gradientTextClass}`}>Display</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
