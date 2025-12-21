
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { MENU_LINKS } from '../constants';
import { ChevronRight } from 'lucide-react';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

interface MenuGridProps {
  onNavigate: (view: string) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ onNavigate }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleClick = (e: React.MouseEvent, link: typeof MENU_LINKS[0]) => {
    if (link.internal) {
      e.preventDefault();
      onNavigate(link.url);
    }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-4 w-full"
    >
      {MENU_LINKS.map((link, idx) => (
        <motion.a
          key={idx}
          href={link.url}
          onClick={(e) => handleClick(e, link)}
          target={!link.internal && link.url.startsWith('http') ? "_blank" : "_self"}
          rel={!link.internal ? "noopener noreferrer" : ""}
          variants={item}
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative flex items-center justify-between p-5 rounded-2xl transition-all duration-300
            ${link.type === 'primary' 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
              : link.type === 'accent'
              ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
              : 'bg-white text-brand-slate shadow-sm border border-brand-sand hover:border-brand-orange/30'}
          `}
        >
          <div className="flex items-center gap-4">
            <span className={`p-2 rounded-xl ${link.type === 'secondary' ? 'bg-brand-sand/50' : 'bg-white/20'}`}>
              {link.icon}
            </span>
            <span className="font-title font-semibold tracking-wide">
              {link.label}
            </span>
          </div>
          <ChevronRight className={`w-5 h-5 opacity-60`} />
          
          {link.type === 'primary' && (
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent" 
            />
          )}
        </motion.a>
      ))}
    </motion.section>
  );
};

export default MenuGrid;