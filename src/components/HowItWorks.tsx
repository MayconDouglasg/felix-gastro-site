import React from 'react';
import { Utensils, SlidersHorizontal, Send, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Utensils,
      title: 'Escolha',
      description: 'Veja os kits de marmitas, opções de prato do dia ou modalidades para eventos no Cariri.'
    },
    {
      number: '02',
      icon: SlidersHorizontal,
      title: 'Personalize',
      description: 'Defina quantidades, proteínas, guarnições, gramaturas e preferências do seu pedido.'
    },
    {
      number: '03',
      icon: Send,
      title: 'Envie',
      description: 'Seu pedido ou solicitação de orçamento vai organizado e formatado direto para o WhatsApp.'
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Confirme',
      description: 'Nossa equipe alinha a disponibilidade, taxa de entrega, data do evento e forma de pagamento.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#161210] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Fluxo Prático & Sem Fricção
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Como Funciona
          </h2>
          <p className="text-[#b3a795] text-base mt-2 font-light">
            O site vende a decisão e o WhatsApp finaliza a operação de forma ágil e humanizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#1c1712] border border-[rgba(244,237,226,0.10)] rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#e0632c]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-3xl text-[#e0632c] opacity-60 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#161210] border border-[rgba(244,237,226,0.08)] flex items-center justify-center text-[#f0a066]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#f4ede2] uppercase mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#b3a795] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[rgba(244,237,226,0.06)] text-[10px] font-display uppercase tracking-widest text-[#7d7263]">
                  Passo {idx + 1} de 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
