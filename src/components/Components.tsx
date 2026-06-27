import { useState, useRef, useEffect } from 'react';

import { useLanguage } from '../LanguageContext';
import ScrollRevealHeading from './ScrollRevealHeading';

function useInView(threshold = 0.1) {
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

type Category = 'All' | 'Panels' | 'Inverters' | 'Storage' | 'Balance of System';

interface Product {
  category: Exclude<Category, 'All'>;
  badge?: string;
  title: string;
  brands: string;
  desc: string;
  specs: string[];
  warranty: string;
  image: string;
}

export default function Components() {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      category: 'Panels',
      badge: t('components.badgeMostPopular'),
      title: t('components.product1Title'),
      brands: t('components.product1Brand'),
      desc: t('components.product1Desc'),
      specs: [t('components.product1Spec1'), t('components.product1Spec2'), t('components.product1Spec3'), t('components.product1Spec4')],
      warranty: t('components.product1Warranty'),
      image: '/images/solar-panels.jpg',
    },
    {
      category: 'Inverters',
      badge: t('components.badgeBestSeller'),
      title: t('components.product2Title'),
      brands: t('components.product2Brand'),
      desc: t('components.product2Desc'),
      specs: [t('components.product2Spec1'), t('components.product2Spec2'), t('components.product2Spec3'), t('components.product2Spec4')],
      warranty: t('components.product2Warranty'),
      image: '/images/solar-inverter.jpg',
    },
    {
      category: 'Storage',
      badge: t('components.badgeNewArrival'),
      title: t('components.product3Title'),
      brands: t('components.product3Brand'),
      desc: t('components.product3Desc'),
      specs: [t('components.product3Spec1'), t('components.product3Spec2'), t('components.product3Spec3'), t('components.product3Spec4')],
      warranty: t('components.product3Warranty'),
      image: '/images/battery-storage.jpg',
    },
    {
      category: 'Balance of System',
      title: t('components.product4Title'),
      brands: t('components.product4Brand'),
      desc: t('components.product4Desc'),
      specs: [t('components.product4Spec1'), t('components.product4Spec2'), t('components.product4Spec3'), t('components.product4Spec4')],
      warranty: t('components.product4Warranty'),
      image: '/images/mounting-structure.jpg',
    },
    {
      category: 'Balance of System',
      title: t('components.product5Title'),
      brands: t('components.product5Brand'),
      desc: t('components.product5Desc'),
      specs: [t('components.product5Spec1'), t('components.product5Spec2'), t('components.product5Spec3'), t('components.product5Spec4')],
      warranty: t('components.product5Warranty'),
      image: '/images/solar-cables.jpg',
    },
    {
      category: 'Balance of System',
      badge: t('components.badgeFeatured'),
      title: t('components.product6Title'),
      brands: t('components.product6Brand'),
      desc: t('components.product6Desc'),
      specs: [t('components.product6Spec1'), t('components.product6Spec2'), t('components.product6Spec3'), t('components.product6Spec4')],
      warranty: t('components.product6Warranty'),
      image: '/images/solar-kit.jpg',
    },
    {
      category: 'Balance of System',
      title: t('components.product7Title'),
      brands: t('components.product7Brand'),
      desc: t('components.product7Desc'),
      specs: [t('components.product7Spec1'), t('components.product7Spec2'), t('components.product7Spec3'), t('components.product7Spec4')],
      warranty: t('components.product7Warranty'),
      image: '/images/acdb-dcdb.jpg',
    },
    {
      category: 'Balance of System',
      title: t('components.product8Title'),
      brands: t('components.product8Brand'),
      desc: t('components.product8Desc'),
      specs: [t('components.product8Spec1'), t('components.product8Spec2'), t('components.product8Spec3'), t('components.product8Spec4')],
      warranty: t('components.product8Warranty'),
      image: '/images/earthing.jpg',
    },
    {
      category: 'Balance of System',
      title: t('components.product9Title'),
      brands: t('components.product9Brand'),
      desc: t('components.product9Desc'),
      specs: [t('components.product9Spec1'), t('components.product9Spec2'), t('components.product9Spec3'), t('components.product9Spec4')],
      warranty: t('components.product9Warranty'),
      image: '/images/street-light.jpg',
    },
  ];

  const categories: Category[] = ['All', 'Panels', 'Inverters', 'Storage', 'Balance of System'];

  const [active, setActive] = useState<Category>('All');
  const [selected, setSelected] = useState<Product | null>(null);

  const [sectionRef, inView] = useInView(0.05);
  const [gridVisible, setGridVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [trustVisible, setTrustVisible] = useState(false);



  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setTabsVisible(true), 150);
    const t2 = setTimeout(() => setGridVisible(true), 300);
    const t3 = setTimeout(() => setTrustVisible(true), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView]);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section ref={sectionRef} id="components" className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="absolute inset-0 bg-lines opacity-30" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-50" />
      <div className="absolute inset-0 bg-core-radiant" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-emerald-200/25 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-emerald-300/15 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '15%', t: '30%', s: 8, d: '0s', du: '12s' },
          { l: '70%', t: '55%', s: 6, d: '2s', du: '10s' },
          { l: '40%', t: '75%', s: 7, d: '1s', du: '14s' },
          { l: '55%', t: '20%', s: 5, d: '3s', du: '11s' },
          { l: '10%', t: '65%', s: 9, d: '1.5s', du: '13s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${8 + i * 14}%`, top: `${12 + (i * 11) % 76}%`, width: `${1.5 + (i % 2) * 0.5}px`, height: `${1.5 + (i % 2) * 0.5}px`, animationDelay: `${i * 0.3}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[20%] right-[8%] w-4 h-4 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[30%] left-[6%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-9s' }} />
      <div className="absolute top-[60%] right-[15%] w-3.5 h-3.5 border border-emerald-400/30 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            {t('components.ourComponents')}
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: t('components.premium') },
              { text: t('components.solarComponents'), accent: true },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t('components.description')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-600 ${tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {categories.map((cat, i) => (
            <button
              key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 active:scale-[0.95] ${
                  active === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-[1.04]'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-[1.04] hover:shadow-md hover:shadow-emerald-500/20 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
            >
              {t('components.category' + (cat === 'Balance of System' ? 'Bos' : cat))}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:flex-nowrap max-sm:gap-4 max-sm:pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {filtered.map((product, idx) => (
            <div
              key={product.title}
              onClick={() => setSelected(product)}
              className={`max-sm:snap-start max-sm:min-w-[280px] max-sm:w-[75vw] max-sm:shrink-0 group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-950/30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 via-emerald-600/0 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* View details hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t('components.viewDetails')}
                  </span>
                </div>
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full backdrop-blur-sm shadow-sm z-20">
                  {t('components.category' + (product.category === 'Balance of System' ? 'Bos' : product.category))}
                </span>

                {/* Warranty badge */}
                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 z-20">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {product.warranty}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative overflow-hidden">
                <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-emerald-100/30 dark:via-emerald-500/10 to-transparent -skew-x-12 group-hover:translate-x-[250%] transition-transform duration-1000 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                      {product.brands}
                    </span>
                    <span className="flex-1 h-px bg-gradient-to-r from-emerald-200 dark:from-emerald-800 to-transparent"></span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {product.desc}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-5 mt-auto">
                    {product.specs.map((spec, si) => (
                      <div
                        key={spec}
                        className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-2.5 py-1.5 group/spec hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300"
                        style={{ transitionDelay: `${si * 50}ms` }}
                      >
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 group-hover/spec:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(product); }}
                    className="relative flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 group/btn hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:scale-[0.97] overflow-hidden"
                  >
                    <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[250%] group-hover/btn:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                    <span className="relative">{t('components.viewDetails')}</span>
                    <svg className="w-4 h-4 relative transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip below products */}
        <div className={`mt-14 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 sm:p-8 transition-all duration-700 ${
          trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: t('components.trustTier1'), sub: t('components.trustTier1Sub') },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: t('components.trustHighEfficiency'), sub: t('components.trustHighEfficiencySub') },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: t('components.trustWarranty'), sub: t('components.trustWarrantySub') },
              { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', title: t('components.trustGenuine'), sub: t('components.trustGenuineSub') },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group/trust flex flex-col items-center transition-all duration-500 hover:-translate-y-1 cursor-default"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative mb-3">
                  <div className="absolute -inset-2 bg-emerald-400/20 rounded-xl blur-xl opacity-0 group-hover/trust:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover/trust:scale-110 group-hover/trust:bg-emerald-200 dark:group-hover/trust:bg-emerald-800/60 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/trust:text-emerald-600 dark:group-hover/trust:text-emerald-400 transition-colors">{item.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-fade-in-up" style={{ animationDuration: '0.2s' }} />

          {/* Modal */}
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            style={{ animationDuration: '0.3s' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-[0.9]"
              >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              {/* Product Image side */}
              <div className="relative h-72 md:h-auto min-h-[360px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
                <div className="absolute -inset-16 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                {selected.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    {selected.badge}
                  </span>
                )}

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-contain p-8 max-h-[300px] drop-shadow-2xl"
                />

                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 z-10">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {selected.warranty}
                </span>

                {/* Category tag */}
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full shadow-sm z-10">
                  {t('components.category' + (selected.category === 'Balance of System' ? 'Bos' : selected.category))}
                </span>
              </div>

              {/* Content side */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">{selected.brands}</span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full">{t('components.category' + (selected.category === 'Balance of System' ? 'Bos' : selected.category))}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{selected.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{selected.desc}</p>

                {/* Specs */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">{t('components.keySpecifications')}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {selected.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-2">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warranty highlight */}
                <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 mb-6 group/warranty transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-emerald-400/30 rounded-lg blur-xl opacity-0 group-hover/warranty:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover/warranty:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{selected.warranty}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t('components.manufacturerWarranty')}</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:scale-[0.97] group/cta overflow-hidden"
                >
                  <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover/cta:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                  <span className="relative">{t('components.getQuote')}</span>
                  <svg className="w-4 h-4 relative transition-all duration-300 group-hover/cta:translate-x-1.5 group-hover/cta:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
