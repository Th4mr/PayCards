/**
 * Rótulos em português do Brasil das mesmas linhas de taxas da RedotPay.
 * Os números e os identificadores de fonte continuam em src/data/redotpay.ts.
 */
import { SOURCES, feeRows, type SourceId } from './redotpay';

export const REVIEWED_LABEL_PT = '25 de outubro de 2026';

export const SOURCE_META_PT: Record<SourceId, { title: string; pageDate: string }> = {
  issuance: { title: 'Há taxas para obter um cartão?', pageDate: '27 de julho de 2026' },
  physical: { title: 'Como obter um cartão físico?', pageDate: '30 de julho de 2026' },
  inactivity: { title: 'Há taxas se eu não usar meu cartão RedotPay por um mês?', pageDate: '28 de julho de 2026' },
  atm: { title: 'Posso sacar num caixa eletrônico e há taxas?', pageDate: '27 de julho de 2026' },
  merchants: { title: 'Quais compras têm taxa de transação?', pageDate: '3 de setembro de 2026' },
  replaceVirtual: { title: 'Substituir o cartão virtual', pageDate: '24 de julho de 2026' },
  reward: { title: 'Como usar a recompensa de cadastro de 5 USD', pageDate: '26 de julho de 2026' },
  referral: { title: 'Como usar um código de indicação', pageDate: '26 de julho de 2026' },
  pro: { title: 'Primeiros passos com o RedotPay Pro', pageDate: '4 de setembro de 2026' },
  where: { title: 'Onde usar meu cartão RedotPay?', pageDate: '4 de setembro de 2026' },
  terms: { title: 'Condições do cartão RedotPay', pageDate: 'condições publicadas' },
  services: { title: 'Serviços e funções da RedotPay', pageDate: '24 de julho de 2026' },
  deposits: { title: 'Criptomoedas, redes e depósitos mínimos', pageDate: '21 de julho de 2026' },
  payments: { title: 'Como pagar com meu cartão RedotPay?', pageDate: 'página de ajuda' },
  unsupported: { title: 'Países e regiões não aceitos', pageDate: '28 de agosto de 2026' },
  delivery: { title: 'Restrições de envio do cartão', pageDate: '21 de julho de 2026' },
  location: { title: 'Restrições de acesso conforme a localização', pageDate: '28 de agosto de 2026' },
  issuanceBlock: { title: 'Restrições de emissão de cartão', pageDate: '28 de agosto de 2026' },
  depositHow: { title: 'Como depositar cripto na minha conta RedotPay?', pageDate: '28 de julho de 2026' },
  limits: { title: 'Limites e taxas do cartão RedotPay', pageDate: '24 de julho de 2026' },
  sg: { title: 'Página do programa de Singapura', pageDate: 'página de produto' },
};

const PT_ROWS: Record<string, { item: string; value: string; detail: string }> = {
  'إصدار البطاقة الافتراضية': {
    item: 'Emissão do cartão virtual',
    value: '10 USD, uma vez',
    detail: 'É cobrado do saldo na emissão. A recompensa de 5 USD não paga esta taxa.',
  },
  'إصدار البطاقة المادية': {
    item: 'Emissão do cartão físico',
    value: '100 USD, uma vez',
    detail: 'O botão do aplicativo mostra «Apply for card • 100 USD». O pagamento confirma o pedido, e a página de ajuda diz que não se cancela.',
  },
  'شحن البطاقة المادية': {
    item: 'Envio do cartão físico',
    value: 'Correio padrão isento na tabela; DHL no pagamento',
    detail: 'O artigo do pedido (30 de julho de 2026) cita os 100 USD e não lista o porte. A tabela de taxas da página de limites (atualizada em 24 de julho de 2026) marca Standard Mail como isento (Waived) e DHL Express como variável conforme o país, calculado no pagamento, e essa tabela de taxas está datada de 1º de dezembro de 2025. A tabela de limites da mesma página não tem data própria. O artigo de prazos (22 de julho de 2026) diz: DHL em geral de 3 a 10 dias, correio padrão em geral de 5 a 30 dias. O valor que o pagamento mostra é o que se cobra.',
  },
  'رسوم شهرية أو سنوية للبطاقة العادية': {
    item: 'Taxa mensal ou anual do cartão padrão',
    value: 'Nenhuma',
    detail: 'A RedotPay diz que não cobra taxa de gestão, mensal nem anual. O RedotPay Pro é opcional e fica à parte.',
  },
  'معاملة بعملة البطاقة': {
    item: 'Transação na moeda do cartão',
    value: 'Sem taxa',
    detail: 'Como na tabela da página de saque no caixa eletrônico.',
  },
  'معاملة بعملة أخرى': {
    item: 'Transação em outra moeda',
    value: '1,2 %',
    detail: '',
  },
  'تحويل العملات الرقمية': {
    item: 'Conversão de criptomoedas',
    value: '1 %',
    detail: '',
  },
  'معاملة صغيرة': {
    item: 'Transação pequena',
    value: '0,2 USD depois de 5 grátis',
    detail:
      'Na tabela de taxas do gráfico de limites (a imagem marca vigência desde 1 de dezembro de 2025): as primeiras 5 operações por cartão no mês de 1,00 USD ou menos são isentas, depois 0,2 USD. É uma autorização pequena, não uma taxa de recusa.',
  },
  'عملية مرفوضة': {
    item: 'Transação recusada',
    value: '0,5 USD depois de 3 grátis',
    detail:
      'A mesma tabela isenta as primeiras 3 recusas por cartão no mês, depois 0,5 USD. Exemplos: saldo insuficiente, cartão congelado, cartão perdido, dados incorretos. A lista não é exaustiva. Outra página diz que o valor de uma compra realmente recusada não é cobrado, e que uma retenção pendente costuma ser liberada em 2 a 5 dias.',
  },
  'سحب الصراف — بطاقة بالدولار': {
    item: 'Saque no caixa — cartão em USD',
    value: '2 % até 10.000 USD no mês, depois 3 %',
    detail: 'A taxa mais alta vale para o valor acima de 10.000 USD no mês. A taxa do operador do caixa vai à parte.',
  },
  'سحب الصراف — بطاقة بهونغ كونغ دولار': {
    item: 'Saque no caixa — cartão em HKD',
    value: '2 %',
    detail: 'Taxa de saque da RedotPay. O operador do caixa pode acrescentar uma taxa que aparece na tela.',
  },
  'تجار محددون': {
    item: 'Estabelecimentos selecionados',
    value: '1,5 %, mínimo de 0,50 USD',
    detail:
      'As 3 primeiras transações elegíveis por cartão e por mês civil ficam isentas. O contador volta a zero no dia 1 às 00:00 UTC. Lista atual: Gulf Health Counsel, Free Fire, PUBG Mobile, Brawl Stars, eFootball, Facebook Ads, Discord.',
  },
  'استبدال البطاقة الافتراضية': {
    item: 'Substituição do cartão virtual',
    value: '5 USD na primeira vez, depois 10 USD',
    detail: 'Pelo menos 31 dias entre duas substituições. As recompensas não pagam esta taxa. O número do cartão se mantém; o CVV e a data de validade mudam.',
  },
  'استبدال البطاقة المادية': {
    item: 'Substituição do cartão físico',
    value: 'Sem cifra na página de substituição consultada',
    detail: 'A página de substituição publicada trata do cartão virtual. Confira a oferta no aplicativo antes de confirmar.',
  },
  'حدود الإنفاق والسحب العامة': {
    item: 'Limites gerais de gasto e de saque',
    value: '100.000 USD por operação, 1.000.000 USD por dia',
    detail: 'As duas colunas da tabela de limites mostram estes tetos de gasto. Essa tabela de limites não tem data própria; a página foi atualizada em 24 de julho de 2026. A linha «em vigor desde 1º de dezembro de 2025» pertence à tabela de taxas, não a estes tetos. Os tetos de caixa eletrônico vão à parte: 3.750 USD ou 23.000 HKD por dia, e 50.000 USD ou 75.000 HKD por mês, com uma nota de que alguns cartões USD estão em 3.000 por dia e 10.000 por mês. Os saques se limitam a 3 por dia e 30 por mês. O limite que você define no aplicativo pode ser mais baixo.',
  },
  'مكافأة التسجيل': {
    item: 'Recompensa de cadastro',
    value: '5 USD, só gasto',
    detail: 'Válida por 30 dias a partir do recebimento. Serve para compras quando o cartão está ativo. Não paga as taxas de emissão nem de substituição.',
  },
  'RedotPay Pro الشهري (اختياري)': {
    item: 'RedotPay Pro mensal (opcional)',
    value: '12,90 USD por mês',
    detail: 'Não reembolsável. Isenção única da taxa do cartão virtual (10 USD), mais 3 % em compras com Apple Pay e Google Pay, até 18 USD por mês.',
  },
  'RedotPay Pro السنوي (اختياري)': {
    item: 'RedotPay Pro anual (opcional)',
    value: '129 USD por ano',
    detail:
      'Não reembolsável. Isenção única da taxa do cartão físico (100 USD), o mesmo reembolso até 18 USD e uma isenção das taxas de caixa eletrônico da RedotPay até 1.000 USD por mês. As taxas do operador do caixa não estão incluídas.',
  },
};

export const FX_SCOPE_NOTE_PT =
  'A taxa de 1 % na conversão de criptomoedas e a de 1,2 % numa transação em moeda diferente da do cartão são taxas gerais de transação. Estão na seção 2, Transactions, do gráfico de limites e taxas (página atualizada em 24 de julho de 2026), e não como uma linha só do caixa eletrônico. Compare o valor debitado no aplicativo.';

export const feeRowsPt = feeRows.map((row) => {
  const copy = PT_ROWS[row.item];
  if (!copy) throw new Error(`Missing Portuguese fee row for: ${row.item}`);
  const detail =
    row.item === 'معاملة بعملة أخرى' || row.item === 'تحويل العملات الرقمية' ? FX_SCOPE_NOTE_PT : copy.detail;
  return { ...row, item: copy.item, value: copy.value, detail };
});

export function sourcePt(id: SourceId) {
  return { ...SOURCE_META_PT[id], url: SOURCES[id].url };
}
