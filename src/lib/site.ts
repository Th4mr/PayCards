import { ANALYTICS } from '../config';

type Props = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Props }) => void;
    umami?: { track: (event: string, data?: Props) => void };
  }
}

/** يرسل الحدث لأي أداة إحصائيات موجودة في الصفحة */
export function track(event: string, props: Props) {
  try {
    window.dataLayer?.push({ event, ...props });
    window.gtag?.('event', event, props);
    window.plausible?.(event, { props });
    window.umami?.track(event, props);
  } catch {
    /* لا نكسر الصفحة بسبب الإحصائيات */
  }
}

function store(kind: 'local' | 'session', key: string, val?: string) {
  try {
    const s = kind === 'local' ? localStorage : sessionStorage;
    if (val === undefined) return s.getItem(key);
    s.setItem(key, val);
  } catch {
    return null;
  }
  return null;
}

export function initSite() {
  const root = document.documentElement;
  const page = document.body.dataset.page || location.pathname;

  // 1) تتبّع أزرار الإحالة: حدث واحد مفوَّض لكل الروابط ذات data-cta
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element).closest<HTMLElement>('[data-cta]');
      if (a) {
        track(ANALYTICS.eventName, {
          page,
          position: a.dataset.ctaPosition || 'unknown',
          label: (a.textContent || '').trim().slice(0, 60),
        });
      }
    },
    { capture: true },
  );

  // 3) الوضع الداكن/الفاتح
  document.querySelectorAll('[data-theme-toggle]').forEach((b) =>
    b.addEventListener('click', () => {
      const dark = root.classList.toggle('dark');
      store('local', 'pc-theme', dark ? 'dark' : 'light');
    }),
  );

  // 4) إغلاق الشريط العلوي والزر الثابت
  document.querySelectorAll<HTMLElement>('[data-dismiss]').forEach((b) =>
    b.addEventListener('click', () => {
      const id = b.dataset.dismiss;
      if (id === 'topbar') {
        root.classList.add('topbar-off');
        store('local', 'pc-topbar', '1');
      } else if (id === 'sticky-cta') {
        root.classList.add('sticky-off');
        store('session', 'pc-sticky', '1');
      }
    }),
  );

  // 5) الزر الثابت على الجوال: يظهر بعد تمرير 30% من الصفحة
  const sticky = document.getElementById('sticky-cta');
  if (sticky) {
    const focusables = sticky.querySelectorAll<HTMLElement>('a,button');
    let shown = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const show = max > 0 && scrollY / max >= 0.3;
      if (show !== shown) {
        shown = show;
        sticky.classList.toggle('translate-y-full', !show);
        sticky.setAttribute('aria-hidden', String(!show));
        focusables.forEach((f) => (f.tabIndex = show ? 0 : -1));
      }
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 6) حركة الظهور عند التمرير
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // 7) ميلان البطاقة ثلاثية الأبعاد مع حركة المؤشر (أجهزة المؤشر الدقيق فقط)
  const card = document.querySelector<HTMLElement>('[data-tilt]');
  if (card && matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const host = card.parentElement!;
    host.addEventListener('pointermove', (e) => {
      const r = host.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${(x * 18).toFixed(2)}deg`);
      card.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
    });
    host.addEventListener('pointerleave', () => {
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
      card.style.removeProperty('--gx');
    });
  }
}
