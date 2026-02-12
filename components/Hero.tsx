import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-[#05070a] to-[#05070a]"></div>
        <img 
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2532&h=1424" 
          alt="Clean luxury car" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            Premium Detailing Excellence
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-8 text-white">
            Your Car's <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Glossy New</span> Era Starts Here.
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional mobile and in-shop detailing that brings back that showroom shine. 
            Powered by advanced chemistry and obsessive attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onBookClick}
              className="px-12 py-5 glossy-green rounded-2xl font-bold text-xl hover:scale-105 transition-transform shine-effect text-center text-white"
            >
              Reserve Your Spot
            </button>
            <button 
              onClick={() => {
                const aiSection = document.getElementById('ai-consultant');
                aiSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-12 py-5 glass hover:bg-white/5 rounded-2xl font-bold text-xl text-center transition-all border border-white/10 text-white"
            >
              Ask the Expert
            </button>
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 50}/100`} 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full border-2 border-[#05070a] shadow-xl"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-500 justify-center mb-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Trusted by 1,200+ car enthusiasts in South Carolina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;