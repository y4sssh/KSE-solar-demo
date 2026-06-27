import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

function useInView(threshold = 0.05) {
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

export default function Footer() {
  const { t } = useLanguage();
  const [sectionRef, inView] = useInView(0.03);

  const sections = [
    {
      title: t('footer.sectionCompany'),
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      links: [t('footer.linkAboutUs'), t('footer.linkOurServices'), t('footer.linkProjects'), t('footer.linkCareers'), t('footer.linkBlog')],
    },
    {
      title: t('footer.sectionSolutions'),
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
      links: [t('footer.linkResidentialSolar'), t('footer.linkCommercialSolar'), t('footer.linkIndustrialSolar'), t('footer.linkSolarStreetLights'), t('footer.linkBatteryStorage')],
    },
    {
      title: t('footer.sectionResources'),
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      links: [t('footer.linkCalculator'), t('footer.linkSubsidyInfo'), t('footer.linkFaqs'), t('footer.linkContactUs'), t('footer.linkGetQuote')],
    },
  ];

  const socialLinks = [
    { name: t('footer.socialFacebook'), icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: t('footer.socialX'), icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: t('footer.socialLinkedin'), icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: t('footer.socialInstagram'), icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={sectionRef} className="bg-slate-900 dark:bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.04]" />
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />
      <div className="absolute inset-0 bg-light-sweep opacity-10" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.04]" />
      <div className="absolute inset-0 bg-aurora-top opacity-10" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-10" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-20" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-20" />
      <div className="absolute inset-0 bg-core-radiant opacity-10" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '15%', t: '20%', s: 6, d: '0s', du: '12s' },
          { l: '80%', t: '45%', s: 8, d: '1.5s', du: '14s' },
          { l: '50%', t: '70%', s: 5, d: '3s', du: '11s' },
          { l: '25%', t: '85%', s: 7, d: '0.5s', du: '13s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${10 + i * 22}%`, top: `${15 + i * 18}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.6}s`, opacity: 0.4 }} />
        ))}
      </div>

      <div className="absolute top-[25%] right-[12%] w-3 h-3 border border-emerald-400/30 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-3.5 h-3.5 border border-emerald-500/25 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-8s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Brand + Links grid */}
        <div className={`grid lg:grid-cols-6 gap-10 mb-14 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-500 ease-out delay-[100ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-lg animate-pulse-slow" />
                  <img
                    src="/images/kse-logo.jpeg"
                    alt="KSE Logo"
                    className="relative h-16 w-auto sm:h-22 rounded-xl shadow-lg shadow-emerald-500/30"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{t('footer.kaustubhSolar')}</div>
                  <div className="text-[10px] text-emerald-400 font-medium tracking-widest">{t('footer.premiumEpc')}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400">{t('footer.isoCertified')}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-400 mb-5 max-w-md">
                {t('footer.description')}
              </p>

              {/* Quick contact */}
              <div className="space-y-2 mb-6">
                <a href="tel:+919168031615" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors group">
                  <svg className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{t('footer.phone')}</span>
                </a>
                <a href="mailto:kaustubhsolarevolution@gmail.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-emerald-400 transition-colors group">
                  <svg className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('footer.email')}</span>
                </a>
                <div className="flex items-center gap-2.5 text-sm text-slate-400">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t('footer.address')}</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className={`flex gap-3 transition-all duration-500 ease-out delay-[200ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {socialLinks.map((s, idx) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="group/soc relative w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.9] overflow-hidden"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[250%] group-hover/soc:translate-x-[250%] transition-transform duration-[0.8s] ease-in-out pointer-events-none" />
                  <svg className="w-4 h-4 text-slate-300 group-hover/soc:text-white relative" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section, si) => (
            <div key={section.title} className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${300 + si * 100}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                </svg>
                <h4 className="text-white font-bold text-sm tracking-wide">{section.title}</h4>
              </div>
              <ul className="space-y-2.5">
                {section.links.map((link, li) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-all duration-300 inline-flex items-center gap-2 group"
                      style={{ transitionDelay: `${li * 50}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={`relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 rounded-3xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-300/10 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-light-sweep opacity-20" />
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {t('footer.ctaTitle')}
              <span className="inline-block ml-2 text-emerald-200 animate-pulse-slow">✦</span>
            </h3>
            <p className="text-emerald-100/80 text-sm">{t('footer.ctaDesc')}</p>
          </div>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-6 py-3.5 bg-white text-emerald-800 font-bold rounded-full hover:bg-emerald-50 hover:scale-[1.02] transition-all duration-300 shadow-xl whitespace-nowrap group overflow-hidden active:scale-[0.97]"
          >
            <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
            <span className="relative">{t('footer.getFreeQuote')}</span>
            <svg className="w-4 h-4 relative transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div className={`border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm transition-all duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
<p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-emerald-400 font-semibold">{t('footer.kaustubhSolar')} (KSE)</span>. {t('footer.allRightsReserved')}
            </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-emerald-400 transition-colors relative group">
              {t('footer.privacyPolicy')}
              <span className="absolute -bottom-px left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-emerald-400 transition-colors relative group">
              {t('footer.termsOfService')}
              <span className="absolute -bottom-px left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-emerald-400 transition-colors relative group">
              {t('footer.sitemap')}
              <span className="absolute -bottom-px left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-400 transition-all duration-300 group hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <svg className="w-3.5 h-3.5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {t('footer.backToTop')}
          </button>
        </div>
      </div>
    </footer>
  );
}
