import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

import ScrollRevealHeading from './ScrollRevealHeading';
import AnimatedCounter from './AnimatedCounter';

function useInView(threshold = 0.08) {
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

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { label: t('about.yearsOfExcellence'), value: '10+' },
    { label: t('about.projectsDelivered'), value: '500+' },
    { label: t('about.happyClients'), value: '1000+' },
    { label: t('about.mwInstalled'), value: '10+' },
  ];

  const features = [
    t('about.featureSolarInverterSetup'),
    t('about.featureBatteryStorage'),
    t('about.featureWaterPump'),
    t('about.feature247Support'),
    t('about.featureTrackRecord'),
    t('about.featureCustomerCentric'),
  ];

  const pillars = [
    {
      number: '01',
      title: t('about.pillar1Title'),
      subtitle: t('about.pillar1Subtitle'),
      desc: t('about.pillar1Desc'),
      points: [t('about.pillar1Point1'), t('about.pillar1Point2'), t('about.pillar1Point3'), t('about.pillar1Point4')],
      stat: { value: '30+', label: t('about.pillar1StatLabel') },
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&auto=format&fit=crop&q=90',
      imagePosition: 'center center',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: t('about.pillar2Title'),
      subtitle: t('about.pillar2Subtitle'),
      desc: t('about.pillar2Desc'),
      points: [t('about.pillar2Point1'), t('about.pillar2Point2'), t('about.pillar2Point3'), t('about.pillar2Point4')],
      stat: { value: '₹61,200', label: t('about.pillar2StatLabel') },
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=90',
      imagePosition: 'center center',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: t('about.pillar3Title'),
      subtitle: t('about.pillar3Subtitle'),
      desc: t('about.pillar3Desc'),
      points: [t('about.pillar3Point1'), t('about.pillar3Point2'), t('about.pillar3Point3'), t('about.pillar3Point4')],
      stat: { value: '100%', label: t('about.pillar3StatLabel') },
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=90',
      imagePosition: 'center top',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: t('about.pillar4Title'),
      subtitle: t('about.pillar4Subtitle'),
      desc: t('about.pillar4Desc'),
      points: [t('about.pillar4Point1'), t('about.pillar4Point2'), t('about.pillar4Point3'), t('about.pillar4Point4')],
      stat: { value: '500+', label: t('about.pillar4StatLabel') },
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&auto=format&fit=crop&q=90',
      imagePosition: 'center center',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const [sectionRef, inView] = useInView(0.05);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [pillarsVisible, setPillarsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setHeaderVisible(true), 100);
    const t2 = setTimeout(() => setContentVisible(true), 250);
    const t3 = setTimeout(() => setPillarsVisible(true), 400);
    const t4 = setTimeout(() => setStatsVisible(true), 600);
    const t5 = setTimeout(() => setTaglineVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [inView]);

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-lines opacity-70" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-40" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.12]" />
      <div className="absolute inset-0 bg-aurora-top opacity-30" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-20" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-60" />
      <div className="absolute inset-0 bg-corner-glow-tr opacity-40" />
      <div className="absolute inset-0 bg-core-radiant" />

      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-emerald-300/15 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave -z-10" />

      {/* Hero-style glow particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[
          { left: '12%', top: '20%', size: 8, delay: '0s', duration: '12s' },
          { left: '75%', top: '50%', size: 6, delay: '2s', duration: '10s' },
          { left: '45%', top: '80%', size: 7, delay: '1s', duration: '14s' },
          { left: '85%', top: '15%', size: 9, delay: '3s', duration: '11s' },
          { left: '25%', top: '55%', size: 5, delay: '0.5s', duration: '13s' },
          { left: '60%', top: '30%', size: 8, delay: '2.5s', duration: '10s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.left, top: p.top, width: `${p.size}px`, height: `${p.size}px`, animationDelay: p.delay, animationDuration: p.duration }} />
        ))}
      </div>

      {/* Sparkle stars */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${6 + i * 13}%`, top: `${10 + (i * 10) % 80}%`, width: `${1.5 + (i % 2) * 0.5}px`, height: `${1.5 + (i % 2) * 0.5}px`, animationDelay: `${i * 0.3}s`, opacity: 0.6 }} />
        ))}
      </div>

      {/* Floating geometric shape */}
      <div className="absolute top-[30%] right-[12%] w-4 h-4 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none -z-10" />
      <div className="absolute bottom-[25%] left-[10%] w-3 h-3 border border-emerald-500/30 rotate-45 animate-diamond-float pointer-events-none -z-10" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-[60%] right-[25%] w-3.5 h-3.5 border border-emerald-400/35 rotate-45 animate-diamond-float pointer-events-none -z-10" style={{ animationDelay: '-4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-5">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-emerald-400/30 rounded-full blur-md animate-pulse-glow" />
              <svg className="relative w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {t('about.aboutCompany')}
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5"
            segments={[
              { text: t('about.powering') },
              { text: t('about.a') },
              { text: t('about.sustainableTomorrow'), accent: true },
            ]}
            staggerMs={140}
            threshold={0.4}
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 relative z-10 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Image Collage */}
          <div className="relative group">

            {/* === HERO MAIN IMAGE === */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-950/30 border border-white/20 dark:border-slate-800 aspect-[4/5] transform transition-transform duration-1000 group-hover:scale-[1.02]">
              {/* Premium aerial solar farm photo */}
              <img
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=900&auto=format&fit=crop&q=90"
                alt="Premium solar panel installation with dramatic sky"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              {/* Rich gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

              {/* Top-left: Premium badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white text-[11px] font-bold tracking-widest uppercase">{t('about.premiumSolarEpc')}</span>
              </div>

              {/* Bottom price badge */}
              <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-700 group-hover:-translate-y-2">
                <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[1.5rem] p-5 shadow-2xl border border-white/20">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 shadow-inner shadow-white/30 transform transition-transform group-hover:rotate-12 duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white tracking-tighter">{t('about.pricePerKw')}</div>
                      <div className="text-xs text-emerald-300 font-bold tracking-widest uppercase mt-0.5">{t('about.premiumKseEpc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === FLOATING IMAGE (top-right): Rooftop solar close-up === */}
            <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-40 h-56 lg:w-44 lg:h-64 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-3 hidden sm:block animate-float group-hover:rotate-6 transition-all duration-700" style={{ animationDelay: '0.5s' }}>
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=90"
                alt="Solar panel close-up with dramatic lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/30" />
            </div>

            {/* === FLOATING IMAGE (bottom-left): Golden-hour solar field === */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-40 h-44 lg:w-48 lg:h-52 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 -rotate-3 hidden sm:block animate-float group-hover:-rotate-6 transition-all duration-700" style={{ animationDelay: '1.5s' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=90"
                alt="Solar farm at golden hour with mountain backdrop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/20 to-transparent" />
            </div>

            {/* === FLOATING IMAGE (bottom-right): Solar panel macro === */}
            <div className="absolute bottom-16 -right-10 lg:-right-16 w-32 h-32 lg:w-36 lg:h-36 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-6 hidden lg:block animate-float" style={{ animationDelay: '2.5s' }}>
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&auto=format&fit=crop&q=90"
                alt="Premium rooftop solar panel installation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* === ISO Badge === */}
            <div className="absolute top-12 -left-6 md:-left-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 hidden md:flex items-center gap-4 animate-float group-hover:scale-105 transition-transform duration-500" style={{ animationDelay: '2s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-inner shadow-white/30">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-black text-slate-900 dark:text-white">{t('about.iso9001')}</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-0.5">{t('about.certified')}</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Company Intro */}
            <div className="mb-10">
              <span className="inline-block px-5 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black tracking-widest uppercase rounded-full mb-5 border border-emerald-500/20 shadow-sm animate-pulse">
                {t('about.ksePremiumEpc')}
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                {t('about.kaustubhSolarEvolution')}
              </h3>
              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                {t('about.intro')}
              </p>
              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {t('about.designLife')}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div
                  key={item.label}
                  className={`group bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[1.5rem] p-5 text-center border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1.5 transition-all duration-500 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
                >
                  <div className="relative inline-block">
                    <div className="absolute -inset-3 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-3xl font-black bg-gradient-to-br from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-1.5 group-hover:scale-110 transition-transform duration-500">
                      {item.value}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checkboxes */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div
                  key={feature}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-500 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800/50 hover:-translate-y-0.5 hover:shadow-md ${
                    contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 80}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-emerald-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`flex flex-wrap gap-4 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '900ms' }}>
              <a
                href="#contact"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-700 hover:to-emerald-500 text-white font-bold rounded-full shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 group overflow-hidden active:scale-[0.97]"
              >
                <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                <span className="relative">{t('about.getFreeConsultation')}</span>
                <svg className="w-5 h-5 relative transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#components"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold rounded-full border border-slate-200 dark:border-white/10 shadow-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:-translate-y-0.5 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 backdrop-blur-xl group active:scale-[0.97] overflow-hidden"
              >
                <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                <span className="relative">{t('about.exploreProducts')}</span>
                <svg className="w-5 h-5 relative transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Four Pillars Section - Elegant Premium Design */}
        <div id="services" className={`py-16 lg:py-20 transition-all duration-700 ${pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-emerald-500/30 rounded-full blur-md animate-pulse-glow" />
                <span className="relative w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              </div>
              {t('about.whatSetsUsApart')}
            </div>
            <ScrollRevealHeading
              as="h3"
              className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
              segments={[
                { text: t('about.the') },
                { text: t('about.fourPillars'), accent: true },
                { text: t('about.ofOurExcellence') },
              ]}
            />
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('about.pillarsDesc')}
            </p>
          </div>

          {/* Elegant Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`group relative transition-all duration-700 ${
                  pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Connector line (desktop only) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-emerald-400/70 via-emerald-400/40 to-transparent z-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-300 before:via-emerald-400 before:to-transparent before:animate-pulse-slow"></div>
                )}

                {/* Card */}
                <div className="relative bg-white/50 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-slate-200/50 dark:border-white/10 overflow-hidden h-full transition-all duration-700 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-3 z-10 flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-t-[2rem]">
                    <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:translate-x-[250%] transition-transform duration-1000 pointer-events-none z-10" />
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                      style={{ objectPosition: pillar.imagePosition }}
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent group-hover:opacity-75 transition-opacity duration-700"></div>

                    {/* Number badge */}
                    <div className="absolute top-4 right-4">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-emerald-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-10 h-10 bg-black/40 backdrop-blur-md text-emerald-400 text-sm font-black rounded-xl flex items-center justify-center shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          {pillar.number}
                        </div>
                      </div>
                    </div>

                    {/* Icon floating on image */}
                    <div className="absolute -bottom-7 left-6 z-10">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-emerald-400/30 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-[1.2rem] flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-xl border border-slate-200 dark:border-slate-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:from-emerald-400 group-hover:to-emerald-600 group-hover:text-white transition-all duration-500">
                          {pillar.icon}
                        </div>
                      </div>
                    </div>

                    {/* Subtitle on image */}
                    <div className="absolute bottom-4 right-5 text-[10px] font-black text-emerald-300 tracking-[0.2em] uppercase">
                      {pillar.subtitle}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-10 flex flex-col flex-grow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      {/* Title */}
                      <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-emerald-500 transition-colors duration-300">
                        {pillar.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm font-medium text-slate-600/90 dark:text-slate-400/90 leading-relaxed mb-6 flex-grow">
                        {pillar.desc}
                      </p>

                      {/* Points */}
                      <div className="space-y-2.5 mb-6">
                        {pillar.points.slice(0, 3).map((point, pi) => (
                          <div
                            key={point}
                            className={`flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400 group/point transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 ${
                              pillarsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}
                            style={{ transitionDelay: `${idx * 120 + pi * 80 + 200}ms` }}
                          >
                            <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 group-hover/point:scale-110 group-hover/point:rotate-3 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stat */}
                      <div className="pt-5 border-t border-slate-200/50 dark:border-white/10 mt-auto group/stat transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800">
                        <div className="flex flex-col">
                          <span className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent group-hover/stat:scale-105 transition-transform duration-300 origin-left">
                            {pillar.stat.value}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 group-hover/stat:text-emerald-600 dark:group-hover/stat:text-emerald-400 transition-colors duration-300">{pillar.stat.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advanced Performance Stats */}
          <div className={`mt-12 lg:mt-16 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-4">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-emerald-500/30 rounded-full blur-md animate-pulse-glow" />
                  <span className="relative w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                </div>
                {t('about.performanceSnapshot')}
              </span>
              <ScrollRevealHeading
                as="h4"
                className="justify-center text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
                segments={[
                  { text: t('about.provenNumbers') },
                  { text: t('about.reliableDelivery'), accent: true },
                ]}
              />
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t('about.snapshotDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mt-4">
              {[
                {
                  value: 10,
                  suffix: '+',
                  label: t('about.statYearsExperience'),
                  detail: t('about.statYearsDetail'),
                  icon: '✨',
                  image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&auto=format&fit=crop&q=90',
                },
                {
                  value: 500,
                  suffix: '+',
                  label: t('about.statProjectsDelivered'),
                  detail: t('about.statProjectsDetail'),
                  icon: '🏆',
                  image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&auto=format&fit=crop&q=90',
                },
                {
                  value: 30,
                  suffix: '+',
                  label: t('about.statPanelWarranty'),
                  detail: t('about.statPanelDetail'),
                  icon: '🛡️',
                  image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&auto=format&fit=crop&q=90',
                },
                {
                  value: 24,
                  suffix: '/7',
                  label: t('about.statPremiumSupport'),
                  detail: t('about.statPremiumDetail'),
                  icon: '🤝',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=90',
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`group bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 transition-all duration-700 hover:-translate-y-3 flex flex-col ${
                    statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="relative h-44 overflow-hidden rounded-t-[2rem]">
                    <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-[250%] transition-transform duration-1000 pointer-events-none z-10" />
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent group-hover:opacity-80 transition-opacity duration-700"></div>
                    <div className="absolute top-5 left-5">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-emerald-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="text-4xl font-black text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                        <AnimatedCounter target={item.value} suffix={item.suffix} duration={1800} />
                      </div>
                      <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{t('about.impactMetric')}</div>
                    </div>
                  </div>

                  <div className="p-6 pt-5 flex flex-col flex-grow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <h5 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-emerald-500 transition-colors duration-300">
                        {item.label}
                      </h5>
                      <p className="text-sm font-medium text-slate-600/90 dark:text-slate-400/90 leading-relaxed mb-6 flex-grow">
                        {item.detail}
                      </p>
                      <div className="pt-5 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between mt-auto">
                        <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-[0.15em] uppercase">
                          {t('about.ksePerformance')}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {t('about.verified')}
                          <svg className="w-4 h-4 text-emerald-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className={`mt-20 text-center relative z-10 transition-all duration-700 ${taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 sm:px-10 py-6 sm:py-8 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 rounded-3xl shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-500 hover:scale-[1.02] border border-emerald-400/30 group overflow-hidden">
            <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-[250%] transition-transform duration-1000 pointer-events-none" />
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-white text-xl sm:text-2xl font-black tracking-wide leading-tight">
              {t('about.tagline')}
            </span>
          </div>
        </div>
      </div>
    </section >
  );
}
