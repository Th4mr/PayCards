import { REFERRAL_ES } from '../config';

export const trustItems = [
  { icon: 'phone', text: 'Apple Pay y Google Pay, según el centro de ayuda' },
  { icon: 'card', text: 'Tarjeta virtual y tarjeta física' },
  { icon: 'coins', text: 'USDT, USDC y otros activos listados' },
  { icon: 'globe', text: 'Donde se aceptan las grandes redes de tarjetas' },
];

export const features = [
  {
    icon: 'globe',
    title: 'Pagar en línea y en tienda',
    text: 'Gastar un saldo cripto donde pasa la red de la tarjeta, sin enviarlo antes a un banco.',
  },
  {
    icon: 'phone',
    title: 'Apple Pay y Google Pay',
    text: 'La página de pagos dice que una tarjeta virtual puede vincularse a Apple Pay, Google Pay o PayPal. El monedero de tu país puede rechazarla igual.',
  },
  {
    icon: 'coins',
    title: 'Recargar con stablecoins',
    text: 'Deposita USDT, USDC u otro activo que liste la app. Un stablecoin se mueve menos que el BTC entre el depósito y el pago.',
  },
  {
    icon: 'bolt',
    title: 'Una tarjeta virtual después del KYC',
    text: 'Tras la verificación puedes emitir una tarjeta virtual para pagar en línea. La tarjeta física es un pedido aparte de 100 USD.',
  },
  {
    icon: 'cash',
    title: 'Efectivo en cajero, solo con la física',
    text: 'La página del cajero habla de la tarjeta física, en cajeros que aceptan las grandes redes. La virtual no retira efectivo.',
  },
  {
    icon: 'shield',
    title: 'El saldo lo custodia RedotPay',
    text: 'RedotPay guarda los activos. Deja en la app solo lo que piensas gastar y activa las opciones de seguridad.',
  },
];

export const steps = [
  { icon: 'download', title: 'Abrir la invitación', text: 'El botón lleva a la página de invitación en español de RedotPay y, desde ahí, a la app oficial de iOS o Android.' },
  { icon: 'user', title: 'Crear la cuenta', text: 'Regístrate con un correo o un teléfono. Si la pantalla lo pide, escribe el código de referido antes de que exista la cuenta.' },
  { icon: 'id', title: 'Verificar tu identidad', text: 'Envía el documento que pide la app y un selfie. El centro de ayuda no publica un plazo único para cada país.' },
  { icon: 'wallet', title: 'Recargar y pagar', text: 'Deposita en la red que muestra la app, emite la tarjeta y paga en línea o con el teléfono.' },
];

export const useCases = [
  { icon: 'card', title: 'Qué es la tarjeta', text: 'Virtual o física, programas Visa y la cifra de 130 millones de comercios.', href: '/es/articles/opiniones-redotpay' },
  { icon: 'coins', title: 'Las comisiones', text: 'Emisión, cajero, cambio y las líneas que RedotPay no publica.', href: '/es/articles/comisiones-redotpay' },
  { icon: 'globe', title: 'Los países', text: 'KYC, acceso a la app y quién puede recibir una tarjeta. Cuba, Nicaragua y Venezuela están en las listas.', href: '/es/articles/paises-redotpay' },
  { icon: 'cash', title: 'Retiro en cajero', text: 'Comisiones en efectivo en USD y HKD, y por qué la virtual no retira.', href: '/es/articles/cajero-redotpay' },
];

export const homeFaq = [
  {
    q: '¿PayCards es el sitio oficial de RedotPay?',
    a: 'No. PayCards es una guía independiente y no forma parte de RedotPay. Algunos enlaces son de referido. Podemos cobrar una comisión si te registras, sin coste extra para ti. El registro se hace siempre en RedotPay.',
  },
  {
    q: '¿La tarjeta RedotPay está disponible en mi país?',
    a: 'Los residentes de Estados Unidos no pueden recibir tarjeta virtual ni física, quien está allí no puede abrir la app y los ciudadanos estadounidenses no terminan el KYC. Son tres páginas de ayuda, revisadas el 24 de octubre de 2026. Esta guía es para lectores en español en Latinoamérica y España. Estas páginas no se dirigen a Estados Unidos, excluido por RedotPay. Cuba, Nicaragua y Venezuela aparecen en las listas de nacionalidad, localización, emisión y envío. España, México, Argentina, Colombia, Perú, Chile, Ecuador, Guatemala, Bolivia, República Dominicana, Honduras, Paraguay, El Salvador, Costa Rica, Panamá, Uruguay y Guinea Ecuatorial no están nombrados. Que un país no aparezca no es una aceptación. Consulta la guía de países.',
  },
  {
    q: '¿Cuál es el código de referido RedotPay?',
    a: `El código en este sitio es ${REFERRAL_ES.code}. En la pantalla de registro, toca Referral Code (Optional) e introdúcelo antes de que exista la cuenta. RedotPay dice que un código no se añade después. La recompensa de 5 USD es un crédito de gasto para cuentas nuevas. El código no la desbloquea y no paga las comisiones de la tarjeta.`,
  },
  {
    q: '¿Hay que verificar la identidad?',
    a: 'Sí. Emitir una tarjeta exige una verificación de identidad. Las páginas consultadas no publican un plazo único ni una lista de documentos válida para cada país. La app muestra los documentos que acepta.',
  },
  {
    q: '¿Qué criptomonedas puedo depositar?',
    a: 'La página de servicios (24 de julio de 2026) lista USDT, USDC, BTC, ETH, BNB, SOL, TRX, XRP, SUI y S. Artículos posteriores añaden RLUSD, BCH, LTC y GRAM. El artículo de redes publica mínimos, incluido 1,00 USDT en cada red listada. Enviar por otra red puede hacer perder los fondos. Confirma la fila en la app.',
  },
  {
    q: '¿Cuánto cuesta la tarjeta RedotPay?',
    a: 'La tarjeta virtual cuesta 10 USD una vez. La tarjeta física cuesta 100 USD una vez. La tarjeta estándar no tiene comisión mensual ni anual en la página de ayuda consultada. Las tasas de cajero y de conversión van aparte. La tabla completa, con las fuentes, está en la página de comisiones. El importe de la app antes de confirmar es el que cuenta.',
  },
  {
    q: '¿RedotPay funciona con Apple Pay y Google Pay?',
    a: 'La página de pagos dice que la tarjeta virtual puede vincularse a Apple Pay, Google Pay o PayPal. El alta puede fallar según el programa de la tarjeta y el país del monedero. Si la app no tiene botón, prueba a añadir la tarjeta en la app del monedero.',
  },
  {
    q: '¿Registrarse a través de PayCards sale más caro?',
    a: 'No. Te registras en RedotPay y pagas las comisiones de RedotPay. Nuestros enlaces son de referido. Una comisión, si RedotPay la paga, no cambia tu precio.',
  },
];
