/**
 * Etiquetas en español de las mismas líneas de comisiones de RedotPay.
 * Las cifras y los identificadores de fuente siguen en src/data/redotpay.ts.
 */
import { SOURCES, feeRows, type SourceId } from './redotpay';

export const REVIEWED_LABEL_ES = '24 de octubre de 2026';

export const SOURCE_META_ES: Record<SourceId, { title: string; pageDate: string }> = {
  issuance: { title: '¿Hay comisiones por obtener una tarjeta?', pageDate: '27 de julio de 2026' },
  physical: { title: '¿Cómo obtener una tarjeta física?', pageDate: '30 de julio de 2026' },
  inactivity: { title: '¿Hay comisiones si no uso mi tarjeta RedotPay durante un mes?', pageDate: '28 de julio de 2026' },
  atm: { title: '¿Puedo retirar en un cajero y hay comisiones?', pageDate: '27 de julio de 2026' },
  merchants: { title: '¿Qué compras tienen comisión de transacción?', pageDate: '3 de septiembre de 2026' },
  replaceVirtual: { title: 'Sustituir la tarjeta virtual', pageDate: '24 de julio de 2026' },
  reward: { title: 'Cómo usar la recompensa de registro de 5 USD', pageDate: '26 de julio de 2026' },
  referral: { title: 'Cómo usar un código de referido', pageDate: '26 de julio de 2026' },
  pro: { title: 'Primeros pasos con RedotPay Pro', pageDate: '4 de septiembre de 2026' },
  where: { title: '¿Dónde usar mi tarjeta RedotPay?', pageDate: '4 de septiembre de 2026' },
  terms: { title: 'Condiciones de la tarjeta RedotPay', pageDate: 'condiciones publicadas' },
  services: { title: 'Servicios y funciones de RedotPay', pageDate: '24 de julio de 2026' },
  deposits: { title: 'Criptomonedas, redes y depósitos mínimos', pageDate: '21 de julio de 2026' },
  payments: { title: '¿Cómo pagar con mi tarjeta RedotPay?', pageDate: 'página de ayuda' },
  unsupported: { title: 'Países y regiones no admitidos', pageDate: '28 de agosto de 2026' },
  delivery: { title: 'Restricciones de envío de la tarjeta', pageDate: '21 de julio de 2026' },
  location: { title: 'Restricciones de acceso según la ubicación', pageDate: '28 de agosto de 2026' },
  issuanceBlock: { title: 'Restricciones de emisión de tarjeta', pageDate: '28 de agosto de 2026' },
  depositHow: { title: '¿Cómo depositar cripto en mi cuenta RedotPay?', pageDate: '28 de julio de 2026' },
  limits: { title: 'Límites y comisiones de la tarjeta RedotPay', pageDate: '24 de julio de 2026' },
  sg: { title: 'Página del programa de Singapur', pageDate: 'página de producto' },
};

const ES_ROWS: Record<string, { item: string; value: string; detail: string }> = {
  'إصدار البطاقة الافتراضية': {
    item: 'Emisión de la tarjeta virtual',
    value: '10 USD, una vez',
    detail: 'Se cobra del saldo al emitirla. La recompensa de 5 USD no paga esta comisión.',
  },
  'إصدار البطاقة المادية': {
    item: 'Emisión de la tarjeta física',
    value: '100 USD, una vez',
    detail: 'El botón de la app muestra «Apply for card • 100 USD». El pago confirma el pedido, y la página de ayuda dice que no se cancela.',
  },
  'شحن البطاقة المادية': {
    item: 'Envío de la tarjeta física',
    value: 'Correo estándar exento en la tabla; DHL en el pago',
    detail: 'El artículo del pedido (30 de julio de 2026) cita los 100 USD y no lista el porte. La tabla de comisiones de la página de límites (actualizada el 24 de julio de 2026) marca Standard Mail como exento (Waived) y DHL Express como variable según el país, calculado al pagar, y esa tabla de comisiones está fechada el 1 de diciembre de 2025. La tabla de límites de la misma página no tiene fecha propia. El artículo de plazos (22 de julio de 2026) dice: DHL en general de 3 a 10 días, correo estándar en general de 5 a 30 días. El importe que muestra el pago es el que se cobra.',
  },
  'رسوم شهرية أو سنوية للبطاقة العادية': {
    item: 'Comisión mensual o anual de la tarjeta estándar',
    value: 'Ninguna',
    detail: 'RedotPay dice que no cobra comisión de gestión, mensual ni anual. RedotPay Pro es opcional y va aparte.',
  },
  'معاملة بعملة البطاقة': {
    item: 'Transacción en la moneda de la tarjeta',
    value: 'Sin comisión',
    detail: 'Como en la tabla de la página de retiro en cajero.',
  },
  'معاملة بعملة أخرى': {
    item: 'Transacción en otra moneda',
    value: '1,2 %',
    detail: '',
  },
  'تحويل العملات الرقمية': {
    item: 'Conversión de criptomonedas',
    value: '1 %',
    detail: '',
  },
  'سحب الصراف — بطاقة بالدولار': {
    item: 'Retiro en cajero — tarjeta en USD',
    value: '2 % hasta 10 000 USD al mes, luego 3 %',
    detail: 'La tasa más alta se aplica al importe por encima de 10 000 USD en el mes. La comisión del operador del cajero va aparte.',
  },
  'سحب الصراف — بطاقة بهونغ كونغ دولار': {
    item: 'Retiro en cajero — tarjeta en HKD',
    value: '2 %',
    detail: 'Comisión de retiro de RedotPay. El operador del cajero puede añadir una comisión que se ve en pantalla.',
  },
  'تجار محددون': {
    item: 'Comercios seleccionados',
    value: '1,5 %, mínimo 0,50 USD',
    detail:
      'Las 3 primeras transacciones elegibles por tarjeta y por mes natural quedan exentas. El contador vuelve a cero el día 1 a las 00:00 UTC. Lista actual: Gulf Health Counsel, Free Fire, PUBG Mobile, Brawl Stars, eFootball, Facebook Ads, Discord.',
  },
  'استبدال البطاقة الافتراضية': {
    item: 'Sustitución de la tarjeta virtual',
    value: '5 USD la primera vez, luego 10 USD',
    detail: 'Al menos 31 días entre dos sustituciones. Las recompensas no pagan esta comisión. El número de tarjeta se mantiene; el CVV y la fecha de caducidad cambian.',
  },
  'استبدال البطاقة المادية': {
    item: 'Sustitución de la tarjeta física',
    value: 'Sin cifra en la página de sustitución consultada',
    detail: 'La página de sustitución publicada trata de la tarjeta virtual. Revisa la oferta en la app antes de confirmar.',
  },
  'حدود الإنفاق والسحب العامة': {
    item: 'Límites generales de gasto y de retiro',
    value: '100 000 USD por operación, 1 000 000 USD al día',
    detail: 'Las dos columnas de la tabla de límites muestran estos topes de gasto. Esa tabla de límites no tiene fecha propia; la página se actualizó el 24 de julio de 2026. La línea «en vigor desde el 1 de diciembre de 2025» pertenece a la tabla de comisiones, no a estos topes. Los topes de cajero van aparte: 3 750 USD o 23 000 HKD al día, y 50 000 USD o 75 000 HKD al mes, con una nota de que algunas tarjetas USD están en 3 000 al día y 10 000 al mes. Los retiros se limitan a 3 al día y 30 al mes. El límite que fijas en la app puede ser más bajo.',
  },
  'مكافأة التسجيل': {
    item: 'Recompensa de registro',
    value: '5 USD, solo gasto',
    detail: 'Válida 30 días desde que la recibes. Sirve para compras cuando la tarjeta está activa. No paga las comisiones de emisión ni de sustitución.',
  },
  'RedotPay Pro الشهري (اختياري)': {
    item: 'RedotPay Pro mensual (opcional)',
    value: '12,90 USD al mes',
    detail: 'No reembolsable. Exención única de la comisión de la tarjeta virtual (10 USD), más un 3 % en compras con Apple Pay y Google Pay, hasta 18 USD al mes.',
  },
  'RedotPay Pro السنوي (اختياري)': {
    item: 'RedotPay Pro anual (opcional)',
    value: '129 USD al año',
    detail:
      'No reembolsable. Exención única de la comisión de la tarjeta física (100 USD), el mismo reembolso hasta 18 USD y una exención de las comisiones de cajero de RedotPay hasta 1 000 USD al mes. Las comisiones del operador del cajero no están incluidas.',
  },
};

export const FX_SCOPE_NOTE_ES =
  'La tasa del 1 % para la conversión de criptomonedas y la del 1,2 % para una transacción en una moneda distinta de la de la tarjeta están publicadas en la página de retiro en cajero. Esa página no dice si se aplican a cada compra o solo a los retiros. Las citamos tal cual y recomendamos comparar el importe cargado en la app.';

export const feeRowsEs = feeRows.map((row) => {
  const copy = ES_ROWS[row.item];
  if (!copy) throw new Error(`Missing Spanish fee row for: ${row.item}`);
  const detail =
    row.item === 'معاملة بعملة أخرى' || row.item === 'تحويل العملات الرقمية' ? FX_SCOPE_NOTE_ES : copy.detail;
  return { ...row, item: copy.item, value: copy.value, detail };
});

export function sourceEs(id: SourceId) {
  return { ...SOURCE_META_ES[id], url: SOURCES[id].url };
}
