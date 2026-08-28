import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/menuData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#161210] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Tire Suas Dúvidas
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#f4ede2] uppercase">
            Perguntas Frequentes
          </h2>
          <p className="text-[#b3a795] text-sm mt-2 font-light">
            Informações sobre entregas no Cariri, prazos, formas de pagamento e pedidos para eventos.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1c1712] border border-[rgba(244,237,226,0.10)] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base uppercase tracking-wide text-[#f4ede2] hover:text-[#f0a066] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#e0632c] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#b3a795] leading-relaxed border-t border-[rgba(244,237,226,0.06)] font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
