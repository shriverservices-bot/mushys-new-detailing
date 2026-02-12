import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
  onNavigate: (view: 'home' | 'services' | 'ai' | 'gallery') => void;
  currentView: 'home' | 'services';
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'py-4 glass border-b shadow-xl shadow-black/20' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 group outline-none"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-brand">Mushy's Detailing</span>
        </button>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button 
            onClick={() => onNavigate('home')}
            className={`transition-colors ${currentView === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className={`transition-colors ${currentView === 'services' ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => onNavigate('ai')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Smart Advisor
          </button>
          <button 
            onClick={() => onNavigate('gallery')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Real Results
          </button>
          <button 
            onClick={onBookClick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all shine-effect font-semibold shadow-lg shadow-blue-600/20"
          >
            Book Now
          </button>
        </div>

        <button className="md:hidden text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;