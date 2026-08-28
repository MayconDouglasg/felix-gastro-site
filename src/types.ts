export type City = 'Juazeiro do Norte' | 'Crato' | 'Barbalha';

export type KitMarmitaType = 'kit_5' | 'kit_10' | 'kit_15' | 'kit_20' | 'custom_kit';

export interface MarmitaItem {
  id: string;
  name: string;
  category: 'tradicional' | 'fit' | 'especial' | 'massa';
  badge?: string;
  description: string;
  ingredients: string[];
  image: string;
  unitPrice?: number;
}

export interface CustomMarmitaSelection {
  kitQuantity: number; // 5, 10, 15, 20
  protein: string;
  proteinGrams: number; // 150 (Padrão), 200 (+ Adicional), 300 (+ Adicional)
  baseCarb: string;
  sides: string[]; // max 2
  salad: string; // 1 or 'Sem salada'
  pastaDetails?: {
    saborType: string;
  };
  observations?: string;
}

export interface SalgadoItem {
  id: string;
  name: string;
  description: string;
  category: 'frito' | 'forno' | 'especial';
  badge?: string;
  image?: string;
}

export interface SalgadosSelection {
  centosCount: number; // 1 to 5 centos
  prepType: 'frito' | 'congelado';
  selectedSalgados?: string[];
  observations?: string;
}

export interface DayMenu {
  day: string;
  dayShort: string;
  title: string;
  chefSpecial: string;
  description: string;
  includes: string[];
  badge?: string;
  price?: number;
}

export type BuffetModality = 'buffet_completo' | 'cozinheira_local';
export type IngredientProvider = 'cliente' | 'felix';

export interface BuffetPackage {
  id: string;
  name: string;
  modality: BuffetModality;
  minGuests: number;
  maxGuests: number;
  basePricePerPerson?: number;
  tierSubtitle: string;
  idealFor: string;
  badge?: string;
  isPopular?: boolean;
  proteinsCount: number;
  sidesCount: number;
  features: string[];
  availableProteins: string[];
  availableSides: string[];
  includedItems: string[];
}

export interface BuffetAddon {
  id: string;
  name: string;
  description: string;
  priceType?: 'per_person' | 'fixed';
  price?: number;
  pricePerUnit?: number;
  unitLabel: string;
  iconName?: string;
}

export interface EventSimulationState {
  modality: BuffetModality;
  ingredientProvider?: IngredientProvider;
  guestsCount: number; // min 10
  eventType: string;
  city: City;
  eventDate: string;
  eventTime: string;
  selectedProteins: string[];
  selectedSides: string[];
  selectedSalads: string[];
  selectedPastas: string[];
  salgadosCentos: number; // 0, 1, 2, 3, 4, 5
  clientName: string;
  clientPhone: string;
  specialRequests: string;
}

export interface CartItem {
  id: string;
  type: 'marmita_kit' | 'custom_marmita' | 'prato_do_dia' | 'salgados' | 'buffet_budget';
  title: string;
  subtitle: string;
  details: string[];
  quantity: number;
  unitPrice: number;
  image?: string;
  customData?: CustomMarmitaSelection;
  salgadosData?: SalgadosSelection;
  buffetData?: EventSimulationState;
  observation?: string;
}

export interface CustomerCheckoutInfo {
  name: string;
  phone: string;
  city: City;
  address: string;
  neighborhood: string;
  deliveryDate?: string;
  deliveryTime?: string;
  paymentMethod: 'pix' | 'cartao_credito' | 'cartao_debito' | 'dinheiro';
  needChangeFor?: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: City;
  avatar: string;
  rating: number;
  comment: string;
  serviceType: 'Kit de Marmitas' | 'Salgados para Festa' | 'Bufê Completo' | 'Cozinheira no Local';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'marmitas' | 'salgados' | 'buffet' | 'pagamentos';
}
