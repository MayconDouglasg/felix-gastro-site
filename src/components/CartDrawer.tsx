import React, { useState, useMemo } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  MapPin, 
  CreditCard, 
  AlertCircle,
  Phone
} from 'lucide-react';
import { CartItem, CustomerCheckoutInfo, City } from '../types';
import { WHATSAPP_PRIMARY } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [checkoutInfo, setCheckoutInfo] = useState<CustomerCheckoutInfo>({
    name: '',
    phone: '',
    city: 'Juazeiro do Norte',
    address: '',
    neighborhood: '',
    paymentMethod: 'pix',
    needChangeFor: '',
    notes: ''
  });

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  // Subtotal and Total
  const totalAmount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  }, [items]);

  const handleInputChange = (field: keyof CustomerCheckoutInfo, value: any) => {
    setCheckoutInfo((prev) => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppOrderText = () => {
    let paymentLabel = 'Pix (Chave informada no atendimento)';
    if (checkoutInfo.paymentMethod === 'cartao_credito') paymentLabel = 'Cartão de Crédito (Levar maquininha)';
    if (checkoutInfo.paymentMethod === 'cartao_debito') paymentLabel = 'Cartão de Débito (Levar maquininha)';
    if (checkoutInfo.paymentMethod === 'dinheiro') {
      paymentLabel = `Dinheiro em Espécie${checkoutInfo.needChangeFor ? ` (Troco para R$ ${checkoutInfo.needChangeFor})` : ' (Sem troco)'}`;
    }

    const itemsSummary = items
      .map((item, idx) => {
        let detailsText = '';
        if (item.details && item.details.length > 0) {
          detailsText = `\n   ${item.details.map((d) => `• ${d}`).join('\n   ')}`;
        }
        return `*${idx + 1}. ${item.quantity}x ${item.title}* (${item.subtitle}) - R$ ${(item.unitPrice * item.quantity).toFixed(2)}${detailsText}`;
      })
      .join('\n\n');

    return `🍱 *NOVO PEDIDO — FELIX GASTRO* 🍱
----------------------------------------
👤 *Cliente:* ${checkoutInfo.name || 'Cliente do Site'}
📱 *WhatsApp:* ${checkoutInfo.phone || 'Não informado'}
📍 *Cidade:* ${checkoutInfo.city}
🏠 *Endereço:* ${checkoutInfo.address || 'A combinar'}
🏘️ *Bairro:* ${checkoutInfo.neighborhood || 'A combinar'}
💳 *Forma de Pagamento:* ${paymentLabel}
${checkoutInfo.notes ? `📝 *Observações:* ${checkoutInfo.notes}\n` : ''}----------------------------------------
🛒 *ITENS DO PEDIDO:*

${itemsSummary}

----------------------------------------
💰 *VALOR ESTIMADO DOS ITENS:* R$ ${totalAmount.toFixed(2)}

_Gostaria de confirmar a disponibilidade, taxa de entrega e tempo estimado._`;
  };

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const message = generateWhatsAppOrderText();
    const url = `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f0d0b]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-[#161210] border-l border-[rgba(244,237,226,0.15)] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-[#1c1712] border-b border-[rgba(244,237,226,0.10)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#e0632c]" />
              <h3 className="font-display font-bold text-xl text-[#f4ede2] uppercase">
                {step === 'cart' ? 'Seu Pedido' : 'Finalizar Pedido'}
              </h3>
              <span className="bg-[#e0632c] text-[#14110d] text-xs font-display font-bold px-2 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#b3a795] hover:text-[#f4ede2] rounded-xl hover:bg-[#161210] transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1c1712] border border-[rgba(244,237,226,0.10)] flex items-center justify-center text-[#7d7263] mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#f4ede2] uppercase">
                  Seu pedido está vazio
                </h4>
                <p className="text-xs text-[#b3a795] max-w-xs mx-auto font-light">
                  Navegue pelos nossos kits de marmitas ou monte seu pedido sob medida para começar.
                </p>
                <a
                  href="#marmitas"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold"
                >
                  Ver Kits de Marmitas
                </a>
              </div>
            ) : step === 'cart' ? (
              /* Step 1: Cart Items List */
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display uppercase tracking-wider text-[#7d7263]">
                    Itens Selecionados
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-[#e0632c] hover:underline"
                  >
                    Esvaziar tudo
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#1c1712] border border-[rgba(244,237,226,0.08)] rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-display font-bold text-sm text-[#f4ede2] uppercase leading-tight">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-[#f0a066] font-display uppercase tracking-wider block mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#7d7263] hover:text-[#e0632c] p-1 transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.details && item.details.length > 0 && (
                      <div className="space-y-1 bg-[#161210] p-2.5 rounded-xl text-[11px] text-[#b3a795]">
                        {item.details.map((det, i) => (
                          <div key={i}>• {det}</div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2 bg-[#161210] px-2.5 py-1 rounded-xl border border-[rgba(244,237,226,0.10)]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#b3a795] hover:text-white"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-display font-bold text-xs text-[#f4ede2] px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#b3a795] hover:text-white"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-display font-bold text-base text-[#f4ede2]">
                        R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Step 2: Checkout Information Form */
              <form id="checkout-form" onSubmit={handleSendOrder} className="space-y-4">
                <div className="bg-[#1c1712] p-4 rounded-2xl border border-[rgba(244,237,226,0.08)] space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#f0a066] flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Dados de Entrega (Crajubar)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[10px] text-[#7d7263] uppercase block mb-1">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={checkoutInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ex: Ana Maria"
                        className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-[#7d7263] uppercase block mb-1">WhatsApp / Telefone *</label>
                      <input
                        type="tel"
                        required
                        value={checkoutInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(88) 99999-9999"
                        className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#7d7263] uppercase block mb-1">Cidade do Cariri *</label>
                    <select
                      value={checkoutInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value as City)}
                      className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                    >
                      <option value="Juazeiro do Norte">Juazeiro do Norte</option>
                      <option value="Crato">Crato</option>
                      <option value="Barbalha">Barbalha</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[10px] text-[#7d7263] uppercase block mb-1">Bairro *</label>
                      <input
                        type="text"
                        required
                        value={checkoutInfo.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        placeholder="Ex: Lagoa Seca / Centro"
                        className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-[#7d7263] uppercase block mb-1">Rua e Número *</label>
                      <input
                        type="text"
                        required
                        value={checkoutInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Ex: Rua São Pedro, 120"
                        className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                      />
                    </div>
                  </div>

                  <p className="text-[10px] text-[#7d7263] pt-1">
                    *Taxa de entrega calculada conforme a localização exata no atendimento do WhatsApp.
                  </p>
                </div>

                {/* Payment Selection */}
                <div className="bg-[#1c1712] p-4 rounded-2xl border border-[rgba(244,237,226,0.08)] space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#f0a066] flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Forma de Pagamento
                  </h4>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'pix', label: 'Pix', sub: 'Chave no WhatsApp' },
                      { id: 'cartao_credito', label: 'Cartão', sub: 'Crédito/Débito' },
                      { id: 'dinheiro', label: 'Dinheiro', sub: 'Em espécie' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handleInputChange('paymentMethod', method.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          checkoutInfo.paymentMethod === method.id
                            ? 'bg-[#e0632c] text-[#14110d] font-bold border-[#e0632c]'
                            : 'bg-[#161210] border-[rgba(244,237,226,0.10)] text-[#b3a795]'
                        }`}
                      >
                        <span className="font-display text-xs uppercase block">{method.label}</span>
                        <span className="text-[9px] block opacity-80">{method.sub}</span>
                      </button>
                    ))}
                  </div>

                  {checkoutInfo.paymentMethod === 'dinheiro' && (
                    <div>
                      <label className="text-[10px] text-[#7d7263] uppercase block mb-1">
                        Precisa de troco para quanto? (Opcional)
                      </label>
                      <input
                        type="text"
                        value={checkoutInfo.needChangeFor}
                        onChange={(e) => handleInputChange('needChangeFor', e.target.value)}
                        placeholder="Ex: Troco para R$ 50,00"
                        className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] text-[#7d7263] uppercase block mb-1">
                      Observações / Ponto de Referência
                    </label>
                    <input
                      type="text"
                      value={checkoutInfo.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Ex: Próximo à praça / portaria do prédio..."
                      className="w-full bg-[#161210] border border-[rgba(244,237,226,0.12)] rounded-xl px-3 py-2 text-xs text-[#f4ede2] focus:outline-none focus:border-[#e0632c]"
                    />
                  </div>
                </div>
              </form>
            )}

          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-6 bg-[#1c1712] border-t border-[rgba(244,237,226,0.10)] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-[#7d7263] uppercase tracking-wider block">
                    Total Estimado
                  </span>
                  <div className="font-display font-bold text-3xl text-[#f4ede2]">
                    R$ {totalAmount.toFixed(2).replace('.', ',')}
                  </div>
                </div>
                <span className="text-[11px] text-[#f0a066] font-display uppercase tracking-wider">
                  Juazeiro • Crato • Barbalha
                </span>
              </div>

              {step === 'cart' ? (
                <div className="space-y-2">
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-3.5 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#e0632c]/20"
                  >
                    Prosseguir para Entrega
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(generateWhatsAppOrderText())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] font-display text-xs uppercase tracking-wider font-semibold hover:border-[#e0632c] hover:text-[#f0a066] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Enviar Rápido no WhatsApp
                  </a>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-full py-4 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#e0632c]/20"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Pedido no WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-full py-2.5 text-[#b3a795] font-display text-xs uppercase tracking-wider hover:text-white"
                  >
                    ← Voltar para revisão de itens
                  </button>
                </div>
              )}

              <div className="flex items-start gap-1.5 text-[10px] text-[#7d7263] leading-tight font-light pt-1">
                <AlertCircle className="w-3 h-3 text-[#e0632c] shrink-0 mt-0.5" />
                <span>O envio pelo site não confirma automaticamente o pedido. Disponibilidade, entrega e pagamento são alinhados pelo WhatsApp.</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
