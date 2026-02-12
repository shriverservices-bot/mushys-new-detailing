import React from 'react';

const Gallery: React.FC = () => {
  const portfolioItems = [
    {
      src: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=1000",
      title: "Active Foam Decontamination"
    },
    {
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000",
      title: "Paint Correction & Restoration"
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000",
      title: "Showroom Mirror Finish"
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
      title: "Wheel & Barrel Detail"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-lg font-bold text-white leading-tight">{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;