/**
 * English labels for the same RedotPay fee rows.
 * Numbers and source IDs stay in src/data/redotpay.ts. Do not add a figure here
 * that is not already in that file.
 */
import { SOURCES, feeRows, type SourceId } from './redotpay';

export const REVIEWED_LABEL_EN = '24 October 2026';

export const SOURCE_META_EN: Record<SourceId, { title: string; pageDate: string }> = {
  issuance: { title: 'Are there any fees for getting a card?', pageDate: '27 July 2026' },
  physical: { title: 'How do I get a physical card?', pageDate: '30 July 2026' },
  inactivity: { title: 'Are there any fees if I don’t use my RedotPay card for a month?', pageDate: '28 July 2026' },
  atm: { title: 'Can I withdraw cash from an ATM, and are there any fees?', pageDate: '27 July 2026' },
  merchants: { title: 'Which purchases have a transaction fee?', pageDate: '3 September 2026' },
  replaceVirtual: { title: 'How to replace your virtual card', pageDate: '24 July 2026' },
  reward: { title: 'How do I use my 5 USDⓈ sign-up reward?', pageDate: '26 July 2026' },
  referral: { title: 'How do I use a referral code?', pageDate: '26 July 2026' },
  pro: { title: 'Getting started with RedotPay Pro', pageDate: '4 September 2026' },
  where: { title: 'Where can I use my RedotPay card?', pageDate: '4 September 2026' },
  terms: { title: 'RedotPay Card Terms', pageDate: 'published terms' },
  services: { title: 'RedotPay services and features', pageDate: '24 July 2026' },
  deposits: { title: 'Supported cryptocurrencies, networks, and minimum deposits', pageDate: '21 July 2026' },
  payments: { title: 'How do I use my RedotPay card for payments?', pageDate: 'help center page' },
  unsupported: { title: 'Unsupported countries and regions', pageDate: '28 August 2026' },
  delivery: { title: 'Card delivery restrictions', pageDate: '21 July 2026' },
  location: { title: 'Location-based access restrictions', pageDate: '28 August 2026' },
  issuanceBlock: { title: 'Card issuance restrictions', pageDate: '28 August 2026' },
  depositHow: { title: 'How do I deposit crypto to my RedotPay account?', pageDate: '28 July 2026' },
  limits: { title: 'RedotPay card limitations and fees', pageDate: '24 July 2026' },
  sg: { title: 'Singapore programme page', pageDate: 'product page' },
};

const EN_ROWS: Record<string, { item: string; value: string; detail: string }> = {
  'إصدار البطاقة الافتراضية': {
    item: 'Virtual card issuance',
    value: '10 USD, once',
    detail: 'Charged from your balance when the card is issued. The 5 USD reward cannot pay this fee.',
  },
  'إصدار البطاقة المادية': {
    item: 'Physical card issuance',
    value: '100 USD, once',
    detail: 'The in-app button shows “Apply for card • 100 USD”. Paying confirms the order, and the help page says it cannot be cancelled.',
  },
  'شحن البطاقة المادية': {
    item: 'Physical card shipping',
    value: 'Standard mail waived on the chart; DHL at checkout',
    detail: 'The order article (30 July 2026) names the 100 USD fee and does not list postage. The limitations chart (page dated 24 July 2026) labels Standard Mail as waived and DHL Express as varying by country, calculated at checkout. The delivery-time article (22 July 2026) says DHL is usually 3–10 days and StandardMail usually 5–30 days. The checkout amount is the one charged.',
  },
  'رسوم شهرية أو سنوية للبطاقة العادية': {
    item: 'Monthly or annual fee on the standard card',
    value: 'None',
    detail: 'RedotPay says it does not charge a management fee or a monthly or annual fee. RedotPay Pro is optional and separate.',
  },
  'معاملة بعملة البطاقة': {
    item: 'Transaction in the card currency',
    value: 'No fee',
    detail: 'As shown in the table on the ATM withdrawal page.',
  },
  'معاملة بعملة أخرى': {
    item: 'Transaction in another currency',
    value: '1.2%',
    detail: '',
  },
  'تحويل العملات الرقمية': {
    item: 'Crypto conversion',
    value: '1%',
    detail: '',
  },
  'سحب الصراف — بطاقة بالدولار': {
    item: 'ATM withdrawal — USD card',
    value: '2% up to 10,000 USD a month, then 3%',
    detail: 'The higher rate applies to the amount above 10,000 USD in the month. The ATM operator’s fee is separate.',
  },
  'سحب الصراف — بطاقة بهونغ كونغ دولار': {
    item: 'ATM withdrawal — HKD card',
    value: '2%',
    detail: 'RedotPay’s withdrawal fee. The machine operator may add a fee shown on its screen.',
  },
  'تجار محددون': {
    item: 'Selected merchants',
    value: '1.5%, minimum 0.50 USD',
    detail:
      'The first 3 eligible transactions per card in each calendar month are waived. The counter resets on the 1st at 00:00 UTC. Current list: Gulf Health Counsel, Free Fire, PUBG Mobile, Brawl Stars, eFootball, Facebook Ads, Discord.',
  },
  'استبدال البطاقة الافتراضية': {
    item: 'Virtual card replacement',
    value: '5 USD the first time, then 10 USD',
    detail: 'At least 31 days between replacements. Rewards cannot pay this fee. The card number stays; CVV and expiry change.',
  },
  'استبدال البطاقة المادية': {
    item: 'Physical card replacement',
    value: 'No figure on the replacement page we checked',
    detail: 'The published replacement page is about the virtual card. Check the offer in the app before you confirm.',
  },
  'حدود الإنفاق والسحب العامة': {
    item: 'General spend and withdrawal caps',
    value: '100,000 USD per transaction, 1,000,000 USD a day',
    detail: 'Both columns on the limitations chart show those spend caps, and the chart says they are effective from 1 December 2025. ATM caps are separate: 3,750 USD or 23,000 HKD a day, and 50,000 USD or 75,000 HKD a month, with a note that some USD cards are 3,000 a day and 10,000 a month. Withdrawals are limited to 3 a day and 30 a month. The limit you set in the app can be lower.',
  },
  'مكافأة التسجيل': {
    item: 'Sign-up reward',
    value: '5 USD, spending only',
    detail: 'Valid for 30 days from receipt. It can be used for purchases after the card is active. It cannot pay issuance or replacement fees.',
  },
  'RedotPay Pro الشهري (اختياري)': {
    item: 'RedotPay Pro monthly (optional)',
    value: '12.90 USD each month',
    detail: 'Non-refundable. One-time waiver of the virtual card fee (10 USD), plus 3% back on Apple Pay and Google Pay purchases up to 18 USD a month.',
  },
  'RedotPay Pro السنوي (اختياري)': {
    item: 'RedotPay Pro annual (optional)',
    value: '129 USD a year',
    detail:
      'Non-refundable. One-time waiver of the physical card fee (100 USD), the same cashback up to 18 USD, and a waiver of RedotPay ATM fees on up to 1,000 USD a month. ATM-operator fees are not included.',
  },
};

export const FX_SCOPE_NOTE_EN =
  'The 1% crypto-conversion rate and the 1.2% rate for a transaction in a currency other than the card currency are published on the ATM withdrawal page. That page does not say whether they apply to every purchase or only to withdrawals, so we quote them as published and suggest you compare the amount debited in the app.';

export const feeRowsEn = feeRows.map((row) => {
  const copy = EN_ROWS[row.item];
  if (!copy) throw new Error(`Missing English fee row for: ${row.item}`);
  const detail =
    row.item === 'معاملة بعملة أخرى' || row.item === 'تحويل العملات الرقمية' ? FX_SCOPE_NOTE_EN : copy.detail;
  return { ...row, item: copy.item, value: copy.value, detail };
});

export function sourceEn(id: SourceId) {
  return { ...SOURCE_META_EN[id], url: SOURCES[id].url };
}
