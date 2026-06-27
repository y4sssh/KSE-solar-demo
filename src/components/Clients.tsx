import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollRevealHeading from './ScrollRevealHeading';

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

// Brand logos with authentic colors and roles
const partners = [
  { name: 'SUNGROW', sub: 'Inverters', role: 'Inverter Partner', color: '#2563eb', accent: '#3b82f6', domain: 'sungrowpower.com' },
  { name: 'Adani Solar', sub: 'Solar', role: 'Panel Supplier', color: '#1e3a8a', accent: '#3b82f6', domain: 'adani.com' },
  { name: 'TATA POWER', sub: 'Solar', role: 'Inverter Partner', color: '#1d4ed8', accent: '#2563eb', domain: 'tatapower.com' },
  { name: 'VIKRAM SOLAR', sub: '', role: 'Panel Supplier', color: '#7c3aed', accent: '#a855f7', domain: 'vikramsolar.com' },
  { name: 'GROWATT', sub: 'Solar Inverter', role: 'Inverter Partner', color: '#0891b2', accent: '#06b6d4', domain: 'ginverter.com' },
  { name: 'ReNew', sub: 'Power', role: 'Energy Partner', color: '#00da28', accent: '#44e844', domain: 'renew.com' },
  { name: 'POLYCAB', sub: '', role: 'Cable Supplier', color: '#d97706', accent: '#f59e0b', domain: 'polycab.com' },
  { name: 'HAVELLS', sub: '', role: 'Electrical Partner', color: '#e11d48', accent: '#f43f5e', domain: 'havells.com' },
  { name: 'WAAREE', sub: 'Solar', role: 'Panel Supplier', color: '#0d9488', accent: '#14b8a6', domain: 'waaree.com' },
];

function LogoBadge({ p }: { p: typeof partners[0] }) {
  return (
    <div className="flex flex-col items-center justify-center p-2 pt-4">
      <img
        src={`https://logo.clearbit.com/${p.domain}`}
        className="h-8 max-w-[120px] object-contain mb-2"
        alt={`${p.name} logo`}
        onError={(e) => {
          // Fallback to icon.horse if clearbit fails
          const target = e.currentTarget as HTMLImageElement;
          if (!target.src.includes('icon.horse')) {
            target.src = `https://icon.horse/icon/${p.domain}`;
          }
        }}
      />
      <div className="flex flex-col items-center">
        <span className="text-xs font-black tracking-tight leading-none" style={{ color: p.color }}>
          {p.name}
        </span>
        {p.sub && (
          <span className="text-[9px] font-medium mt-0.5" style={{ color: p.accent }}>
            {p.sub}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Clients() {
  const { t } = useLanguage();
  const [sectionRef, inView] = useInView(0.04);

  return (
    <section ref={sectionRef} id="clients" className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid-lines opacity-60" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-50" />

      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '22%', t: '28%', s: 7, d: '0s', du: '11s' },
          { l: '68%', t: '55%', s: 8, d: '2s', du: '13s' },
          { l: '40%', t: '75%', s: 6, d: '1.5s', du: '10s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${14 + i * 16}%`, top: `${16 + i * 13}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[32%] right-[12%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[28%] left-[10%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-11s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t('clients.ourClients')}
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: t('clients.trustedBy') },
              { text: t('clients.industryLeaders'), accent: true },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t('clients.description')}
          </p>
        </div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {partners.map((p, idx) => (
            <div
              key={p.name}
              className={`group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up relative overflow-hidden ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
            >
              {/* Sheen sweep */}
              <div className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/10 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1.2s] ease-in-out pointer-events-none" />
              {/* Logo box */}
              <div className="h-16 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative">
                <LogoBadge p={p} />
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white relative">{p.name.replace(' SOLAR', ' Solar')}</div>
              <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mt-1 relative">
                {t('clients.role' + p.role.replace(/\s+/g, ''))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured KSE Card */}
        <div className={`bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white dark:from-emerald-950/30 dark:via-emerald-950/10 dark:to-slate-900 rounded-3xl border border-emerald-100 dark:border-emerald-900/40 overflow-hidden mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="grid lg:grid-cols-[340px_1fr] items-center">
            {/* Logo side */}
            <div className="p-8 lg:p-10 flex justify-center">
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-10 w-full max-w-[240px] aspect-square flex items-center justify-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full whitespace-nowrap">
                  {t('clients.trustedEpc')}
                </span>
                  <img
                    src="/images/kse-logo.jpeg"
                    alt="Kaustubh Solar Evolution logo"
                    className="w-full h-full object-contain p-4"
                  />
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-10 lg:pl-0">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold tracking-wider rounded-full uppercase">
                  {t('clients.isoCertified')}
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold tracking-wider rounded-full uppercase">
                  {t('clients.mnreApproved')}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('clients.kseTitle')}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {t('clients.kseDesc')}
              </p>

              <div className="flex flex-wrap gap-2">
                {[t('clients.tagTopcon'), t('clients.tagInverters'), t('clients.tagWarranty'), t('clients.tagBifacial')].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-partner-scroll">
            {[...partners, ...partners].map((p, idx) => (
              <div
                key={`scroll-${idx}`}
                className="flex-shrink-0 w-48 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm text-center"
              >
                <div className="h-12 flex items-center justify-center mb-3 hover:scale-110 transition-all duration-300">
                  <LogoBadge p={p} />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {p.name.replace(' SOLAR', ' Solar')}
                </div>
                <div className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mt-0.5">
                  {t('clients.role' + p.role.replace(/\s+/g, ''))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partner-scroll {
          animation: partner-scroll 28s linear infinite;
          width: max-content;
        }
        .animate-partner-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
