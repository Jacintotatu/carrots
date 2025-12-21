
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { Clock, MapPin, Mail, PhoneCall } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

const InfoSection: React.FC = () => {
  return (
    <section id="novedades" className="mt-20 space-y-12">
      {/* Horarios */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <Clock className="text-brand-orange w-5 h-5" />
          <h3 className="font-title font-bold text-brand-slate uppercase tracking-wider">Horarios</h3>
        </div>
        <ul className="space-y-4 text-sm">
          <li className="flex justify-between items-center pb-2 border-b border-brand-sand/30">
            <span className="text-brand-slate/60 font-medium">Lunes</span>
            <span className="font-bold text-red-400">{RESTAURANT_DATA.hours.monday}</span>
          </li>
          <li className="flex justify-between items-center pb-2 border-b border-brand-sand/30">
            <span className="text-brand-slate/60 font-medium">Martes a Sábado</span>
            <span className="font-bold">{RESTAURANT_DATA.hours.tueToSat}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-brand-slate/60 font-medium">Domingo</span>
            <span className="font-bold">{RESTAURANT_DATA.hours.sunday}</span>
          </li>
        </ul>
      </motion.div>

      {/* Contacto & Ubicación */}
      <div className="grid gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-brand-sand">
            <MapPin className="text-brand-orange w-6 h-6" />
          </div>
          <div>
            <h4 className="font-title font-bold text-sm text-brand-slate mb-1">Nuestra Dirección</h4>
            <p className="text-brand-slate/60 text-sm leading-relaxed">{RESTAURANT_DATA.address}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-brand-sand">
            <PhoneCall className="text-brand-orange w-6 h-6" />
          </div>
          <div>
            <h4 className="font-title font-bold text-sm text-brand-slate mb-1">Teléfono</h4>
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-brand-orange font-bold text-sm">{RESTAURANT_DATA.phone}</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-brand-sand">
            <Mail className="text-brand-orange w-6 h-6" />
          </div>
          <div>
            <h4 className="font-title font-bold text-sm text-brand-slate mb-1">Email</h4>
            <a href={`mailto:${RESTAURANT_DATA.email}`} className="text-brand-slate/60 text-sm italic">{RESTAURANT_DATA.email}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;