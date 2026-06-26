import { useEffect, useState } from 'react';
import { useTheme } from '../App';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Components', href: '#components' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const desktopNavItems = navItems.filter((item) => ['Home', 'About', 'Services', 'Components', 'Calculator', 'Projects'].includes(item.label));

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const visibleSection = navItems
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      <div className={`mx-auto max-w-7xl rounded-[1.3rem] border transition-all duration-300 ${
        scrolled
          ? 'border-emerald-400/30 bg-[#00c6246e] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
          : 'border-emerald-300/20 bg-[#00c6246e] shadow-[0_16px_40px_-30px_rgba(0,0,0,0.15)] backdrop-blur-xl'
      }`}>
        <div className="flex h-[4.45rem] items-center justify-between px-4 sm:h-[4.8rem] sm:px-5">
          <a href="#home" className="group flex min-w-0 items-center gap-3" onClick={() => handleNavigation('#home')}>
            <img
              src="/images/kse-logo.jpeg"
              alt="KSE Logo"
              className="h-11 w-auto rounded-xl sm:h-14"
            />
            <div className="hidden min-w-0 sm:block">
              <div className="font-display text-2xl leading-none text-white">Kaustubh Solar</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Signature EPC
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {desktopNavItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-white after:transition-transform ${
                    isActive
                      ? 'text-white after:scale-x-100'
                      : 'text-white/60 after:scale-x-0 hover:text-white hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:border-white/40 hover:bg-white/20 sm:h-10 sm:w-10"
            >
              {theme === 'light' ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              )}
            </button>
            <a
              href="#contact"
              onClick={() => handleNavigation('#contact')}
              className="hidden items-center gap-2 rounded-full bg-[#d6b16c] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#17130e] transition-all hover:-translate-y-0.5 hover:bg-[#ebc57a] sm:inline-flex"
            >
              Get Proposal
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" /></svg>
            </a>
            <button
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-[#d6b16c]/45 hover:bg-white/10 xl:hidden sm:h-10 sm:w-10"
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

        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-3.5 xl:hidden sm:px-5">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/60">Explore Kaustubh Solar</p>
            <nav className="grid grid-cols-2 gap-x-6" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`border-b py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-white text-white'
                        : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <a href="#contact" onClick={() => handleNavigation('#contact')} className="mt-4 flex items-center justify-between rounded-full bg-[#d6b16c] px-4 py-3.5 text-sm font-semibold text-[#17130e]">
              Get a Solar Proposal
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" /></svg>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
