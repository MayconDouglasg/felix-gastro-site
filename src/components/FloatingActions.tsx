import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { WHATSAPP_PRIMARY } from '../data/menuData';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Cart Button (shows if items > 0) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="pointer-events-auto p-4 rounded-full bg-[#1c1712] border-2 border-[#e0632c] text-[#f4ede2] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
          aria-label="Ver carrinho de pedidos"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-[#f0a066]" />
            <span className="absolute -top-2 -right-2 bg-[#e0632c] text-[#14110d] font-display font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          </div>
          <span className="hidden sm:inline font-display text-xs uppercase tracking-wider font-bold text-[#f4ede2] pr-1">
            Ver Pedido
          </span>
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${WHATSAPP_PRIMARY}?text=Oi!%20Estou%20no%20site%20da%20Felix%20Gastro%20e%20gostaria%20de%20um%20atendimento.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-[#e0632c] text-[#14110d] rounded-full p-4 sm:px-6 sm:py-4 flex items-center gap-3 font-display text-xs uppercase tracking-wider font-bold shadow-2xl shadow-[#e0632c]/40 hover:bg-[#f0a066] hover:scale-105 active:scale-95 transition-all group"
      >
        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.05-1.35A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.2-.47-4.5-1.28l-.32-.19-3 .8.8-2.92-.2-.32A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.4-5.7c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
        </svg>
        <span className="hidden md:inline">Pedir no WhatsApp</span>
      </a>

    </div>
  );
};
