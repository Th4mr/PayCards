/**
 * Libellés français des mêmes lignes de frais RedotPay.
 * Les chiffres et les identifiants de source restent dans src/data/redotpay.ts.
 */
import { SOURCES, feeRows, type SourceId } from './redotpay';

export const REVIEWED_LABEL_FR = '24 octobre 2026';

export const SOURCE_META_FR: Record<SourceId, { title: string; pageDate: string }> = {
  issuance: { title: 'Y a-t-il des frais pour obtenir une carte ?', pageDate: '27 juillet 2026' },
  physical: { title: 'Comment obtenir une carte physique ?', pageDate: '30 juillet 2026' },
  inactivity: { title: 'Y a-t-il des frais si je n’utilise pas ma carte RedotPay pendant un mois ?', pageDate: '28 juillet 2026' },
  atm: { title: 'Puis-je retirer au DAB, et y a-t-il des frais ?', pageDate: '27 juillet 2026' },
  merchants: { title: 'Quels achats ont des frais de transaction ?', pageDate: '3 septembre 2026' },
  replaceVirtual: { title: 'Remplacer la carte virtuelle', pageDate: '24 juillet 2026' },
  reward: { title: 'Comment utiliser la récompense d’inscription de 5 USD ?', pageDate: '26 juillet 2026' },
  referral: { title: 'Comment utiliser un code de parrainage ?', pageDate: '26 juillet 2026' },
  pro: { title: 'Premiers pas avec RedotPay Pro', pageDate: '4 septembre 2026' },
  where: { title: 'Où utiliser ma carte RedotPay ?', pageDate: '4 septembre 2026' },
  terms: { title: 'Conditions de la carte RedotPay', pageDate: 'conditions publiées' },
  services: { title: 'Services et fonctions RedotPay', pageDate: '24 juillet 2026' },
  deposits: { title: 'Cryptomonnaies, réseaux et dépôts minimum', pageDate: '21 juillet 2026' },
  payments: { title: 'Comment payer avec ma carte RedotPay ?', pageDate: 'page d’aide' },
  unsupported: { title: 'Pays et régions non pris en charge', pageDate: '28 août 2026' },
  delivery: { title: 'Restrictions de livraison de la carte', pageDate: '21 juillet 2026' },
  location: { title: 'Restrictions d’accès selon la localisation', pageDate: '28 août 2026' },
  issuanceBlock: { title: 'Restrictions d’émission de carte', pageDate: '28 août 2026' },
  depositHow: { title: 'Comment déposer des cryptos sur mon compte RedotPay ?', pageDate: '28 juillet 2026' },
  limits: { title: 'Limites et frais de la carte RedotPay', pageDate: '24 juillet 2026' },
  sg: { title: 'Page du programme Singapour', pageDate: 'page produit' },
};

const FR_ROWS: Record<string, { item: string; value: string; detail: string }> = {
  'إصدار البطاقة الافتراضية': {
    item: 'Émission de la carte virtuelle',
    value: '10 USD, une fois',
    detail: 'Prélevé sur le solde à l’émission. La récompense de 5 USD ne paie pas ces frais.',
  },
  'إصدار البطاقة المادية': {
    item: 'Émission de la carte physique',
    value: '100 USD, une fois',
    detail: 'Le bouton dans l’app affiche « Apply for card • 100 USD ». Le paiement confirme la commande, et la page d’aide dit qu’elle ne s’annule pas.',
  },
  'شحن البطاقة المادية': {
    item: 'Livraison de la carte physique',
    value: 'Courrier standard offert sur le tableau ; DHL au paiement',
    detail: 'L’article de commande (30 juillet 2026) cite les 100 USD et ne liste pas le port. Le tableau des frais sur la page des limites (mise à jour le 24 juillet 2026) marque Standard Mail comme offert (Waived) et DHL Express comme variable selon le pays, calculé au paiement, et ce tableau des frais est daté du 1er décembre 2025. Le tableau des limites sur la même page n’a pas de date propre. L’article sur la durée (22 juillet 2026) dit : DHL en général 3 à 10 jours, courrier standard en général 5 à 30 jours. Le montant affiché au paiement est celui qui est pris.',
  },
  'رسوم شهرية أو سنوية للبطاقة العادية': {
    item: 'Frais mensuels ou annuels de la carte standard',
    value: 'Aucun',
    detail: 'RedotPay dit qu’elle ne facture pas de frais de gestion, mensuels ou annuels. RedotPay Pro est optionnel et à part.',
  },
  'معاملة بعملة البطاقة': {
    item: 'Transaction dans la devise de la carte',
    value: 'Sans frais',
    detail: 'Comme dans le tableau de la page de retrait au DAB.',
  },
  'معاملة بعملة أخرى': {
    item: 'Transaction dans une autre devise',
    value: '1,2 %',
    detail: '',
  },
  'تحويل العملات الرقمية': {
    item: 'Conversion de cryptomonnaies',
    value: '1 %',
    detail: '',
  },
  'سحب الصراف — بطاقة بالدولار': {
    item: 'Retrait DAB — carte en USD',
    value: '2 % jusqu’à 10 000 USD par mois, puis 3 %',
    detail: 'Le taux le plus élevé s’applique au montant au-dessus de 10 000 USD dans le mois. Les frais de l’exploitant du DAB sont à part.',
  },
  'سحب الصراف — بطاقة بهونغ كونغ دولار': {
    item: 'Retrait DAB — carte en HKD',
    value: '2 %',
    detail: 'Frais de retrait RedotPay. L’exploitant du distributeur peut ajouter des frais affichés à l’écran.',
  },
  'تجار محددون': {
    item: 'Commerçants sélectionnés',
    value: '1,5 %, minimum 0,50 USD',
    detail:
      'Les 3 premières transactions éligibles par carte et par mois civil sont offertes. Le compteur repart à zéro le 1er à 00:00 UTC. Liste actuelle : Gulf Health Counsel, Free Fire, PUBG Mobile, Brawl Stars, eFootball, Facebook Ads, Discord.',
  },
  'استبدال البطاقة الافتراضية': {
    item: 'Remplacement de la carte virtuelle',
    value: '5 USD la première fois, puis 10 USD',
    detail: 'Au moins 31 jours entre deux remplacements. Les récompenses ne paient pas ces frais. Le numéro de carte reste ; le CVV et la date d’expiration changent.',
  },
  'استبدال البطاقة المادية': {
    item: 'Remplacement de la carte physique',
    value: 'Pas de chiffre sur la page de remplacement consultée',
    detail: 'La page de remplacement publiée concerne la carte virtuelle. Vérifiez l’offre dans l’app avant de confirmer.',
  },
  'حدود الإنفاق والسحب العامة': {
    item: 'Plafonds généraux de dépense et de retrait',
    value: '100 000 USD par opération, 1 000 000 USD par jour',
    detail: 'Les deux colonnes du tableau des limites affichent ces plafonds de dépense. Ce tableau de limites n’a pas de date propre ; la page a été mise à jour le 24 juillet 2026. La ligne « en vigueur depuis le 1er décembre 2025 » appartient au tableau des frais, pas à ces plafonds. Les plafonds DAB sont à part : 3 750 USD ou 23 000 HKD par jour, et 50 000 USD ou 75 000 HKD par mois, avec une note que certaines cartes USD sont à 3 000 par jour et 10 000 par mois. Les retraits sont limités à 3 par jour et 30 par mois. La limite que vous fixez dans l’app peut être plus basse.',
  },
  'مكافأة التسجيل': {
    item: 'Récompense d’inscription',
    value: '5 USD, dépenses seulement',
    detail: 'Valable 30 jours à compter de la réception. Utilisable pour des achats une fois la carte active. Elle ne paie pas les frais d’émission ni de remplacement.',
  },
  'RedotPay Pro الشهري (اختياري)': {
    item: 'RedotPay Pro mensuel (optionnel)',
    value: '12,90 USD par mois',
    detail: 'Non remboursable. Exemption unique des frais de carte virtuelle (10 USD), plus 3 % sur les achats Apple Pay et Google Pay, jusqu’à 18 USD par mois.',
  },
  'RedotPay Pro السنوي (اختياري)': {
    item: 'RedotPay Pro annuel (optionnel)',
    value: '129 USD par an',
    detail:
      'Non remboursable. Exemption unique des frais de carte physique (100 USD), le même cashback jusqu’à 18 USD, et une exemption des frais DAB RedotPay jusqu’à 1 000 USD par mois. Les frais de l’exploitant du DAB ne sont pas inclus.',
  },
};

export const FX_SCOPE_NOTE_FR =
  'Le taux de 1 % pour la conversion de cryptomonnaies et le taux de 1,2 % pour une transaction dans une devise autre que celle de la carte sont publiés sur la page de retrait au DAB. Cette page ne dit pas s’ils s’appliquent à chaque achat ou seulement aux retraits. Nous les citons tels quels et conseillons de comparer le montant débité dans l’app.';

export const feeRowsFr = feeRows.map((row) => {
  const copy = FR_ROWS[row.item];
  if (!copy) throw new Error(`Missing French fee row for: ${row.item}`);
  const detail =
    row.item === 'معاملة بعملة أخرى' || row.item === 'تحويل العملات الرقمية' ? FX_SCOPE_NOTE_FR : copy.detail;
  return { ...row, item: copy.item, value: copy.value, detail };
});

export function sourceFr(id: SourceId) {
  return { ...SOURCE_META_FR[id], url: SOURCES[id].url };
}
