import { REFERRAL_PT } from '../config';

export const trustItems = [
  { icon: 'phone', text: 'Apple Pay e Google Pay, segundo a central de ajuda' },
  { icon: 'card', text: 'Cartão virtual e cartão físico' },
  { icon: 'coins', text: 'USDT, USDC e outros ativos listados' },
  { icon: 'globe', text: 'Onde as grandes redes de cartão são aceitas' },
];

export const features = [
  {
    icon: 'globe',
    title: 'Pagar online e na loja',
    text: 'Gastar um saldo em cripto onde a rede do cartão passa, sem enviar o valor antes para um banco.',
  },
  {
    icon: 'phone',
    title: 'Apple Pay e Google Pay',
    text: 'A página de pagamentos diz que um cartão virtual pode ser vinculado ao Apple Pay, ao Google Pay ou ao PayPal. A carteira do seu país pode recusar mesmo assim.',
  },
  {
    icon: 'coins',
    title: 'Recarregar com stablecoins',
    text: 'Deposite USDT, USDC ou outro ativo que o aplicativo liste. Uma stablecoin oscila menos que o BTC entre o depósito e o pagamento.',
  },
  {
    icon: 'bolt',
    title: 'Um cartão virtual depois do KYC',
    text: 'Depois da verificação você pode emitir um cartão virtual para pagar online. O cartão físico é um pedido à parte de 100 USD.',
  },
  {
    icon: 'cash',
    title: 'Dinheiro no caixa eletrônico, só com o físico',
    text: 'A página do caixa eletrônico fala do cartão físico, em caixas que aceitam as grandes redes. O virtual não saca dinheiro.',
  },
  {
    icon: 'shield',
    title: 'O saldo fica com a RedotPay',
    text: 'A RedotPay guarda os ativos. Deixe no aplicativo só o que você pretende gastar e ative as opções de segurança.',
  },
];

export const steps = [
  { icon: 'download', title: 'Abrir o convite', text: 'O botão leva à página de convite em português da RedotPay e, de lá, ao aplicativo oficial de iOS ou Android.' },
  { icon: 'user', title: 'Criar a conta', text: 'Cadastre-se com um e-mail ou um telefone. Se a tela pedir, digite o código de indicação antes de a conta existir.' },
  { icon: 'id', title: 'Verificar a identidade', text: 'Envie o documento que o aplicativo pede e uma selfie. A central de ajuda não publica um prazo único para cada país.' },
  { icon: 'wallet', title: 'Recarregar e pagar', text: 'Deposite na rede que o aplicativo mostra, emita o cartão e pague online ou com o celular.' },
];

export const useCases = [
  { icon: 'card', title: 'O que é o cartão', text: 'Virtual ou físico, programas Visa e a cifra de 130 milhões de estabelecimentos.', href: '/pt/articles/opinioes-redotpay' },
  { icon: 'coins', title: 'As taxas', text: 'Emissão, caixa eletrônico, câmbio e as linhas que a RedotPay não publica.', href: '/pt/articles/taxas-redotpay' },
  { icon: 'globe', title: 'Os países', text: 'KYC, acesso ao aplicativo e quem pode receber um cartão. Guiné-Bissau está nas listas.', href: '/pt/articles/paises-redotpay' },
  { icon: 'cash', title: 'Saque no caixa', text: 'Taxas de saque em USD e HKD, e por que o virtual não saca.', href: '/pt/articles/caixa-redotpay' },
];

export const homeFaq = [
  {
    q: 'A PayCards é o site oficial da RedotPay?',
    a: 'Não. A PayCards é um guia independente e não faz parte da RedotPay. Alguns links são de indicação. Podemos receber uma comissão se você se cadastrar, sem custo extra para você. O cadastro é sempre feito na RedotPay.',
  },
  {
    q: 'O cartão RedotPay está disponível no meu país?',
    a: 'Residentes dos Estados Unidos não podem receber cartão virtual nem físico, quem está lá não consegue abrir o aplicativo e cidadãos dos Estados Unidos não concluem o KYC. São três páginas de ajuda, conferidas em 24 de outubro de 2026. Este guia é para leitores em português no Brasil, em Portugal e na África lusófona. Estas páginas não se dirigem aos Estados Unidos, excluídos pela RedotPay. Guiné-Bissau aparece nas listas de nacionalidade, localização, emissão e envio. Brasil, Portugal, Angola e Moçambique não estão nomeados. Cabo Verde, São Tomé e Príncipe e Timor-Leste também não estavam nessas quatro páginas. Um país que não aparece não é uma aceitação. Consulte o guia de países.',
  },
  {
    q: 'Qual é o código de indicação RedotPay?',
    a: `O código neste site é ${REFERRAL_PT.code}. Na tela de cadastro, toque em Referral Code (Optional) e digite-o antes de a conta existir. A RedotPay diz que um código não é acrescentado depois. A recompensa de 5 USD é um crédito de gasto para contas novas. O código não a libera e não paga as taxas do cartão.`,
  },
  {
    q: 'É preciso verificar a identidade?',
    a: 'Sim. Emitir um cartão exige verificação de identidade. As páginas consultadas não publicam um prazo único nem uma lista de documentos válida para cada país. O aplicativo mostra os documentos que aceita.',
  },
  {
    q: 'Quais criptomoedas posso depositar?',
    a: 'A página de serviços (24 de julho de 2026) lista USDT, USDC, BTC, ETH, BNB, SOL, TRX, XRP, SUI e S. Artigos posteriores acrescentam RLUSD, BCH, LTC e GRAM. O artigo de redes publica mínimos, inclusive 1,00 USDT em cada rede listada. Enviar por outra rede pode fazer perder os fundos. Confirme a linha no aplicativo.',
  },
  {
    q: 'Quanto custa o cartão RedotPay?',
    a: 'O cartão virtual custa 10 USD uma vez. O cartão físico custa 100 USD uma vez. O cartão padrão não tem taxa mensal nem anual na página de ajuda consultada. As taxas de caixa eletrônico e de conversão vão à parte. A tabela completa, com as fontes, está na página de taxas. O valor do aplicativo antes de confirmar é o que vale.',
  },
  {
    q: 'A RedotPay funciona com Apple Pay e Google Pay?',
    a: 'A página de pagamentos diz que o cartão virtual pode ser vinculado ao Apple Pay, ao Google Pay ou ao PayPal. O cadastro pode falhar conforme o programa do cartão e o país da carteira. Se o aplicativo não tiver botão, tente adicionar o cartão no aplicativo da carteira.',
  },
  {
    q: 'Cadastrar-se pela PayCards sai mais caro?',
    a: 'Não. Você se cadastra na RedotPay e paga as taxas da RedotPay. Nossos links são de indicação. Uma comissão, se a RedotPay a pagar, não muda o seu preço.',
  },
];
