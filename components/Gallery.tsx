
import React from 'react';

const Gallery: React.FC = () => {
  // Updated with photos that capture the raw, authentic feel of a high-end detailing workshop
  const portfolioItems = [
    {
      src: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=1000",
      title: "Active Foam Decontamination",
      category: "Exterior Prep"
    },
    {
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000",
      title: "Paint Correction & Buffing",
      category: "Restoration"
    },
   
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000",
      title: "Showroom Mirror Finish",
      category: "Protection"
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
      title: "Wheel & Barrel Detail",
      category: "Undercarriage"
    },
  ];

  return (
    <div className="flex overflow-x-auto pb-10 gap-6 scrollbar-hide px-4">
      {portfolioItems.map((item, i) => (
        <div key={i} className="min-w-[280px] md:min-w-[400px] aspect-[4/3] relative rounded-2xl overflow-hidden group border border-white/5 bg-[#0a0c12]">
          <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</p>
              <h4 className="text-lg font-bold text-white leading-tight">{item.title}</h4>
            </div>
          </div>
          {/* Authentic Local Badge */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/10 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
            Greenville Shop
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
