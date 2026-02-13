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
          
          {/* Left: Home Return Icon (Internal Navigation) */}
          <a 
            href="#" 
            onClick={(e) => handleNav('home', e)}
            className="flex-shrink-0 mr-4 group transition-transform hover:scale-110 active:scale-95 hidden md:block"
            title="Return to Home"
          >
            <img 
              src="https://raw.githubusercontent.com/benjiiminhuang/DY-PISTON-RING1/main/DY%20animation.png" 
              alt="Home" 
              className="h-16 w-16 object-contain"
            />      
          </a>

          {/* Search Bar Container */}
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

            {/* Search Results Dropdown */}
            {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden py-2">
                <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                  Found {filteredResults.length} Results
                </div>
                {filteredResults.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.view, undefined, item.anchor)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Logo Area (External Link to Website) */}
          <div className="flex items-center justify-between w-full md:w-auto md:space-x-12">
            <a 
              href="https://www.dypistonring.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center group transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center mr-3">
                <img 
                  src="
