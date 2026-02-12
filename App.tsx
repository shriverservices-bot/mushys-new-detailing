import React, { useState, useEffect, useRef } from 'react';
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
  const [currentView, setCurrentView] = useState<'home' | 'services'>('home');

  const servicesRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleOpenBooking = (packageName?: string) => {
    if (packageName) setSelectedPackage(packageName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackage(null);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setCurrentView('home'); // Ensure we are on home view to see sections
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navigateTo = (view: 'home' | 'services' | 'ai' | 'gallery') => {
    if (view === 'services') {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'ai') {
      scrollToSection(aiRef);
    } else if (view === 'gallery') {
      scrollToSection(galleryRef);
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar 
        onBookClick={() => handleOpenBooking()} 
        onNavigate={navigateTo}
        currentView={currentView}
      />
      
      <main className="transition-opacity duration-500">
        {currentView === 'home' ? (
          <>
            <Hero onBookClick={() => handleOpenBooking()} />
            
            <section ref={aiRef} id="ai-consultant" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <AIConsultant onSelectPackage={handleOpenBooking} />
              </div>
            </section>

            <section ref={servicesRef} id="services" className="py-20 bg-[#080a0f]">
              <div className="max-w-7xl mx-auto px-4">
                <Services onSelectPackage={handleOpenBooking} />
              </div>
            </section>

            <section ref={galleryRef} id="gallery" className="py-20">
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
          </>
        ) : (
          <div className="pt-32 pb-20 min-h-screen bg-[#05070a]">
            <div className="max-w-7xl mx-auto px-4">
              <Services onSelectPackage={handleOpenBooking} />
            </div>
            
            {/* CTA for those browsing services */}
            <div className="mt-20 max-w-4xl mx-auto glass p-12 rounded-[40px] text-center border-blue-500/20">
              <h3 className="text-3xl font-bold mb-4">Still Not Sure?</h3>
              <p className="text-gray-400 mb-8">Our AI Smart Advisor can analyze your car's condition and pick the perfect plan for you.</p>
              <button 
                onClick={() => navigateTo('ai')}
                className="px-10 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all border border-white/10"
              >
                Launch AI Advisor
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer onNavigate={navigateTo} />

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