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

export default function ScopeOfSupply() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />

      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '25%', t: '20%', s: 6, d: '0s', du: '11s' },
          { l: '65%', t: '60%', s: 8, d: '2s', du: '13s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${15 + i * 20}%`, top: `${20 + i * 15}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.5}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[35%] right-[12%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100 dark:border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Detailed Scope of Supply
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Complete EPC scope — Supply, Installation & Commissioning
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider rounded-tl-2xl">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Component / Equipment</th>
                  <th className="px-4 py-3 text-center font-semibold text-xs uppercase tracking-wider">Supply</th>
                  <th className="px-4 py-3 text-center font-semibold text-xs uppercase tracking-wider">Works</th>
                  <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider rounded-tr-2xl">Brand / Make</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.item}
                    className={`${
                      idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800'
                    } hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors`}
                  >
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400 font-medium">{idx + 1}</td>
                    <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">{row.item}</td>
                    <td className="px-4 py-3 text-center">
                      {row.supply ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.works ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{row.brand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Supply', 'Installation', '5 Year AMC Included'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-full"
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
