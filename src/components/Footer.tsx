import React from 'react';
import { Phone, Instagram, MapPin, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, INSTAGRAM_HANDLE } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0908] border-t border-[rgba(244,237,226,0.10)] pt-16 pb-28 sm:pb-16 text-[#b3a795] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-start">
              <Logo size="md" />
            </div>

            <p className="font-light leading-relaxed max-w-xs text-[#b3a795]">
              Comida caseira e regional no Cariri. Mais de 15 anos de experiência levando sabor e praticidade para o seu dia a dia e seus eventos.
            </p>

            <p className="text-[#f0a066] font-display text-xs uppercase tracking-wider font-semibold">
              Comida de verdade, com sabor de casa.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#f4ede2] mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 font-display uppercase tracking-wider text-[11px]">
              <li>
                <a href="#marmitas" className="hover:text-[#f0a066] transition-colors">
                  • Kits de Marmitas
                </a>
              </li>
              <li>
                <a href="#cardapio-do-dia" className="hover:text-[#f0a066] transition-colors">
                  • Cardápio do Dia (Avulso)
                </a>
              </li>
              <li>
                <a href="#monte-seu-kit" className="hover:text-[#f0a066] transition-colors">
                  • Monte seu Kit
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-[#f0a066] transition-colors">
                  • Buffet & Cozinheira
                </a>
              </li>
              <li>
                <a href="#simulador-eventos" className="hover:text-[#f0a066] transition-colors">
                  • Orçamento de Eventos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#f0a066] transition-colors">
                  • Sobre a Felix Gastro
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Contacts */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#f4ede2] mb-4">
              Atendimento & WhatsApp
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f4ede2] hover:text-[#f0a066] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e0632c]" />
                  <span>(88) 98103-4493 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_SECONDARY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f4ede2] hover:text-[#f0a066] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e0632c]" />
                  <span>(87) 98155-6680 (Atendimento)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/felix.gastro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f4ede2] hover:text-[#f0a066] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#e0632c]" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regions & Hours */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#f4ede2] mb-4">
              Região Atendida
            </h4>
            <div className="space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                <span>
                  Juazeiro do Norte • Crato • Barbalha (Ceará)
                </span>
              </div>
              <p className="text-[11px] text-[#7d7263] pt-1 font-light">
                Entregamos em Juazeiro do Norte, Crato e Barbalha. Taxa de entrega calculada conforme a localização.
              </p>
              <p className="text-[11px] text-[#7d7263] font-light">
                Eventos e buffet: atendimento com agendamento prévio com no mínimo 10 pessoas.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(244,237,226,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7d7263]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Felix Gastro — Comida Caseira & Eventos no Cariri.</span>
          </div>

          <div className="flex items-center gap-4 font-display uppercase tracking-wider text-[10px]">
            <span>Juazeiro do Norte • CE</span>
            <span>Crato • CE</span>
            <span>Barbalha • CE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
