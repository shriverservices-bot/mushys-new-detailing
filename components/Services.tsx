import React from 'react';
import { ServicePackage } from '../types';

const PACKAGES: ServicePackage[] = [
  {
    id: 'splash',
    name: 'The Quick Splash',
    price: '$50',
    duration: '30-45 mins',
    features: ['Foam Cannon Wash', 'Hand Dry', 'Wheel Cleaning', 'Tire Shine', 'Quick Interior Vac']
  },
  {
    id: 'shine',
    name: 'The Deep Shine',
    price: '$120',
    duration: '2-3 hours',
    isPremium: true,
    features: [
      'Decontamination Wash', 
      'Clay Bar Treatment', 
      'Interior Deep Clean', 
      'Window Treatment', 
      'Door Jambs Cleaned', 
      'Spray Sealant Protection'
    ]
  },
  {
    id: 'showroom',
    name: 'The Showroom Special',
    price: '$250',
    duration: '5-6 hours',
    features: [
      'Everything in Deep Shine',
      'Full Steam Cleaning',
      'Leather Conditioning',
      'Headlight Restoration',
      'Engine Bay Detail',
      '6-Month Ceramic Lite'
    ]
  }
];

interface ServicesProps {
  onSelectPackage: (name: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectPackage }) => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Choose Your <span className="text-blue-500">Service</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">From a quick refresh to a complete automotive surgery, we have the right package for every goal.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative group rounded-3xl p-8 transition-all duration-300 ${
              pkg.isPremium 
                ? 'bg-blue-900/10 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10' 
                : 'bg-white/5 border border-white/10 hover:border-blue-500/50'
            }`}
          >
            {pkg.isPremium && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm">{pkg.duration}</p>
            </div>

            <div className="text-4xl font-extrabold mb-8">
              {pkg.price}
            </div>

            <ul className="space-y-4 mb-10">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onSelectPackage(pkg.name)}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                pkg.isPremium 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;