import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0d0b] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Depoimentos Reais
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Quem Provou, Aprovou no Cariri
          </h2>
          <p className="text-[#b3a795] text-base mt-2 font-light">
            Veja a experiência de quem já encomendou marmitas ou celebrou seus melhores momentos conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#161210] border border-[rgba(244,237,226,0.10)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#e0632c]/40 transition-all shadow-xl relative"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#c9a227] fill-[#c9a227]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#e0632c] opacity-40" />
                </div>

                {/* Service Tag */}
                <span className="inline-block bg-[#1c1712] border border-[rgba(244,237,226,0.10)] text-[#f0a066] font-display text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg mb-3">
                  {test.serviceType}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#f4ede2] leading-relaxed font-light mb-6 italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-[rgba(244,237,226,0.08)] flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#e0632c]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#f4ede2] uppercase leading-none">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-[#b3a795] block leading-tight mt-0.5">
                    {test.role}
                  </span>
                  <span className="text-[10px] text-[#7d7263] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#e0632c]" />
                    {test.city}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
