
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import BookingModal from './components/BookingModal';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleOpenBooking = (packageName?: string) => {
    if (packageName) setSelectedPackage(packageName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main>
        <Hero onBookClick={() => handleOpenBooking()} />
        
        <section id="ai-consultant" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AIConsultant onSelectPackage={handleOpenBooking} />
          </div>
        </section>

        <section id="services" className="py-20 bg-[#080a0f]">
          <div className="max-w-7xl mx-auto px-4">
            <Services onSelectPackage={handleOpenBooking} />
          </div>
        </section>

        <section id="gallery" className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Real Shop Results
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Direct from our Greenville shop. We take pride in every vehicle that rolls through our bays, from family SUVs to weekend cruisers.
            </p>
          </div>
          <Gallery />
        </section>
      </main>

      <Footer />

      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          initialPackage={selectedPackage || undefined}
        />
      )}
    </div>
  );
};

export default App;
