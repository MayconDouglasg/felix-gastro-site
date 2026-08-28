import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarmitasSection } from './components/MarmitasSection';
import { CustomMarmitaBuilder } from './components/CustomMarmitaBuilder';
import { WeeklyMenuSection } from './components/WeeklyMenuSection';
import { BuffetSection } from './components/BuffetSection';
import { EventSimulator } from './components/EventSimulator';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CartItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Cart state with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('felix_gastro_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedToastMessage, setAddedToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('felix_gastro_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      // If item with same ID exists, increase quantity
      const existingIdx = prev.findIndex((item) => item.id === newItem.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });

    // Show temporary toast notification
    setAddedToastMessage(`"${newItem.title}" adicionado ao pedido!`);
    setTimeout(() => {
      setAddedToastMessage(null);
    }, 3500);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenSimulator = () => {
    const el = document.getElementById('simulador-eventos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-[#f4ede2] bg-grain relative selection:bg-[#e0632c] selection:text-[#14110d]">
      
      {/* Toast Notification */}
      {addedToastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#1c1712] border-2 border-[#e0632c] text-[#f4ede2] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#e0632c]" />
          <span className="font-display text-xs uppercase tracking-wider font-semibold">
            {addedToastMessage}
          </span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-display text-[#f0a066] underline hover:text-white"
          >
            Ver Carrinho
          </button>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSimulator={handleOpenSimulator}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenSimulator={handleOpenSimulator} />

        {/* Kits de Marmitas (Principal) */}
        <MarmitasSection onAddToCart={handleAddToCart} />

        {/* Cardápio do Dia (Avulso / iFood) */}
        <WeeklyMenuSection />

        {/* Montador de Marmita Personalizado */}
        <CustomMarmitaBuilder onAddToCart={handleAddToCart} />

        {/* Eventos: Buffet & Cozinheira no Local */}
        <BuffetSection onSelectPackageForSimulation={handleOpenSimulator} />

        {/* Simulador / Montador de Cardápio de Eventos */}
        <EventSimulator 
          onAddToCart={handleAddToCart} 
        />

        {/* Sobre a Felix Gastro / 15+ Anos de Tradição */}
        <AboutSection />

        {/* Como Funciona (4 Passos) */}
        <HowItWorks />

        {/* Perguntas Frequentes (11 perguntas oficiais) */}
        <FaqSection />
      </main>

      {/* Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Quick Action Buttons */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
