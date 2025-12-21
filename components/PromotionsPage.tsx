
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { ArrowLeft, Star, Leaf, Clock, Zap } from 'lucide-react';
import { PROMOTIONS, RESTAURANT_DATA } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

interface PromotionsPageProps {
  onBack: () => void;
}

const PromotionsPage: React.FC<PromotionsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-brand-white pb-24">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-brand-sand/30 px-6 py-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onBack}
            className="flex items-center gap-2 text-brand-slate/60"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-xs font-title font-bold uppercase tracking-widest">Atrás</span>
          </motion.button>
          
          <div className="text-right">
            <h1 className="font-title font-bold text-lg text-brand-slate tracking-tight">Promociones</h1>
            <p className="text-[8px] text-brand-orange uppercase tracking-widest font-bold">Novedades</p>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-6 pt-10">
        <header className="mb-12 text-center">
          <div className="inline-flex p-3 bg-brand-orange/5 rounded-full mb-4">
            <Zap className="w-6 h-6 text-brand-orange" />
          </div>
          <h2 className="text-3xl font-title font-bold text-brand-slate mb-4">Experiencias Limitadas</h2>
          <p className="text-brand-slate/60 text-sm font-light leading-relaxed">
            Descubre nuestras propuestas exclusivas diseñadas para elevar tus momentos en Carrots.
          </p>
        </header>

        <div className="grid gap-12">
          {PROMOTIONS.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-sand/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-transparent opacity-60" />
                
                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-brand-orange text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    {promo.tag}
                  </span>
                  {promo.isVegetarian && (
                    <span className="bg-brand-green/90 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 w-fit">
                      <Leaf className="w-2.5 h-2.5" />
                      Vegetariano
                    </span>
                  )}
                </div>

                <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="text-2xl font-title font-bold text-white tracking-tight">{promo.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-brand-slate/70 text-[15px] leading-relaxed mb-6 font-light">
                  {promo.description}
                </p>

                <div className="flex items-center gap-2 text-brand-slate/40 text-[11px] font-bold uppercase tracking-wider mb-8">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>{promo.validity}</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-brand-sand/30">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-brand-slate/30 font-black">Precio</span>
                    <span className="text-2xl font-title font-bold text-brand-slate tracking-tighter">
                      {promo.price}
                    </span>
                  </div>
                  
                  <motion.a
                    href={`tel:${RESTAURANT_DATA.phone}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-orange text-white px-6 py-3 rounded-xl font-title font-bold text-xs uppercase tracking-widest shadow-lg shadow-brand-orange/20"
                  >
                    Reservar ya
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 py-10 text-center">
           <div className="flex justify-center gap-3 opacity-20 mb-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              ))}
           </div>
           <p className="text-[9px] text-brand-slate/30 uppercase tracking-[0.6em] font-black">Disfruta lo Exclusivo</p>
        </div>
      </main>
    </div>
  );
};

export default PromotionsPage;