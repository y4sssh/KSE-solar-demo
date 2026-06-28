import { useState, useEffect, createContext, useContext } from 'react';
import { LanguageProvider } from './LanguageContext';
import translations from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Components from './components/Components';
import ScopeOfSupply from './components/ScopeOfSupply';
import SolarCalculator from './components/SolarCalculator';
import OurJourney from './components/OurJourney';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Certifications from './components/Certifications';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import { useMobileProfile } from './hooks/useMobileProfile';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function App() {
  const { shouldReduceEffects } = useMobileProfile();
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const sparkleCount = shouldReduceEffects ? 0 : 8;
  const orbCount = shouldReduceEffects ? 0 : 20;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageProvider translations={translations}>
        <div className={`min-h-screen overflow-x-hidden bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300 relative ${shouldReduceEffects ? 'mobile-performance-lite' : ''}`}>
          {/* All background effects wrapped in z-0 layer */}
          <div className="fixed inset-0 pointer-events-none z-0" style={{ isolation: 'isolate' }}>
            <div className="absolute inset-0 bg-noise" />
            <div className="absolute inset-0 opacity-95 dark:opacity-55 bg-grid-lines" />
            <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-conic-spin" />
            <div className="absolute top-0 left-0 right-0 h-[34vh] opacity-30 dark:opacity-20 bg-aurora-top" />
            <div className="absolute bottom-0 left-0 right-0 h-[34vh] opacity-30 dark:opacity-20 bg-aurora-bottom" />
            <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-40 dark:opacity-30 bg-corner-glow-tl" />
            <div className="absolute top-0 right-0 w-[250px] h-[250px] opacity-35 dark:opacity-25 bg-corner-glow-tr" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-40 dark:opacity-30 bg-corner-glow-br" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-core-radiant rounded-full" />
{!shouldReduceEffects && (
               <>
                 <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-300/40 dark:bg-emerald-500/20 rounded-full blur-3xl" style={{ contain: 'strict' }} />
                 <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-200/35 dark:bg-emerald-400/20 rounded-full blur-2xl" style={{ contain: 'strict' }} />
                 {!shouldReduceEffects && <div className="absolute inset-0 bg-light-sweep" style={{ contain: 'strict' }} />}
               </>
             )}
            {sparkleCount > 0 && (
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(sparkleCount)].map((_, i) => (
                  <span
                    key={`sparkle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${3 + (i * 6 + 4) % 94}%`,
                      top: `${4 + (i * 9 + 3) % 92}%`,
                      width: `${i % 6 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                      height: `${i % 6 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                      background: i % 3 === 0
                        ? 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(200, 255, 210, 0.6))'
                        : i % 3 === 1
                        ? 'radial-gradient(circle, rgba(255, 255, 255, 0.95), rgba(220, 255, 225, 0.5))'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(240, 255, 245, 0.4))',
                      boxShadow: `0 0 ${12 + (i % 5) * 8}px rgba(255, 255, 255, 0.7)`,
                      animation: `sparkle-twinkle ${1.5 + (i % 6) * 0.7}s ease-in-out ${i * 0.35}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
{orbCount > 0 && (
               <div className="absolute inset-0" style={{ contain: 'strict' }}>
                 {[...Array(orbCount)].map((_, i) => (
                   <span
                     key={i}
                     className="absolute rounded-full"
                     style={{
                       left: `${1 + (i * 2 + 5) % 98}%`,
                       top: `${2 + (i * 4 + 3) % 96}%`,
                       width: '3px',
                       height: '3px',
                       background: 'rgba(255, 255, 255, 0.8)',
                       opacity: 0.5,
                     }}
                   />
                 ))}
               </div>
             )}
          </div>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <WhyChooseUs />
            <Components />
            <ScopeOfSupply />
            <SolarCalculator />
            <OurJourney />
            <Projects />
            <Clients />
            <Certifications />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsApp />
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
}

export default App;
