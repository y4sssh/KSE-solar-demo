import { useState } from 'react';

import ScrollRevealHeading from './ScrollRevealHeading';

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

const products: Product[] = [
  {
    category: 'Panels',
    badge: 'Most Popular',
    title: 'N-Type Topcon Bifacial DCR Panels',
    brands: 'KSE',
    desc: 'Premium N-Type Topcon bifacial DCR panels with industry-leading efficiency. Captures sunlight from both sides for up to 30% more energy yield — ideal for all rooftop installations.',
    specs: ['570-580 Wp', 'N-Type Topcon', 'Bifacial DCR', '21%+ Efficiency'],
    warranty: '30 Year Warranty',
    image: '/images/solar-panels.jpg',
  },
  {
    category: 'Inverters',
    badge: 'Best Seller',
    title: 'On-Grid String Inverters',
    brands: 'KSE',
    desc: 'Premium on-grid string inverters with up to 98% peak efficiency. WiFi monitoring, MPPT tracking, and grid-tie capability. Available in single & three phase configurations.',
    specs: ['3.3-100 KVA', '98% Efficiency', 'WiFi Monitoring', 'MPPT Tracking'],
    warranty: '8 Year Warranty',
    image: '/images/solar-inverter.jpg',
  },
  {
    category: 'Storage',
    badge: 'New Arrival',
    title: 'Li-Ion Battery Storage',
    brands: 'KSE / EXIDE / LUMINOUS',
    desc: 'Premium lithium-ion (LiFePO4) battery storage systems for reliable 24x7 backup power. 6000+ deep-cycle life with intelligent smart BMS protection.',
    specs: ['5-50 kWh', 'LiFePO4', '6000+ Cycles', 'Smart BMS'],
    warranty: '10 Year Warranty',
    image: '/images/battery-storage.jpg',
  },
  {
    category: 'Balance of System',
    title: 'Module Mounting Structures',
    brands: 'FORTUNE HOTDEEP GI',
    desc: 'Galvanized iron (GI/MS) module mounting structures custom-engineered for rooftop, ground mount & elevated shades. Wind-load certified for Indian conditions.',
    specs: ['Hot-Dip GI', 'Rust Proof', 'Wind Certified', 'Custom Design'],
    warranty: '25 Year Life',
    image: '/images/mounting-structure.jpg',
  },
  {
    category: 'Balance of System',
    title: 'DC & AC Solar Cables',
    brands: 'WAACAB / POLYCAB',
    desc: 'Solar-grade copper DC cables (1.5/4/6 sqmm) with TUV certification. UV-resistant, halogen-free and fire-retardant for safe, efficient power transmission.',
    specs: ['Copper Core', 'TUV Certified', 'UV Resistant', 'Fire Retardant'],
    warranty: 'IEC Standards',
    image: '/images/solar-cables.jpg',
  },
  {
    category: 'Balance of System',
    badge: 'Featured',
    title: 'Complete Solar Kits',
    brands: 'TURNKEY PACKAGE',
    desc: 'Pre-configured plug-and-play solar kits with everything included — panels, inverter, cables, mounting and accessories. Perfect for quick, hassle-free installation.',
    specs: ['1-10 kW', 'All-In-One', 'Quick Install', 'Best Value'],
    warranty: 'Full Package',
    image: '/images/solar-kit.jpg',
  },
  {
    category: 'Balance of System',
    title: 'ACDB / DCDB Boxes',
    brands: 'SCHNEIDER / FINDER',
    desc: 'AC & DC distribution boards with MCB, SPD surge protection and proper isolation. Essential safety components ensuring protection for every solar installation.',
    specs: ['SPD Protection', 'MCB Isolators', 'IP65 Rated', 'Safety First'],
    warranty: '5 Year Warranty',
    image: '/images/acdb-dcdb.jpg',
  },
  {
    category: 'Balance of System',
    title: 'Earthing & Lightning Protection',
    brands: 'CHEMICAL EARTHING',
    desc: 'Complete chemical earthing system with copper-bonded electrodes and lightning arresters for system & personnel safety as per IEC 62305 standards.',
    specs: ['Copper Bonded', 'Lightning Arrester', 'IEC 62305', 'Low Resistance'],
    warranty: 'Lifetime Safety',
    image: '/images/earthing.jpg',
  },
  {
    category: 'Balance of System',
    title: 'Solar Street Lights',
    brands: 'ALL-IN-ONE INTEGRATED',
    desc: 'Integrated solar LED street lights with motion sensor & auto dusk-to-dawn operation. Perfect for streets, housing societies and industrial campuses.',
    specs: ['9-60 Watt', 'Motion Sensor', 'Auto ON/OFF', 'Zero Bills'],
    warranty: '3 Year Warranty',
    image: '/images/street-light.jpg',
  },
];

const categories: Category[] = ['All', 'Panels', 'Inverters', 'Storage', 'Balance of System'];

export default function Components() {
  const [active, setActive] = useState<Category>('All');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="components" className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-dots opacity-60" />
      <div className="absolute inset-0 bg-lines opacity-30" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-50" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-emerald-200/25 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-emerald-300/15 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '15%', t: '30%', s: 8, d: '0s', du: '12s' },
          { l: '70%', t: '55%', s: 6, d: '2s', du: '10s' },
          { l: '40%', t: '75%', s: 7, d: '1s', du: '14s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${12 + i * 15}%`, top: `${18 + i * 13}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[25%] right-[10%] w-4 h-4 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[35%] left-[8%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-9s' }} />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            OUR COMPONENTS
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: 'Premium' },
              { text: 'Solar Components', accent: true },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We use only Tier-1 certified components from India's most trusted brands — KSE, Polycab, Schneider & more. Every component is engineered for maximum performance, durability and decades of reliable service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                active === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, idx) => (
            <div
              key={product.title}
              onClick={() => setSelected(product)}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-950/30">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* View details hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </span>
                </div>
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full backdrop-blur-sm shadow-sm">
                  {product.category}
                </span>

                {/* Warranty badge */}
                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {product.warranty}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
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
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-2.5 py-1.5">
                      <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(product); }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors group/btn"
                >
                  View Details
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip below products */}
        <div className="mt-14 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Tier-1 Certified', sub: 'Premium quality only' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'High Efficiency', sub: '21%+ conversion rate' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Up to 30 Yr Warranty', sub: 'Long-term protection' },
              { icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', title: 'Genuine Products', sub: 'KSE certified' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</div>
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
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center shadow-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-950/30">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
                {selected.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    {selected.badge}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {selected.warranty}
                </span>
              </div>

              {/* Content side */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">{selected.brands}</span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full">{selected.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{selected.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{selected.desc}</p>

                {/* Specs */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">Key Specifications</div>
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
                <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{selected.warranty}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Manufacturer-backed warranty</div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
                >
                  Get Quote for This Product
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
