import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Phone, Check, RotateCcw, Utensils, AlertCircle, Truck } from 'lucide-react';
import { CUSTOM_BUILDER_OPTIONS, PASTA_CUSTOMIZATION_OPTIONS, WHATSAPP_PRIMARY, getMarmitaUnitPrice } from '../data/menuData';
import { CartItem, CustomMarmitaSelection } from '../types';

interface CustomMarmitaBuilderProps {
  onAddToCart: (item: CartItem) => void;
}

export const CustomMarmitaBuilder: React.FC<CustomMarmitaBuilderProps> = ({ onAddToCart }) => {
  const [kitQuantity, setKitQuantity] = useState<number>(5);
  const [selectedProtein, setSelectedProtein] = useState(CUSTOM_BUILDER_OPTIONS.proteins[0].id);
  const [selectedGrams, setSelectedGrams] = useState<number>(150);
  const [selectedBase, setSelectedBase] = useState(CUSTOM_BUILDER_OPTIONS.bases[0].id);
  const [selectedSides, setSelectedSides] = useState<string[]>([CUSTOM_BUILDER_OPTIONS.sides[0].id]);
  const [selectedSalad, setSelectedSalad] = useState(CUSTOM_BUILDER_OPTIONS.salads[0].id);
  const [selectedSaborType, setSelectedSaborType] = useState(PASTA_CUSTOMIZATION_OPTIONS.saborTypes[0].name);
  const [observations, setObservations] = useState('');

  const baseObj = CUSTOM_BUILDER_OPTIONS.bases.find((b) => b.id === selectedBase) || CUSTOM_BUILDER_OPTIONS.bases[0];
  const proteinObj = CUSTOM_BUILDER_OPTIONS.proteins.find((p) => p.id === selectedProtein) || CUSTOM_BUILDER_OPTIONS.proteins[0];

  // Conditional pasta options appear only if macarronada is chosen in base
  const hasPastaSelected = Boolean((baseObj as any).isPasta);

  const toggleSide = (sideId: string) => {
    if (selectedSides.includes(sideId)) {
      if (selectedSides.length > 1) {
        setSelectedSides(selectedSides.filter((id) => id !== sideId));
      }
    } else {
      if (selectedSides.length < 2) {
        setSelectedSides([...selectedSides, sideId]);
      } else {
        setSelectedSides([selectedSides[0], sideId]);
      }
    }
  };

  const pricePerMarmita = getMarmitaUnitPrice(kitQuantity);
  const totalPrice = kitQuantity * pricePerMarmita;

  const handleReset = () => {
    setKitQuantity(5);
    setSelectedProtein(CUSTOM_BUILDER_OPTIONS.proteins[0].id);
    setSelectedGrams(150);
    setSelectedBase(CUSTOM_BUILDER_OPTIONS.bases[0].id);
    setSelectedSides([CUSTOM_BUILDER_OPTIONS.sides[0].id]);
    setSelectedSalad(CUSTOM_BUILDER_OPTIONS.salads[0].id);
    setSelectedSaborType(PASTA_CUSTOMIZATION_OPTIONS.saborTypes[0].name);
    setObservations('');
  };

  const getSideNames = () => {
    return selectedSides.map(
      (id) => CUSTOM_BUILDER_OPTIONS.sides.find((s) => s.id === id)?.name || id
    );
  };

  const getSaladName = () => {
    return CUSTOM_BUILDER_OPTIONS.salads.find((s) => s.id === selectedSalad)?.name || '';
  };

  const handleAddToCart = () => {
    const sideNames = getSideNames();
    const saladName = getSaladName();

    const customData: CustomMarmitaSelection = {
      kitQuantity,
      protein: proteinObj.name,
      proteinGrams: selectedGrams,
      baseCarb: baseObj.name,
      sides: sideNames,
      salad: saladName,
      pastaDetails: hasPastaSelected ? {
        saborType: selectedSaborType
      } : undefined,
      observations: observations.trim() || undefined
    };

    const cartItem: CartItem = {
      id: `custom-kit-${Date.now()}`,
      type: 'custom_marmita',
      title: `Kit ${kitQuantity}x Personalizado: ${baseObj.name}`,
      subtitle: `${proteinObj.name} (${selectedGrams}g) • R$ ${pricePerMarmita.toFixed(2)}/un`,
      details: [
        `Quantidade do Kit: ${kitQuantity} refeições`,
        `Base / Prato: ${baseObj.name}`,
        hasPastaSelected ? `Sabor da Macarronada: ${selectedSaborType}` : '',
        `Proteína: ${proteinObj.name} (${selectedGrams}g ${selectedGrams > 150 ? '+ adicional' : 'padrão'})`,
        `Acompanhamentos: ${sideNames.join(', ')}`,
        `Salada: ${saladName}`,
        observations ? `Obs: ${observations}` : ''
      ].filter(Boolean),
      quantity: 1,
      unitPrice: totalPrice,
      customData
    };

    onAddToCart(cartItem);
  };

  const generateWhatsAppOrderText = () => {
    const sideNames = getSideNames();
    const saladName = getSaladName();

    let pastaInfo = '';
    if (hasPastaSelected) {
      pastaInfo = `\n🍝 *Sabor da Macarronada:* ${selectedSaborType}`;
    }

    const gramsLabel = selectedGrams === 150 ? '150g (Padrão)' : `${selectedGrams}g (+ Adicional)`;

    return `Olá, Felix Gastro. Montei um pedido pelo site:

📦 *Kit:* ${kitQuantity} marmitas/pratos
🍚 *Base / Prato:* ${baseObj.name}${pastaInfo}
🥩 *Proteína:* ${proteinObj.name}
⚖️ *Gramatura:* ${gramsLabel}
🥘 *Acompanhamentos:* ${sideNames.join(' + ')}
🥗 *Salada:* ${saladName}
${observations ? `📝 *Observações:* ${observations}\n` : ''}
💰 *Valor Estimado dos Itens:* R$ ${totalPrice.toFixed(2)} (R$ ${pricePerMarmita.toFixed(2)}/un)
🚚 *Taxa de Entrega:* Paga à parte (a calcular no WhatsApp)

Gostaria de confirmar o pedido, a taxa de entrega e o pagamento.`;
  };

  return (
    <section id="monte-seu-kit" className="py-20 bg-[#0f0d0b] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Personalização Semifechada
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Monte seu Kit Personalizado
          </h2>
          <p className="text-[#b3a795] text-base mt-3 font-light">
            Escolha a quantidade de marmitas, tipo de prato (arroz/baião ou macarronada), proteína, gramatura e guarnições com praticidade.
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Builder Steps Left (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-[#161210] border border-[rgba(244,237,226,0.10)] p-6 sm:p-8 rounded-3xl shadow-2xl">
            
            {/* Etapa 1: Quantidade */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 1 — Quantidade do Kit
                </span>
                <span className="text-xs text-[#b3a795] font-light">
                  Mínimo de 5 unidades
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CUSTOM_BUILDER_OPTIONS.quantities.map((qty) => {
                  const isSel = kitQuantity === qty;
                  const unitPrice = getMarmitaUnitPrice(qty);
                  return (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setKitQuantity(qty)}
                      className={`p-3.5 rounded-2xl border text-center transition-all ${
                        isSel
                          ? 'bg-[#e0632c] text-[#14110d] border-[#e0632c] font-bold shadow-lg shadow-[#e0632c]/20'
                          : 'bg-[#1c1712] border-[rgba(244,237,226,0.12)] text-[#f4ede2] hover:border-[#e0632c]/50'
                      }`}
                    >
                      <span className="block font-display text-base uppercase font-bold">
                        Kit {qty} Marmitas
                      </span>
                      <span className={`text-[11px] block mt-0.5 ${isSel ? 'text-[#14110d]/80 font-medium' : 'text-[#f0a066]'}`}>
                        R$ {unitPrice.toFixed(2).replace('.', ',')}/un
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa 2: Base / Prato */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 2 — Base do Prato (Arroz, Baião, Raízes ou Macarronada)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CUSTOM_BUILDER_OPTIONS.bases.map((base) => {
                  const isSel = selectedBase === base.id;
                  return (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSel
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold ring-1 ring-[#e0632c]'
                          : 'bg-[#1c1712]/60 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white hover:border-[rgba(244,237,226,0.20)]'
                      }`}
                    >
                      <span className="text-xs leading-tight">{base.name}</span>
                      {isSel && <Check className="w-4 h-4 text-[#e0632c] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa Condicional: Se escolher Macarronada */}
            {hasPastaSelected && (
              <div className="p-5 rounded-2xl bg-[#1c1712] border-2 border-[#e0632c]/50 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 text-[#f0a066]">
                  <Utensils className="w-4 h-4" />
                  <span className="font-display text-xs uppercase tracking-wider font-bold">
                    Personalização da Macarronada
                  </span>
                </div>

                <div>
                  <label className="text-[11px] text-[#b3a795] uppercase font-display block mb-1.5 font-semibold">
                    Sabor da Macarronada:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PASTA_CUSTOMIZATION_OPTIONS.saborTypes.map((s) => {
                      const isSel = selectedSaborType === s.name;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSaborType(s.name)}
                          className={`p-3.5 rounded-xl border text-center flex items-center justify-center gap-2 transition-all ${
                            isSel
                              ? 'bg-[#e0632c] text-[#14110d] border-[#e0632c] font-bold shadow-md'
                              : 'bg-[#161210] border-[rgba(244,237,226,0.12)] text-[#f4ede2] hover:border-[#e0632c]/50'
                          }`}
                        >
                          <span className="text-sm font-display font-semibold">{s.name}</span>
                          {isSel && <Check className="w-4 h-4 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Etapa 3: Proteína */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 3 — Escolha a Proteína (1 opção)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {CUSTOM_BUILDER_OPTIONS.proteins.map((prot) => {
                  const isSel = selectedProtein === prot.id;
                  return (
                    <button
                      key={prot.id}
                      type="button"
                      onClick={() => setSelectedProtein(prot.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSel
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold ring-1 ring-[#e0632c]'
                          : 'bg-[#1c1712]/60 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white hover:border-[rgba(244,237,226,0.20)]'
                      }`}
                    >
                      <span className="text-xs leading-tight">{prot.name}</span>
                      {isSel && <Check className="w-4 h-4 text-[#e0632c] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa 4: Gramatura */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 4 — Gramatura da Proteína
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {CUSTOM_BUILDER_OPTIONS.gramsOptions.map((g) => {
                  const isSel = selectedGrams === g.value;
                  return (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setSelectedGrams(g.value)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSel
                          ? 'bg-[#e0632c] text-[#14110d] border-[#e0632c] font-bold shadow-md'
                          : 'bg-[#1c1712] border-[rgba(244,237,226,0.12)] text-[#f4ede2] hover:border-[#e0632c]/50'
                      }`}
                    >
                      <span className="font-display text-sm block">{g.value}g</span>
                      <span className={`text-[10px] block uppercase font-medium ${isSel ? 'text-[#14110d]/80' : 'text-[#f0a066]'}`}>
                        {g.extraLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa 5: Acompanhamentos */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 5 — Acompanhamentos (Escolha até 2 opções)
                </span>
                <span className="text-xs text-[#f0a066] font-display">
                  {selectedSides.length}/2 selecionados
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CUSTOM_BUILDER_OPTIONS.sides.map((side) => {
                  const isSel = selectedSides.includes(side.id);
                  return (
                    <button
                      key={side.id}
                      type="button"
                      onClick={() => toggleSide(side.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSel
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold ring-1 ring-[#e0632c]'
                          : 'bg-[#1c1712]/60 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white hover:border-[rgba(244,237,226,0.20)]'
                      }`}
                    >
                      <span className="text-xs leading-tight">{side.name}</span>
                      {isSel && <Check className="w-4 h-4 text-[#e0632c] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa 6: Salada */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold">
                  Etapa 6 — Salada (Escolha 1 ou Sem Salada)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {CUSTOM_BUILDER_OPTIONS.salads.map((salad) => {
                  const isSel = selectedSalad === salad.id;
                  return (
                    <button
                      key={salad.id}
                      type="button"
                      onClick={() => setSelectedSalad(salad.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSel
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold ring-1 ring-[#e0632c]'
                          : 'bg-[#1c1712]/60 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white hover:border-[rgba(244,237,226,0.20)]'
                      }`}
                    >
                      <span className="text-xs leading-tight">{salad.name}</span>
                      {isSel && <Check className="w-4 h-4 text-[#e0632c] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Etapa 7: Observações */}
            <div>
              <label className="font-display text-xs uppercase tracking-wider text-[#e0632c] font-bold block mb-2">
                Etapa 7 — Observações Especiais (Opcional)
              </label>
              <textarea
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                placeholder="Ex: pouco sal, sem cebola, ponto da carne..."
                rows={2}
                className="w-full bg-[#1c1712] border border-[rgba(244,237,226,0.12)] rounded-2xl p-3 text-xs text-[#f4ede2] placeholder-[#7d7263] focus:border-[#e0632c] outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#7d7263] hover:text-[#f0a066] transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar seleção
              </button>
            </div>

          </div>

          {/* Summary Column Right (4 cols) */}
          <div className="lg:col-span-4 bg-[#161210] border border-[rgba(244,237,226,0.15)] rounded-3xl p-6 sm:p-7 shadow-2xl sticky top-24 space-y-5">
            <h3 className="font-display font-bold text-lg uppercase text-[#f4ede2] border-b border-[rgba(244,237,226,0.10)] pb-3 flex items-center justify-between">
              <span>Resumo do seu Kit</span>
              <span className="text-xs font-semibold text-[#f0a066]">
                {kitQuantity} refeições
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Base / Prato:</span>
                <span className="font-semibold text-[#f4ede2] text-right">
                  {baseObj.name}
                </span>
              </div>

              {hasPastaSelected && (
                <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                  <span className="text-[#b3a795]">Sabor:</span>
                  <span className="font-semibold text-[#f0a066] text-right">
                    {selectedSaborType}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Proteína:</span>
                <span className="font-semibold text-[#f4ede2] text-right">
                  {proteinObj.name} ({selectedGrams}g)
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Acompanhamentos:</span>
                <span className="font-semibold text-[#f4ede2] text-right max-w-[180px]">
                  {getSideNames().join(', ')}
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Salada:</span>
                <span className="font-semibold text-[#f4ede2] text-right">
                  {getSaladName()}
                </span>
              </div>

              {observations && (
                <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                  <span className="text-[#b3a795]">Obs:</span>
                  <span className="font-light text-[#f4ede2] text-right max-w-[180px] truncate">
                    {observations}
                  </span>
                </div>
              )}
            </div>

            {/* Total Section */}
            <div className="pt-2">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs text-[#7d7263] uppercase tracking-wider">
                  Valor Estimado dos Itens
                </span>
                <span className="text-xs text-[#f0a066] font-display font-semibold">
                  R$ {pricePerMarmita.toFixed(2).replace('.', ',')}/un
                </span>
              </div>
              <div className="font-display font-bold text-3xl text-[#f4ede2]">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </div>
              <span className="text-[11px] text-[#b3a795] block mt-1">
                *Taxa de entrega paga à parte pelo cliente.
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-2xl bg-[#1c1712] border-2 border-[#e0632c] text-[#f0a066] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#e0632c] hover:text-[#14110d] transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Adicionar ao Pedido
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(generateWhatsAppOrderText())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e0632c]/20 text-center"
              >
                <Phone className="w-4 h-4" />
                Pedir no WhatsApp
              </a>
            </div>

            {/* Disclaimer */}
            <div className="pt-3 border-t border-[rgba(244,237,226,0.06)] flex items-start gap-2 text-[10px] text-[#7d7263] leading-tight font-light">
              <Truck className="w-3.5 h-3.5 text-[#e0632c] shrink-0 mt-0.5" />
              <span>Taxa de entrega calculada conforme o bairro. O envio pelo site é confirmado diretamente pelo WhatsApp.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
