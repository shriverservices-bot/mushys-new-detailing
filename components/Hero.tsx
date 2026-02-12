
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [glossLevel, setGlossLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setGlossLevel(98), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#05070a] to-[#05070a]"></div>
        <img 
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2532&h=1424" 
          alt="Clean luxury car" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Premium Detailing Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Your Car's <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Glossy New</span> Era Starts Here.
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Professional mobile and in-shop detailing that brings back that showroom shine. 
            Powered by advanced chemistry and obsessive attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookClick}
              className="px-10 py-4 glossy-blue rounded-xl font-bold text-lg hover:scale-105 transition-transform shine-effect"
            >
              Reserve Your Spot
            </button>
            <a 
              href="#ai-consultant"
              className="px-10 py-4 glass hover:bg-white/5 rounded-xl font-bold text-lg text-center transition-all"
            >
              Ask the Expert
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 50}/100`} 
                  alt="Reviewer" 
                  className="w-10 h-10 rounded-full border-2 border-[#05070a]"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1 font-medium">Over 1,200 5-star wash experiences</p>
            </div>
          </div>
        </div>

        {/* Improved Dashboard Meter Section */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 transform lg:translate-x-12">
            <div className="glass rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/30 blur-sm animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=2576&h=1716" 
                alt="Detailing process" 
                className="rounded-2xl shadow-inner border border-white/5 opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Floating Dashboard Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="glass p-3 rounded-xl border-blue-500/30 bg-black/40 backdrop-blur-xl pointer-events-auto">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter mb-1">Status</p>
                    <div className="flex items-center text-sm font-bold text-white">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      Optimizing Surface
                    </div>
                  </div>
                  
                  <div className="glass p-3 rounded-xl border-white/10 bg-black/40 backdrop-blur-xl pointer-events-auto text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">UV Protection</p>
                    <div className="text-sm font-bold text-cyan-400">MAX LEVEL</div>
                  </div>
                </div>

                <div className="flex items-end justify-between space-x-4">
                  {/* Circular Meter */}
                  <div className="glass p-5 rounded-2xl border-blue-500/40 bg-black/60 backdrop-blur-2xl pointer-events-auto flex items-center space-x-4 shadow-2xl">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="32" cy="32" r="28"
                          fill="transparent"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="6"
                        />
                        <circle
                          cx="32" cy="32" r="28"
                          fill="transparent"
                          stroke="url(#blue_grad)"
                          strokeWidth="6"
                          strokeDasharray={176}
                          strokeDashoffset={176 - (176 * glossLevel) / 100}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="blue_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#22d3ee" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-black text-white">{glossLevel}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Gloss Factor</p>
                      <p className="text-xs text-gray-400 font-medium">Value Recovery Active</p>
                    </div>
                  </div>

                  {/* Resale Badge */}
                  <div className="glass px-6 py-4 rounded-2xl border-white/20 bg-blue-600/20 backdrop-blur-2xl pointer-events-auto text-center transform hover:-translate-y-1 transition-transform">
                    <p className="text-3xl font-black text-white leading-tight">99%</p>
                    <p className="text-[9px] text-blue-200 font-bold uppercase tracking-[0.2em]">Value Boost</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Diagnostics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {['Clay Bar', 'Polish', 'Sealant'].map((item, i) => (
                <div key={item} className="glass p-3 rounded-xl border-white/5 bg-black/20 flex flex-col items-center justify-center">
                  <div className="w-full bg-white/5 h-1 rounded-full mb-2 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-1000" 
                      style={{ width: `${80 + (i * 7)}%`, transitionDelay: `${i * 200}ms` }}
                    ></div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
