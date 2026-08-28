import { 
  MarmitaItem, 
  SalgadoItem,
  BuffetPackage, 
  BuffetAddon, 
  DayMenu, 
  Testimonial, 
  FaqItem 
} from '../types';

export const WHATSAPP_PRIMARY = '5588981034493';
export const WHATSAPP_SECONDARY = '5587981556680';
export const INSTAGRAM_HANDLE = '@felix.gastro';
export const IFOOD_URL = 'https://www.ifood.com.br';

// Price Constants
export const MARMITA_BASE_PRICE = 16.00;
export const MARMITA_AVULSA_PRICE = 18.00; // Valor da marmita avulsa (conveniência imediata)
export const MIN_MARMITAS_KIT = 5;

export const SALGADOS_1_TYPE_PRICE = 60.00;
export const SALGADOS_2_TYPES_PRICE = 70.00;

// Progressive Kits Official Structure
export const MARMITA_KITS_PRESETS = [
  {
    id: 'kit_5',
    units: 5,
    name: 'Kit 5 Marmitas',
    subtitle: 'Ideal para começar.',
    totalPrice: 80.00,
    pricePerUnit: 16.00,
    originalTotal: 80.00,
    discountAmount: 0,
    badge: 'Mais Popular',
    description: 'Praticidade para a semana com comida caseira de verdade.'
  },
  {
    id: 'kit_10',
    units: 10,
    name: 'Kit 10 Marmitas',
    subtitle: 'Mais praticidade para sua rotina.',
    totalPrice: 150.00,
    pricePerUnit: 15.00,
    originalTotal: 160.00,
    discountAmount: 10.00,
    badge: 'Economize R$ 10,00',
    description: 'Mais refeições planejadas com desconto por marmita.'
  },
  {
    id: 'kit_15',
    units: 15,
    name: 'Kit 15 Marmitas',
    subtitle: 'Mais refeições e mais economia.',
    totalPrice: 215.00,
    pricePerUnit: 14.33,
    originalTotal: 240.00,
    discountAmount: 25.00,
    badge: 'Economize R$ 25,00',
    description: 'Perfeito para o casal ou para estocar refeições saborosas.'
  },
  {
    id: 'kit_20',
    units: 20,
    name: 'Kit 20 Marmitas',
    subtitle: 'Melhor valor por unidade.',
    totalPrice: 270.00,
    pricePerUnit: 13.50,
    originalTotal: 320.00,
    discountAmount: 50.00,
    badge: 'Super Desconto (R$ 50 OFF)',
    description: 'O melhor custo-benefício por refeição (R$ 13,50/un).'
  }
];

export function getMarmitaUnitPrice(units: number): number {
  if (units >= 20) return 13.50;
  if (units >= 15) return 14.33;
  if (units >= 10) return 15.00;
  return 16.00;
}

// Ready combinations for Kits & Cardápio (Macarronada como prato completo e independente)
export const MARMITAS_DATA: MarmitaItem[] = [
  {
    id: 'tradicional_a',
    name: 'Tradicional A: Filé de Frango & Acompanhamentos',
    category: 'tradicional',
    badge: 'Sabor da Casa',
    description: 'Arroz branco soltinho temperado ao alho, feijão carioquinha em caldo bem encorpado, filé de frango suculento e salada fresca ou legumes cozidos temperados. Uma refeição completa com sabor de casa todos os dias.',
    ingredients: [
      'Arroz branco soltinho ao alho',
      'Feijão carioquinha em caldo bem temperado',
      'Filé de frango (acebolado, frito ou grelhado — escolha nas observações)',
      'Salada fresca ou legumes cozidos temperados'
    ],
    image: '/src/assets/images/marmita_caseira_1787833663915.jpg',
    unitPrice: 16.00
  },
  {
    id: 'tradicional_b',
    name: 'Tradicional B: Bisteca Acebolada & Acompanhamentos',
    category: 'tradicional',
    badge: 'Clássico Caseiro',
    description: 'Arroz branco, feijão em caldo encorpado, bisteca suína temperada e dourada na chapa com cebola caramelizada e salada verde ou legumes cozidos temperados. Aquele sabor de almoço em casa de verdade.',
    ingredients: [
      'Arroz branco soltinho',
      'Feijão em caldo bem temperado',
      'Bisteca suína temperada e acebolada na chapa',
      'Salada verde ou legumes cozidos temperados'
    ],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    unitPrice: 16.00
  },
  {
    id: 'fit_a',
    name: 'Fit A: Frango Grelhado & Legumes',
    category: 'fit',
    badge: 'Leve & Equilibrado',
    description: 'Filé de frango grelhado no azeite com ervas frescas, arroz integral soltinho, feijão em caldo e mix caprichado de legumes cozidos no vapor. Ideal para quem busca uma alimentação mais leve sem abrir mão do sabor.',
    ingredients: [
      'Filé de frango grelhado no azeite e ervas',
      'Arroz integral soltinho',
      'Feijão em caldo',
      'Mix de legumes cozidos no vapor (cenoura, abobrinha, brócolis)'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    unitPrice: 17.00
  },
  {
    id: 'fit_b',
    name: 'Fit B: Patinho Grelhado & Batata Doce',
    category: 'fit',
    badge: 'Proteína Nobre',
    description: 'Filé de patinho bovino grelhado suculento, batata doce assada naturalmente, feijão em caldo e legumes cozidos ou salada colorida. Combinação equilibrada e nutritiva com corte nobre de carne.',
    ingredients: [
      'Filé de patinho bovino grelhado',
      'Batata doce cozida ou assada',
      'Feijão em caldo',
      'Legumes cozidos temperados ou salada colorida'
    ],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    unitPrice: 18.00
  },
  {
    id: 'especial_sertao',
    name: 'Especial: Baião de Dois com Carne de Sol',
    category: 'especial',
    badge: 'Prato Regional',
    description: 'Baião de dois com feijão de corda, queijo tradicional ou cremoso, macaxeira frita na manteiga de garrafa e carne de sol dourada (ou outro tipo de carne). Acompanha salada verde. Um prato completo de tradição nordestina.',
    ingredients: [
      'Baião de dois com feijão de corda',
      'Queijo coalho tostado ou queijo cremoso (à escolha)',
      'Macaxeira frita na manteiga de garrafa',
      'Carne de sol dourada (ou outro corte de carne — informe nas observações)',
      'Salada verde'
    ],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    unitPrice: 19.00
  },
  {
    id: 'parmegiana',
    name: 'Parmegiana de Frango & Purê',
    category: 'especial',
    badge: 'Especial da Casa',
    description: 'Filé de frango empanado, frito douradinho e coberto com molho de tomate caseiro e queijo derretido gratinado. Acompanha arroz branco soltinho e purê de batata cremoso. Um prato que agrada toda a família.',
    ingredients: [
      'Filé de frango empanado e frito crocante',
      'Molho de tomate caseiro encorpado',
      'Queijo derretido gratinado',
      'Arroz branco soltinho',
      'Purê de batata cremoso'
    ],
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
    unitPrice: 17.00
  },
  {
    id: 'macarronada_artesanal',
    name: 'Macarronada Artesanal da Casa',
    category: 'massa',
    badge: 'Prato de Massa',
    description: 'Prato completo de massa: espaguete, penne ou parafuso com molho caseiro especial de frango desfiado temperado ou carne moída (escolha nas observações), queijo ralado e salada fresca. Não é adicional — é uma refeição completa por si só.',
    ingredients: [
      'Massa à escolha (espaguete, penne ou parafuso)',
      'Molho de frango desfiado temperado ou carne moída (informe a preferência)',
      'Queijo ralado e tempero verde',
      'Salada fresca do dia'
    ],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
    unitPrice: 16.00
  }
];

export const SALGADOS_LIST: SalgadoItem[] = [
  {
    id: 'coxinha_frango',
    name: 'Coxinha de Frango com Requeijão',
    description: 'Massa artesanal crocante por fora e macia por dentro, recheada com frango desfiado temperado e requeijão cremoso.',
    category: 'frito',
    badge: 'Mais Pedida',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bolinha_queijo',
    name: 'Bolinha de Queijo Tradicional',
    description: 'Massa sequinha recheada com queijo derretido de primeira qualidade.',
    category: 'frito',
    badge: 'Clássico de Festa',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'risole_carne',
    name: 'Risole de Carne Moída Especial',
    description: 'Recheio suculento de carne moída temperada com ervas frescas.',
    category: 'frito',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kibe_recheado',
    name: 'Kibe Recheado Tradicional',
    description: 'Trigo para kibe selecionado, carne bovina moída com toque refrescante de hortelã.',
    category: 'frito',
    badge: 'Tempero Especial',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'enroladinho_salsicha',
    name: 'Enroladinho de Salsicha Especial',
    description: 'Salsicha de qualidade envolvida em massa leve e crocante.',
    category: 'frito',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'empadinha_frango',
    name: 'Empadinha de Frango de Forno',
    description: 'Massa que derrete na boca com recheio cremoso de frango desfiado.',
    category: 'forno',
    badge: 'Assado no Forno',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pastelzinho_forno',
    name: 'Pastelzinho de Forno de Carne',
    description: 'Opção assada crocante recheada com carne moída bem temperada.',
    category: 'forno',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'croquete_carne_seca',
    name: 'Croquete de Carne Seca com Macaxeira',
    description: 'Combinação tipicamente regional de macaxeira com carne de sol desfiada.',
    category: 'especial',
    badge: 'Toque Regional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  }
];

export const WEEKLY_MENU: DayMenu[] = [
  {
    day: 'Segunda-feira',
    dayShort: 'SEG',
    title: 'Linguiça Acebolada & Acompanhamentos',
    chefSpecial: 'Linguiça suculenta dourada na chapa com cebola caramelizada e tempero da casa.',
    description: 'Arroz branco soltinho, feijão em caldo bem temperado, acompanhamento do dia e salada fresca. Segunda-feira com aquele sabor caseiro de verdade.',
    includes: ['Arroz branco soltinho', 'Feijão em caldo temperado', 'Salada fresca do dia', 'Ou Macarronada da Casa (consulte)'],
    badge: 'Segunda com Sabor',
    price: 18.00
  },
  {
    day: 'Terça-feira',
    dayShort: 'TER',
    title: 'Picadinho de Carne & Acompanhamentos',
    chefSpecial: 'Picadinho de carne bovina macio e suculento cozido lentamente com molho caseiro especial.',
    description: 'Arroz branco, feijão em caldo, legumes cozidos temperados e salada fresca. Ou peça a Macarronada da Casa no lugar.',
    includes: ['Arroz branco soltinho', 'Feijão em caldo temperado', 'Legumes cozidos temperados', 'Ou Macarronada da Casa (consulte)'],
    badge: 'Tempero Caseiro',
    price: 18.00
  },
  {
    day: 'Quarta-feira',
    dayShort: 'QUA',
    title: 'Bisteca Frita & Acompanhamentos',
    chefSpecial: 'Bisteca suína sequinha e dourada com tempero caseiro tradicional da Felix Gastro.',
    description: 'Arroz branco, feijão em caldo, salada fresca ou legumes cozidos. Macarronada disponível também — informe ao pedir.',
    includes: ['Arroz branco soltinho', 'Feijão em caldo temperado', 'Salada fresca ou legumes cozidos', 'Ou Macarronada da Casa (consulte)'],
    badge: 'Mais Pedido',
    price: 18.00
  },
  {
    day: 'Quinta-feira',
    dayShort: 'QUI',
    title: 'Bisteca ao Molho & Acompanhamentos',
    chefSpecial: 'Bisteca suína suculenta cozida lentamente com molho encorpado de tomates e ervas frescas.',
    description: 'Arroz branco, feijão em caldo, salada fresca ou legumes cozidos temperados. Macarronada disponível também.',
    includes: ['Arroz branco soltinho', 'Feijão em caldo temperado', 'Salada fresca ou legumes cozidos', 'Ou Macarronada da Casa (consulte)'],
    badge: 'Quinta Especial',
    price: 18.00
  },
  {
    day: 'Sexta-feira',
    dayShort: 'SEX',
    title: 'Peixe Grelhado & Acompanhamentos',
    chefSpecial: 'Filé de peixe fresco grelhado temperado com ervas, limão e azeite — leve e muito saboroso.',
    description: 'Arroz branco soltinho, feijão em caldo, legumes cozidos temperados e salada fresca. Uma sexta especial e diferente. Macarronada disponível também.',
    includes: ['Arroz branco soltinho', 'Feijão em caldo temperado', 'Legumes cozidos temperados', 'Ou Macarronada da Casa (consulte)'],
    badge: 'Sexta com Peixe',
    price: 19.00
  },
  {
    day: 'Sábado',
    dayShort: 'SÁB',
    title: 'Feijoada Completa & Especial de Sábado',
    chefSpecial: 'Feijoada tradicional saborosa e farta com acompanhamentos caprichados — aquele almoço de sábado inesquecível.',
    description: 'Feijoada completa, arroz branco, couve refogada, farofa crocante e laranja fatiada. Perfeito para o almoço do fim de semana.',
    includes: ['Feijoada completa temperada', 'Arroz branco soltinho', 'Couve refogada no alho', 'Farofa crocante amanteigada', 'Laranja fatiada'],
    badge: 'Especial de Sábado',
    price: 20.00
  }
];

export const PASTA_CUSTOMIZATION_OPTIONS = {
  saborTypes: [
    { id: 'frango_desfiado', name: 'Frango Desfiado Temperado' },
    { id: 'carne_moida', name: 'Carne Moída Especial' }
  ]
};

// Buffet Options for Event Simulator
export const BUFFET_MENU_OPTIONS = {
  proteins: {
    carnes: [
      'Filé bovino ao molho madeira',
      'Filé bovino ao molho de mostarda',
      'Filé suíno/lombo ao molho barbecue'
    ],
    frango: [
      'Frango ao molho de queijo',
      'Frango ao molho de maracujá',
      'Estrogonofe',
      'Creme de galinha'
    ],
    peixesEFrutosDoMar: [
      'Filé de peixe ao molho de camarão',
      'Salmão ao molho',
      'Camarão na moranga',
      'Camarão gratinado',
      'Camarão ao molho de batata'
    ]
  },
  acompanhamentos: [
    'Arroz branco tradicional',
    'Arroz à grega',
    'Arroz com brócolis',
    'Batata souté',
    'Batata gratinada',
    'Purê de batata',
    'Purê de abóbora',
    'Purê de mandioquinha',
    'Legumes salteados na manteiga',
    'Farofa especial com bacon e banana'
  ],
  saladas: [
    'Salada tropical com folhas verdes e frutas',
    'Salada de maionese',
    'Salpicão'
  ],
  massas: [
    'Penne ao molho branco',
    'Penne ao molho de queijos',
    'Espaguete ao molho bolonhesa',
    'Nhoque ao molho branco',
    'Lasanha de carne ou frango'
  ]
};

export const BUFFET_PACKAGES: BuffetPackage[] = [
  {
    id: 'buffet_completo',
    name: 'Serviço de Buffet para Eventos',
    modality: 'buffet_completo',
    minGuests: 10,
    maxGuests: 250,
    tierSubtitle: 'A Felix fornece toda a alimentação pronta para o seu evento',
    idealFor: 'Aniversários, casamentos, almoços de família e eventos corporativos.',
    badge: 'Alimentação Completa',
    isPopular: true,
    proteinsCount: 2,
    sidesCount: 3,
    features: [
      'Alimentos preparados e entregues prontos para servir',
      'Travessas e recipientes adequados inclusos',
      'Equipe para servir a alimentação durante o evento',
      'Adicional de centos de salgados fritos ou congelados',
      'Atenção: Não inclui garçons para bebidas nem decoração completa do evento'
    ],
    availableProteins: [
      'Filé bovino ao molho madeira',
      'Filé bovino ao molho de mostarda',
      'Frango ao molho de queijo',
      'Frango ao molho de maracujá',
      'Estrogonofe',
      'Creme de galinha',
      'Filé de peixe ao molho de camarão'
    ],
    availableSides: [
      'Arroz branco tradicional',
      'Arroz à grega',
      'Batata gratinada',
      'Legumes salteados',
      'Farofa especial com bacon e banana'
    ],
    includedItems: [
      'Alimentos preparados e temperados com sabor caseiro',
      'Travessas e montagem do serviço de alimentação',
      'Equipe para reposição e atendimento do buffet'
    ]
  },
  {
    id: 'cozinheira_local',
    name: 'Serviço de Cozinheira no Local',
    modality: 'cozinheira_local',
    minGuests: 10,
    maxGuests: 150,
    basePricePerPerson: 21.0,
    tierSubtitle: 'Cozinhamos na sua residência, sítio, chácara ou espaço de evento',
    idealFor: 'Almoços em família, aniversários íntimos e confraternizações no Cariri.',
    badge: 'A partir de R$ 21 por pessoa',
    isPopular: false,
    proteinsCount: 2,
    sidesCount: 2,
    features: [
      'Cozinheira experiente com mais de 15 anos de tradição',
      'Preparo dos pratos na cozinha do seu espaço',
      'Opção 1: Cliente compra os ingredientes (enviamos a lista exata)',
      'Opção 2: Felix Gastro providencia os ingredientes (incluso no orçamento)',
      'Montagem das travessas e cozinha entregue organizada ao final',
      '*Valor inicial de referência. O orçamento final varia conforme convidados, cardápio e estrutura.'
    ],
    availableProteins: [
      'Filé bovino ao molho madeira',
      'Frango ao molho de queijo',
      'Estrogonofe',
      'Creme de galinha',
      'Filé de peixe ao molho de camarão',
      'Carne de sol artesanal'
    ],
    availableSides: [
      'Arroz branco soltinho',
      'Arroz à grega',
      'Batata gratinada',
      'Farofa especial',
      'Salada tropical'
    ],
    includedItems: [
      'Mão de obra profissional especializada no local',
      'Lista de compras detalhada (caso o cliente compre)',
      'Preparo e cocção dos pratos na hora',
      'Limpeza das panelas utilizadas e organização da bancada'
    ]
  }
];

export const CUSTOM_BUILDER_OPTIONS = {
  quantities: [5, 10, 15, 20],
  bases: [
    { id: 'arroz_branco', name: 'Arroz Branco Soltinho ao Alho' },
    { id: 'arroz_integral', name: 'Arroz Integral (Fit)' },
    { id: 'batata_doce', name: 'Batata Doce Cozida (Fit)' },
    { id: 'macaxeira', name: 'Macaxeira Cozida Amanteigada' },
    { id: 'batata_inglesa', name: 'Batata Inglesa Cozida' },
    { id: 'baiao_dois', name: 'Baião de Dois Regional' },
    { id: 'pure_batata_base', name: 'Purê de Batata (Base do Prato)' },
    { id: 'macarronada_base', name: 'Macarronada da Casa (Prato de Massa)', isPasta: true }
  ],
  proteins: [
    { id: 'frango_grelhado', name: 'Filé de Frango Grelhado' },
    { id: 'frango_frito', name: 'Filé de Frango Frito Crocante' },
    { id: 'strogonoff', name: 'Strogonoff de Frango ou Carne' },
    { id: 'picadinho_carne', name: 'Picadinho de Carne Bovina' },
    { id: 'linguica_acebolada', name: 'Linguiça Acebolada' },
    { id: 'bisteca_frita', name: 'Bisteca Suína Dourada' },
    { id: 'bisteca_molho', name: 'Bisteca Suína ao Molho' },
    { id: 'patinho_grelhado', name: 'Filé de Patinho Grelhado ✦ Acréscimo no valor', hasExtra: true },
    { id: 'peixe_grelhado', name: 'Filé de Peixe Grelhado ✦ Acréscimo no valor', hasExtra: true },
    { id: 'carne_sol', name: 'Carne de Sol na Manteiga ✦ Acréscimo no valor', hasExtra: true }
  ],
  gramsOptions: [
    { value: 150, label: '150g (Padrão)', extraLabel: 'Padrão' },
    { value: 200, label: '200g (Reforçada)', extraLabel: '+ Adicional' },
    { value: 300, label: '300g (Foco/Pesada)', extraLabel: '+ Adicional' }
  ],
  sides: [
    { id: 'feijao_caldo', name: 'Feijão em Caldo Temperado' },
    { id: 'farofa_crocante', name: 'Farofa Crocante Amanteigada' },
    { id: 'pure_batata', name: 'Purê de Batata Cremoso' }
  ],
  salads: [
    { id: 'legumes_cozidos', name: 'Legumes Cozidos Temperados' },
    { id: 'salada_fresca', name: 'Salada Fresca do Dia' },
    { id: 'sem_salada', name: 'Sem Salada' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Clarice Alencar',
    role: 'Cliente de Kits',
    city: 'Juazeiro do Norte',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'O kit de 10 marmitas facilitou demais minha rotina de trabalho em Juazeiro. Comida saborosa, quentinha e com tempero de casa de verdade. O atendimento no WhatsApp é super rápido!',
    serviceType: 'Kit de Marmitas'
  },
  {
    id: '2',
    name: 'Dr. Roberto Vasconcelos',
    role: 'Almoço em Família no Sítio',
    city: 'Crato',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Contratamos o serviço de cozinheira para um aniversário no nosso sítio no Crato. Pratos fartos, muito bem preparados e a cozinha foi entregue impecável. Super recomendo!',
    serviceType: 'Cozinheira no Local'
  },
  {
    id: '3',
    name: 'Mariana Sampaio',
    role: 'Festa de Aniversário',
    city: 'Barbalha',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Pedimos 2 centos de salgados e o serviço para a festa da minha filha. Salgados sequinhos, quentinhos e muito recheados. Todos os convidados elogiaram!',
    serviceType: 'Salgados para Festa'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funcionam os kits de marmitas?',
    answer: 'Nossos kits são estruturados para oferecer praticidade e economia (Kits de 5, 10, 15 ou 20 marmitas). Quanto maior o kit, menor o valor por unidade. Você escolhe as combinações prontas (incluindo pratos de marmita tradicional, fit ou macarronada artesanal) ou monta seu kit personalizado pelo site e finaliza os detalhes pelo WhatsApp.',
    category: 'marmitas'
  },
  {
    question: 'Posso pedir apenas uma marmita?',
    answer: 'Sim! Para refeição individual, consulte o nosso Cardápio do Dia avulso pelo WhatsApp ou faça seu pedido através do nosso iFood.',
    category: 'marmitas'
  },
  {
    question: 'Posso montar meu próprio kit?',
    answer: 'Com certeza! No simulador "Monte seu Kit", você escolhe a quantidade de refeições, proteína, gramatura, base, acompanhamentos e salada do seu jeito.',
    category: 'marmitas'
  },
  {
    question: 'Como funciona o buffet?',
    answer: 'Na modalidade de Buffet, a Felix Gastro fornece a alimentação preparada, com travessas e equipe para servir a comida no evento. Não oferecemos garçons para bebidas nem decoração completa do evento.',
    category: 'buffet'
  },
  {
    question: 'Como funciona a cozinheira no local?',
    answer: 'Nossa cozinheira com mais de 15 anos de experiência vai até a sua residência, sítio ou espaço de festa e prepara o cardápio na hora na sua cozinha, deixando o ambiente limpo e organizado ao final.',
    category: 'buffet'
  },
  {
    question: 'Qual o mínimo de pessoas para eventos?',
    answer: 'Atendemos eventos e confraternizações a partir de 10 convidados, tanto para Buffet quanto para Cozinheira no Local.',
    category: 'buffet'
  },
  {
    question: 'Quem compra os ingredientes no serviço de cozinheira?',
    answer: 'Você escolhe: o cliente pode comprar os ingredientes (enviamos uma lista detalhada com as quantidades certas) ou a Felix Gastro providencia todos os insumos e inclui o valor no orçamento.',
    category: 'buffet'
  },
  {
    question: 'Quais cidades vocês atendem?',
    answer: 'Atendemos toda a região do Crajubar: Juazeiro do Norte, Crato e Barbalha.',
    category: 'pagamentos'
  },
  {
    question: 'Como é calculada a entrega?',
    answer: 'Entregamos em Juazeiro do Norte, Crato e Barbalha. A taxa de entrega é paga à parte pelo cliente e calculada de acordo com a sua localização informada no atendimento.',
    category: 'pagamentos'
  },
  {
    question: 'Como finalizo meu pedido?',
    answer: 'Ao selecionar seus kits ou montar o cardápio do evento no site, você clica no botão para enviar ao WhatsApp. Sua mensagem chega formatada e nossa equipe confirma disponibilidade, taxa de entrega e pagamento.',
    category: 'pagamentos'
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos Pix, Cartão de Crédito, Cartão de Débito e Dinheiro em espécie. Para eventos, poderá ser solicitado um valor inicial para compra de materiais e reserva da data, com condições informadas no orçamento.',
    category: 'pagamentos'
  }
];
