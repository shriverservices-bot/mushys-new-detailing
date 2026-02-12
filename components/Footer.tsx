
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030508] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">M</div>
            <span className="text-xl font-bold tracking-tight font-brand">Mushy's Detailing</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            The standard for premium automotive care in South Carolina. Mobile and shop-based services available.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Real Results</a></li>
            <li><a href="#ai-consultant" className="hover:text-blue-400 transition-colors">AI Advisor</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
          <p className="text-sm text-gray-500 mb-2">506 Cedar Lane Rd</p>
          <p className="text-sm text-gray-500 mb-2">Greenville, SC 29617</p>
          <p className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
            <a href="tel:+18643712717">+1 (864) 371-2717</a>
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
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
