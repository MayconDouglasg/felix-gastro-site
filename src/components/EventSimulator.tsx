import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Plus, 
  Minus, 
  Send,
  ChefHat,
  Users,
  Calendar,
  MapPin,
  Clock,
  PartyPopper,
  AlertCircle
} from 'lucide-react';
import { BUFFET_MENU_OPTIONS, WHATSAPP_PRIMARY } from '../data/menuData';
import { City, BuffetModality, IngredientProvider } from '../types';

interface EventSimulatorProps {
  initialPackageId?: string;
  onAddToCart?: (item: any) => void;
}

export const EventSimulator: React.FC<EventSimulatorProps> = () => {
  const [guestsCount, setGuestsCount] = useState<number>(30);
  const [eventType, setEventType] = useState<string>('Almoço de Família');
  const [city, setCity] = useState<City>('Juazeiro do Norte');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('12:00');
  const [modality, setModality] = useState<BuffetModality>('cozinheira_local');
  const [ingredientProvider, setIngredientProvider] = useState<IngredientProvider>('felix');

  // Selections
  const [selectedProteins, setSelectedProteins] = useState<string[]>([
    'Filé bovino ao molho madeira',
    'Frango ao molho de queijo'
  ]);

  const [selectedAcompanhamentos, setSelectedAcompanhamentos] = useState<string[]>([
    'Arroz branco tradicional',
    'Batata gratinada',
    'Farofa especial com bacon e banana'
  ]);

  const [selectedSaladas, setSelectedSaladas] = useState<string[]>([
    'Salada tropical com folhas verdes e frutas'
  ]);

  const [selectedMassas, setSelectedMassas] = useState<string[]>([
    'Penne ao molho de queijos'
  ]);

  // Centos de salgados: 0 a 5
  const [salgadosCentos, setSalgadosCentos] = useState<number>(0);

  // Client info
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleGuestsChange = (count: number) => {
    const val = Math.max(10, Math.min(250, count));
    setGuestsCount(val);
  };

  const toggleSelection = (item: string, currentList: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentList.includes(item)) {
      if (currentList.length > 1) {
        setList(currentList.filter((x) => x !== item));
      }
    } else {
      setList([...currentList, item]);
    }
  };

  const generateWhatsAppMessage = () => {
    const modalityLabel = modality === 'cozinheira_local' 
      ? 'Cozinheira no local' 
      : 'Buffet para eventos';

    const ingredientLabel = modality === 'cozinheira_local'
      ? ingredientProvider === 'felix'
        ? 'Gostaria que a Felix providenciasse'
        : 'Cliente compra os ingredientes (com a lista da Felix)'
      : 'Incluso no buffet';

    const salgadosText = salgadosCentos > 0 
      ? `${salgadosCentos} cento(s) (${salgadosCentos * 100} unidades)`
      : 'Nenhum adicional';

    return `Olá, Felix Gastro. Montei uma solicitação de orçamento pelo site:

🎪 *Modalidade:* ${modalityLabel}
🎉 *Evento:* ${eventType}
📍 *Cidade:* ${city}
👥 *Convidados:* ${guestsCount} pessoas
📅 *Data:* ${eventDate || 'A combinar'} às ${eventTime}

🥩 *Proteínas:* ${selectedProteins.join(', ')}
🍚 *Acompanhamentos:* ${selectedAcompanhamentos.join(', ')}
🥗 *Saladas:* ${selectedSaladas.join(', ')}
🍝 *Massas:* ${selectedMassas.join(', ')}
🥟 *Salgados Adicionais:* ${salgadosText}
🛒 *Ingredientes:* ${ingredientLabel}
${specialRequests ? `📝 *Observações:* ${specialRequests}\n` : ''}${clientName ? `👤 *Responsável:* ${clientName}\n` : ''}${clientPhone ? `📱 *WhatsApp:* ${clientPhone}\n` : ''}
Gostaria de receber o orçamento personalizado!`;
  };

  return (
    <section id="simulador-eventos" className="py-20 bg-[#161210] border-t border-[rgba(244,237,226,0.10)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1712] border border-[#e0632c]/30 text-[#f0a066] mb-3">
            <Sparkles className="w-4 h-4 text-[#e0632c]" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              Planejamento Interativo
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#f4ede2] uppercase">
            Monte o Cardápio do seu Evento
          </h2>
          <p className="text-[#b3a795] text-base mt-2 font-light">
            Selecione a modalidade, convidados, pratos e adicionais para receber uma proposta personalizada sem compromisso pelo WhatsApp.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-[#1c1712] border border-[rgba(244,237,226,0.12)] p-6 sm:p-8 rounded-3xl shadow-2xl">
            
            {/* 1. Informações do Evento */}
            <div>
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">1</span>
                Informações do Evento
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs text-[#b3a795] block mb-1.5 font-display uppercase tracking-wider">
                    Tipo de Evento:
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  >
                    <option value="Almoço de Família">Almoço de Família / Sítio</option>
                    <option value="Aniversário">Festa de Aniversário</option>
                    <option value="Confraternização">Confraternização / Empresa</option>
                    <option value="Noivado ou Batizado">Noivado / Batizado</option>
                    <option value="Churrasco com Acompanhamentos">Churrasco Especial</option>
                    <option value="Outro Evento">Outro Momento Especial</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#b3a795] block mb-1.5 font-display uppercase tracking-wider">
                    Cidade no Cariri:
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value as City)}
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  >
                    <option value="Juazeiro do Norte">Juazeiro do Norte</option>
                    <option value="Crato">Crato</option>
                    <option value="Barbalha">Barbalha</option>
                  </select>
                </div>
              </div>

              {/* Guest counter */}
              <div className="p-4 rounded-2xl bg-[#161210] border border-[rgba(244,237,226,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-[#f4ede2] font-semibold block">
                    Número de Convidados (Mínimo 10 pessoas)
                  </span>
                  <span className="text-[11px] text-[#7d7263] font-light">
                    Ajuste a quantidade estimada para o cálculo de porções
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(guestsCount - 5)}
                    className="w-9 h-9 rounded-xl bg-[#1c1712] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] hover:border-[#e0632c] flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-display font-bold text-xl text-[#f0a066] min-w-[50px] text-center">
                    {guestsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(guestsCount + 5)}
                    className="w-9 h-9 rounded-xl bg-[#1c1712] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] hover:border-[#e0632c] flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-xs text-[#b3a795] block mb-1.5 font-display uppercase tracking-wider">
                    Data Prevista:
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#b3a795] block mb-1.5 font-display uppercase tracking-wider">
                    Horário de Início:
                  </label>
                  <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. Modalidade */}
            <div>
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">2</span>
                Modalidade de Atendimento
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setModality('cozinheira_local')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    modality === 'cozinheira_local'
                      ? 'bg-[#161210] border-[#e0632c] ring-1 ring-[#e0632c]'
                      : 'bg-[#161210]/60 border-[rgba(244,237,226,0.10)] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-sm text-[#f4ede2] uppercase">
                      Cozinheira no Local
                    </span>
                    {modality === 'cozinheira_local' && <Check className="w-4 h-4 text-[#e0632c]" />}
                  </div>
                  <p className="text-[11px] text-[#b3a795] font-light leading-snug">
                    Cozinheira vai até seu sítio/residência e prepara tudo na sua cozinha.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('buffet_completo')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    modality === 'buffet_completo'
                      ? 'bg-[#161210] border-[#e0632c] ring-1 ring-[#e0632c]'
                      : 'bg-[#161210]/60 border-[rgba(244,237,226,0.10)] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-sm text-[#f4ede2] uppercase">
                      Buffet Completo
                    </span>
                    {modality === 'buffet_completo' && <Check className="w-4 h-4 text-[#e0632c]" />}
                  </div>
                  <p className="text-[11px] text-[#b3a795] font-light leading-snug">
                    A Felix fornece a alimentação pronta, travessas e equipe para servir.
                  </p>
                </button>
              </div>

              {/* Sub-choice if Cozinheira: Quem fornece ingredientes? */}
              {modality === 'cozinheira_local' && (
                <div className="p-4 rounded-2xl bg-[#161210] border border-[#e0632c]/30 space-y-2.5 animate-in zoom-in-95 duration-200">
                  <span className="text-xs font-display uppercase tracking-wider text-[#f0a066] font-semibold block">
                    Quem fornece os ingredientes?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIngredientProvider('felix')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        ingredientProvider === 'felix'
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold'
                          : 'bg-[#1c1712]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795]'
                      }`}
                    >
                      <span className="block text-[#f4ede2]">Felix Gastro providencia</span>
                      <span className="text-[10px] text-[#7d7263] block">Insumos inclusos no orçamento</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIngredientProvider('cliente')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        ingredientProvider === 'cliente'
                          ? 'bg-[#1c1712] border-[#e0632c] text-[#f4ede2] font-semibold'
                          : 'bg-[#1c1712]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795]'
                      }`}
                    >
                      <span className="block text-[#f4ede2]">Cliente compra os ingredientes</span>
                      <span className="text-[10px] text-[#7d7263] block">Felix envia a lista exata de compras</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Proteínas */}
            <div>
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">3</span>
                Proteínas
              </h3>
              <p className="text-xs text-[#b3a795] font-light mb-3">
                Selecione as opções de carnes, aves e frutos do mar para o cardápio:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  ...BUFFET_MENU_OPTIONS.proteins.carnes,
                  ...BUFFET_MENU_OPTIONS.proteins.frango,
                  ...BUFFET_MENU_OPTIONS.proteins.peixesEFrutosDoMar
                ].map((prot, i) => {
                  const isSel = selectedProteins.includes(prot);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleSelection(prot, selectedProteins, setSelectedProteins)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        isSel
                          ? 'bg-[#161210] border-[#e0632c] text-[#f4ede2] font-medium'
                          : 'bg-[#161210]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white'
                      }`}
                    >
                      <span>{prot}</span>
                      {isSel && <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Acompanhamentos */}
            <div>
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">4</span>
                Acompanhamentos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BUFFET_MENU_OPTIONS.acompanhamentos.map((acomp, i) => {
                  const isSel = selectedAcompanhamentos.includes(acomp);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleSelection(acomp, selectedAcompanhamentos, setSelectedAcompanhamentos)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        isSel
                          ? 'bg-[#161210] border-[#e0632c] text-[#f4ede2] font-medium'
                          : 'bg-[#161210]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white'
                      }`}
                    >
                      <span>{acomp}</span>
                      {isSel && <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Saladas & 6. Massas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">5</span>
                  Saladas
                </h3>
                <div className="space-y-2">
                  {BUFFET_MENU_OPTIONS.saladas.map((sal, i) => {
                    const isSel = selectedSaladas.includes(sal);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleSelection(sal, selectedSaladas, setSelectedSaladas)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          isSel
                            ? 'bg-[#161210] border-[#e0632c] text-[#f4ede2] font-medium'
                            : 'bg-[#161210]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white'
                        }`}
                      >
                        <span>{sal}</span>
                        {isSel && <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">6</span>
                  Massas
                </h3>
                <div className="space-y-2">
                  {BUFFET_MENU_OPTIONS.massas.map((massa, i) => {
                    const isSel = selectedMassas.includes(massa);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleSelection(massa, selectedMassas, setSelectedMassas)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          isSel
                            ? 'bg-[#161210] border-[#e0632c] text-[#f4ede2] font-medium'
                            : 'bg-[#161210]/50 border-[rgba(244,237,226,0.08)] text-[#b3a795] hover:text-white'
                        }`}
                      >
                        <span>{massa}</span>
                        {isSel && <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 7. Salgados Adicionais */}
            <div>
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">7</span>
                Salgados Adicionais (Centos)
              </h3>
              <p className="text-xs text-[#b3a795] font-light mb-3">
                Deseja incluir centos de salgados artesanais para a entrada da sua festa?
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[0, 1, 2, 3, 4, 5].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSalgadosCentos(c)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      salgadosCentos === c
                        ? 'bg-[#e0632c] text-[#14110d] border-[#e0632c] font-bold shadow-md'
                        : 'bg-[#161210] border-[rgba(244,237,226,0.10)] text-[#b3a795] hover:text-white'
                    }`}
                  >
                    <span className="font-display text-sm block">
                      {c === 0 ? 'Nenhum' : `${c} Cento${c > 1 ? 's' : ''}`}
                    </span>
                    {c > 0 && (
                      <span className="text-[10px] block opacity-80">
                        {c * 100} un
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 8. Observações & 9. Dados do Cliente */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display font-bold text-base uppercase text-[#e0632c] tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#e0632c]/20 flex items-center justify-center text-xs">8</span>
                Dados para Contato & Observações
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#b3a795] block mb-1 font-display uppercase tracking-wider">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: João da Silva"
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#b3a795] block mb-1 font-display uppercase tracking-wider">
                    Seu WhatsApp:
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Ex: (88) 99999-9999"
                    className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl px-3 py-2.5 text-xs focus:border-[#e0632c] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#b3a795] block mb-1 font-display uppercase tracking-wider">
                  Observações ou Pedidos Especiais:
                </label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Conte-nos detalhes do local (chácara, sítio, casa), estrutura de fogão ou preferências do evento..."
                  rows={2}
                  className="w-full bg-[#161210] border border-[rgba(244,237,226,0.15)] text-[#f4ede2] rounded-xl p-3 text-xs focus:border-[#e0632c] outline-none resize-none"
                />
              </div>
            </div>

          </div>

          {/* Lateral Summary Column (4 cols) */}
          <div className="lg:col-span-4 bg-[#1c1712] border border-[rgba(244,237,226,0.15)] rounded-3xl p-6 sm:p-7 shadow-2xl sticky top-24 space-y-5">
            <h3 className="font-display font-bold text-lg uppercase text-[#f4ede2] border-b border-[rgba(244,237,226,0.10)] pb-3 flex items-center justify-between">
              <span>Resumo do Evento</span>
              <span className="text-xs font-semibold text-[#f0a066]">
                {guestsCount} pessoas
              </span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Modalidade:</span>
                <span className="font-semibold text-[#f4ede2] text-right">
                  {modality === 'cozinheira_local' ? 'Cozinheira no Local' : 'Buffet Completo'}
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Evento:</span>
                <span className="font-semibold text-[#f4ede2] text-right">
                  {eventType} ({city})
                </span>
              </div>

              {modality === 'cozinheira_local' && (
                <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                  <span className="text-[#b3a795]">Ingredientes:</span>
                  <span className="font-semibold text-[#f0a066] text-right">
                    {ingredientProvider === 'felix' ? 'Felix Providencia' : 'Cliente Compra'}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Proteínas:</span>
                <span className="font-semibold text-[#f4ede2] text-right max-w-[180px]">
                  {selectedProteins.join(', ')}
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                <span className="text-[#b3a795]">Acompanhamentos:</span>
                <span className="font-semibold text-[#f4ede2] text-right max-w-[180px]">
                  {selectedAcompanhamentos.join(', ')}
                </span>
              </div>

              {salgadosCentos > 0 && (
                <div className="flex items-start justify-between border-b border-[rgba(244,237,226,0.06)] pb-2">
                  <span className="text-[#b3a795]">Salgados:</span>
                  <span className="font-semibold text-[#f0a066] text-right">
                    {salgadosCentos} Cento(s) ({salgadosCentos * 100} un)
                  </span>
                </div>
              )}
            </div>

            {/* Total Section: Orçamento Personalizado */}
            <div className="pt-2">
              <span className="text-xs text-[#7d7263] uppercase tracking-wider block">
                Valor do Serviço
              </span>
              <div className="font-display font-bold text-2xl text-[#f0a066] mt-0.5">
                Orçamento Personalizado
              </div>
              <span className="text-[11px] text-[#b3a795] block mt-1 font-light leading-tight">
                Cotação detalhada enviada de acordo com o cardápio e estrutura do local.
              </span>
            </div>

            {/* CTA Direct to WhatsApp */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#e0632c] text-[#14110d] font-display text-xs uppercase tracking-wider font-bold hover:bg-[#f0a066] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e0632c]/20 text-center"
              >
                <Send className="w-4 h-4" />
                Enviar Cardápio para Orçamento
              </a>
            </div>

            {/* Disclaimers */}
            <div className="space-y-2 pt-3 border-t border-[rgba(244,237,226,0.06)] text-[10px] text-[#7d7263] leading-tight font-light">
              <div className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#e0632c] shrink-0 mt-0.5" />
                <span>O envio do cardápio representa uma solicitação de orçamento. A reserva da data ocorre somente após confirmação pelo WhatsApp.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#e0632c] shrink-0 mt-0.5" />
                <span>Para eventos, poderá ser solicitado um valor inicial para compra de materiais e reserva da data. As condições são informadas no orçamento.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
