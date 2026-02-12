
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-900/40">
            M
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-brand">Mushy's Detailing</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#ai-consultant" className="text-gray-300 hover:text-white transition-colors">Smart Advisor</a>
          <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Real Results</a>
          <button 
            onClick={onBookClick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all shine-effect font-semibold"
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
