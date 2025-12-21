
import React from 'react';
import { motion as motionBase } from 'framer-motion';
// Add missing Wine icon to the imports
import { ArrowLeft, GlassWater, Utensils, Sparkles, Star, Wine } from 'lucide-react';
import { PAIRING_ITEMS, RESTAURANT_DATA } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

interface PairingPageProps {
  onBack: () => void;
}

const PairingPage: React.FC<PairingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-brand-white pb-24 selection:bg-brand-orange/10">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-brand-sand/30 px-6 py-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onBack}
            className="flex items-center gap-2 text-brand-slate/60 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-xs font-title font-bold uppercase tracking-widest">Regresar</span>
          </motion.button>
          
          <div className="text-right">
            <h1 className="font-title font-bold text-lg text-brand-slate tracking-tight">Experiencia Maridaje</h1>
            <p className="text-[8px] text-brand-orange uppercase tracking-widest font-bold">Selección Sumiller</p>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-6 pt-12">
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex p-4 bg-brand-orange/10 rounded-[2rem] mb-6"
          >
            <GlassWater className="w-7 h-7 text-brand-orange" />
          </motion.div>
          <h2 className="text-4xl font-title font-bold text-brand-slate mb-6 leading-tight">La Armonía Perfecta</h2>
          <p className="text-brand-slate/60 text-base font-light leading-relaxed max-w-xs mx-auto italic">
            "Donde el vino y el plato conversan en un lenguaje de matices y placer."
          </p>
        </header>

        <div className="space-y-20">
          {PAIRING_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative"
            >
              {/* Image Container with Luxury Frame */}
              <div className="relative mb-10">
                <div className="absolute -inset-4 bg-brand-sand/20 rounded-[3rem] -rotate-1 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700" />
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/60 to-transparent" />
                  
                  {/* Pair Icons Overlay */}
                  <div className="absolute bottom-6 left-8 flex items-center gap-4 text-white z-20">
                    <Utensils className="w-5 h-5 opacity-80" />
                    <div className="w-4 h-px bg-white/40" />
                    <Wine className="w-5 h-5 opacity-80" />
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-20">
                    {item.tags?.map(tag => (
                      <span key={tag} className="bg-white/95 backdrop-blur text-brand-slate text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl border border-white/50 flex items-center gap-2">
                        <Sparkles className="w-2.5 h-2.5 text-brand-orange" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4 text-center">
                <h3 className="text-3xl font-title font-bold text-brand-slate mb-4 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-brand-slate/60 text-base font-light leading-relaxed mb-8 italic">
                  {item.description}
                </p>
                
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-slate/30 font-black mb-1">Inversión Sensorial</span>
                    <span className="text-3xl font-title font-bold text-brand-orange tracking-tighter">
                      {item.price}
                    </span>
                  </div>
                  
                  <motion.a 
                    href={`tel:${RESTAURANT_DATA.phone}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 py-4 px-10 bg-brand-slate text-white rounded-2xl shadow-xl shadow-brand-slate/20 transition-all duration-300 group"
                  >
                    <Star className="w-4 h-4 text-brand-orange group-hover:rotate-45 transition-transform" />
                    <span className="text-xs font-title font-bold uppercase tracking-[0.2em]">Reservar Experiencia</span>
                  </motion.a>
                </div>
              </div>

              {/* Decorative Divider */}
              {index < PAIRING_ITEMS.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-brand-sand to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <footer className="mt-32 text-center space-y-8">
          <div className="flex justify-center items-center gap-6 opacity-20">
            <div className="h-px w-12 bg-brand-slate" />
            <GlassWater className="w-5 h-5 text-brand-orange" />
            <div className="h-px w-12 bg-brand-slate" />
          </div>
          <p className="text-[11px] font-title tracking-[0.6em] text-brand-slate/30 uppercase font-black">
            Cata • Degusta • Siente
          </p>
        </footer>
      </main>
    </div>
  );
};

export default PairingPage;
