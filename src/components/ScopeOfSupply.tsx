import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

import ScrollRevealHeading from './ScrollRevealHeading';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function ScopeOfSupply() {
  const { t } = useLanguage();
  const [sectionRef, inView] = useInView(0.1);
  const [rowsVisible, setRowsVisible] = useState(false);
  const [tagsVisible, setTagsVisible] = useState(false);

  const rows = [
    { item: 'Solar PV Panels (N-Type Topcon Bifacial 570/580wp)', supply: true, works: true, brand: 'KSE Bifacial DCR' },
    { item: 'Inverter (3.3KVA On Grid String Inverter)', supply: true, works: true, brand: 'KSE' },
    { item: 'Module Mounting Structure (MMS) - GI/MS', supply: true, works: true, brand: 'Fortune Hotdeep GI' },
    { item: 'MMS Foundation (If Required)', supply: true, works: true, brand: 'Reputed Make' },
    { item: 'Connectors and Harness', supply: true, works: true, brand: 'Reputed Make (MC4 Compatible)' },
    { item: 'DC & AC Cables (UV Resistant, Fire Resistant)', supply: true, works: true, brand: 'Waacab / Polycab' },
    { item: 'Electrical & Electronic Earthing System', supply: true, works: true, brand: 'Chemical Earthing - Copper' },
    { item: 'Lightning Protection System / Arrestor', supply: true, works: true, brand: 'Copper Bonded / Downconductor' },
    { item: 'ACDB / DCDB Distribution Boards', supply: true, works: true, brand: 'Schneider / Finder' },
    { item: 'Power Evacuation at 230V', supply: true, works: true, brand: 'Complete Setup' },
  ];

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setRowsVisible(true), 300);
    const t2 = setTimeout(() => setTagsVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />
      <div className="absolute inset-0 bg-core-radiant" />

      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '15%', t: '25%', s: 6, d: '0s', du: '11s' },
          { l: '45%', t: '70%', s: 8, d: '2s', du: '13s' },
          { l: '75%', t: '15%', s: 5, d: '3.5s', du: '10s' },
          { l: '85%', t: '55%', s: 7, d: '1s', du: '12s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${8 + i * 16}%`, top: `${12 + (i * 13) % 76}%`, width: `${1.5 + (i % 2) * 0.5}px`, height: `${1.5 + (i % 2) * 0.5}px`, animationDelay: `${i * 0.35}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[25%] right-[8%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[35%] left-[10%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-8s' }} />

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-4 sm:p-10 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-500">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              {t('scope.supply')}
            </div>
            <ScrollRevealHeading
              as="h3"
              className="justify-center text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2"
              segments={[
                { text: t('scope.detailed') },
                { text: t('scope.scopeOfSupply'), accent: true },
              ]}
            />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t('scope.description')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm min-w-[650px]">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white relative overflow-hidden">
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left font-semibold text-xs uppercase tracking-wider rounded-tl-2xl relative z-10 whitespace-nowrap">{t('scope.hash')}</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left font-semibold text-xs uppercase tracking-wider relative z-10 whitespace-nowrap">{t('scope.component')}</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-center font-semibold text-xs uppercase tracking-wider relative z-10 whitespace-nowrap">{t('scope.tableHeaderSupply')}</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-center font-semibold text-xs uppercase tracking-wider relative z-10 whitespace-nowrap">{t('scope.works')}</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left font-semibold text-xs uppercase tracking-wider rounded-tr-2xl relative z-10 whitespace-nowrap">{t('scope.brand')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.item}
                    className={`group transition-all duration-500 ${
                      idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'
                    } hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md ${
                      rowsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <td className="px-3 py-2 sm:px-4 sm:py-3 text-slate-500 dark:text-slate-400 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{idx + 1}</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 text-slate-900 dark:text-white font-medium whitespace-nowrap group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">{row.item}</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 text-center">
                      {row.supply ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-all duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 text-center">
                      {row.works ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-all duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">{row.brand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[t('scope.supplyTag'), t('scope.installationTag'), t('scope.amcTag')].map((tag, i) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-full transition-all duration-500 hover:bg-emerald-100 dark:hover:bg-emerald-800/40 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 ${
                  tagsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
