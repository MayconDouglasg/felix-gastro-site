import React from 'react';
import { MapPin, ArrowRight, UtensilsCrossed, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import heroBgImage from '../assets/images/ChatGPT Image 27 de ago. de 2026, 23_13_09.png';

interface HeroProps {
  onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image: Chef Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Cozinheira da Felix Gastro preparando pratos caseiros e regionais"
          className="w-full h-full object-cover object-[center_right] sm:object-right md:object-right-top opacity-85"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Left Dark Gradient Overlay for optimal text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b] via-[#0f0d0b]/10 sm:via-[#0f0d0b]/5 md:via-[#0f0d0b]/5 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-transparent to-[#0f0d0b]/60 z-10" />
      </div>

      {/* Ambient background glow accent */}
      <div className="absolute -top-24 left-10 w-96 h-96 rounded-full bg-[#e0632c]/15 blur-3xl pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl lg:max-w-xl text-left space-y-5">

          {/* Official Logo Display */}
          <div className="flex items-start">
            <Logo size="lg" className="h-20 sm:h-24 drop-shadow-lg -ml-1" />
          </div>

          {/* Eyebrow */}
          <div className="text-xs sm:text-sm font-display tracking-[0.2em] uppercase font-semibold text-[#b3a795] flex items-center gap-2">
            <span>COMIDA CASEIRA & REGIONAL — CARIRI</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[66px] text-[#f4ede2] leading-[1.02] uppercase tracking-tight drop-shadow-md">
            SABOR DE CASA <br />
            <span className="text-[#e0632c]">PRA TODO EVENTO</span> <br />
            E TODO DIA.
          </h1>

          {/* Tagline alinhada ao posicionamento */}
          <p className="font-display text-lg sm:text-xl text-[#f0a066] font-medium tracking-wide drop-shadow-sm">
            Comida de verdade, com sabor de casa.
          </p>

          {/* Subtext */}
          <p className="text-[#d5cbbe] text-base sm:text-lg leading-relaxed font-light drop-shadow max-w-xl">
            Marmitas para facilitar sua rotina e soluções gastronômicas para seus momentos especiais no Cariri.
          </p>

          {/* Location Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161210]/95 backdrop-blur-md border border-[rgba(244,237,226,0.18)] text-[11px] sm:text-xs font-display font-semibold uppercase tracking-wider text-[#f4ede2] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#e0632c]" />
              JUAZEIRO DO NORTE
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161210]/95 backdrop-blur-md border border-[rgba(244,237,226,0.18)] text-[11px] sm:text-xs font-display font-semibold uppercase tracking-wider text-[#f4ede2] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#e0632c]" />
              CRATO
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161210]/95 backdrop-blur-md border border-[rgba(244,237,226,0.18)] text-[11px] sm:text-xs font-display font-semibold uppercase tracking-wider text-[#f4ede2] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#e0632c]" />
              BARBALHA
            </span>
          </div>

          {/* Two Balanced Main CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#marmitas"
              className="px-7 py-4 rounded-full bg-[#e0632c] text-[#14110d] font-display text-sm uppercase tracking-wider font-bold hover:bg-[#f0a066] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#e0632c]/30 flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Ver Kits de Marmitas
            </a>

            <a
              href="#eventos"
              className="px-7 py-4 rounded-full bg-[#1c1712]/90 backdrop-blur-md border border-[#e0632c]/60 text-[#f4ede2] font-display text-sm uppercase tracking-wider font-semibold hover:border-[#e0632c] hover:text-[#f0a066] hover:bg-[#231c16] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#c9a227]" />
              Planejar meu Evento
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
