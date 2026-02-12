import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'ai' | 'gallery') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#030508] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">M</div>
            <span className="text-xl font-bold tracking-tight font-brand text-white">Mushy's Detailing</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            The standard for premium automotive care in South Carolina. Mobile and shop-based services available.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-400 transition-colors">Pricing</button></li>
            <li><button onClick={() => onNavigate('gallery')} className="hover:text-emerald-400 transition-colors">Real Results</button></li>
            <li><button onClick={() => onNavigate('ai')} className="hover:text-emerald-400 transition-colors">AI Advisor</button></li>
            <li><button className="hover:text-emerald-400 transition-colors">Gift Cards</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
            <li><button className="hover:text-emerald-400 transition-colors">Careers</button></li>
            <li><button className="hover:text-emerald-400 transition-colors">Contact</button></li>
            <li><button className="hover:text-emerald-400 transition-colors">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 text-white">Contact</h4>
          <p className="text-sm text-gray-500 mb-2">506 Cedar Lane Rd</p>
          <p className="text-sm text-gray-500 mb-2">Greenville, SC 29617</p>
          <p className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            <a href="tel:+18643712717">+1 (864) 371-2717</a>
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-white">
              <span className="text-xs font-bold">FB</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Mushy's Detailing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;