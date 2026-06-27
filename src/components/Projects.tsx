import { useState, useRef, useEffect } from 'react';
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

type Category = 'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Institutional';

interface Project {
  title: string;
  location: string;
  capacity: string;
  panels: string;
  technology: string;
  category: Exclude<Category, 'All'>;
  image: string;
}


export default function Projects() {
  const { t } = useLanguage();
  const [sectionRef, inView] = useInView(0.04);
  const [active, setActive] = useState<Category>('All');

  const featured = {
    title: t('projects.featuredTitle'),
    location: t('projects.featuredLocation'),
    capacity: '3.5 kW',
    panels: '6 Panels',
    technology: 'N-Type Topcon Bifacial',
    category: 'Residential' as const,
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=900&auto=format&fit=crop',
    tags: [t('projects.featuredTag1'), t('projects.featuredTag2'), t('projects.featuredTag3'), t('projects.featuredTag4')],
  };

  const projects: Project[] = [
    {
      title: t('projects.project1Title'),
      location: t('projects.project1Location'),
      capacity: '150 kW',
      panels: '280 Panels',
      technology: 'KSE Bifacial DCR',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project2Title'),
      location: t('projects.project2Location'),
      capacity: '500 kW',
      panels: '920 Panels',
      technology: 'KSE Bifacial DCR',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project3Title'),
      location: t('projects.project3Location'),
      capacity: '50 kW',
      panels: '92 Panels',
      technology: 'On-Grid String Inverter',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project4Title'),
      location: t('projects.project4Location'),
      capacity: '250 kW',
      panels: '460 Panels',
      technology: 'KSE On-Grid',
      category: 'Institutional',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project5Title'),
      location: t('projects.project5Location'),
      capacity: '1 MW',
      panels: '1840 Panels',
      technology: 'Ground + Rooftop',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1565636192335-c15d8dd9fb1e?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project6Title'),
      location: t('projects.project6Location'),
      capacity: '25 kW',
      panels: '46 Panels',
      technology: 'N-Type Topcon',
      category: 'Institutional',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&auto=format&fit=crop',
    },
    {
      title: t('projects.project7Title'),
      location: t('projects.project7Location'),
      capacity: '5 kW',
      panels: '10 Panels',
      technology: 'N-Type Topcon Bifacial',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop',
    },
  ];

  const categories: Category[] = ['All', 'Residential', 'Commercial', 'Industrial', 'Institutional'];

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const totalCount = projects.length + 1;

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-28 bg-gradient-to-b from-emerald-50/50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute inset-0 bg-grid-lines opacity-30" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '18%', t: '22%', s: 7, d: '0s', du: '12s' },
          { l: '72%', t: '55%', s: 9, d: '2s', du: '11s' },
          { l: '50%', t: '78%', s: 6, d: '1s', du: '14s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${10 + i * 18}%`, top: `${14 + i * 14}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.45}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[28%] right-[8%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[32%] left-[10%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-7s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            {t('projects.ourProjects')}
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: t('projects.successfully') },
              { text: t('projects.delivered'), accent: true },
              { text: t('projects.projects') },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        {/* Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => {
            const count = cat === 'All' ? totalCount : projects.filter((p) => p.category === cat).length + (cat === featured.category ? 1 : 0);
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 active:scale-[0.95] ${
                  active === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-[1.04]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:scale-[1.04] hover:shadow-md hover:shadow-emerald-500/20'
                }`}
              >
                {cat === 'All' ? t('projects.categoryAll') : cat === 'Residential' ? t('projects.categoryResidential') : cat === 'Commercial' ? t('projects.categoryCommercial') : cat === 'Industrial' ? t('projects.categoryIndustrial') : t('projects.categoryInstitutional')}
                <span
                  className={`px-1.5 py-0.5 text-[10px] rounded-full ${
                    active === cat ? 'bg-white/25 text-white' : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Project (only on All) */}
        {active === 'All' && (
          <div className={`bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden mb-8 grid lg:grid-cols-2 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Top badges */}
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                {t('projects.category' + featured.category)}
              </span>
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                {t('projects.completed')}
              </span>
              {/* Capacity */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-2xl px-5 py-3">
                <div className="text-2xl font-bold text-white">{featured.capacity}</div>
                <div className="text-xs text-white/70">{t('projects.systemCapacity')}</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-2">
                {t('projects.featuredProject')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {featured.title}
              </h3>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                {[
                  { icon: 'location', label: t('projects.location'), value: featured.location },
                  { icon: 'capacity', label: t('projects.capacity'), value: featured.capacity },
                  { icon: 'panels', label: t('projects.panels'), value: featured.panels },
                  { icon: 'tech', label: t('projects.technology'), value: featured.technology },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {d.icon === 'location' && <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />}
                        {d.icon === 'capacity' && <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                        {d.icon === 'panels' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />}
                        {d.icon === 'tech' && <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium">{d.label}</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 self-start px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 group overflow-hidden active:scale-[0.97]"
              >
                <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
                <span className="relative">{t('projects.getSimilarQuote')}</span>
                <svg className="w-4 h-4 relative transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:flex-nowrap max-sm:gap-4 max-sm:pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {filtered.map((project, pIdx) => (
            <div
              key={project.title}
              className={`max-sm:snap-start max-sm:min-w-[280px] max-sm:w-[75vw] max-sm:shrink-0 group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 + pIdx * 0.08}s` } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top badges */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 text-[10px] font-bold rounded-full">
                  {t('projects.category' + project.category)}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  {t('projects.done')}
                </span>

                {/* Capacity */}
                <div className="absolute bottom-3 left-3">
                  <div className="text-xl font-bold text-white leading-none">{project.capacity}</div>
                  <div className="text-[10px] text-white/70 mt-0.5">{project.panels}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {project.technology}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className={`mt-12 flex justify-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 px-6 sm:px-8 py-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏗️</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t('projects.ctaTitle')}
              </span>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 group overflow-hidden whitespace-nowrap active:scale-[0.97]"
            >
              <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
              <span className="relative">{t('projects.getFreeSurvey')}</span>
              <svg className="w-4 h-4 relative transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
