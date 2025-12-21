
import React, { useState, useEffect } from 'react';
import { motion as motionBase, useScroll, useTransform } from 'framer-motion';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(245, 233, 211, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const shadowOpacity = useTransform(scrollY, [0, 100], ['0', '0.05']);

  return (
    <motion.header
      style={{ backgroundColor: headerBg, boxShadow: `0 4px 20px rgba(0,0,0,${shadowOpacity})` }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg h-20 flex items-center justify-center px-6 border-b border-transparent ${isScrolled ? 'border-brand-sand/30' : ''}`}
    >
      <div className="flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-slate font-title font-bold text-xl tracking-[0.2em]"
        >
          CARROTS
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-brand-orange font-title text-[9px] tracking-[0.3em] -mt-1 uppercase font-bold"
        >
          Área Reservada
        </motion.span>
      </div>
    </motion.header>
  );
};

export default Header;