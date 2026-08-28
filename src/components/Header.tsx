import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_PRIMARY } from '../data/menuData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenSimulator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f0d0b]/95 backdrop-blur-md border-b border-[rgba(244,237,226,0.12)] py-2.5 shadow-xl' 
          : 'bg-gradient-to-b from-[#0f0d0b]/95 via-[#0f0d0b]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brandmark / Official Logo */}
        <a href="#" className="flex items-center group transition-transform hover:scale-[1.02]">
          <Logo size="sm" className="h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a 
            href="#marmitas" 
            className="font-display text-xs tracking-widest uppercase text-[#b3a795] hover:text-[#f0a066] transition-colors font-medium"
          >
            Marmitas
          </a>
          <a 
            href="#cardapio-do-dia" 
            className="font-display text-xs tracking-widest uppercase text-[#b3a795] hover:text-[#f0a066] transition-colors font-medium"
          >
            Cardápio do Dia
          </a>
          <a 
            href="#eventos" 
            className="font-display text-xs tracking-widest uppercase text-[#b3a795] hover:text-[#f0a066] transition-colors font-medium"
          >
            Eventos
          </a>
          <a 
            href="#monte-seu-kit" 
            className="font-display text-xs tracking-widest uppercase text-[#f0a066] hover:text-[#e0632c] transition-colors font-semibold flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Monte seu Pedido
          </a>
          <a 
            href="#sobre" 
            className="font-display text-xs tracking-widest uppercase text-[#b3a795] hover:text-[#f0a066] transition-colors font-medium"
          >
            Sobre
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            id="header-cart-btn"
            className="relative p-2.5 rounded-full bg-[#1c1712] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] hover:border-[#e0632c] hover:text-[#f0a066] transition-all"
            aria-label="Abrir carrinho de pedidos"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e0632c] text-[#12100d] text-[11px] font-display font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_PRIMARY}?text=Olá,%20Felix%20Gastro!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#e0632c]/20"
          >
            <Phone className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1c1712] text-[#f4ede2] border border-[rgba(244,237,226,0.12)]"
            aria-label="Abrir menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161210] border-b border-[rgba(244,237,226,0.15)] px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <a 
              href="#marmitas" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm tracking-wider uppercase text-[#f4ede2] py-2 border-b border-[rgba(244,237,226,0.08)]"
            >
              🍱 Marmitas (Kits)
            </a>
            <a 
              href="#cardapio-do-dia" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm tracking-wider uppercase text-[#f4ede2] py-2 border-b border-[rgba(244,237,226,0.08)]"
            >
              🍲 Cardápio do Dia
            </a>
            <a 
              href="#eventos" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm tracking-wider uppercase text-[#f4ede2] py-2 border-b border-[rgba(244,237,226,0.08)]"
            >
              🎉 Eventos (Buffet & Cozinheira)
            </a>
            <a 
              href="#monte-seu-kit" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm tracking-wider uppercase text-[#f0a066] font-semibold py-2 border-b border-[rgba(244,237,226,0.08)]"
            >
              ✨ Monte seu Pedido
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm tracking-wider uppercase text-[#b3a795] py-2"
            >
              👩‍🍳 Sobre a Felix Gastro (15+ anos)
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_PRIMARY}?text=Olá,%20Felix%20Gastro!%20Gostaria%20de%20tirar%20uma%20dúvida.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
