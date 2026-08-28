import React, { useState } from 'react';
import { ShoppingBag, Phone, Check, Sparkles, PackageCheck, Info, Utensils, Truck } from 'lucide-react';
import { MARMITAS_DATA, MARMITA_KITS_PRESETS, WHATSAPP_PRIMARY, IFOOD_URL } from '../data/menuData';
import { MarmitaItem, CartItem } from '../types';

interface MarmitasSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export const MarmitasSection: React.FC<MarmitasSectionProps> = ({ onAddToCart }) => {
  const [activeModalItem, setActiveModalItem] = useState<MarmitaItem | null>(null);

  const handleAddPresetKit = (preset: typeof MARMITA_KITS_PRESETS[0]) => {
    const cartItem: CartItem = {
      id: `preset-${preset.id}-${Date.now()}`,
      type: 'marmita_kit',
      title: preset.name,
      subtitle: `${preset.units} marmitas/pratos caseiros • R$ ${preset.pricePerUnit.toFixed(2)}/un`,
      details: [
        `Quantidade: ${preset.units} refeições`,
        `Valor total: R$ ${preset.totalPrice.toFixed(2)}`,
        'Sabores: Escolha entre marmitas tradicionais, fit ou macarronadas da casa',
        'Taxa de entrega paga à parte conforme localização'
      ],
      quantity: 1,
      unitPrice: preset.totalPrice
    };

    onAddToCart(cartItem);
  };

  const handleAddComboToCart = (marmita: MarmitaItem, units: number = 5) => {
    const unitPrice = units >= 20 ? 13.50 : units >= 15 ? 14.33 : units >= 10 ? 15.00 : 16.00;
    const totalPrice = units * unitPrice;

    const cartItem: CartItem = {
      id: `${marmita.id}-kit-${units}-${Date.now()}`,
      type: 'marmita_kit',
      title: `Kit ${units}x: ${marmita.name}`,
      subtitle: `${units} unidades • R$ ${unitPrice.toFixed(2)} cada`,
      details: [
        `Opção: ${marmita.name}`,
        `Categoria: ${marmita.category.toUpperCase()}`,
        `Quantidade: ${units} refeições`,
        'Taxa de entrega calculada à parte no WhatsApp'
      ],
      quantity: 1,
      unitPrice: totalPrice,
      image: marmita.image
    };

    onAddToCart(cartItem);
  };

  return (
    <section id="marmitas" className="py-20 bg-[#161210] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display text-xs tracking-widest uppercase text-[#f0a066] font-semibold">
                Principal • Praticidade & Economia
              </span>
              <span className="w-8 h-px bg-[#e0632c]" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
              Kits de Marmitas
            </h2>
            <p className="text-[#b3a795] text-base max-w-2xl mt-2 font-light">
              Quer praticidade para a semana? Escolha um dos nossos kits e economize por unidade. Comida caseira de verdade, macarronadas especiais e pratos fit preparados com cuidado no Cariri.
            </p>
          </div>

          {/* Quick link to custom builder */}
          <a
            href="#monte-seu-kit"
            className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-[#f0a066] hover:text-[#e0632c] border border-[#e0632c]/40 hover:border-[#e0632c] px-5 py-3 rounded-full transition-all bg-[#1c1712] self-start md:self-auto shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#e0632c]" />
            Prefere montar do seu jeito? Monte seu kit
          </a>
        </div>

        {/* Prominent Delivery Fee Notice Badge */}
        <div className="bg-[#1c1712] border-2 border-[#e0632c]/40 rounded-2xl p-4 sm:p-5 mb-8 flex items-center gap-3.5 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-[#e0632c]/20 border border-[#e0632c]/50 flex items-center justify-center text-[#e0632c] shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <p className="font-display text-xs sm:text-sm font-bold text-[#f4ede2] uppercase tracking-wide">
              Taxa de entrega paga à parte pelo cliente
            </p>
            <p className="text-xs text-[#b3a795] font-light leading-snug">
              Atendemos Juazeiro do Norte, Crato e Barbalha. O valor da entrega é calculado de acordo com a sua localização e informado no atendimento do WhatsApp.
            </p>
          </div>
        </div>

        {/* Secondary Banner: Marmita Avulsa Callout */}
        <div className="bg-[#1c1712] border border-[rgba(244,237,226,0.10)] rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0f0d0b] border border-[#e0632c]/40 flex items-center justify-center text-[#e0632c] shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-[#f4ede2] uppercase tracking-wide">
                Precisa de apenas uma refeição hoje?
              </p>
              <p className="text-xs text-[#b3a795] font-light">
                Consulte o nosso prato do dia com entrega rápida ou faça seu pedido pelo iFood.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 self-stretch sm:self-auto">
            <a
              href="#cardapio-do-dia"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-xl bg-[#231c16] text-[#f0a066] font-display text-xs uppercase tracking-wider font-semibold border border-[#e0632c]/30 hover:border-[#e0632c] hover:text-white transition-all"
            >
              Ver Prato do Dia
            </a>
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-xl bg-[#ea1d2c] text-white font-display text-xs uppercase tracking-wider font-bold hover:bg-[#c91825] transition-all"
            >
              Pedir pelo iFood
            </a>
          </div>
        </div>

        {/* Kits Official Cards (5, 10, 15, 20) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {MARMITA_KITS_PRESETS.map((kit) => (
            <div
              key={kit.id}
              className="bg-[#1c1712] border border-[rgba(244,237,226,0.12)] hover:border-[#e0632c]/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-lg relative group"
            >
              {kit.badge && (
                <span className="absolute -top-2.5 right-4 bg-[#e0632c] text-[#14110d] font-display text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow">
                  {kit.badge}
                </span>
              )}

              <div>
                <div className="flex items-center gap-2 text-[#f0a066] mb-1.5">
                  <PackageCheck className="w-4 h-4" />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    {kit.name}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-sm text-[#f0a066] mb-1">
                  {kit.subtitle}
                </h3>
                
                <p className="text-[11px] text-[#b3a795] font-light leading-relaxed mb-4">
                  {kit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(244,237,226,0.08)]">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-[#7d7263] uppercase tracking-wider block">
                      Valor Total
                    </span>
                    <div className="flex items-baseline gap-2">
                      <div className="font-display font-bold text-2xl text-[#f4ede2]">
                        R$ {kit.totalPrice.toFixed(2).replace('.', ',')}
                      </div>
                      {kit.originalTotal > kit.totalPrice && (
                        <span className="text-xs text-[#7d7263] line-through font-display">
                          R$ {kit.originalTotal.toFixed(0)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#f0a066] font-display font-bold block">
                      R$ {kit.pricePerUnit.toFixed(2).replace('.', ',')}/un
                    </span>
                    {kit.discountAmount > 0 && (
                      <span className="text-[9px] text-[#25d366] font-display uppercase font-semibold">
                        Economize R$ {kit.discountAmount.toFixed(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dual actions: Cart + WhatsApp Direct */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleAddPresetKit(kit)}
                    className="w-full py-2.5 rounded-xl bg-[#161210] border border-[#e0632c]/50 text-[#f0a066] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#e0632c] hover:text-[#14110d] transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Adicionar
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                      `Olá, Felix Gastro. Gostaria de pedir o ${kit.name} (${kit.units} refeições por R$ ${kit.totalPrice.toFixed(2)}). Gostaria de confirmar a disponibilidade e a taxa de entrega.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-1 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready Combinations Section */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#f4ede2] uppercase mb-1">
              Opções de Pratos & Combinações para o seu Kit
            </h3>
            <p className="text-xs text-[#b3a795] font-light">
              Escolha entre marmitas caseiras tradicionais, pratos fit ou nossa <strong>Macarronada Artesanal completa</strong>.
            </p>
          </div>
          <span className="text-[11px] text-[#f0a066] font-display uppercase tracking-wider">
            Kits a partir de R$ 13,50 por refeição
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARMITAS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1712] border border-[rgba(244,237,226,0.12)] rounded-2xl overflow-hidden flex flex-col hover:border-[rgba(244,237,226,0.25)] hover:-translate-y-1 transition-all duration-300 shadow-xl group"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0f0d0b]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1712] via-transparent to-transparent" />

                {/* Category Badge */}
                {item.badge && (
                  <span className="absolute top-3 right-3 bg-[#e0632c] text-[#14110d] font-display text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-base text-[#f4ede2] uppercase leading-snug">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="text-[#7d7263] hover:text-[#f0a066] transition-colors p-1 shrink-0"
                      title="Ver ingredientes completos"
                      aria-label="Ver detalhes dos ingredientes"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-[#b3a795] line-clamp-2 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] text-[#7d7263] uppercase tracking-wider block font-semibold">
                      Composição do Prato:
                    </span>
                    <ul className="text-xs text-[#d5cbbe] space-y-1">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#e0632c] shrink-0" />
                          <span className="truncate">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[rgba(244,237,226,0.08)]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddComboToCart(item, 5)}
                      className="w-full py-2.5 px-2 rounded-xl bg-[#161210] border border-[#e0632c]/50 text-[#f0a066] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#e0632c] hover:text-[#14110d] transition-all flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Pedir no Kit (5x)
                    </button>

                    <a
                      href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(
                        `Olá, Felix Gastro. Gostaria de pedir um kit com a opção: ${item.name}. Como funciona a entrega para meu endereço?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-2 rounded-xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-1 text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on WhatsApp confirmation and delivery fee */}
        <div className="mt-12 p-4 rounded-2xl bg-[#1c1712]/70 border border-[rgba(244,237,226,0.08)] text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs text-[#f4ede2] font-semibold">
            🚚 Entrega paga à parte • Alinhada diretamente no atendimento
          </p>
          <p className="text-xs text-[#b3a795] font-light leading-relaxed">
            O envio pelo site não confirma automaticamente o pedido. Disponibilidade, taxa de entrega (calculada por bairro) e pagamento são confirmados no WhatsApp.
          </p>
        </div>

        {/* Modal for Detailed Ingredients */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-[#0f0d0b]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1c1712] border border-[rgba(244,237,226,0.20)] rounded-2xl max-w-md w-full p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
              <h3 className="font-display font-bold text-xl text-[#f4ede2] uppercase mb-2">
                {activeModalItem.name}
              </h3>
              <p className="text-xs text-[#b3a795] mb-4">
                {activeModalItem.description}
              </p>

              <h4 className="font-display text-xs uppercase tracking-wider text-[#f0a066] font-semibold mb-2">
                Composição Completa:
              </h4>
              <ul className="space-y-2 mb-6">
                {activeModalItem.ingredients.map((ing, idx) => (
                  <li key={idx} className="text-xs text-[#f4ede2] flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleAddComboToCart(activeModalItem, 5);
                    setActiveModalItem(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold"
                >
                  Adicionar ao Pedido (Kit 5x)
                </button>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-3 rounded-xl bg-[#161210] text-[#b3a795] font-display text-xs uppercase tracking-wider hover:text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
