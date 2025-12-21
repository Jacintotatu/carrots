
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { Instagram, Facebook, Globe } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-brand-sand bg-white py-12 px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8">
          {[
            { 
              icon: <Instagram className="w-6 h-6" />, 
              label: 'Instagram', 
              url: 'https://www.instagram.com/carrotsareareservada?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
            },
            { icon: <Facebook className="w-6 h-6" />, label: 'Facebook', url: 'https://facebook.com' },
            { icon: <Globe className="w-6 h-6" />, label: 'Web', url: 'https://www.carrotsareareservada.es' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#E67E22' }}
              className="text-brand-slate/40 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <p className="text-[10px] text-brand-slate/30 uppercase tracking-[0.2em] mb-4">
          © {currentYear} {RESTAURANT_DATA.name}
        </p>
        <p className="text-[10px] text-brand-slate/20 font-light max-w-[200px] mx-auto italic">
          Artesanía gastronómica y servicio exclusivo en Cartagena.
        </p>
        
        <div className="mt-8">
           <span className="text-[8px] text-brand-slate/10 tracking-widest uppercase border border-brand-sand px-3 py-1 rounded-full">
            Premium Experience
           </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;