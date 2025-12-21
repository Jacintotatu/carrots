
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { IMAGE_PATHS } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const Hero: React.FC = () => {
  return (
    <section className="text-center mb-12 mt-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[340px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 group bg-brand-sand/30"
      >
        <img 
          src={IMAGE_PATHS.hero} 
          alt="Atmósfera Exclusiva Carrots" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay premium con gradiente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/20 to-transparent" />
        
        <div className="absolute bottom-10 left-8 right-8 text-left">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-brand-orange mb-4 rounded-full"
          />
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white font-title font-bold text-3xl leading-tight tracking-tight"
          >
            Bienvenido a tu<br/>
            <span className="text-brand-orange">espacio gastronómico</span>
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 px-4"
      >
        <p className="text-brand-slate/80 text-lg leading-relaxed font-light">
          Descubre la fusión perfecta entre <span className="font-semibold text-brand-orange">tradición y vanguardia</span>. Explora nuestra carta diseñada para los paladares más exigentes.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;