
import React, { useState, useRef, useEffect } from 'react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Info, Calendar, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';
import { MenuItem, MenuCategory } from '../types';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

interface MenuPageProps {
  title: string;
  categories: MenuCategory[];
  items: MenuItem[];
  onBack: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ title, categories, items, onBack }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const filteredItems = items.filter(item => item.category === activeCategory);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-brand-white pb-24 selection:bg-brand-orange/20">
      {/* Fixed Dynamic Header Overlay */}
      <div className="fixed top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-40 pointer-events-none" />

      {/* Sticky Top Bar Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-brand-sand/30 px-6 py-5">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onBack}
              className="group flex items-center gap-3 py-2 px-1 text-brand-slate/60 hover:text-brand-orange transition-colors"
            >
              <div className="p-2 rounded-full group-hover:bg-brand-orange/5 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-xs font-title font-bold uppercase tracking-widest">Volver</span>
            </motion.button>
            
            <div className="text-right">
              <h1 className="font-title font-bold text-xl text-brand-slate tracking-tight">{title}</h1>
              <p className="text-[9px] text-brand-orange uppercase tracking-[0.3em] font-bold">Reserva Privada</p>
            </div>
          </div>

          {/* Luxury Categories Scroller */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 -mx-2 px-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  relative whitespace-nowrap px-7 py-3 rounded-2xl text-[12px] font-title font-bold tracking-wide transition-all duration-500
                  ${activeCategory === cat.id 
                    ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/25 scale-105' 
                    : 'bg-brand-sand/30 text-brand-slate/40 hover:bg-brand-sand/50'}
                `}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl border-2 border-white/20" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-6 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid gap-12"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(44,62,80,0.06)] border border-brand-sand/20"
              >
                {/* Visual Content Container with Placeholder Theme */}
                <div className="relative h-72 overflow-hidden bg-brand-sand/20">
                  {/* Subtle radial gradient background as placeholder */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f5e9d3_0%,_#ffffff_100%)] opacity-50" />
                  
                  <motion.img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110 relative z-10"
                  />
                  
                  {/* Glassmorphism Badge Layer */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                    {item.tags?.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-brand-slate text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl border border-white/50">
                        {tag === 'Especialidad' || tag === 'Signature' || tag === 'Premium' ? <Sparkles className="w-2.5 h-2.5 text-brand-orange" /> : null}
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Subtle Shadow Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none opacity-40 z-20" />
                </div>

                {/* Details Section */}
                <div className="p-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-title font-bold text-2xl text-brand-slate leading-tight tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-brand-slate/60 text-[15px] font-body font-light leading-relaxed mb-8 pr-4 italic">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-brand-sand/30">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-brand-slate/30 font-bold mb-1">Inversión</span>
                      <span className="font-title font-bold text-brand-orange text-2xl tracking-tighter">
                        {item.price}
                      </span>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 py-3 px-5 bg-brand-sand/20 hover:bg-brand-sand/40 rounded-2xl transition-all duration-300"
                    >
                      <Info className="w-4 h-4 text-brand-orange" />
                      <span className="text-[10px] font-title font-black uppercase tracking-widest text-brand-slate">Alérgenos</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Fallback if a category were ever empty (shouldn't happen with current constants) */}
            {filteredItems.length === 0 && (
              <div className="py-20 text-center text-brand-slate/30 italic">
                Próximamente nuevas creaciones...
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Brand Signoff */}
        <div className="mt-24 text-center space-y-8">
          <div className="flex items-center justify-center gap-6 opacity-20">
            <div className="h-px w-16 bg-brand-slate" />
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <div className="h-px w-16 bg-brand-slate" />
          </div>
          <p className="text-[11px] font-title tracking-[0.5em] text-brand-slate/40 uppercase font-black">
            Cartagena • Gastronomía • Arte
          </p>
        </div>
      </main>

      {/* Floating Action Button for Instant Reservation */}
      <motion.a
        href={`tel:${RESTAURANT_DATA.phone}`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 right-8 w-16 h-16 bg-brand-green text-white rounded-full shadow-[0_15px_40px_rgba(39,174,96,0.4)] flex items-center justify-center z-50 border-4 border-white overflow-hidden"
      >
        <Calendar className="w-7 h-7" />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" 
        />
      </motion.a>
    </div>
  );
};

export default MenuPage;