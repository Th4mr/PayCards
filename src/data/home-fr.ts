import { REFERRAL_FR } from '../config';

export const trustItems = [
  { icon: 'phone', text: 'Apple Pay et Google Pay, selon le centre d’aide' },
  { icon: 'card', text: 'Carte virtuelle et carte physique' },
  { icon: 'coins', text: 'USDT, USDC et d’autres actifs listés' },
  { icon: 'globe', text: 'Là où les grands réseaux de cartes sont acceptés' },
];

export const features = [
  {
    icon: 'globe',
    title: 'Payer en ligne et en magasin',
    text: 'Dépenser un solde crypto là où le réseau de la carte passe, sans d’abord le rapatrier vers une banque.',
  },
  {
    icon: 'phone',
    title: 'Apple Pay et Google Pay',
    text: 'La page paiements dit qu’une carte virtuelle peut être liée à Apple Pay, Google Pay ou PayPal. Le portefeuille de votre pays peut quand même la refuser.',
  },
  {
    icon: 'coins',
    title: 'Recharger en stablecoins',
    text: 'Déposez de l’USDT, de l’USDC ou un autre actif que l’app liste. Un stablecoin bouge moins que le BTC entre le dépôt et le paiement.',
  },
  {
    icon: 'bolt',
    title: 'Une carte virtuelle après le KYC',
    text: 'Après la vérification, vous pouvez émettre une carte virtuelle pour payer en ligne. La carte physique est une commande séparée de 100 USD.',
  },
  {
    icon: 'cash',
    title: 'Du cash au DAB, carte physique seulement',
    text: 'La page DAB concerne la carte physique, sur les distributeurs qui acceptent les grands réseaux. La carte virtuelle ne retire pas d’espèces.',
  },
  {
    icon: 'shield',
    title: 'Le solde est conservé par RedotPay',
    text: 'RedotPay détient les actifs. Ne laissez dans l’app que ce que vous comptez dépenser, et activez les options de sécurité.',
  },
];

export const steps = [
  { icon: 'download', title: 'Ouvrir l’invitation', text: 'Le bouton mène à la page d’invitation française de RedotPay, puis vers l’app officielle iOS ou Android.' },
  { icon: 'user', title: 'Créer le compte', text: 'Inscrivez-vous avec un e-mail ou un téléphone. Si l’écran le demande, entrez le code de parrainage avant que le compte existe.' },
  { icon: 'id', title: 'Vérifier votre identité', text: 'Envoyez la pièce que l’app demande, plus un selfie. Le centre d’aide ne publie pas un délai unique pour chaque pays.' },
  { icon: 'wallet', title: 'Recharger et payer', text: 'Déposez sur le réseau affiché dans l’app, émettez la carte, puis payez en ligne ou avec le téléphone.' },
];

export const useCases = [
  { icon: 'card', title: 'Ce qu’est la carte', text: 'Virtuelle ou physique, programmes Visa, et l’affirmation des 130 millions de commerçants.', href: '/fr/articles/avis-redotpay' },
  { icon: 'coins', title: 'Les frais', text: 'Émission, DAB, change, et les lignes que RedotPay ne publie pas.', href: '/fr/articles/frais-redotpay' },
  { icon: 'globe', title: 'Les pays', text: 'KYC, accès à l’app, et qui peut recevoir une carte. Les résidents au Maroc ne le peuvent pas.', href: '/fr/articles/pays-redotpay' },
  { icon: 'cash', title: 'Retrait au DAB', text: 'Frais cash USD et HKD, et pourquoi la carte virtuelle ne retire pas.', href: '/fr/articles/retrait-dab-redotpay' },
];

export const homeFaq = [
  {
    q: 'PayCards est-il le site officiel de RedotPay ?',
    a: 'Non. PayCards est un guide indépendant et ne fait pas partie de RedotPay. Certains liens sont des liens de parrainage. Nous pouvons toucher une commission si vous vous inscrivez, sans surcoût pour vous. L’inscription se fait toujours chez RedotPay.',
  },
  {
    q: 'La carte RedotPay est-elle disponible dans mon pays ?',
    a: 'Les résidents des États-Unis ne peuvent pas recevoir de carte virtuelle ni physique, les personnes qui s’y trouvent ne peuvent pas ouvrir l’app, et les citoyens américains ne peuvent pas finir le KYC. Ce sont trois pages d’aide, relues le 24 octobre 2026. Ce guide s’adresse aux lecteurs francophones ailleurs : Maghreb, Afrique de l’Ouest et du Centre, Europe hors États-Unis. Le Maroc est sur la liste d’émission : un résident au Maroc ne peut pas recevoir de carte. La Tunisie est sur la liste de livraison de la carte physique, pas sur les trois autres. L’Algérie, la France, la Belgique, la Suisse, le Sénégal, la Côte d’Ivoire et le Cameroun ne sont pas nommés. Une absence n’est pas un accord. Le Burkina Faso, le Mali, le Burundi, la République centrafricaine et la RDC sont bloqués. Voir le guide des pays.',
  },
  {
    q: 'Quel est le code parrainage RedotPay ?',
    a: `Le code sur ce site est ${REFERRAL_FR.code}. Sur l’écran d’inscription, touchez Referral Code (Optional) et saisissez-le avant que le compte existe. RedotPay dit qu’un code ne s’ajoute pas après. La récompense de 5 USD est un crédit de dépenses pour les nouveaux comptes. Le code ne la débloque pas, et elle ne paie pas les frais de carte.`,
  },
  {
    q: 'Faut-il vérifier son identité ?',
    a: 'Oui. Émettre une carte exige une vérification d’identité. Les pages consultées ne publient pas un délai unique ni une liste de documents valable pour chaque pays. L’app affiche les pièces qu’elle accepte.',
  },
  {
    q: 'Quelles cryptomonnaies puis-je déposer ?',
    a: 'La page des services liste USDT, USDC, BTC, ETH, BNB, SOL, TRX, XRP, SUI et S pour les dépôts et les paiements. Chaque actif est accepté sur les réseaux affichés dans l’écran Dépôt. Envoyer sur un autre réseau peut faire perdre les fonds. Les minimums par réseau ne sont pas publiés dans un tableau unique.',
  },
  {
    q: 'Combien coûte la carte RedotPay ?',
    a: 'La carte virtuelle coûte 10 USD une fois. La carte physique coûte 100 USD une fois. La carte standard n’a pas de frais mensuels ni annuels sur la page d’aide consultée. Les taux DAB et de conversion sont à part. Le tableau complet, avec les sources, est sur la page des frais. Le montant dans l’app avant confirmation fait foi.',
  },
  {
    q: 'RedotPay fonctionne-t-il avec Apple Pay et Google Pay ?',
    a: 'La page paiements dit que la carte virtuelle peut être liée à Apple Pay, Google Pay ou PayPal. L’ajout peut quand même échouer selon le programme de la carte et le pays du portefeuille. Si l’app n’a pas de bouton, essayez d’ajouter la carte dans l’app du portefeuille.',
  },
  {
    q: 'S’inscrire via PayCards coûte-t-il plus cher ?',
    a: 'Non. Vous vous inscrivez chez RedotPay et vous payez les frais de RedotPay. Nos liens sont des liens de parrainage. Une commission, si RedotPay en verse une, ne change pas votre prix.',
  },
];
