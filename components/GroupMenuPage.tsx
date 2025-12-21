
import React, { useState } from 'react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, CheckCircle2, Star, Phone, Mail } from 'lucide-react';
import { GROUP_MENUS, RESTAURANT_DATA } from '../constants';

// Fix: Use any to bypass Framer Motion type errors
const motion = motionBase as any;

interface GroupMenuPageProps {
  onBack: () => void;
}

const GroupMenuPage: React.FC<GroupMenuPageProps> = ({ onBack }) => {
  // Estado para controlar qué menú tiene abierto el selector de contacto
  const [activeContactId, setActiveContactId] = useState<string | null>(null);

  const toggleContact = (id: string) => {
    setActiveContactId(activeContactId === id ? null : id);
  };

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
            <h1 className="font-title font-bold text-lg text-brand-slate tracking-tight">Menús Grupos</h1>
            <p className="text-[8px] text-brand-orange uppercase tracking-widest font-bold">Reserva Especial</p>
          </div>
        </div>
      </nav>

      <main className="max-w-md mx-auto px-6 pt-10">
        <header className="mb-12 text-center">
          <div className="inline-flex p-3 bg-brand-orange/5 rounded-full mb-4">
            <Users className="w-6 h-6 text-brand-orange" />
          </div>
          <h2 className="text-3xl font-title font-bold text-brand-slate mb-4">Eventos a Medida</h2>
          <p className="text-brand-slate/60 text-sm font-light leading-relaxed">
            Diseñamos experiencias para grupos de más de 8 personas. Celebra tus momentos especiales en nuestro Área Reservada.
          </p>
        </header>

        <div className="space-y-16">
          {GROUP_MENUS.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(44,62,80,0.12)] border border-brand-sand/20 overflow-hidden"
            >
              {/* Menu Banner */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={menu.image} 
                  alt={menu.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-slate/40 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="text-center">
                      <span className="text-[10px] text-white/80 uppercase tracking-[0.4em] font-bold mb-1 block">Opciones de Grupo</span>
                      <h3 className="text-3xl font-title font-bold text-white tracking-tight">{menu.name}</h3>
                   </div>
                </div>
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-brand-orange font-bold text-xl tracking-tighter">{menu.price}</span>
                  <span className="text-[10px] text-brand-slate/40 font-bold ml-1 uppercase">/ pax</span>
                </div>
              </div>

              {/* Menu Content */}
              <div className="p-8">
                <p className="text-brand-slate/60 text-sm italic mb-8 border-l-2 border-brand-orange pl-4">
                  "{menu.description}"
                </p>

                <div className="space-y-10">
                  {menu.sections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-1 rounded-full bg-brand-orange" />
                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-brand-slate/40">{section.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                            <span className="text-[15px] text-brand-slate/80 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Interactive Contact Button */}
                <div className="mt-12 p-6 bg-brand-sand/10 rounded-2xl border border-brand-sand/30 overflow-hidden">
                  <p className="text-[10px] text-brand-slate/40 text-center uppercase tracking-widest font-bold mb-4">Disponible bajo reserva previa (mín. 48h)</p>
                  
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {activeContactId !== menu.id ? (
                        <motion.button
                          key="main-btn"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          onClick={() => toggleContact(menu.id)}
                          className="w-full bg-brand-slate text-white py-4 rounded-xl font-title font-bold text-sm tracking-widest uppercase text-center shadow-lg shadow-brand-slate/20"
                        >
                          Consultar Disponibilidad
                        </motion.button>
                      ) : (
                        <motion.div
                          key="contact-options"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="grid grid-cols-2 gap-3"
                        >
                          <a 
                            href={`tel:${RESTAURANT_DATA.phone.replace(/\s/g, '')}`}
                            className="flex flex-col items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-xl shadow-lg shadow-brand-green/20 group"
                          >
                            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Llamar</span>
                          </a>
                          <a 
                            href={`mailto:${RESTAURANT_DATA.email}?subject=Reserva Grupo: ${menu.name}`}
                            className="flex flex-col items-center justify-center gap-2 bg-white text-brand-slate border border-brand-sand py-4 rounded-xl shadow-sm group"
                          >
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-brand-slate/60">Enviar Email</span>
                          </a>
                          <button 
                            onClick={() => toggleContact(menu.id)}
                            className="col-span-2 text-[8px] text-brand-slate/30 uppercase tracking-[0.2em] font-bold mt-2 hover:text-brand-orange transition-colors"
                          >
                            Cancelar
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-20 py-10 text-center">
           <Star className="w-6 h-6 text-brand-orange mx-auto mb-4 opacity-30" />
           <p className="text-[10px] text-brand-slate/30 uppercase tracking-[0.4em] font-black">Gastronomía • Exclusividad • Detalle</p>
        </footer>
      </main>
    </div>
  );
};

export default GroupMenuPage;
