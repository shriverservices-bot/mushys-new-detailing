import React, { useState } from 'react';
import { ServicePackage } from '../types';

const PACKAGES: ServicePackage[] = [
  {
    id: 'splash',
    category: 'wash',
    name: 'The Quick Splash',
    price: '$50',
    duration: '30-45 mins',
    features: ['Foam Cannon Wash', 'Hand Dry', 'Wheel Cleaning', 'Tire Shine', 'Quick Interior Vac']
  },
  {
    id: 'executive',
    category: 'wash',
    name: 'The Executive Wash',
    price: '$85',
    duration: '60-90 mins',
    isPremium: true,
    features: ['Everything in Quick Splash', 'Exterior Wax Buff', 'Interior Dusting', 'Floor Mat Scrub', 'Door Jambs Cleaned']
  },
  {
    id: 'shine',
    category: 'detail',
    name: 'The Deep Shine',
    price: '$120',
    duration: '2-3 hours',
    features: [
      'Decontamination Wash', 
      'Full Interior Deep Clean', 
      'Window Crystal Treatment', 
      'Upholstery Extraction', 
      'Leather Care',
      'Long-term Gloss Finish'
    ]
  },
  {
    id: 'showroom',
    category: 'detail',
    name: 'The Showroom Special',
    price: '$250',
    duration: '5-6 hours',
    isPremium: true,
    features: [
      'Everything in Deep Shine',
      'Full Steam Sanitization',
      'Leather Deep Conditioning',
      'Headlight Restoration',
      'Engine Bay Refresh',
      'High-Gloss Performance Coating'
    ]
  }
];

interface ServicesProps {
  onSelectPackage: (name: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<'wash' | 'detail'>('wash');

  const filteredPackages = PACKAGES.filter(pkg => pkg.category === activeTab);

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-white">Choose Your <span className="text-emerald-500">Service</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">From a quick refresh to a complete automotive surgery, we have the right package for every goal.</p>
        
        {/* Category Tabs */}
        <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl relative">
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] glossy-green rounded-xl transition-all duration-300 ease-out ${
              activeTab === 'wash' ? 'left-1' : 'left-[calc(50%+1px)]'
            }`}
          />
          <button 
            onClick={() => setActiveTab('wash')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${
              activeTab === 'wash' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Wash Packages
          </button>
          <button 
            onClick={() => setActiveTab('detail')}
            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 ${
              activeTab === 'detail' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Detailing Services
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {filteredPackages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative group rounded-3xl p-8 transition-all duration-500 ${
              pkg.isPremium 
                ? 'bg-emerald-900/10 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 z-10' 
                : 'bg-white/5 border border-white/10 hover:border-emerald-500/50'
            }`}
          >
            {pkg.isPremium && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/40">
                Recommended
              </div>
            )}
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-1 text-white">{pkg.name}</h3>
                <div className="flex items-center text-gray-500 text-xs font-medium">
                  <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.duration}
                </div>
              </div>
              <div className="text-3xl font-black text-white">
                {pkg.price}
              </div>
            </div>

            <ul className="space-y-4 mb-10 min-h-[180px]">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onSelectPackage(pkg.name)}
              className={`w-full py-4 rounded-xl font-bold transition-all transform group-hover:scale-[1.02] active:scale-95 ${
                pkg.isPremium 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg' 
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