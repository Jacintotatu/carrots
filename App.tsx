
import React, { useEffect, useState } from 'react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import MenuPage from './components/MenuPage';
import GroupMenuPage from './components/GroupMenuPage';
import PromotionsPage from './components/PromotionsPage';
import PairingPage from './components/PairingPage';
import { FOOD_CATEGORIES, FULL_FOOD_ITEMS, WINE_CATEGORIES, FULL_WINE_ITEMS } from './constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'landing' | 'food' | 'wine' | 'groups' | 'promotions' | 'pairing'>('landing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToLanding = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-brand-sand">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: currentView === 'landing' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentView === 'landing' ? 20 : -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col relative"
          >
            {currentView === 'landing' ? (
              <>
                {/* Background Decor */}
                <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,_#ffffff_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#f5e9d3_0%,_transparent_40%)]" />
                
                <div className="relative z-10">
                  <Header />
                  <main className="max-w-md mx-auto px-6 pt-24 pb-12">
                    <Hero />
                    <MenuGrid onNavigate={(view) => setCurrentView(view as any)} />
                    <InfoSection />
                  </main>
                  <Footer />
                </div>
              </>
            ) : currentView === 'food' ? (
              <MenuPage 
                title="Carta de Comida" 
                categories={FOOD_CATEGORIES} 
                items={FULL_FOOD_ITEMS} 
                onBack={navigateToLanding} 
              />
            ) : currentView === 'wine' ? (
              <MenuPage 
                title="Carta de Vinos" 
                categories={WINE_CATEGORIES} 
                items={FULL_WINE_ITEMS} 
                onBack={navigateToLanding} 
              />
            ) : currentView === 'groups' ? (
              <GroupMenuPage 
                onBack={navigateToLanding}
              />
            ) : currentView === 'pairing' ? (
              <PairingPage 
                onBack={navigateToLanding}
              />
            ) : (
              <PromotionsPage 
                onBack={navigateToLanding}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
