import { useState, useEffect, createContext, useContext } from 'react';
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen overflow-x-hidden bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
        {/* All background effects wrapped in z-0 layer */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{ isolation: 'isolate' }}>
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute inset-0 opacity-95 dark:opacity-55 bg-grid-lines" />
          <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-conic-spin" />
          <div className="absolute top-0 left-0 right-0 h-[40vh] opacity-35 dark:opacity-25 bg-aurora-top" />
          <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-35 dark:opacity-25 bg-aurora-bottom" />
          <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-40 dark:opacity-30 bg-corner-glow-tl" />
          <div className="absolute top-0 right-0 w-[250px] h-[250px] opacity-35 dark:opacity-25 bg-corner-glow-tr" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-40 dark:opacity-30 bg-corner-glow-br" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-core-radiant rounded-full" />
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-emerald-300/60 dark:bg-emerald-500/35 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-emerald-200/60 dark:bg-emerald-400/35 rounded-full blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-100/55 dark:bg-emerald-300/32 rounded-full blur-3xl animate-blob" style={{ animationDelay: '14s' }} />
          <div className="absolute bottom-1/3 left-1/5 w-[450px] h-[450px] bg-emerald-200/50 dark:bg-emerald-400/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '5s' }} />
          <div className="absolute top-1/3 left-[60%] w-[400px] h-[400px] bg-emerald-400/45 dark:bg-emerald-300/25 rounded-full blur-3xl animate-blob" style={{ animationDelay: '11s' }} />
          <div className="absolute inset-0 bg-light-sweep" />
          <div className="absolute top-[15%] right-[15%] w-14 h-14 animate-diamond-float">
            <div className="w-full h-full rotate-45 border-2 border-emerald-300/55 dark:border-emerald-500/40 rounded-sm bg-emerald-300/10 dark:bg-emerald-500/8" />
          </div>
          <div className="absolute bottom-[20%] left-[12%] w-10 h-10 animate-diamond-float" style={{ animationDelay: '-5s' }}>
            <div className="w-full h-full rotate-45 border-2 border-emerald-300/45 dark:border-emerald-500/30 rounded-sm bg-emerald-300/8 dark:bg-emerald-500/6" />
          </div>
          <div className="absolute top-[55%] left-[70%] w-8 h-8 animate-diamond-float" style={{ animationDelay: '-10s' }}>
            <div className="w-full h-full rotate-45 border-[1.5px] border-emerald-300/50 dark:border-emerald-500/35 rounded-sm" />
          </div>
          <div className="absolute top-[35%] left-[5%] w-12 h-12 animate-diamond-float" style={{ animationDelay: '-3s' }}>
            <div className="w-full h-full rotate-45 border-2 border-emerald-300/40 dark:border-emerald-500/28 rounded-sm bg-emerald-300/8 dark:bg-emerald-500/6" />
          </div>
          <div className="absolute top-[18%] right-[10%] w-40 h-40 animate-ring-float">
            <div className="w-full h-full rounded-full border-[3px] border-emerald-300/50 dark:border-emerald-500/35" />
            <div className="absolute rounded-full border-[3px] border-emerald-300/35 dark:border-emerald-500/25" style={{ inset: '1.4rem' }} />
            <div className="absolute rounded-full bg-emerald-300/12 dark:bg-emerald-500/10 blur-sm" style={{ inset: '0.5rem' }} />
          </div>
          <div className="absolute bottom-[22%] left-[8%] w-28 h-28 animate-ring-float" style={{ animationDelay: '-7s' }}>
            <div className="w-full h-full rounded-full border-2 border-emerald-300/45 dark:border-emerald-500/30" />
            <div className="absolute rounded-full border-2 border-emerald-300/30 dark:border-emerald-500/20" style={{ inset: '1rem' }} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(24)].map((_, i) => (
              <span
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${3 + (i * 6 + 4) % 94}%`,
                  top: `${4 + (i * 9 + 3) % 92}%`,
                  width: `${i % 6 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                  height: `${i % 6 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                  background: i % 3 === 0
                    ? 'radial-gradient(circle, rgba(179, 255, 187, 0.95), rgba(0, 218, 40, 0.35))'
                    : i % 3 === 1
                    ? 'radial-gradient(circle, rgba(128, 255, 141, 0.9), rgba(0, 166, 24, 0.3))'
                    : 'radial-gradient(circle, rgba(255, 255, 255, 0.85), rgba(68, 232, 68, 0.25))',
                  boxShadow: `0 0 ${8 + (i % 5) * 5}px rgba(0, 218, 40, 0.55)`,
                  animation: `sparkle-twinkle ${1.5 + (i % 6) * 0.7}s ease-in-out ${i * 0.35}s infinite`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0" style={{ perspective: '600px' }}>
            {[...Array(60)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${1 + (i * 2 + 5) % 98}%`,
                  top: `${2 + (i * 4 + 3) % 96}%`,
                  width: `${i % 6 === 0 ? 6 : i % 5 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                  height: `${i % 6 === 0 ? 6 : i % 5 === 0 ? 5 : i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2}px`,
                  background: i % 5 === 0
                    ? 'rgba(0, 218, 40, 0.8)'
                    : i % 5 === 1
                    ? 'rgba(68, 232, 68, 0.7)'
                    : i % 5 === 2
                    ? 'rgba(128, 255, 141, 0.6)'
                    : i % 5 === 3
                    ? 'rgba(179, 255, 187, 0.55)'
                    : 'rgba(0, 166, 24, 0.5)',
                  boxShadow: i % 6 === 0
                    ? '0 0 20px rgba(0, 218, 40, 0.55)'
                    : i % 5 === 0
                    ? '0 0 14px rgba(68, 232, 68, 0.4)'
                    : i % 4 === 0
                    ? '0 0 10px rgba(128, 255, 141, 0.3)'
                    : i % 3 === 0
                    ? '0 0 6px rgba(179, 255, 187, 0.2)'
                    : '0 0 4px rgba(0, 166, 24, 0.15)',
                  animation: `float ${2 + (i % 7) * 1}s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
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
    </ThemeContext.Provider>
  );
}

export default App;
