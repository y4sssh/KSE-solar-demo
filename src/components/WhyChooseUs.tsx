import ScrollRevealHeading from './ScrollRevealHeading';

const features = [
  {
    title: 'Engineering-First Planning',
    desc: 'Every project starts with site analysis, load study, roof suitability and long-term generation planning so the system is efficient from day one.',
    points: ['Detailed site survey', 'Shadow & load analysis', 'Optimized structure layout'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Tier-1 KSE Technology',
    desc: 'We install genuine KSE N-Type Topcon bifacial panels, high-efficiency inverters and approved BOS components for higher yield and long-term reliability.',
    points: ['KSE certified quality', 'N-Type Topcon modules', 'Genuine BOS components'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Certified Quality Execution',
    desc: 'Our team follows strict quality checkpoints, documentation discipline and installation standards so your solar plant remains safe, compliant and subsidy-ready.',
    points: ['Quality audit checkpoints', 'Documentation support', 'Approval-ready execution'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'End-to-End Support',
    desc: 'From consultation and procurement to installation, commissioning, net-metering and after-sales assistance — our team supports you at every step.',
    points: ['Turnkey EPC delivery', 'Net-metering guidance', '24/7 assistance & AMC'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const proofStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '30 Yrs', label: 'Module Warranty' },
  { value: '24/7', label: 'Client Support' },
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-lines opacity-60" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-30" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-20" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-50" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/50 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: '20%', top: '25%', size: 7, delay: '0s', dur: '11s' },
          { left: '60%', top: '60%', size: 9, delay: '1.5s', dur: '13s' },
          { left: '80%', top: '20%', size: 6, delay: '3s', dur: '10s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.left, top: p.top, width: `${p.size}px`, height: `${p.size}px`, animationDelay: p.delay, animationDuration: p.dur }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${10 + i * 18}%`, top: `${15 + i * 12}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.5}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[40%] left-[8%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-10s' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '7s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          {/* Left side */}
          <div>
            <div className="mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                WHY CHOOSE US
              </div>
              <ScrollRevealHeading
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5"
                segments={[
                  { text: 'Smart Solar Solutions with' },
                  { text: 'Execution You Can Trust', accent: true },
                ]}
              />
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Homes, businesses and institutions choose Kaustubh Solar Evolution because we combine engineering clarity,
                genuine KSE technology, clean execution and dependable after-sales support into one transparent EPC experience.
              </p>
            </div>

            {/* premium collage */}
            <div className="grid sm:grid-cols-[1.2fr_0.8fr] gap-4 items-stretch">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] border border-white/60 dark:border-slate-800">
                <img
                  src="https://images.pexels.com/photos/11644973/pexels-photo-11644973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Solar team installing panels on rooftop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-700 dark:text-emerald-400 shadow-lg inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  KSE Certified EPC
                </div>

                <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Quality-Controlled Execution</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Installation, documentation and delivery managed by trained professionals.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[200px] border border-white/60 dark:border-slate-800">
                  <img
                    src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Inspectors reviewing solar documentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm font-bold text-white">Technical Review & Audit</div>
                    <div className="text-xs text-white/75 mt-1">Documentation and site verification before handover.</div>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-xl p-6 text-white min-h-[200px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full"></div>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-100 relative">KSE Promise</div>
                  <div className="relative">
                    <div className="text-3xl font-black mb-2">Transparent EPC</div>
                    <p className="text-sm text-emerald-50/90 leading-relaxed">
                      From consultation to commissioning, we keep every step clear, documented and aligned with your long-term savings goals.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold relative">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Reliable • Compliant • Scalable
                  </div>
                </div>
              </div>
            </div>

            {/* trust strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/70 dark:border-slate-800">
              {proofStats.map((item) => (
                <div key={item.label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 px-4 py-4 shadow-sm text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">{item.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-4 lg:pt-20">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{feature.title}</h3>
                        <span className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {feature.desc}
                      </p>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {feature.points.map((point) => (
                          <div key={point} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-2">
                            <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-emerald-950/20 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Why clients stay with KSE</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We don’t just install solar systems — we build dependable long-term energy assets with honest guidance, quality execution and support after handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
              >
                Start Your Solar Journey
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
              >
                View Delivered Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
