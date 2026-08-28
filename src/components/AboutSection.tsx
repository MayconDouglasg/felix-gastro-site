import React from 'react';
import { Sparkles, Award, Utensils, MapPin, Heart } from 'lucide-react';
import { WHATSAPP_PRIMARY } from '../data/menuData';
import sobrePhoto from '../assets/images/foto-sobre.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#0f0d0b] border-t border-[rgba(244,237,226,0.10)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Chef Photo & Experience Seal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-[#e0632c]/20 to-[#c9a227]/15 blur-lg -z-10" />
              
              <div className="rounded-3xl overflow-hidden border border-[rgba(244,237,226,0.15)] bg-[#1c1712] shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden bg-[#161210]">
                  <img
                    src={sobrePhoto}
                    alt="Cozinheira da Felix Gastro"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Floating Experience Badge */}
                <div className="p-5 bg-[#161210] border-t border-[rgba(244,237,226,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e0632c]/20 border border-[#e0632c]/40 flex items-center justify-center text-[#e0632c]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm uppercase text-[#f4ede2] block leading-tight">
                        Mais de 15 Anos de Experiência
                      </span>
                      <span className="text-xs text-[#f0a066] font-medium">
                        Culinária caseira & regional
                      </span>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-[#e0632c] fill-[#e0632c]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-display text-xs tracking-widest uppercase font-semibold">
                Sobre a Felix Gastro
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase leading-tight">
              A Tradição do Sabor de Casa <br />
              <span className="text-[#e0632c]">no Cariri</span>
            </h2>

            <p className="text-sm sm:text-base text-[#d5cbbe] leading-relaxed font-light">
              A <strong className="text-[#f4ede2] font-semibold">Felix Gastro</strong> nasceu da experiência de mais de 15 anos na cozinha e do prazer de preparar comida caseira com cuidado. Hoje, atende famílias, empresas e eventos em <strong className="text-[#f4ede2] font-semibold">Juazeiro do Norte, Crato e Barbalha</strong>, unindo sabor, praticidade e atendimento próximo.
            </p>

            <p className="text-sm sm:text-base text-[#b3a795] leading-relaxed font-light">
              Seja para organizar as refeições da sua semana com kits de marmitas sob medida e macarronadas artesanais, ou para preparar um banquete farto e inesquecível no seu evento, nossa dedicação é garantir refeições deliciosas que trazem a sensação acolhedora do sabor de casa.
            </p>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#161210] p-4 rounded-2xl border border-[rgba(244,237,226,0.08)]">
                <Award className="w-5 h-5 text-[#e0632c] mb-2" />
                <h4 className="font-display font-bold text-xs uppercase text-[#f4ede2] mb-1">
                  15+ Anos na Cozinha
                </h4>
                <p className="text-[11px] text-[#b3a795] font-light leading-snug">
                  Mão experiente em preparos tradicionais e regionais.
                </p>
              </div>

              <div className="bg-[#161210] p-4 rounded-2xl border border-[rgba(244,237,226,0.08)]">
                <Utensils className="w-5 h-5 text-[#c9a227] mb-2" />
                <h4 className="font-display font-bold text-xs uppercase text-[#f4ede2] mb-1">
                  Cuidado em Cada Prato
                </h4>
                <p className="text-[11px] text-[#b3a795] font-light leading-snug">
                  Tempero caseiro equilibrado e porções fartas.
                </p>
              </div>

              <div className="bg-[#161210] p-4 rounded-2xl border border-[rgba(244,237,226,0.08)]">
                <MapPin className="w-5 h-5 text-[#f0a066] mb-2" />
                <h4 className="font-display font-bold text-xs uppercase text-[#f4ede2] mb-1">
                  Todo o Cariri
                </h4>
                <p className="text-[11px] text-[#b3a795] font-light leading-snug">
                  Atendimento em Juazeiro do Norte, Crato e Barbalha.
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PRIMARY}?text=Olá,%20Felix%20Gastro!%20Gostaria%20de%20saber%20mais%20sobre%20o%20trabalho%20de%20vocês.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all"
              >
                Falar com a Cozinheira no WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
