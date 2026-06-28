import { useEffect, useState } from 'react';
import { useTheme } from '../App';
import { useLanguage } from '../LanguageContext';

const navKeys = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.components', href: '#components' },
  { key: 'nav.calculator', href: '#calculator' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.clients', href: '#clients' },
  { key: 'nav.contact', href: '#contact' },
];

const desktopNavItems = navKeys.filter((item) => ['nav.home', 'nav.about', 'nav.services', 'nav.components', 'nav.calculator', 'nav.projects'].includes(item.key));

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const visibleSection = navKeys
        .map((item) => document.querySelector(item.href))
        .filter((section): section is HTMLElement => section instanceof HTMLElement)
        .filter((section) => section.getBoundingClientRect().top <= 150)
        .at(-1);

      if (visibleSection) setActiveSection(visibleSection.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMobileMenu = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };

    window.addEventListener('resize', closeMobileMenu);
    return () => window.removeEventListener('resize', closeMobileMenu);
  }, []);

  const handleNavigation = (href: string) => {
    setActiveSection(href.slice(1));
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6 animate-fade-in-down">
      <div className={`mx-auto max-w-7xl rounded-[1.3rem] transition-all duration-500 relative overflow-hidden ${
        scrolled
          ? 'bg-[#d0ff9d] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.25)] border border-emerald-200/60'
          : 'bg-[#d0ff9d] shadow-[0_16px_40px_-30px_rgba(0,0,0,0.12)] border border-emerald-200/40'
      }`}>
        {/* Subtle green gradient glow at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none" />

        {/* Bottom accent line */}
        <div className="absolute inset-x-[5%] bottom-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none" />

        <div className="flex h-[4.25rem] items-center justify-between px-3.5 sm:h-[4.8rem] sm:px-5">
          <a href="#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => handleNavigation('#home')}>
            <img
              src="/images/kse-logo.jpeg"
              alt="KSE Logo"
              className="h-11 w-auto rounded-xl sm:h-14 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
              loading="eager"
              decoding="async"
            />
            <div className="hidden min-w-0 sm:block">
              <div className="font-display text-2xl leading-none gradient-text animate-gradient-x transition-all duration-300 group-hover:translate-x-0.5">{t('nav.kaustubhSolar')}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] gradient-text opacity-70 transition-all duration-300 group-hover:opacity-100">
                {t('nav.signatureEpc')}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {desktopNavItems.map((item, i) => {
              const isActive = activeSection === item.href.slice(1);
              const label = t(item.key);
              return (
                <a
      key={item.key}
      href={item.href}
      onClick={() => handleNavigation(item.href)}
      className={`relative py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition-all duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-emerald-700 after:transition-transform ${
        isActive
          ? 'text-emerald-900 after:scale-x-100'
          : 'text-emerald-700/50 after:scale-x-0 hover:text-emerald-900 hover:after:scale-x-100'
      }`}
      style={{ animationDelay: `${i * 60}ms` }}
    >
      <span className="opacity-0 animate-fade-in-down" style={{ '--delay': `${0.3 + i * 0.06}s` } as React.CSSProperties}>
        {isActive && <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />}
        {label}
      </span>
    </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-300 bg-emerald-100/50 text-emerald-800 text-xs font-bold transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-200 hover:scale-110 active:scale-[0.9] sm:h-10 sm:w-10"
            >
              {lang === 'en' ? 'HI' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-300 bg-emerald-100/50 text-emerald-800 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-200 hover:scale-110 active:scale-[0.9] sm:h-10 sm:w-10"
            >
              {theme === 'light' ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
            <a
              href="#contact"
              onClick={() => handleNavigation('#contact')}
              className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 hover:bg-emerald-700 active:scale-[0.95] sm:inline-flex group overflow-hidden relative"
            >
              <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
              <span className="relative">{t('nav.getProposal')}</span>
              <svg className="h-3.5 w-3.5 relative transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" /></svg>
            </a>
            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-300 bg-emerald-100/50 text-emerald-800 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-200 hover:scale-110 active:scale-[0.9] xl:hidden sm:h-10 sm:w-10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`xl:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? 'animate-slide-down border-t border-emerald-300' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pb-4 pt-3.5 sm:px-5">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-700/50">{t('nav.exploreKaustubh')}</p>
            <nav className="grid grid-cols-1 gap-x-6 sm:grid-cols-2" aria-label="Mobile navigation">
              {navKeys.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`border-b py-3 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-600 text-emerald-900'
                        : 'border-emerald-200 text-emerald-700/60 hover:border-emerald-400 hover:text-emerald-900 hover:translate-x-1'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className={`inline-flex items-center gap-2 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${0.1 + i * 0.04}s` }}>
                      {isActive && <span className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0" />}
                      {t(item.key)}
                    </span>
                  </a>
                );
              })}
            </nav>
            <a href="#contact" onClick={() => handleNavigation('#contact')} className={`group mt-4 flex items-center justify-between rounded-full bg-emerald-600 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-500 active:scale-[0.97] overflow-hidden relative hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.4s' }}>
              <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
              <span className="relative">{t('nav.getSolarProposal')}</span>
              <svg className="h-4 w-4 relative transition-all duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
