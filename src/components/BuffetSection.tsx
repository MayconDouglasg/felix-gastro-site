import React from 'react';
import { Sparkles, Check, Phone, ChefHat, UtensilsCrossed, Users, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUFFET_PACKAGES, WHATSAPP_PRIMARY } from '../data/menuData';

interface BuffetSectionProps {
  onSelectPackageForSimulation?: (pkg: any) => void;
}

export const BuffetSection: React.FC<BuffetSectionProps> = () => {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulador-eventos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="eventos" className="py-20 bg-[#0f0d0b] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <ChefHat className="w-4 h-4 text-[#e0632c]" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Eventos & Confraternizações no Cariri
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Soluções para o seu Evento
          </h2>
          <p className="text-[#b3a795] text-base mt-3 font-light leading-relaxed">
            Do almoço em família no sítio à comemoração de aniversário. Escolha a modalidade ideal para o seu momento.
          </p>

          {/* Min guests badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1712] border border-[rgba(244,237,226,0.15)] text-xs text-[#f4ede2]">
            <Users className="w-4 h-4 text-[#e0632c]" />
            <span>Atendimento para eventos a partir de <strong>10 pessoas</strong></span>
          </div>
        </div>

        {/* Two Event Modalities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Modalidade 1: Buffet */}
          <div className="bg-gradient-to-b from-[#1c1712] to-[#161210] border border-[rgba(244,237,226,0.15)] hover:border-[#e0632c]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#e0632c]/20 text-[#f0a066] font-display text-[10px] uppercase font-bold tracking-wider">
                  Alimentação Completa
                </span>
                <span className="text-xs text-[#b3a795] font-display">
                  Mínimo 10 pessoas
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#f4ede2] uppercase mb-2">
                Buffet para Eventos
              </h3>

              <p className="text-xs text-[#b3a795] leading-relaxed mb-6 font-light">
                A Felix Gastro fornece a alimentação preparada com sabor caseiro, travessas e equipe para servir os pratos no local.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Alimentos preparados e entregues pontualmente no evento</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Travessas e recipientes para servir inclusos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Equipe própria para reposição e serviço da alimentação</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Opção de centos de salgados fritos ou congelados</span>
                </div>
              </div>

              {/* Exclusion clarification */}
              <div className="p-3.5 rounded-xl bg-[#120f0d] border border-[rgba(244,237,226,0.06)] text-[11px] text-[#7d7263] leading-snug">
                <strong className="text-[#b3a795]">Atenção:</strong> Não inclui garçons para bebidas e mesas, nem decoração completa do espaço.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[rgba(244,237,226,0.08)]">
              <button
                type="button"
                onClick={scrollToSimulator}
                className="w-full py-3.5 rounded-2xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e0632c]/20"
              >
                <Sparkles className="w-4 h-4" />
                Montar Cardápio de Buffet
              </button>
            </div>
          </div>

          {/* Modalidade 2: Cozinheira no Local */}
          <div className="bg-gradient-to-b from-[#1c1712] to-[#161210] border-2 border-[#e0632c]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative transition-all">
            <span className="absolute -top-3 right-6 bg-[#e0632c] text-[#14110d] font-display text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow">
              A partir de R$ 21 por pessoa
            </span>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#e0632c]/20 text-[#f0a066] font-display text-[10px] uppercase font-bold tracking-wider">
                  Mão de Obra Especializada
                </span>
                <span className="text-xs text-[#b3a795] font-display">
                  Mínimo 10 pessoas
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#f4ede2] uppercase mb-2">
                Cozinheira no Local
              </h3>

              <p className="text-xs text-[#b3a795] leading-relaxed mb-6 font-light">
                A cozinheira vai até a sua residência, sítio, chácara ou espaço de evento e prepara tudo na hora com mais de 15 anos de experiência.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span><strong>Opção 1:</strong> Você compra os ingredientes (enviamos a lista exata)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span><strong>Opção 2:</strong> A Felix providencia os insumos (incluso no orçamento)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Preparo e cocção dos pratos na cozinha do seu espaço</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f4ede2]">
                  <Check className="w-4 h-4 text-[#e0632c] shrink-0 mt-0.5" />
                  <span>Limpeza das bancadas e panelas utilizadas ao final</span>
                </div>
              </div>

              {/* Price Note */}
              <div className="p-3.5 rounded-xl bg-[#120f0d] border border-[rgba(244,237,226,0.06)] text-[11px] text-[#7d7263] leading-snug">
                *Valor inicial de referência. O orçamento final pode variar conforme número de convidados, cardápio, local, estrutura disponível e necessidade de equipe.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[rgba(244,237,226,0.08)]">
              <button
                type="button"
                onClick={scrollToSimulator}
                className="w-full py-3.5 rounded-2xl bg-[#1c1712] border-2 border-[#e0632c] text-[#f0a066] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#e0632c] hover:text-[#14110d] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Montar Cardápio com Cozinheira
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
