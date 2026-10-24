/**
 * يحوّل النص {{تحقق: تعليق}} (في ملفات البيانات والـ frontmatter) إلى علامة مرئية.
 * يُستخدم مع set:html لذلك يُهرَّب النص أولاً.
 */
export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

import { SHOW_VERIFY_MARKERS } from '../config';

const MARKER = /\s*\{\{تحقق(?::\s*([^}]*))?\}\}/g;

export function renderVerify(s: string): string {
  if (!SHOW_VERIFY_MARKERS) {
    // خلية لا تحوي سوى علامة داخلية: عبارة مكتملة لا تبدو كحقل ناقص
    if (!s.replace(MARKER, '').trim()) return '<span class="text-muted" data-verify-hidden>يظهر في التطبيق قبل التأكيد</span>';
    s = s.replace(MARKER, '');
  }
  return escapeHtml(s)
    .replace(/\{\{تحقق(?::\s*([^}]*))?\}\}/g, (_m, note = '') => {
      const n = String(note).trim() || 'قيمة قابلة للتغيّر';
      return `<span class="verify" data-verify="${n}" title="تحقق: ${n}">{{تحقق}}</span>`;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-fg">$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener" target="_blank" class="text-accent-fg underline">$1</a>');
}
