export type HubCard = { href: string; title: string; text: string };
export type HubFaq = { q: string; a: string };

export const categoryCopy = {
  en: {
    guides: {
      detail: 'These guides stay on published RedotPay figures: a 10 USD virtual card, a 100 USD physical card, the limitations chart dated 24 July 2026, and the four block lists. A missing country name is not approval. US residents are not issued a card.',
      featuredHeading: 'Start with a numbered guide',
      featured: [
        { href: '/en/articles/redotpay-limits', title: 'Spend and ATM caps', text: '100,000 USD per payment and 1,000,000 USD a day on the chart, with lower ATM caps and a limit you can set yourself.' },
        { href: '/en/articles/redotpay-physical-card-delivery', title: 'Physical card delivery', text: 'What the delivery-restriction list blocks, and the timing pages for cards that can be shipped.' },
        { href: '/en/articles/crypto-card-no-kyc', title: 'No-KYC cards', text: 'RedotPay requires identity checks. This page says what that rules out, without inventing another issuer’s fees.' },
      ],
      faq: [
        { q: 'Where do the fee numbers come from?', a: 'The limitations chart, help-center page updated 24 July 2026, and the issuance pages. The amount in the app before you confirm is the one that applies.' },
        { q: 'Does a guide mean the card works in my country?', a: 'No. The country guide copies block lists. Absence from a list is not approval, and this site does not target the United States.' },
      ],
    },
    'use-cases': {
      detail: 'Use-case pages describe a job the card might do, then the published limit on that job. A merchant can still decline a prepaid or crypto-linked card. Apple Pay and Google Pay depend on the wallet in your country.',
      featuredHeading: 'Jobs readers ask about',
      featured: [
        { href: '/en/articles/how-to-spend-usdt', title: 'Spend USDT', text: 'Deposit on the network the app shows, then pay where major card networks are accepted. The minimums image is dated 21 July 2026.' },
        { href: '/en/articles/redotpay-netflix-chatgpt', title: 'Subscriptions', text: 'An older help note named some subscriptions. A later page does not repeat that list. A decline is still possible.' },
        { href: '/en/articles/redotpay-apple-pay-google-pay', title: 'Phone wallets', text: 'The payments article says a virtual card can be linked to Apple Pay, Google Pay, or PayPal. The wallet can still refuse it.' },
      ],
      faq: [
        { q: 'Will Netflix or a local shop accept the card?', a: 'Not as a promise. The 4 September 2026 usage page says some merchants block prepaid or crypto-linked cards, even where the network is accepted in general.' },
        { q: 'Is the virtual card enough?', a: 'For online checkout, the published issuance fee is 10 USD once. ATM cash needs the physical card, which is a separate 100 USD order.' },
      ],
    },
    comparisons: {
      detail: 'Comparison pages copy RedotPay’s own chart and, where we read them, the other company’s page. We do not invent a rival fee. KAST Points earning ends on 30 November 2026. The fees page still does not print a points percentage. Read on 8 November 2026.',
      featuredHeading: 'Comparisons with sources',
      featured: [
        { href: '/en/articles/best-crypto-card', title: 'How to choose', text: 'A checklist of availability, fees, and custody before any “best card” claim.' },
        { href: '/en/articles/redotpay-vs-kast', title: 'RedotPay and KAST', text: 'Only numbers from each company’s fee pages. No winner is declared.' },
        { href: '/en/articles/redotpay-vs-other-crypto-cards', title: 'Other cards', text: 'Bybit and Crypto.com stay as links to their own pages. Their fee tables are not copied.' },
      ],
      faq: [
        { q: 'Why is there no ranking?', a: 'A card you cannot open is not cheaper. Country blocks and KYC come before any fee comparison.' },
        { q: 'Are competitor prices on this site?', a: 'Only when the comparison cites that company’s page and the date we read it. Otherwise the cell stays blank.' },
      ],
    },
    troubleshooting: {
      detail: 'A decline is not one cause. The chart’s 0.5 USD line, after three free declines, is a fee on the image dated with the 1 December 2025 fees table. A separate page says a truly declined purchase is not charged. Both are quoted, not merged.',
      featuredHeading: 'When a payment fails',
      featured: [
        { href: '/en/articles/redotpay-card-declined', title: 'Card declined', text: 'Limits you set, merchant blocks, and the decline-fee line, kept separate from a purchase that never captured.' },
        { href: '/en/articles/redotpay-limits', title: 'The cap you set', text: 'Card then Limit can reject a payment that is under the company chart.' },
        { href: '/en/articles/is-redotpay-safe', title: 'Holds and freezes', text: 'KYT can hold a transaction for review, freeze an account, or decline funds.' },
      ],
      faq: [
        { q: 'Does every decline cost 0.5 USD?', a: 'The chart image says the first three declines per card each month are free, then 0.5 USD. A different page says a truly declined purchase is not charged. Read both before you treat them as one rule.' },
        { q: 'Who fixes a failed KYC or a missing deposit?', a: 'RedotPay, inside the app. PayCards cannot open the account or move the funds.' },
      ],
    },
  },
  fr: {
    guides: {
      detail: 'Ces guides citent les pages RedotPay : carte virtuelle 10 USD, carte physique 100 USD, tableau du 24 juillet 2026, et quatre listes de blocage. L’absence d’un pays n’est pas un accord. Les résidents du Maroc ne reçoivent pas de carte. Le plastique n’est pas livré en Tunisie. Ce site ne dit pas que la carte fonctionne en France.',
      featuredHeading: 'Guides avec des chiffres',
      featured: [
        { href: '/fr/articles/frais-redotpay', title: 'Frais', text: 'Émission, caisse, conversion 1 % et 1,2 %, et les lignes que la page ne publie pas.' },
        { href: '/fr/articles/pays-redotpay', title: 'Pays', text: 'Nationalité, lieu, émission et livraison. Le Maroc et la Tunisie ne suivent pas la même liste.' },
        { href: '/fr/articles/carte-crypto-sans-kyc', title: 'Sans KYC', text: 'RedotPay exige une vérification. Cette page n’invente pas les frais d’un autre émetteur.' },
      ],
      faq: [
        { q: 'La carte est-elle « disponible en France » ?', a: 'Nous ne l’écrivons pas. La France n’était pas nommée sur les quatre listes que nous avons lues. Une absence n’est pas une acceptation.' },
        { q: 'Le retrait en euros est-il un frais de caisse ?', a: 'Non. Une page distincte dit qu’un solde EUR ou GBP peut être retiré vers un compte bancaire dans la même monnaie. Les frais de DAB sont ailleurs.' },
      ],
    },
    'use-cases': {
      detail: 'Chaque usage reste sous la limite publiée : un commerçant peut refuser une carte prépayée ou liée à la crypto, et Apple Pay dépend du portefeuille du pays. Nous ne promettons pas Netflix, un loyer, ni un DAB précis.',
      featuredHeading: 'Dépenses concrètes',
      featured: [
        { href: '/fr/articles/depenser-usdt', title: 'Dépenser des USDT', text: 'Dépôt sur le réseau affiché, puis paiement là où le réseau de la carte passe.' },
        { href: '/fr/articles/redotpay-netflix-chatgpt', title: 'Abonnements', text: 'Une note plus ancienne cite des services. Une page plus récente ne reprend pas la liste.' },
        { href: '/fr/articles/apple-pay-redotpay', title: 'Apple Pay', text: 'La page de paiement dit que la virtuelle peut être ajoutée. Le portefeuille peut quand même refuser.' },
      ],
      faq: [
        { q: 'La carte virtuelle retire-t-elle du cash ?', a: 'Non. Le cash au DAB demande la carte physique, facturée 100 USD une fois, et seulement si l’adresse n’est pas sur la liste de livraison.' },
        { q: 'Le Maroc est-il un public de ces pages ?', a: 'Les résidents du Maroc sont sur la liste d’émission : pas de carte virtuelle ni physique. Ce n’est pas un guide pour contourner cette liste.' },
      ],
    },
    comparisons: {
      detail: 'Les comparaisons recopient le tableau RedotPay et, quand nous l’avons lu, la page de l’autre société. Pas de frais Bybit ou Crypto.com inventés. Pas de gagnant.',
      featuredHeading: 'Choisir sans classement inventé',
      featured: [
        { href: '/fr/articles/avis-redotpay', title: 'Avis sourcé', text: 'Ce que le centre d’aide dit, et ce qu’il ne dit pas : pas de note, pas d’assurance inventée.' },
        { href: '/fr/articles/redotpay-fiable', title: 'Fiabilité', text: 'KYT peut retenir une opération, geler un compte ou refuser des fonds. Les audits sont des déclarations de l’entreprise.' },
        { href: '/fr/articles/frais-redotpay', title: 'Frais à comparer', text: 'Les 10 USD et 100 USD sont le point de départ, avant toute comparaison avec un autre produit.' },
      ],
      faq: [
        { q: 'Pourquoi pas de « meilleure carte » absolue ?', a: 'La disponibilité et le KYC passent avant le prix. Une carte refusée à l’émission n’est pas une économie.' },
        { q: 'Où sont les frais des concurrents ?', a: 'Sur leur site. Nous lions la page officielle et nous ne recopions pas un tableau que nous n’avons pas lu.' },
      ],
    },
    troubleshooting: {
      detail: 'Un refus a plusieurs causes possibles : plafond que vous avez fixé, blocage commerçant, ou la ligne 0,5 USD après trois refus gratuits. Une autre page dit qu’un achat vraiment refusé n’est pas facturé. Les deux phrases restent séparées.',
      featuredHeading: 'Quand le paiement échoue',
      featured: [
        { href: '/fr/articles/redotpay-fiable', title: 'Gel du compte', text: 'La page KYT décrit une retenue pour examen, un gel de compte, ou un refus de fonds.' },
        { href: '/fr/articles/frais-redotpay', title: 'Ligne de refus', text: 'Trois refus offerts, puis 0,5 USD, sur l’image des frais. Ce n’est pas le plafond de dépense.' },
        { href: '/fr/articles/pays-redotpay', title: 'Pays bloqué', text: 'Un refus peut venir de la liste d’émission, pas d’un solde insuffisant.' },
      ],
      faq: [
        { q: 'PayCards peut-il débloquer un paiement ?', a: 'Non. Le support du solde et de la carte est dans l’application RedotPay.' },
        { q: 'Un refus coûte-t-il toujours 0,5 USD ?', a: 'Le tableau offre les trois premiers refus par carte et par mois, puis 0,5 USD. Une autre page parle d’un achat vraiment refusé qui n’est pas facturé.' },
      ],
    },
  },
  es: {
    guides: {
      detail: 'Las guías en español citan el centro de ayuda de RedotPay. Cuba, Nicaragua y Venezuela están en las cuatro listas. España y la mayor parte de Latinoamérica no están nombradas: eso no es una aceptación. Estas páginas no se dirigen a Estados Unidos.',
      featuredHeading: 'Guías con cifras publicadas',
      featured: [
        { href: '/es/articles/envio-tarjeta-redotpay', title: 'Envío de la física', text: 'La lista de entrega bloquea algunos países. El plazo publicado es para direcciones que sí pueden recibir el plástico.' },
        { href: '/es/articles/paises-redotpay', title: 'Países', text: 'Nacionalidad, ubicación, emisión y envío, leídos como cuatro reglas distintas.' },
        { href: '/es/articles/tarjeta-crypto-sin-kyc', title: 'Sin KYC', text: 'RedotPay pide verificación. No inventamos las comisiones de otra tarjeta.' },
      ],
      faq: [
        { q: '¿La tarjeta está aprobada en España o México?', a: 'No lo decimos. Que el nombre no esté en la lista de bloqueo no es un permiso de RedotPay ni un consejo legal local.' },
        { q: '¿SPEI o un QR es la misma comisión de la tarjeta?', a: 'No. El QR y SPEI tienen páginas propias. Una frase del flujo Send sobre Pix, SPEI y SEPA no es una tarifa de depósito.' },
      ],
    },
    'use-cases': {
      detail: 'Gastar USDT, pagar suscripciones o añadir la tarjeta al teléfono son usos distintos. El comercio puede bloquear una tarjeta prepago. El monedero del país puede rechazar Apple Pay o Google Pay aunque el artículo de pagos diga que el vínculo es posible.',
      featuredHeading: 'Usos que la gente busca',
      featured: [
        { href: '/es/articles/gastar-usdt', title: 'Gastar USDT', text: 'Deposita en la red que muestra la app. El mínimo publicado de USDT es 1,00 en cada red nombrada de la imagen del 21 de julio de 2026.' },
        { href: '/es/articles/redotpay-netflix-chatgpt', title: 'Suscripciones', text: 'Una nota antigua nombra servicios. Una página posterior no repite la lista. El rechazo sigue siendo posible.' },
        { href: '/es/articles/apple-pay-redotpay', title: 'Apple Pay y Google Pay', text: 'Hasta cinco días de sincronización en el artículo de pagos. La mayoría, según esa página, está lista en dos.' },
      ],
      faq: [
        { q: '¿La virtual saca efectivo en un cajero de la región?', a: 'No. El efectivo exige la tarjeta física y un cajero que acepte la red. La comisión de cajero es otra página: 2 % y luego 3 % por encima de 10 000 USD al mes.' },
        { q: '¿México está en la tabla de QR?', a: 'No. SPEI es el aviso del 7 de octubre de 2026, no una fila de la tabla QR.' },
      ],
    },
    comparisons: {
      detail: 'Comparar empieza por si RedotPay puede emitir la tarjeta. Después van las cifras del cuadro del 24 de julio de 2026. Ganar puntos KAST termina el 30 de noviembre de 2026. La página de comisiones sigue sin un porcentaje de puntos. Leído el 8 de noviembre de 2026.',
      featuredHeading: 'Comparar sin un ganador inventado',
      featured: [
        { href: '/es/articles/redotpay-vs-otras-tarjetas', title: 'Otras tarjetas', text: 'Bybit y Crypto.com quedan como enlaces oficiales. No copiamos sus tablas de comisiones.' },
        { href: '/es/articles/opiniones-redotpay', title: 'Opiniones con fuente', text: 'Lo que publica RedotPay, no una nota de un foro.' },
        { href: '/es/articles/redotpay-es-seguro', title: 'Seguridad', text: 'KYT puede retener una operación, congelar una cuenta o rechazar fondos.' },
      ],
      faq: [
        { q: '¿Por qué no hay una tarjeta ganadora?', a: 'Una tarjeta que no puedes abrir no ahorra dinero. Las listas de bloqueo van primero.' },
        { q: '¿Las opiniones son de clientes?', a: 'No. No publicamos reseñas que no hayamos documentado. La página cita el centro de ayuda.' },
      ],
    },
    troubleshooting: {
      detail: 'Un rechazo puede ser el límite que pusiste, un comercio que bloquea prepago, o la línea de 0,5 USD tras tres rechazos gratis. Otra página dice que una compra realmente rechazada no se cobra. No las juntamos.',
      featuredHeading: 'Si el pago falla',
      featured: [
        { href: '/es/articles/tarjeta-redotpay-rechazada', title: 'Tarjeta rechazada', text: 'Separar el tope de la app, el bloqueo del comercio y la comisión de rechazo.' },
        { href: '/es/articles/limites-redotpay', title: 'Límites', text: '100 000 USD por operación y 1 000 000 USD al día en el cuadro, y topes de cajero más bajos.' },
        { href: '/es/articles/redotpay-es-seguro', title: 'Cuenta congelada', text: 'La página KYT habla de retener una transacción, congelar una cuenta o rechazar fondos.' },
      ],
      faq: [
        { q: '¿PayCards puede forzar el pago?', a: 'No. El soporte de la cuenta está en la app de RedotPay.' },
        { q: '¿Cada rechazo cuesta 0,5 USD?', a: 'El cuadro exonera los tres primeros rechazos por tarjeta y mes, y luego cobra 0,5 USD. Eso no es lo mismo que una compra que el comercio no cobró.' },
      ],
    },
  },
  pt: {
    guides: {
      detail: 'Os guias em português citam o centro de ajuda. A Guiné-Bissau está nas quatro listas. Brasil, Portugal, Angola e Moçambique não estão nomeados: isso não é aceite. O aviso de 29 de outubro de 2026 muda a entidade para residentes no Brasil e não publica uma tabela nova de taxas.',
      featuredHeading: 'Guias com fonte',
      featured: [
        { href: '/pt/articles/taxas-redotpay', title: 'Taxas', text: 'Emissão de 10 USD e 100 USD, caixa, e as linhas de 1 % e 1,2 % na seção de transações.' },
        { href: '/pt/articles/paises-redotpay', title: 'Países', text: 'Quatro listas, mais o aviso brasileiro. O aviso ainda não liga o contrato brasileiro.' },
        { href: '/pt/articles/recarregar-redotpay', title: 'Recarga', text: 'Mínimo publicado de 1,00 USDT em cada rede nomeada da imagem de 21 de julho de 2026.' },
      ],
      faq: [
        { q: 'O Pix é uma taxa da tabela de cartão?', a: 'Não. A linha do Brasil no QR é mínimo 0,01 BRL e máximo 22.000 BRL, sem teto diário nem mensal publicado. A confirmação habitual na página de ajuda é em até 10 minutos.' },
        { q: 'A RedotPay Brasil muda as quatro listas?', a: 'O aviso não reescreve as listas de bloqueio. Elas continuam sem nomear o Brasil.' },
      ],
    },
    'use-cases': {
      detail: 'Gastar USDT, pagar um QR Pix ou usar Apple Pay são fluxos diferentes. O Pix da RedotPay não é a linha de 1 % da KAST. O comércio pode recusar um cartão pré-pago.',
      featuredHeading: 'Usos no dia a dia',
      featured: [
        { href: '/pt/articles/redotpay-pix', title: 'Pix', text: 'A célula diária e mensal do Brasil é «/»: a tabela não lista teto. O valor da tela é o que vale.' },
        { href: '/pt/articles/apple-pay-redotpay', title: 'Apple Pay', text: 'A página de pagamentos diz que a virtual pode ser vinculada. A carteira do país pode recusar.' },
        { href: '/pt/articles/caixa-redotpay', title: 'Caixa eletrônico', text: 'Só o cartão físico saca. Três saques por dia e 30 por mês no quadro de limites.' },
      ],
      faq: [
        { q: 'O cartão virtual paga um Pix?', a: 'O fluxo de QR é outro artigo. Não é o mesmo que aproximar um cartão físico num caixa.' },
        { q: 'Posso tratar o Brasil como país aprovado?', a: 'Não. O nome não está nas quatro listas, e ausência não é aceite. O aviso de outubro de 2026 é sobre a entidade local, não uma lista positiva.' },
      ],
    },
    comparisons: {
      detail: 'A comparação começa pela disponibilidade. Ganhar pontos KAST termina em 30 de novembro de 2026. A página de taxas continua sem porcentagem de pontos, e não escolhemos um vencedor. Lido em 8 de novembro de 2026.',
      featuredHeading: 'Comparar com a página citada',
      featured: [
        { href: '/pt/articles/redotpay-vs-kast', title: 'RedotPay e KAST', text: 'PIX a 1 % e SPEI a 0 % nessa página são da KAST, não da RedotPay.' },
        { href: '/pt/articles/opinioes-redotpay', title: 'Opiniões', text: 'O que a RedotPay publica. Sem nota inventada e sem depoimento de cliente.' },
        { href: '/pt/articles/redotpay-e-confiavel', title: 'Confiável?', text: 'KYT pode reter uma transação, congelar uma conta ou recusar fundos. Auditorias são afirmações da empresa.' },
      ],
      faq: [
        { q: 'Por que não há um ranking?', a: 'Um cartão que o aplicativo não emite não é mais barato. As listas de bloqueio vêm antes da tabela de taxas.' },
        { q: 'As taxas da KAST valem para o Pix da RedotPay?', a: 'Não. São produtos diferentes. O Pix da RedotPay está no guia de QR, com os números da página de ajuda de 18 de setembro de 2026.' },
      ],
    },
    troubleshooting: {
      detail: 'Uma recusa pode ser o limite que você definiu, um comércio que bloqueia pré-pago, ou a linha de 0,5 USD depois de três recusas grátis. Outra página diz que uma compra realmente recusada não é cobrada.',
      featuredHeading: 'Se o pagamento falhar',
      featured: [
        { href: '/pt/articles/cartao-redotpay-recusado', title: 'Cartão recusado', text: 'Separar o teto do aplicativo, o bloqueio do comércio e a taxa de recusa.' },
        { href: '/pt/articles/limites-redotpay', title: 'Limites', text: '100.000 USD por operação e 1.000.000 USD por dia no quadro, com tetos de caixa menores.' },
        { href: '/pt/articles/redotpay-e-confiavel', title: 'Conta congelada', text: 'A página KYT descreve reter uma transação para análise, congelar uma conta ou recusar fundos.' },
      ],
      faq: [
        { q: 'A PayCards desbloqueia a conta?', a: 'Não. O suporte do saldo está no aplicativo da RedotPay. Não pedimos senha nem frase de recuperação.' },
        { q: 'Toda recusa custa 0,5 USD?', a: 'O quadro isenta as três primeiras recusas por cartão e mês e depois cobra 0,5 USD. Isso não é a mesma frase da compra que o comércio não cobrou.' },
      ],
    },
  },
  ar: {
    guides: {
      detail: 'هذه الأدلة تنقل أرقام RedotPay المنشورة: 10 دولارات للافتراضية و100 دولار للمادية، وجدول 24 يوليو 2026، وأربع قوائم منع. غياب الاسم ليس موافقة. صفحة الجزائر شرح خطر قانوني وليست مسار تسجيل. البلاستيك لا يُشحن إلى مصر.',
      featuredHeading: 'ابدأ برقم منشور',
      featured: [
        { href: '/articles/redotpay-limits', title: 'حدود الإنفاق والصراف', text: '100,000 دولار للعملية و1,000,000 دولار يومياً في الجدول، وسقوف صراف أقل، وحد يمكنك خفضه من التطبيق.' },
        { href: '/articles/redotpay-physical-card-delivery', title: 'توصيل البطاقة', text: 'قائمة التوصيل تمنع عناوين، ومنها مصر وتونس. المدة المنشورة للعناوين التي يُقبل شحنها.' },
        { href: '/articles/crypto-card-no-kyc', title: 'بدون توثيق', text: 'RedotPay تطلب التحقق. لا نخترع رسوم بطاقة أخرى.' },
      ],
      faq: [
        { q: 'هل الدليل يعني أن البطاقة تعمل في بلدي؟', a: 'لا. دليل الدول ينسخ قوائم المنع. الغياب ليس موافقة، وصفحة الجزائر لا تدعو إلى التسجيل أو الشحن.' },
        { q: 'من أين تأتي الأرقام؟', a: 'من مركز مساعدة RedotPay وصفحات redotpay.com المرتبطة تحت الجدول. المبلغ في التطبيق قبل التأكيد هو الذي يُحسب.' },
      ],
    },
    'use-cases': {
      detail: 'كل استخدام يبقى تحت قيد منشور: التاجر قد يرفض بطاقة مسبقة الدفع أو مرتبطة بكريبتو، وApple Pay يعتمد على محفظة البلد. لا نعد بأن Netflix أو متجراً بعينه سيقبل البطاقة.',
      featuredHeading: 'استخدامات يبحث عنها القارئ',
      featured: [
        { href: '/articles/how-to-spend-usdt', title: 'إنفاق USDT', text: 'أودع على الشبكة التي يعرضها التطبيق. حد USDT المنشور 1.00 على كل شبكة مسماة في صورة 21 يوليو 2026.' },
        { href: '/articles/redotpay-netflix-chatgpt', title: 'الاشتراكات', text: 'ملاحظة أقدم تسمّي خدمات. صفحة أحدث لا تعيد القائمة. الرفض يبقى ممكناً.' },
        { href: '/articles/dcc-pay-in-local-currency-abroad', title: 'عملة التاجر في السفر', text: 'ادفع بعملة البطاقة عندما يعرض الجهاز عملة أخرى. هذا ليس رسم إصدار.' },
      ],
      faq: [
        { q: 'هل الافتراضية تسحب من الصراف؟', a: 'لا. النقد يحتاج البطاقة المادية، ورسمها المنشور 100 دولار مرة واحدة، وإذا كان العنوان في قائمة التوصيل فلا يُشحن البلاستيك.' },
        { q: 'هل نشرح الشحن للمقيم في الجزائر؟', a: 'لا. صفحة الجزائر خطر قانوني بموجب القانون 25-10، بلا خطوات تسجيل أو إيداع.' },
      ],
    },
    comparisons: {
      detail: 'المقارنة تبدأ بإمكانية الإصدار ثم بأرقام الجدول. لا نخترع رسوم Bybit أو Crypto.com. كسب نقاط KAST ينتهي في 30 نوفمبر 2026. صفحة الرسوم ما زالت بلا نسبة نقاط. قُرئ في 8 نوفمبر 2026.',
      featuredHeading: 'مقارنة بمصدرها',
      featured: [
        { href: '/articles/best-crypto-card', title: 'كيف تختار', text: 'قائمة تحقق: التوفر، والرسوم المنشورة، ومن يحفظ الرصيد، قبل أي جملة «الأفضل».' },
        { href: '/articles/redotpay-vs-kast', title: 'RedotPay وKAST', text: 'أرقام كل شركة من صفحتها. لا فائز.' },
        { href: '/articles/redotpay-vs-other-crypto-cards', title: 'بطاقات أخرى', text: 'روابط رسمية للمنافسين بلا نسخ جداول لم نقرأها.' },
      ],
      faq: [
        { q: 'لماذا لا يوجد ترتيب؟', a: 'بطاقة لا تُصدر لك ليست أوفر. قوائم المنع والتوثيق قبل السعر.' },
        { q: 'هل آراء العملاء هنا؟', a: 'لا. لا ننشر تقييماً لم نوثقه. الصفحات تقتبس مركز المساعدة.' },
      ],
    },
    troubleshooting: {
      detail: 'هذا القسم فيه مقالات منشورة، لذلك الصفحة قابلة للفهرسة. الرفض ليس سبباً واحداً: حد ضبطته أنت، أو تاجر يحجب البطاقة، أو سطر 0.5 دولار بعد ثلاث عمليات مرفوضة مجانية. صفحة أخرى تقول إن عملية رُفضت فعلاً لا تُحصَّل. لا ندمج الجملتين.',
      featuredHeading: 'إذا فشل الدفع',
      featured: [
        { href: '/articles/redotpay-card-declined', title: 'البطاقة مرفوضة', text: 'افصل بين حد التطبيق، وحجب التاجر، ورسم الرفض في صورة الجدول.' },
        { href: '/articles/kyc-verification-rejected-fix', title: 'رفض التوثيق', text: 'ما تنشره صفحة الهوية، بلا مدة واحدة لكل الدول.' },
        { href: '/articles/wrong-network-crypto-transfer', title: 'شبكة خاطئة', text: 'تحويل على غير الشبكة المعروضة قد يضيع. لا تدفع لوسطاء استرجاع.' },
      ],
      faq: [
        { q: 'هل تستطيع PayCards إلغاء الرفض؟', a: 'لا. دعم الرصيد والبطاقة داخل تطبيق RedotPay. لا نطلب كلمة المرور ولا عبارة الاسترداد.' },
        { q: 'هل كل رفض يكلف 0.5 دولار؟', a: 'صورة الرسوم تعفي أول ثلاث عمليات مرفوضة لكل بطاقة في الشهر ثم 0.5 دولار. هذا ليس نص الصفحة التي تقول إن شراءً رُفض فعلاً لا يُحصَّل.' },
      ],
    },
  },
} as const;

export const articlesIndexCopy = {
  ar: {
    heading: 'أدلة يفتحها القارئ بعد السؤال',
    lead: 'ليست ترتيباً. ابدأ بدليل الدول إن لم تتأكد أن التطبيق سيفتح الحساب، ثم الرسوم والحدود. صفحة الجزائر خطر قانوني وليست ضمن مسار التسجيل.',
    items: [
      { href: '/articles/crypto-card-no-kyc', title: 'بطاقة بلا توثيق', text: 'RedotPay تطلب التحقق. الصفحة تقول ما الذي يسقط بهذا الشرط.' },
      { href: '/articles/how-to-spend-usdt', title: 'إنفاق USDT', text: 'الشبكة التي يعرضها التطبيق، ثم الدفع حيث تُقبل الشبكة.' },
      { href: '/articles/best-crypto-card', title: 'اختيار البطاقة', text: 'التوفر والرسوم المنشورة قبل أي وصف بأنها الأفضل.' },
      { href: '/articles/redotpay-limits', title: 'الحدود', text: 'سقف العملية واليوم والصراف، والحد الذي تضبطه أنت.' },
      { href: '/articles/redotpay-physical-card-delivery', title: 'التوصيل', text: 'من لا يصله البلاستيك، ومدة الشحن عندما يُقبل العنوان.' },
      { href: '/articles/redotpay-card-declined', title: 'الدفع المرفوض', text: 'حد التطبيق، وحجب التاجر، وسطر رسم الرفض، كل منها على حدة.' },
    ],
    faqHeading: 'قبل أن تفتح دليلاً',
    faq: [
      { q: 'هل هذه الصفحات تطبيق RedotPay؟', a: 'لا. PayCards دليل مستقل. التسجيل، إن اخترته، يبقى على RedotPay عبر مسارات الإحالة الموجودة.' },
      { q: 'أي صفحة إذا لم أجد بلدي؟', a: 'دليل الدول. الغياب ليس موافقة. الجزائر لها صفحة خطر قانوني بلا خطوات شحن.' },
    ],
  },
  en: {
    heading: 'Guides readers open next',
    lead: 'The list below is not a ranking. Each link is a page with a source and a date. Start with countries if you are unsure the app will open, then fees and limits.',
    items: [
      { href: '/en/articles/crypto-card-no-kyc', title: 'Cards without KYC', text: 'What RedotPay’s identity rule rules out.' },
      { href: '/en/articles/best-crypto-card', title: 'Choosing a card', text: 'Availability and published fees before any “best” label.' },
      { href: '/en/articles/redotpay-limits', title: 'Limits', text: 'Chart caps, ATM caps, and the limit you set.' },
      { href: '/en/articles/virtual-card-online-payments', title: 'Virtual card online', text: 'The 10 USD issuance fee and merchant blocks.' },
      { href: '/en/articles/redotpay-apple-pay-google-pay', title: 'Apple Pay and Google Pay', text: 'What the payments article actually promises.' },
      { href: '/en/articles/redotpay-physical-card-delivery', title: 'Delivery', text: 'Who does not receive plastic, and the timing pages for the rest.' },
    ],
    faqHeading: 'Before you open a guide',
    faq: [
      { q: 'Are these pages the RedotPay app?', a: 'No. PayCards is an independent guide. Signup, when you choose it, stays on RedotPay via the referral paths already on the site.' },
      { q: 'Which page if my country is missing?', a: 'The country guide. A missing name is not approval. The United States is on the block lists and is not a target of these pages.' },
    ],
  },
  fr: {
    heading: 'Guides à ouvrir selon la question',
    lead: 'Pas un classement. Les lecteurs en France, en Belgique ou en Suisse commencent par les pays : l’absence sur une liste n’est pas un accord. Les résidents du Maroc ne reçoivent pas de carte.',
    items: [
      { href: '/fr/articles/pays-redotpay', title: 'Pays', text: 'Quatre listes, dont le Maroc et la Tunisie.' },
      { href: '/fr/articles/frais-redotpay', title: 'Frais', text: '10 USD, 100 USD, caisse et conversion.' },
      { href: '/fr/articles/depenser-usdt', title: 'Dépenser des USDT', text: 'Réseau affiché dans l’app, puis paiement.' },
      { href: '/fr/articles/carte-virtuelle-paiement-en-ligne', title: 'Carte virtuelle', text: 'Paiement en ligne, pas de cash.' },
      { href: '/fr/articles/apple-pay-redotpay', title: 'Apple Pay', text: 'Ajout possible selon l’article, refus du portefeuille encore possible.' },
      { href: '/fr/articles/redotpay-fiable', title: 'Fiabilité', text: 'KYT, licences citées comme déclarations, pas de note.' },
    ],
    faqHeading: 'Avant de choisir un guide',
    faq: [
      { q: 'Le site dit-il que la carte marche en France ?', a: 'Non. Nous ne transformons pas une absence de liste en autorisation.' },
      { q: 'Où est le code de parrainage ?', a: 'Dans le guide du code. Il se saisit à la création du compte, pas après.' },
    ],
  },
  es: {
    heading: 'Guías según la pregunta',
    lead: 'No es un ranking. Si buscas la tarjeta para España o Latinoamérica, la guía de países va primero. Cuba, Nicaragua y Venezuela están en las listas de bloqueo. Una ausencia no es una aceptación.',
    items: [
      { href: '/es/articles/paises-redotpay', title: 'Países', text: 'Cuatro listas y lo que no significan.' },
      { href: '/es/articles/gastar-usdt', title: 'Gastar USDT', text: 'Red que muestra la app y mínimo publicado.' },
      { href: '/es/articles/tarjeta-virtual-pagos-online', title: 'Tarjeta virtual', text: '10 USD una vez, y comercios que pueden bloquear prepago.' },
      { href: '/es/articles/envio-tarjeta-redotpay', title: 'Envío', text: 'Plástico solo si la dirección no está bloqueada.' },
      { href: '/es/articles/tarjeta-redotpay-rechazada', title: 'Rechazo', text: 'Tope, comercio y línea de 0,5 USD, por separado.' },
      { href: '/es/articles/redotpay-es-seguro', title: 'Seguridad', text: 'Retención, cuenta congelada o fondos rechazados.' },
    ],
    faqHeading: 'Antes de abrir una guía',
    faq: [
      { q: '¿Estas páginas se dirigen a Estados Unidos?', a: 'No. RedotPay no emite tarjeta a residentes de Estados Unidos y la app no abre si estás allí.' },
      { q: '¿Dónde está el código de referido?', a: 'En la guía del código. Se escribe al crear la cuenta.' },
    ],
  },
  pt: {
    heading: 'Guias pela pergunta',
    lead: 'Não é um ranking. Para leitores no Brasil, em Portugal ou na África lusófona, a página de países vem primeiro. A Guiné-Bissau está nas listas. Brasil, Portugal, Angola e Moçambique não estão nomeados.',
    items: [
      { href: '/pt/articles/paises-redotpay', title: 'Países', text: 'Quatro listas e o aviso de 29 de outubro de 2026 para residentes no Brasil.' },
      { href: '/pt/articles/taxas-redotpay', title: 'Taxas', text: 'Emissão, caixa e conversão publicados.' },
      { href: '/pt/articles/recarregar-redotpay', title: 'Recarga', text: 'Rede mostrada no aplicativo e mínimo de USDT.' },
      { href: '/pt/articles/caixa-redotpay', title: 'Caixa', text: 'Só o físico saca, com os tetos do quadro.' },
      { href: '/pt/articles/limites-redotpay', title: 'Limites', text: 'Teto da operação, teto diário e caixa.' },
      { href: '/pt/articles/redotpay-e-confiavel', title: 'Confiável?', text: 'O que a página KYT permite à empresa fazer com a conta.' },
    ],
    faqHeading: 'Antes de abrir um guia',
    faq: [
      { q: 'O site diz que o cartão funciona no Brasil?', a: 'Não. A ausência nas listas não é aceite. O aviso de outubro de 2026 descreve a entidade local, sem tabela nova de taxas.' },
      { q: 'Onde está o código de indicação?', a: 'No guia do código. Ele entra na criação da conta, não depois.' },
    ],
  },
} as const;
