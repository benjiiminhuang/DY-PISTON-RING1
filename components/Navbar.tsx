import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface SearchableItem {
  id: string;
  title: string;
  type: 'product' | 'page' | 'faq';
  view: 'home' | 'piston-ring' | 'display';
  anchor?: string;
}

interface NavbarProps {
  onNavigate: (view: 'home' | 'piston-ring' | 'display') => void;
  currentView: 'home' | 'piston-ring' | 'display';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchableData: SearchableItem[] = [
    { id: '1', title: 'DLC / PVD Piston Rings', type: 'product', view: 'home', anchor: 'display' },
    { id: '2', title: 'N / P / Pcr Piston Rings', type: 'product', view: 'home', anchor: 'display' },
    { id: '3', title: 'P + Cr / P / Cr Rings', type: 'product', view: 'home', anchor: 'display' },
    { id: '4', title: 'Technical Diagram', type: 'page', view: 'piston-ring' },
    { id: '5', title: 'Product Catalog', type: 'page', view: 'display' },
    { id: '6', title: 'Package & Marking', type: 'product', view: 'display' },
    { id: '7', title: 'DQ20+Cr-DQ20+Cr-Hump', type: 'product', view: 'display' },
    { id: '8', title: 'Frequently Asked Questions', type: 'faq', view: 'home', anchor: 'piston-ring' },
    { id: '9', title: 'Material Specifications', type: 'faq', view: 'home', anchor: 'piston-ring' },
    { id: '10', title: 'OEM/ODM Solutions', type: 'faq', view: 'home', anchor: 'piston-ring' },
  ];

  const filteredResults = searchTerm.trim() === '' 
    ? [] 
    : searchableData.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (view: 'home' | 'piston-ring' | 'display', e?: React.MouseEvent, anchor?: string) => {
    if (e) e.preventDefault();
    onNavigate(view);
    setIsMenuOpen(false);
    setShowResults(false);
    setSearchTerm('');
    
    setTimeout(() => {
      if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const gradientTextClass = "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#a6a6a6]";

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Far Left: Home Return Icon - 使用本地动画图 */}
          <a 
            href="#" 
            onClick={(e) => handleNav('home', e)}
            className="flex-shrink-0 mr-4 group transition-transform hover:scale-110 active:scale-95 hidden md:block"
            title="Return to Home"
          >
            <img 
              src="./DY animation.png" 
              alt="Home" 
              className="h-16 w-16 object-contain drop-shadow-[0_0_8px_rgba(71,125,199,0.3)]"
            />
          </a>

          {/* Left: Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 items-center relative" ref={searchRef}>
            <div className="relative w-64">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:text-gray-900 sm:text-sm transition-all duration-300"
                placeholder="Search specs or products..."
              />
            </div>

            {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden animate-fade-in py-2">
                <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                  Found {filteredResults.length} Results
                </div>
                {filteredResults.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.view, undefined, item.anchor)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 flex flex-col transition-colors group"
                  >
                    <span className="text-navy font-bold text-sm oswald uppercase group-hover:text-highlight transition-colors">
                      {item.title}
                    </span>
                    <span className="text-gray-400 text-[10px] uppercase tracking-tighter">
                      In {item.view.replace('-', ' ')} • {item.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Logo & Menu - 使用本地Logo图 */}
          <div className="flex items-center justify-between w-full md:w-auto md:space-x-12">
            <a 
              href="#"
              onClick={(e) => handleNav('home', e)}
              className="flex-shrink-0 flex items-center group transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center mr-3">
                <img 
                  src="./DYlogo.png" 
                  alt="DY Logo" 
                  className="h-12 w-12 object-contain filter drop-shadow-md"
                />
              </div>
              <span className={`text-2xl font-bold tracking-tighter oswald ${gradientTextClass}`}>
                DY PISTON RING
              </span>
            </a>

            <div className="hidden md:flex space-x-8 uppercase tracking-widest text-sm font-bold">
              <button onClick={(e) => handleNav('home', e)} className={`${gradientTextClass} hover:opacity-70 transition-opacity ${currentView === 'home' ? 'border-b border-highlight' : ''}`}>Home</button>
              <button onClick={(e) => handleNav('piston-ring', e)} className={`${gradientTextClass} hover:opacity-70 transition-opacity ${currentView === 'piston-ring' ? 'border-b border-highlight' : ''}`}>Piston Ring</button>
              <button onClick={(e) => handleNav('display', e)} className={`${gradientTextClass} hover:opacity-70 transition-opacity ${currentView === 'display' ? 'border-b border-highlight' : ''}`}>Display</button>
            </div>

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

      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:text-gray-900 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <div className="space-y-1">
              <button onClick={(e) => handleNav('home', e)} className={`block w-full text-left px-3 py-3 text-base font-bold ${gradientTextClass}`}>Home</button>
              <button onClick={(e) => handleNav('piston-ring', e)} className={`block w-full text-left px-3 py-3 text-base font-bold ${gradientTextClass}`}>Piston Ring</button>
              <button onClick={(e) => handleNav('display', e)} className={`block w-full text-left px-3 py-3 text-base font-bold ${gradientTextClass}`}>Display</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
