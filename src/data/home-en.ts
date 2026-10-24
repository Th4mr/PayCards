import { REFERRAL_EN } from '../config';

export const trustItems = [
  { icon: 'phone', text: 'Apple Pay and Google Pay, per the help center' },
  { icon: 'card', text: 'Virtual card and physical card' },
  { icon: 'coins', text: 'USDT, USDC, and other listed assets' },
  { icon: 'globe', text: 'Where major card networks are accepted' },
];

export const features = [
  {
    icon: 'globe',
    title: 'Pay online and in stores',
    text: 'Spend a crypto balance at checkouts that accept the card network, without first cashing out to a bank.',
  },
  {
    icon: 'phone',
    title: 'Apple Pay and Google Pay',
    text: 'The payments help page says a virtual card can be linked to Apple Pay, Google Pay, or PayPal. A wallet in your country may still decline it.',
  },
  {
    icon: 'coins',
    title: 'Top up with stablecoins',
    text: 'Deposit USDT, USDC, or other assets the app lists. Stablecoins move less than BTC between the time you deposit and the time you pay.',
  },
  {
    icon: 'bolt',
    title: 'A virtual card after KYC',
    text: 'After verification you can issue a virtual card for online payments. A physical card is a separate 100 USD order.',
  },
  {
    icon: 'cash',
    title: 'ATM cash, physical card only',
    text: 'The ATM page covers the physical card at machines that support major card networks. The virtual card does not withdraw cash.',
  },
  {
    icon: 'shield',
    title: 'The balance is custodial',
    text: 'RedotPay holds the assets. Keep only what you plan to spend, and use the security options in the app.',
  },
];

export const steps = [
  { icon: 'download', title: 'Open the invite', text: 'The button goes to RedotPay’s English invite page, then to the official iOS or Android app.' },
  { icon: 'user', title: 'Create the account', text: 'Register with email or phone. If the screen asks, enter the referral code before the account exists.' },
  { icon: 'id', title: 'Verify your identity', text: 'Submit the ID the app asks for, plus a selfie. The help center does not publish one review time for every country.' },
  { icon: 'wallet', title: 'Top up and pay', text: 'Deposit on the network shown in the app, issue the card, and pay online or with your phone.' },
];

export const useCases = [
  { icon: 'card', title: 'What the card is', text: 'Virtual vs physical, Visa programmes, and the 130M+ merchant claim.', href: '/en/articles/redotpay-review' },
  { icon: 'coins', title: 'Fees', text: 'Issuance, ATM, FX, and the lines RedotPay does not publish.', href: '/en/articles/redotpay-fees' },
  { icon: 'globe', title: 'Supported countries', text: 'Citizenships blocked at KYC, including the United States, and delivery bans.', href: '/en/articles/redotpay-supported-countries' },
  { icon: 'cash', title: 'ATM withdrawal', text: 'USD and HKD cash fees, and why the virtual card cannot withdraw.', href: '/en/articles/redotpay-atm-withdrawal' },
];

export const homeFaq = [
  {
    q: 'Is PayCards the official RedotPay website?',
    a: 'No. PayCards is an independent guide and is not part of RedotPay. Some links are referral links. We may earn a commission if you sign up, at no extra cost to you. You always register on RedotPay.',
  },
  {
    q: 'Is the RedotPay card available in my country?',
    a: 'RedotPay publishes a citizenship list that cannot complete KYC, and a wider list of places it will not ship a physical card. The United States is on the citizenship list. A country missing from both lists is not an approval, and local law can still restrict crypto cards. See the supported-countries guide.',
  },
  {
    q: 'What is the RedotPay referral code?',
    a: `The code on this site is ${REFERRAL_EN.code}. On the registration screen, tap Referral Code (Optional) and enter it before the account is created. RedotPay says a code cannot be added later. The 5 USD sign-up reward is a spending credit for new accounts. It is not unlocked by the code, and it cannot pay the card fee.`,
  },
  {
    q: 'Do I have to verify my identity?',
    a: 'Yes. Issuing a card requires identity verification. The help pages we checked do not publish one review time or one document list for every country. The app shows the documents it will accept.',
  },
  {
    q: 'Which cryptocurrencies can I deposit?',
    a: 'The services page lists USDT, USDC, BTC, ETH, BNB, SOL, TRX, XRP, SUI, and S for deposits and payments. Each asset is accepted on networks shown on the in-app Deposit page. Sending on a different network can lose the funds. Per-network minimums are not published as one table.',
  },
  {
    q: 'How much does the RedotPay card cost?',
    a: 'The virtual card is 10 USD once. The physical card is 100 USD once. The standard card has no monthly or annual fee on the help page we checked. ATM and conversion rates are separate. The full table, with sources, is on the fees page. The amount in the app before you confirm is final.',
  },
  {
    q: 'Does RedotPay work with Apple Pay and Google Pay?',
    a: 'The payments help page says the virtual card can be linked to Apple Pay, Google Pay, or PayPal. Adding it can still fail depending on the card programme and the wallet’s country. If the app has no button, try adding the card inside the wallet app.',
  },
  {
    q: 'Does signing up through PayCards cost extra?',
    a: 'No. You register on RedotPay and pay RedotPay’s fees. Our links are referral links. A commission, if RedotPay pays one, does not change your price.',
  },
];
