import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useMobileProfile } from '../hooks/useMobileProfile';

const particlesSeed = [
  { left: '8%', top: '16%', size: 10, delay: '0s', duration: '11s' },
  { left: '18%', top: '68%', size: 8, delay: '1.8s', duration: '13s' },
  { left: '28%', top: '22%', size: 7, delay: '0.8s', duration: '10s' },
  { left: '39%', top: '74%', size: 12, delay: '2.2s', duration: '14s' },
  { left: '56%', top: '14%', size: 9, delay: '1.2s', duration: '12s' },
  { left: '66%', top: '60%', size: 7, delay: '2.8s', duration: '9s' },
  { left: '78%', top: '22%', size: 11, delay: '0.5s', duration: '15s' },
];

export default function Hero() {
  const { t } = useLanguage();
  const { shouldReduceEffects } = useMobileProfile();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroPoster = '/images/solar-panels.jpg';
  const heroFeatureImage = '/images/solar-kit.jpg';
  const rafRef = useRef<number | null>(null);

  const heroMetrics = useMemo(() => [
    { value: '98%', label: t('hero.inverterEfficiency') },
    { value: '6', label: t('hero.panelsFor3_5kw') },
    { value: '24h', label: t('hero.responseWindow') },
  ], [t]);

  const trustChips = useMemo(() => [t('hero.nTypeTopcon'), t('hero.yrWarranty'), t('hero.turnkeyEpc'), t('hero.netMeteringSupport')], [t]);

  const particles = useMemo(() => particlesSeed, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceEffects) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    });
  }, [shouldReduceEffects]);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-20 lg:pt-24 overflow-hidden min-h-[100svh] flex items-center"
      onMouseMove={shouldReduceEffects ? undefined : handleMouseMove}
      onMouseLeave={shouldReduceEffects ? undefined : handleMouseLeave}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        {!shouldReduceEffects && (
          <video
            className={`absolute inset-0 w-full h-full object-cover hero-video-zoom transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            poster={heroPoster}
          >
            <source src="https://videos.pexels.com/video-files/9790191/9790191-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/7042201/7042201-uhd_4096_1974_30fps.mp4" type="video/mp4" />
          </video>
        )}
        {(shouldReduceEffects || !videoLoaded) && (
          <img
            src={heroPoster}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Solar panels"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 hero-vignette" />
        {!shouldReduceEffects && <div className="absolute inset-0 hero-energy-lines opacity-80" />}
        {!shouldReduceEffects && <div className="absolute inset-0 hero-grid-fade opacity-25" />}
      </div>

      {/* Solar rays core */}
      {!shouldReduceEffects && (
        <div
          className="hidden md:block absolute right-[6%] top-[12%] w-[32rem] h-[32rem] opacity-70 pointer-events-none"
          style={{ transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 10}px, 0)` }}
        >
          <div className="absolute inset-0 rounded-full hero-solar-rays" />
          <div className="absolute inset-10 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-[18%] rounded-full hero-orbit-ring opacity-50">
            <span className="hero-orbit-dot" style={{ transform: `translate(110px, -90px)` }} />
          </div>
        </div>
      )}

{/* particles */}
       {!shouldReduceEffects && (
         <div className="absolute inset-0 pointer-events-none" style={{ contain: 'strict' }}>
           {particles.map((p, idx) => (
             <span
               key={idx}
               className="hero-particle opacity-60"
               style={{
                 left: p.left,
                 top: p.top,
                 width: `${p.size}px`,
                 height: `${p.size}px`,
                 animationDelay: p.delay,
                 animationDuration: p.duration,
               }}
             />
           ))}
         </div>
       )}

{/* foreground blobs */}
       {!shouldReduceEffects && <div className="hidden sm:block absolute top-16 right-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl opacity-60 pointer-events-none" style={{ contain: 'strict' }} />}
       {!shouldReduceEffects && <div className="hidden sm:block absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/10 rounded-full blur-2xl opacity-50 pointer-events-none" style={{ contain: 'strict' }} />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Premium badge */}
<div className="inline-flex max-w-full flex-wrap items-center gap-2 px-4 py-2.5 bg-emerald-400/10 border border-emerald-400/25 text-emerald-200 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-emerald-500/5 transition-all duration-300">
                <span className="flex h-3 w-3 items-center justify-center">
                  <span className="inline-block rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-sm">{t('hero.mnreApproved')}</span>
                <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                <span className="text-sm">{t('hero.completeSolarSolutions')}</span>
              </div>

            <div className="max-w-2xl">
{/* Category line */}
               <div className="flex flex-wrap items-center gap-2.5 text-xs uppercase tracking-wider text-emerald-200/80 font-bold mb-5">
                 <span className="w-2 h-2 rounded-full bg-emerald-400" />
                 <span className="text-xs sm:text-sm">{t('hero.solarEpc')}</span>
                 <span className="w-2 h-px bg-emerald-400/40" />
                 <span className="text-xs sm:text-sm">{t('hero.residential')}</span>
                 <span className="w-2 h-px bg-emerald-400/40" />
                 <span className="text-xs sm:text-sm">{t('hero.commercial')}</span>
                 <span className="w-2 h-px bg-emerald-400/40" />
                 <span className="text-xs sm:text-sm">{t('hero.industrial')}</span>
               </div>

              {/* Main headline */}
              <h1 className="text-4xl min-[380px]:text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] text-white mb-6">
                <span className="block text-white/95 drop-shadow-sm">{t('hero.kaustubhSolar')}</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 via-yellow-200 to-emerald-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x drop-shadow-lg">{t('hero.evolution')}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse-slow" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-emerald-50/80 mb-9 max-w-xl leading-[1.7] font-medium">
                <span className="text-white font-bold">{t('hero.kaustubhSolar')} {t('hero.evolution')} (KSE)</span>
                {t('hero.description')}
              </p>
            </div>

{/* CTA Buttons */}
             <div className="flex flex-col gap-3 mb-8">
               <a
                 href="#calculator"
                 className="inline-flex w-full justify-center items-center gap-2.5 px-6 py-4 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-bold rounded-full shadow-xl shadow-emerald-500/30 transition-all duration-300"
               >
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                 </svg>
                 <span>{t('hero.calculateSavings')}</span>
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
               <a
                 href="#projects"
                 className="inline-flex w-full justify-center items-center gap-2.5 px-6 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 transition-all duration-300"
               >
                 <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                 </svg>
                 <span>{t('hero.viewProjects')}</span>
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
             </div>

{/* Trust chips */}
             <div className="flex flex-wrap gap-2 mb-8">
               {trustChips.map((chip) => (
                 <span
                   key={chip}
                   className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/8 border border-white/12 rounded-full text-xs font-semibold text-emerald-50"
                 >
                   <svg className="w-3 h-3 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                   {chip}
                 </span>
               ))}
             </div>

{/* Bottom proof stats */}
             <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg">
               {[
                 { value: '₹61,200', label: t('hero.perKwRate') },
                 { value: '30 Yrs', label: t('hero.panelWarranty') },
                 { value: '500+', label: t('hero.projects') },
               ].map((stat) => (
                 <div key={stat.label} className="text-center">
                   <div className="text-lg font-black text-emerald-300 mb-1">{stat.value}</div>
                   <div className="text-[10px] text-emerald-50/60 font-medium">{stat.label}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right content - premium visual stack */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div
              className="relative max-w-md sm:max-w-xl mx-auto"
              style={{ transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)` }}
            >
              {/* Glow behind card */}
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/20 via-emerald-600/10 to-transparent blur-3xl rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-emerald-500/10 blur-3xl rounded-full" />

              {/* Animated energy particles around card */}
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-sparkle-twinkle pointer-events-none" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full animate-sparkle-twinkle pointer-events-none" style={{ animationDelay: '1.5s' }} />

              {/* Main card */}
              <div className="relative bg-white/[0.08] dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl shadow-emerald-950/50 overflow-hidden group hover:border-emerald-400/40 hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-700 hover:-translate-y-3">
                {/* Animated gradient border overlay */}
                <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-emerald-400/30 via-transparent to-emerald-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
                <div className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 animate-conic-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                {/* Energy wave through card */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] ease-in-out pointer-events-none" />

                {/* Card top glow */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transitionDelay: '150ms' }} />

                {/* Production energy bar at very top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/40 via-emerald-300/60 to-emerald-500/40 animate-pulse-slow z-10" />
                
                {/* top image panel */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={heroFeatureImage}
                    alt="Premium rooftop solar installation"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                    loading={shouldReduceEffects ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Featured card overlay */}
                  <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-[calc(100%-2rem)] sm:max-w-[24rem]">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/15 p-4 shadow-2xl group-hover:-translate-y-1 group-hover:border-emerald-300/40 transition-all duration-700">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg flex-shrink-0 shadow-emerald-500/30">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span className="text-[9px] font-black tracking-[0.22em] uppercase text-emerald-200/90">{t('hero.featuredRooftopEpc')}</span>
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500/20 border border-emerald-400/30 rounded text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                              <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                              {t('hero.live')}
                            </span>
                          </div>
                          <div className="text-[13px] sm:text-[15px] font-black text-white leading-tight">{t('hero.premiumRooftopExecution')}</div>
                          <div className="text-[10px] text-emerald-100/70 mt-1 leading-relaxed">{t('hero.premiumRooftopDesc')}</div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center rounded-xl border border-white/15 bg-black/30 backdrop-blur-sm px-3 py-2 flex-shrink-0">
                          <img src="/images/kse-logo.jpeg" alt="KSE" className="h-8 w-auto" loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom badges */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-white border border-white/15 shadow-2xl group-hover:bg-black/50 group-hover:border-emerald-400/30 group-hover:shadow-emerald-500/20 transition-all duration-500">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-black tracking-tighter bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">3.5</span>
                        <span className="text-xl sm:text-2xl font-bold text-emerald-300">kW</span>
                        <span className="ml-1.5 text-[8px] font-bold text-emerald-400/70 uppercase tracking-wider animate-pulse">▼ 4.2%</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full animate-pulse-slow" />
                        </div>
                        <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-widest">{t('hero.systemCapacity')}</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex bg-black/40 backdrop-blur-xl rounded-2xl px-5 py-3.5 items-center gap-3 shadow-2xl border border-white/15 hover:border-emerald-400/30 hover:bg-black/50 transition-all duration-300 group/badge">
                      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <div className="absolute inset-0 rounded-xl bg-emerald-400/30 blur-xl scale-150 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500" />
                        <svg className="w-5 h-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-black tracking-wide text-white group-hover/badge:text-emerald-300 transition-colors">{t('hero.nTypeTopconBadge')}</div>
                        <div className="text-[10px] font-medium text-emerald-200/80">{t('hero.premiumBifacialModule')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* dashboard */}
                <div className="p-5 sm:p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  {/* Live dashboard header */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-emerald-300/80">{t('hero.liveDashboard')}</span>
                    </div>
                    <span className="text-[8px] font-semibold text-white/40 font-mono">{t('hero.updatedJustNow')}</span>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5 relative z-10">
                    {heroMetrics.map((item, idx) => (
                      <div key={item.label} className="rounded-2xl bg-black/20 hover:bg-black/40 transition-all duration-300 backdrop-blur-md border border-white/10 px-2 py-3 text-center group/metric hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10">
                        {/* Mini progress bar */}
                        <div className="h-1 bg-white/5 rounded-full mb-2.5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full transition-all duration-700" style={{ width: `${[98, 60, 100][idx]}%` }} />
                        </div>
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-emerald-400/20 blur-lg scale-150 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500" />
                          <div className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1 group-hover/metric:text-emerald-300 transition-colors relative">{item.value}</div>
                        </div>
                        <div className="text-[10px] sm:text-[8px] uppercase tracking-wider text-white/50 font-semibold leading-tight">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature cards */}
                  <div className="grid sm:grid-cols-2 gap-3.5 relative z-10">
                    <div className="group/feature relative rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-400/30 p-4 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                      {/* Sheen sweep */}
                      <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/10 to-transparent -translate-x-[250%] group-hover/feature:translate-x-[250%] transition-transform duration-[1.2s] ease-in-out pointer-events-none" />
                      {/* Glow ring behind icon */}
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-400/20 rounded-full blur-2xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500" />
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-emerald-300 font-black mb-3 relative">
                        <span className="relative">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" /></svg>
                          <span className="absolute inset-0 bg-emerald-400/40 blur-md scale-150 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500" />
                        </span>
                        <span>{t('hero.primaryEdge')}</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-white mb-1.5 leading-snug relative">{t('hero.highOutputPanels')}</div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-emerald-100/70 leading-relaxed relative">{t('hero.highOutputDesc')}</p>
                      {/* Bottom right energy dot */}
                      <span className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-pulse-slow" />
                    </div>
                    <div className="group/feature relative rounded-2xl bg-black/20 border border-white/10 p-4 hover:bg-white/5 hover:border-emerald-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                      {/* Sheen sweep */}
                      <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/8 to-transparent -translate-x-[250%] group-hover/feature:translate-x-[250%] transition-transform duration-[1.2s] ease-in-out pointer-events-none" />
                      {/* Glow ring behind icon */}
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-400/15 rounded-full blur-2xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500" />
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black mb-3 relative">
                        <span className="relative">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span className="absolute inset-0 bg-emerald-400/30 blur-md scale-150 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500" />
                        </span>
                        <span>{t('hero.executionPromise')}</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-white mb-1.5 leading-snug relative">{t('hero.unmatchedTurnkey')}</div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 leading-relaxed relative">{t('hero.unmatchedTurnkeyDesc')}</p>
                      {/* Bottom right energy dot */}
                      <span className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating bottom cards */}
              <div className="relative z-20 mt-6 grid grid-cols-2 gap-3">
                <div className="group/float rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 px-4 py-3.5 flex items-center gap-3 animate-float hover:bg-white/15 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[250%] group-hover/float:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                  <div className="relative w-11 h-11 rounded-xl bg-emerald-500/15 flex shrink-0 items-center justify-center text-emerald-300 shadow-inner shadow-emerald-500/10 group-hover/float:bg-emerald-500/25 group-hover/float:text-emerald-200 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0 relative">
                    <div className="text-sm font-black leading-tight text-white group-hover/float:text-emerald-300 transition-colors">{t('hero.yearWarranty30')}</div>
                    <div className="mt-0.5 text-[10px] leading-snug text-white/60">{t('hero.performanceAssurance')}</div>
                  </div>
                </div>
                <div className="group/float rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 px-4 py-3.5 flex items-center gap-3 animate-float hover:bg-white/15 hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ animationDelay: '1.2s' }}>
                  <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[250%] group-hover/float:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                  <div className="relative w-11 h-11 rounded-xl bg-emerald-500/15 flex shrink-0 items-center justify-center text-emerald-300 shadow-inner shadow-emerald-500/10 group-hover/float:bg-emerald-500/25 group-hover/float:text-emerald-200 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="min-w-0 relative">
                    <div className="text-sm font-black leading-tight text-white group-hover/float:text-emerald-300 transition-colors">{t('hero.pricePerKw')}</div>
                    <div className="mt-0.5 text-[10px] leading-snug text-white/60">{t('hero.indicativeEpcPricing')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
