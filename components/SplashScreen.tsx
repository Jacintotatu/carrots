
import React from 'react';
import { motion as motionBase } from 'framer-motion';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-brand-sand flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          {/* Logo Placeholder - Carrot Icon or Stylized C */}
          <div className="w-20 h-20 rounded-full border-2 border-brand-orange flex items-center justify-center bg-white shadow-xl">
            <span className="text-brand-orange font-title font-bold text-3xl italic">C</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-brand-slate font-title font-bold text-2xl tracking-[0.3em] text-center"
        >
          CARROTS
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-brand-orange font-title text-xs tracking-widest mt-2 uppercase font-semibold"
        >
          Área Reservada
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] bg-brand-orange mt-8"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;