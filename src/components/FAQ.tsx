import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null!);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const [sectionRef, inView] = useInView(0.05);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-lines opacity-70" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-tr opacity-40" />
      <div className="absolute inset-0 bg-core-radiant opacity-20" />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '20%', t: '25%', s: 7, d: '0s', du: '11s' },
          { l: '72%', t: '55%', s: 8, d: '2s', du: '13s' },
          { l: '48%', t: '75%', s: 6, d: '1.5s', du: '10s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${10 + i * 18}%`, top: `${15 + i * 14}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.5}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[38%] right-[8%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[25%] left-[12%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-9s' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            {t('faq.faq')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '100ms' }}>
            {t('faq.frequentlyAsked')} <span className="gradient-text">{t('faq.questions')}</span>
          </h2>
          <p className={`text-slate-600 dark:text-slate-400 text-lg transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
            {t('faq.description')}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === idx
                  ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-500 shadow-lg shadow-emerald-500/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + idx * 80}ms` }}
            >
              <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${open === idx ? 'opacity-100' : ''}`}>
                <div className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/5 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1.5s] ease-in-out" />
              </div>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group active:scale-[0.99] transition-transform duration-150"
              >
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{faq.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === idx
                      ? 'bg-emerald-500 text-white rotate-180'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className="transition-all duration-400 ease-in-out overflow-hidden"
                style={{ maxHeight: open === idx ? '300px' : '0', opacity: open === idx ? 1 : 0 }}
              >
                <div className="px-5 sm:px-6 pb-6">
                  <div className="border-l-2 border-emerald-500 pl-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
