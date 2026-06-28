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

export default function Contact() {
  const { t } = useLanguage();
  const [sectionRef, inView] = useInView(0.04);
  const [activeType, setActiveType] = useState(t('contact.projectType1'));

  const projectTypes = [t('contact.projectType1'), t('contact.projectType2'), t('contact.projectType3'), t('contact.projectType4')];

  const heroStats = [
    { value: 'EPC', label: t('contact.turnkeyDelivery'), icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { value: '30Y', label: t('contact.moduleLifecycle'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '98%', label: t('contact.inverterEfficiency'), icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { value: 'EPC', label: t('contact.solarEpc'), icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  ];

  const businessDetails = [
    { label: t('contact.contactPerson'), value: 'Mr. Nikhil Mohadikar' },
    { label: t('contact.phone'), value: '+91-9168031615' },
    { label: t('contact.email'), value: 'kaustubhsolarevolution@gmail.com' },
    { label: t('contact.gstin'), value: '27BMZPM6624E1ZI' },
    { label: t('contact.address'), value: 'Shantinagar Nagraj Sq., Nagpur, Maharashtra 440017' },
    { label: t('contact.solarEpc'), value: 'Kaustubh Solar Evolution (KSE)' },
  ];

  const whatToShare = [
    t('contact.share1'),
    t('contact.share2'),
    t('contact.share3'),
    t('contact.share4'),
  ];

  const bankingDetails = [
    { label: t('contact.acName'), value: 'KAUSTUBH SOLAR EVOLUTION' },
    { label: t('contact.acNo'), value: '924020031964037' },
    { label: t('contact.acType'), value: 'Current Account' },
    { label: t('contact.bankName'), value: 'Axis Bank Ltd.' },
    { label: t('contact.ifscCode'), value: 'UTIB0000330' },
    { label: t('contact.branch'), value: 'Lakadganj, Nagpur' },
  ];

  const legalNotes = [
    t('contact.legal1'),
    t('contact.legal2'),
    t('contact.legal3'),
    t('contact.legal4'),
  ];

  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '', bill: '', size: '', summary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', location: '', bill: '', size: '', summary: '' });
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-300';

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-grid-lines opacity-25" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />
      <div className="absolute inset-0 bg-core-radiant opacity-20" />

<div className="absolute top-0 right-0 w-56 h-56 bg-emerald-100/20 dark:bg-emerald-500/5 rounded-full blur-2xl -z-10" style={{ contain: 'strict' }} />
       <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-100/15 dark:bg-emerald-500/5 rounded-full blur-xl -z-10" />
       <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-xl -z-10" />

      <div className="absolute inset-0 pointer-events-none">
        {[
{ l: '12%', t: '18%', s: 5, d: '0s', du: '18s' },
         ].map((p, i) => (
           <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
         ))}
       </div>

       <div className="absolute inset-0 pointer-events-none" style={{ contain: 'strict' }}>
         {[...Array(2)].map((_, i) => (
           <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${15 + i * 35}%`, top: `${12 + i * 30}%`, width: '2px', height: '2px', animationDelay: `${i * 0.6}s`, opacity: 0.3 }} />
         ))}
       </div>

       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12 lg:mb-16">
          <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-800/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-6 shadow-lg shadow-emerald-500/5 border border-emerald-200/50 dark:border-emerald-700/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('contact.getInTouch')}</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400/40" />
              <span className="text-emerald-500 dark:text-emerald-300">{t('contact.response24h')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
              {t('contact.buildFuture')} <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">{t('contact.commandHub')}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
              {t('contact.description')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-slate-950 flex items-center justify-center text-white text-[9px] font-bold shadow-md">KSE</div>
                ))}
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">50+</span> {t('contact.projectsInPipeline')}
              </span>
            </div>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`group/stat bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 p-4 text-center shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:shadow-emerald-500/15 hover:-translate-y-1.5 hover:border-emerald-200 dark:hover:border-emerald-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${200 + idx * 80}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 mb-2.5 group-hover/stat:bg-emerald-100 dark:group-hover/stat:bg-emerald-900/50 group-hover/stat:scale-110 transition-all duration-300">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-xl scale-150 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <div className="relative">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5 group-hover/stat:scale-105 transition-transform origin-center">{stat.value}</div>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main two columns */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT: Business desk + What to share */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Desk */}
            <div className={`group/desk bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg overflow-hidden transition-all duration-600 ease-out hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl" />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-100 tracking-widest uppercase">{t('contact.officialBusinessDesk')}</div>
                    <h3 className="text-xl font-bold text-white">Kaustubh Solar Evolution</h3>
                  </div>
                </div>
                <p className="text-sm text-emerald-50/90 mt-1 relative pl-13">{t('contact.makeFutureBright')}</p>
              </div>

              <div className="p-6">
                <div className="space-y-1">
                  {businessDetails.map((item, i) => {
                    const icons: Record<string, string> = {
                      [t('contact.contactPerson')]: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                      [t('contact.phone')]: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                      [t('contact.email')]: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      [t('contact.gstin')]: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                      [t('contact.address')]: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                      [t('contact.solarEpc')]: 'M13 10V3L4 14h7v7l9-11h-7z',
                    };
                    return (
                      <div
                        key={item.label}
                        className={`group/row flex flex-col sm:flex-row items-start sm:justify-between gap-1 sm:gap-4 py-3 transition-all duration-500 ease-out hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 hover:px-2 -mx-2 rounded-lg ${
                          i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
                        } ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                        style={{ transitionDelay: `${400 + i * 60}ms` }}
                      >
                        <span className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium">
                          <svg className="w-3.5 h-3.5 text-emerald-400 group-hover/row:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icons[item.label] || 'M9 12l2 2 4-4'} />
                          </svg>
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white text-left sm:text-right break-words group-hover/row:text-emerald-700 dark:group-hover/row:text-emerald-300 transition-colors">{item.value}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <a
                    href="tel:+919168031615"
                    className="relative flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 group overflow-hidden active:scale-[0.97] hover:-translate-y-0.5"
                  >
                    <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                    <svg className="w-4 h-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="relative">{t('contact.callEpcDesk')}</span>
                  </a>
                  <a
                    href="mailto:kaustubhsolarevolution@gmail.com"
                    className="relative flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 group overflow-hidden active:scale-[0.97] hover:-translate-y-0.5"
                  >
                    <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                    <svg className="w-4 h-4 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="relative">{t('contact.emailTeam')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* What to Share */}
            <div className={`group/share bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 transition-all duration-600 ease-out hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">{t('contact.whatToShare')}</div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">{t('contact.helpUsUnderstand')}</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {whatToShare.map((item, idx) => (
                  <div key={item} className={`group/item flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${600 + idx * 80}ms` }}>
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                      <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover/item:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Project Briefing Form */}
          <div className="lg:col-span-3">
            <div className={`group/form relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6 sm:p-8 h-full transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
              {/* Animated gradient border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-emerald-500/40 via-emerald-400/20 to-emerald-500/40 opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 -z-[1] blur-[0.5px]" />
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-emerald-400/20 via-emerald-300/10 to-emerald-400/20 opacity-0 group-hover/form:opacity-60 transition-opacity duration-700 -z-[2] blur-sm animate-conic-spin" />

              <div className={`flex flex-col sm:flex-row items-start sm:justify-between gap-4 mb-6 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '350ms' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">{t('contact.projectBriefing')}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t('contact.requestConsultation')}</h3>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-800/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-200/50 dark:border-emerald-700/30 shadow-sm whitespace-nowrap">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {t('contact.response24hours')}
                </span>
              </div>

              {/* Project type tabs */}
              <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                {projectTypes.map((type, idx) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`relative py-2.5 px-4 text-xs font-semibold rounded-xl transition-all duration-300 text-center active:scale-[0.95] ${
                      activeType === type
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.03] hover:shadow-md hover:shadow-emerald-500/15 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800'
                    }`}
                    style={{ transitionDelay: `${450 + idx * 60}ms` }}
                  >
                    {activeType === type && (
                      <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rotate-45 rounded-sm" />
                    )}
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.name')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t('contact.namePlaceholder')} className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '550ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.phone')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.email')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '650ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.location')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder={t('contact.locationPlaceholder')} className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.monthlyBill')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <input type="text" value={form.bill} onChange={(e) => setForm({ ...form, bill: e.target.value })} placeholder={t('contact.billPlaceholder')} className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                  <div className={`group/fld transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '750ms' }}>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.systemSize')}</label>
                    <div className="relative">
                      <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <input type="text" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} placeholder={t('contact.sizePlaceholder')} className={`${inputClass} pl-10`} />
                    </div>
                  </div>
                </div>

                <div className={`group/fld mb-5 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5">{t('contact.message')}</label>
                  <div className="relative">
                    <svg className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within/fld:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <textarea rows={4} value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} placeholder={t('contact.messagePlaceholder')} className={`${inputClass} pl-10 resize-none`} />
                  </div>
                </div>

                <div className="relative bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-900/10 dark:to-transparent rounded-xl p-4 mb-5 border border-emerald-100 dark:border-emerald-900/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/10 rounded-full blur-2xl" />
                  <div className="flex items-start gap-2.5 relative">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {t('contact.formDisclaimer')}
                    </p>
                  </div>
                </div>

                <div className={`relative transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '850ms' }}>
                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1.2s] ease-in-out pointer-events-none" />
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t('contact.thankYou')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.sendEnquiry')}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>

        {/* Our Credentials header */}
        <div className={`flex items-center justify-between gap-6 mb-8 transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-800/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-3 border border-emerald-200/50 dark:border-emerald-700/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {t('contact.ourCredentials')}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {t('contact.verifiedBusiness')}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-xl">
              {t('contact.credentialsDesc')}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{t('contact.verifiedCertified')}</span>
          </div>
        </div>

        {/* Bottom: Banking + Legal */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Banking Details */}
          <div className={`group/bank bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 sm:p-8 transition-all duration-600 ease-out hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">{t('contact.bankingDetails')}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('contact.paymentReference')}</h3>
              </div>
            </div>
            <div className="space-y-1">
              {bankingDetails.map((item, i) => {
                const bankIcons: Record<string, string> = {
                  [t('contact.acName')]: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                  [t('contact.acNo')]: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
                  [t('contact.acType')]: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                  [t('contact.bankName')]: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                  [t('contact.ifscCode')]: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                  [t('contact.branch')]: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                };
                return (
                  <div
                    key={item.label}
                    className={`group/row flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 transition-all duration-500 ease-out hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 hover:px-2 -mx-2 rounded-lg ${
                      i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
                    } ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${400 + i * 60}ms` }}
                  >
                    <span className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium">
                      <svg className="w-3.5 h-3.5 text-emerald-400 group-hover/row:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={bankIcons[item.label] || 'M9 12l2 2 4-4'} />
                      </svg>
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white break-words group-hover/row:text-emerald-700 dark:group-hover/row:text-emerald-300 transition-colors">{item.value}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-700/30">
              <p className="text-[11px] text-amber-700 dark:text-amber-400 flex items-start gap-2">
                <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {t('contact.bankingWarning')}
              </p>
            </div>
          </div>

          {/* Legal Notes */}
          <div className={`group/legal bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 sm:p-8 transition-all duration-600 ease-out hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">{t('contact.proposalDisclaimer')}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('contact.legalNotes')}</h3>
              </div>
            </div>
            <div className="space-y-3">
              {legalNotes.map((note, idx) => (
                <div key={note} className={`group/note flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/20 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${600 + idx * 80}ms` }}>
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/note:bg-emerald-100 dark:group-hover/note:bg-emerald-900/40 transition-colors">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 group-hover/note:text-emerald-600 dark:group-hover/note:text-emerald-400 transition-colors">{idx + 1}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover/note:text-slate-700 dark:group-hover/note:text-slate-300 transition-colors">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
