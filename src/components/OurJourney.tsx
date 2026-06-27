import { useLanguage } from '../LanguageContext';
import StatCard from './StatCard';

export default function OurJourney() {
  const { t } = useLanguage();

  const stats = [
    {
      target: 500,
      suffix: '+',
      label: t('journey.projectsCompleted'),
      sub: t('journey.acrossIndia'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      target: 1000,
      suffix: '+',
      label: t('journey.happyCustomers'),
      sub: t('journey.satisfiedClients'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      target: 10,
      suffix: '+',
      label: t('journey.mwInstalled'),
      sub: t('journey.solarCapacity'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      target: 10,
      suffix: '+',
      label: t('journey.yearsExperience'),
      sub: t('journey.industryExpertise'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: t('journey.milestone1Year'),
      title: t('journey.milestone1Title'),
      desc: t('journey.milestone1Desc'),
      highlight: t('journey.milestone1Highlight'),
      image: 'https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
    {
      year: t('journey.milestone2Year'),
      title: t('journey.milestone2Title'),
      desc: t('journey.milestone2Desc'),
      highlight: t('journey.milestone2Highlight'),
      image: 'https://images.pexels.com/photos/11644973/pexels-photo-11644973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
    {
      year: t('journey.milestone3Year'),
      title: t('journey.milestone3Title'),
      desc: t('journey.milestone3Desc'),
      highlight: t('journey.milestone3Highlight'),
      image: 'https://images.pexels.com/photos/35105471/pexels-photo-35105471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
    {
      year: t('journey.milestone4Year'),
      title: t('journey.milestone4Title'),
      desc: t('journey.milestone4Desc'),
      highlight: t('journey.milestone4Highlight'),
      image: 'https://images.pexels.com/photos/9893727/pexels-photo-9893727.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 dark:from-slate-950 dark:via-emerald-950 dark:to-slate-950 overflow-hidden">
      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-emerald-950/80 dark:from-slate-950/70 dark:to-slate-950/90" />

      {/* Grid with fade mask (like Hero) */}
      <div className="absolute inset-0 hero-grid-fade opacity-30" />

      {/* Energy lines (like Hero) */}
      <div className="absolute inset-0 hero-energy-lines opacity-40" />

      {/* Solar rays core - rotating sun effect */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-30 pointer-events-none">
        <div className="absolute inset-0 rounded-full hero-solar-rays" />
        <div className="absolute inset-16 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-[25%] rounded-full hero-orbit-ring opacity-40">
          <span className="hero-orbit-dot" style={{ transform: 'translate(140px, -110px)' }} />
          <span className="hero-orbit-dot" style={{ transform: 'translate(-130px, 100px)', animationDelay: '-9s' }} />
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35" />

      {/* Visible grid lines */}
      <div className="absolute inset-0 bg-grid-lines opacity-30" />

      {/* Diagonal lines */}
      <div className="absolute inset-0 bg-lines opacity-40" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-45 mix-blend-overlay" />

      {/* Soft dot grid */}
      <div className="absolute inset-0 bg-dots opacity-[0.2]" />

      {/* Aurora bands */}
      <div className="absolute inset-0 bg-aurora-top opacity-50" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-40" />

      {/* Conic spinning light */}
      <div className="absolute inset-0 bg-conic-spin opacity-30" />

      {/* Corner glow accents */}
      <div className="absolute inset-0 bg-corner-glow-tl" />
      <div className="absolute inset-0 bg-corner-glow-tr" />
      <div className="absolute inset-0 bg-corner-glow-br" />

      {/* Radiant core center */}
      <div className="absolute inset-0 bg-core-radiant" />

      {/* Sweeping light beam */}
      <div className="absolute inset-0 bg-light-sweep" />

      {/* Large animated blobs (like Hero) */}
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-emerald-200/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '8s' }} />
      <div className="absolute top-1/2 left-1/3 w-[20rem] h-[20rem] bg-emerald-500/10 rounded-full blur-3xl animate-energy-wave pointer-events-none" />

      {/* Glow particles (like Hero) */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: '8%', top: '16%', size: 10, delay: '0s', duration: '11s' },
          { left: '18%', top: '68%', size: 8, delay: '1.8s', duration: '13s' },
          { left: '28%', top: '22%', size: 7, delay: '0.8s', duration: '10s' },
          { left: '39%', top: '74%', size: 12, delay: '2.2s', duration: '14s' },
          { left: '56%', top: '14%', size: 9, delay: '1.2s', duration: '12s' },
          { left: '66%', top: '60%', size: 7, delay: '2.8s', duration: '9s' },
          { left: '78%', top: '22%', size: 11, delay: '0.5s', duration: '15s' },
          { left: '86%', top: '70%', size: 8, delay: '3s', duration: '12s' },
          { left: '72%', top: '42%', size: 6, delay: '1.4s', duration: '10s' },
          { left: '46%', top: '34%', size: 9, delay: '2.5s', duration: '13s' },
        ].map((p, i) => (
          <span
            key={i}
            className="hero-particle"
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

      {/* Floating geometric diamonds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-4 h-4 border border-emerald-300/40 rotate-45 animate-diamond-float" />
        <div className="absolute top-[60%] right-[12%] w-5 h-5 border border-emerald-200/30 rotate-45 animate-diamond-float" style={{ animationDelay: '-6s' }} />
        <div className="absolute bottom-[20%] left-[18%] w-3 h-3 border border-emerald-400/35 rotate-45 animate-diamond-float" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Sparkle stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={`sparkle-${i}`}
            className="absolute bg-white rounded-full animate-sparkle-twinkle"
            style={{
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i * 10) % 80}%`,
              animationDelay: `${i * 0.25}s`,
              width: `${1 + (i % 3) * 0.5}px`,
              height: `${1 + (i % 3) * 0.5}px`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/60 dark:from-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wider mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 rounded-full animate-pulse"></span>
            <span className="gradient-text">{t('journey.ourJourney')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('journey.buildingGreener')}
          </h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            {t('journey.description')}
          </p>
        </div>

        {/* Featured intro showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Image collage */}
          <div className="relative animate-fade-in-up">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="https://images.pexels.com/photos/4254161/pexels-photo-4254161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Solar technician demonstrating panels to inspector"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating overlay card */}
            <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4 sm:p-5 max-w-[170px] sm:max-w-[200px] animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">10+ MW</div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t('journey.cleanEnergyGenerated')}</div>
            </div>
            {/* Top floating badge */}
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl px-4 py-3 hidden sm:flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[9px] font-bold">KS</div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[9px] font-bold">E</div>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white leading-none">{t('journey.since2015')}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{t('journey.amravatiMH')}</div>
              </div>
            </div>
          </div>

          {/* Mission content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-100 text-xs font-bold tracking-wider rounded-full mb-4">
              {t('journey.ourMission')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {t('journey.poweringMH')}
            </h3>
            <p className="text-emerald-100/90 leading-relaxed mb-6">
              {t('journey.since2015Desc')}
            </p>
            <div className="space-y-3">
              {[
                t('journey.pointEpc'),
                t('journey.pointPanels'),
                t('journey.pointWarranty'),
                t('journey.pointSupport'),
              ].map((point, i) => (
                <div
                  key={point}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-emerald-50">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline section heading */}
        <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('journey.milestonesHeading')}</h3>
          <p className="text-emerald-100/80">{t('journey.milestonesSub')}</p>
        </div>

        {/* Timeline - Vertical alternating */}
        <div className="relative mb-16">
          {/* Center line (desktop) - animated glow */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-300/10 via-emerald-300/40 to-emerald-300/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse-slow" />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={milestone.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${idx > 0 ? 'lg:-mt-12' : ''} animate-fade-in-up`}
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  {/* Center node (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-4 border-emerald-800 dark:border-slate-950 items-center justify-center shadow-xl shadow-emerald-500/30">
                    <span className="text-white text-xs font-bold">{milestone.year}</span>
                  </div>

                  {/* Card */}
                  <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'} group`}>
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/15 hover:border-emerald-300/50 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="relative sm:w-44 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-emerald-900/80 to-transparent" />
                          {/* Year badge (mobile) */}
                          <div className="lg:hidden absolute top-4 left-4 px-3 py-1.5 bg-white text-emerald-700 text-sm font-bold rounded-full shadow-lg">
                            {milestone.year}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex-1">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-200 text-[10px] font-bold rounded-full tracking-wide uppercase mb-3">
                            <span className="w-1 h-1 bg-emerald-300 rounded-full animate-pulse"></span>
                            {milestone.highlight}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">{milestone.title}</h3>
                          <p className="text-sm text-emerald-100/80 leading-relaxed">{milestone.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating (desktop) */}
                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid with Advanced Animated Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
              <StatCard
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                sub={stat.sub}
                icon={stat.icon}
                index={idx}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-emerald-100 mb-5 text-lg">{t('journey.readyToJoin')}</p>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-emerald-900 font-bold rounded-full shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 group overflow-hidden active:scale-[1.02]"
          >
            <span className="absolute -inset-x-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[250%] group-hover:translate-x-[250%] transition-transform duration-[1s] ease-in-out pointer-events-none" />
            <span className="relative">{t('journey.joinCustomers')}</span>
            <svg className="w-5 h-5 relative transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
