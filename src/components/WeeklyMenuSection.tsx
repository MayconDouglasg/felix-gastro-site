import React, { useState } from 'react';
import { Calendar, Phone, Utensils, CheckCircle, Sparkles, ShoppingBag } from 'lucide-react';
import { WEEKLY_MENU, WHATSAPP_PRIMARY, IFOOD_URL } from '../data/menuData';

export const WeeklyMenuSection: React.FC = () => {
  // Current day index (0 = Monday, etc.)
  const todayDay = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const initialIndex = todayDay >= 1 && todayDay <= 6 ? todayDay - 1 : 0;
  const [activeDayIndex, setActiveDayIndex] = useState(initialIndex);

  const currentDay = WEEKLY_MENU[activeDayIndex];

  return (
    <section id="cardapio-do-dia" className="py-20 bg-[#161210] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Refeição Avulsa do Dia
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Cardápio do Dia
          </h2>
          <p className="text-[#b3a795] text-base mt-2 font-light">
            Almoço caseiro fresco e saboroso preparado no dia. Peça sua refeição avulsa diretamente pelo WhatsApp ou pelo iFood.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {WEEKLY_MENU.map((item, idx) => {
            const isActive = idx === activeDayIndex;
            return (
              <button
                key={item.dayShort}
                onClick={() => setActiveDayIndex(idx)}
                className={`px-4 sm:px-6 py-3 rounded-2xl font-display text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#e0632c] text-[#14110d] shadow-lg shadow-[#e0632c]/20 scale-105'
                    : 'bg-[#1c1712] text-[#b3a795] border border-[rgba(244,237,226,0.10)] hover:border-[#e0632c]/40 hover:text-[#f4ede2]'
                }`}
              >
                <span className="block text-[10px] sm:text-xs opacity-75 leading-none mb-1">
                  {item.dayShort}
                </span>
                <span className="block leading-none">
                  {item.day.split('-')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Card Feature */}
        <div className="bg-[#1c1712] border border-[rgba(244,237,226,0.15)] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#e0632c]/15 to-transparent blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#e0632c]/20 border border-[#e0632c]/40 text-[#f0a066] font-display text-xs uppercase tracking-wider font-semibold">
                  {currentDay.day}
                </span>
                {currentDay.badge && (
                  <span className="text-xs text-[#c9a227] font-display uppercase tracking-wider font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {currentDay.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#f4ede2] uppercase leading-tight">
                {currentDay.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#b3a795] leading-relaxed font-light">
                {currentDay.description}
              </p>

              {/* Inclusions list */}
              <div className="pt-2">
                <span className="text-xs font-display uppercase tracking-wider text-[#7d7263] block mb-2 font-semibold">
                  Acompanha:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentDay.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#f4ede2] bg-[#161210] px-3 py-2 rounded-xl border border-[rgba(244,237,226,0.06)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#e0632c] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action (4 cols) */}
            <div className="lg:col-span-4 bg-[#161210] border border-[rgba(244,237,226,0.10)] rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e0632c]/20 border border-[#e0632c]/40 flex items-center justify-center text-[#e0632c] mx-auto">
                <Utensils className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs text-[#7d7263] uppercase tracking-wider block">
                  Valor Avulso (1 Marmita)
                </span>
                <div className="font-display font-bold text-3xl text-[#f4ede2]">
                  R$ {(currentDay.price || 18.00).toFixed(2).replace('.', ',')}
                </div>
                <span className="text-[11px] text-[#f0a066] block mt-1">
                  💡 No kit você paga a partir de R$ 13,50/un
                </span>
                <span className="text-[10px] text-[#7d7263] mt-2 block font-light">
                  Taxa de entrega calculada conforme a localização
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                    `Olá, Felix Gastro. Gostaria de pedir o Prato do Dia de ${currentDay.day}: ${currentDay.title} (R$ ${(currentDay.price || 18.00).toFixed(2)} avulso).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e0632c]/20"
                >
                  <Phone className="w-4 h-4" />
                  Pedir no WhatsApp
                </a>

                <a
                  href={IFOOD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#ea1d2c] text-white font-display text-xs uppercase tracking-wider font-bold hover:bg-[#c91825] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ea1d2c]/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pedir pelo iFood
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
