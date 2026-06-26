import { useMemo, useState } from 'react';

const heroMetrics = [
  { value: '98%', label: 'Inverter Efficiency' },
  { value: '6', label: 'Panels for 3.5kW' },
  { value: '24h', label: 'Response Window' },
];

const trustChips = ['N-Type Topcon', '30 Yr Warranty', 'Turnkey EPC', 'Net Metering Support'];

const particlesSeed = [
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
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const particles = useMemo(() => particlesSeed, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-20 lg:pt-24 overflow-hidden min-h-[100svh] flex items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className={`absolute inset-0 w-full h-full object-cover hero-video-zoom transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&auto=format&fit=crop&q=90"
        >
          <source src="https://videos.pexels.com/video-files/9790191/9790191-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/7042201/7042201-uhd_4096_1974_30fps.mp4" type="video/mp4" />
        </video>
        {!videoLoaded && (
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&auto=format&fit=crop&q=90"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Solar panels"
          />
        )}
        <div className="absolute inset-0 hero-vignette" />
        <div className="absolute inset-0 hero-energy-lines opacity-80" />
        <div className="absolute inset-0 hero-grid-fade opacity-25" />
      </div>

      {/* Solar rays core */}
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

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
              transform: `translate3d(${mouse.x * ((idx % 4) + 1) * 4}px, ${mouse.y * ((idx % 3) + 1) * 4}px, 0)`,
            }}
          />
        ))}
      </div>

      {/* foreground blobs */}
      <div className="hidden sm:block absolute top-16 right-0 w-[30rem] h-[30rem] bg-emerald-300/15 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-emerald-200/15 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '8s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Premium badge */}
            <div className="inline-flex max-w-full items-center gap-2.5 px-4 py-2 sm:px-5 bg-white/10 backdrop-blur-xl border border-emerald-400/25 text-emerald-100 rounded-full text-xs sm:text-sm font-semibold mb-7 shadow-2xl shadow-emerald-500/10 hover:border-emerald-400/40 transition-all duration-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-lg shadow-emerald-300/50"></span>
              </span>
              <span>MNRE Approved Solar EPC</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
              <span>Complete Solar Solutions</span>
            </div>

            <div className="max-w-2xl">
              {/* Category line */}
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-emerald-200/80 font-bold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-300/50" />
                <span>Solar EPC</span>
                <span className="w-1 h-px bg-emerald-400/40" />
                <span>Residential</span>
                <span className="w-1 h-px bg-emerald-400/40" />
                <span>Commercial</span>
                <span className="w-1 h-px bg-emerald-400/40" />
                <span>Industrial</span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl min-[380px]:text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] text-white mb-6">
                <span className="block text-white/95 drop-shadow-sm">Kaustubh Solar</span>
                <span className="block bg-gradient-to-r from-emerald-200 via-emerald-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">Evolution</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-emerald-50/80 mb-9 max-w-xl leading-[1.7] font-medium">
                <span className="text-white font-bold">Kaustubh Solar Evolution (KSE)</span> — premium solar EPC company delivering 
                high-efficiency N-Type Topcon bifacial panels, expert turnkey execution, and 30-year performance 
                warranty across Maharashtra and India.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-9">
              <a
                href="#calculator"
                className="relative inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-9 py-4.5 bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Calculate Your Savings
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 bg-white/8 backdrop-blur-lg text-white font-bold rounded-full border border-white/20 hover:border-emerald-400/50 hover:bg-white/15 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                View Projects
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {trustChips.map((chip, i) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full text-xs font-semibold text-emerald-50 shadow-sm hover:bg-white/15 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <svg className="w-3.5 h-3.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>

            {/* Bottom proof stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-7 border-t border-white/10 max-w-2xl">
              {[
                { value: '₹61,200', label: 'Per kW Rate', sub: 'Indicative pricing' },
                { value: '30 Yrs', label: 'Panel Warranty', sub: 'Performance backed' },
                { value: '500+', label: 'Projects', sub: 'Across Maharashtra' },
              ].map((stat, i) => (
                <div key={stat.label} className="group relative">
                  {i < 2 && <div className="hidden sm:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />}
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 mb-0.5 group-hover:text-emerald-200 transition-colors drop-shadow-sm">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-50/80 leading-tight">{stat.label}</div>
                  <div className="text-[10px] text-emerald-50/40 mt-0.5">{stat.sub}</div>
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

              {/* Main card */}
              <div className="relative bg-white/[0.08] dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl shadow-emerald-950/50 overflow-hidden group hover:border-emerald-400/40 hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-700 hover:-translate-y-3">
                {/* Card top glow */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* top image panel */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                    alt="Premium rooftop solar installation"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Featured card overlay */}
                  <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-[calc(100%-2rem)] sm:max-w-[22rem]">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/15 p-4 shadow-2xl group-hover:-translate-y-1 group-hover:border-emerald-300/40 transition-all duration-700">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg flex-shrink-0 shadow-emerald-500/30">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span className="text-[9px] font-black tracking-[0.22em] uppercase text-emerald-200/90">Featured Rooftop EPC</span>
                          </div>
                          <div className="text-[13px] sm:text-[15px] font-black text-white leading-tight">Premium Rooftop Execution</div>
                          <div className="text-[10px] text-emerald-100/70 mt-1 leading-relaxed">High-output N-Type modules with turnkey delivery.</div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center rounded-xl border border-white/15 bg-black/30 backdrop-blur-sm px-3 py-2 flex-shrink-0">
                          <img src="/images/kse-logo.jpeg" alt="KSE" className="h-8 w-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom badges */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-5 py-3 sm:px-6 sm:py-4 text-white border border-white/15 shadow-2xl group-hover:bg-black/50 group-hover:border-emerald-400/30 transition-all duration-500">
                      <div className="text-3xl sm:text-4xl font-black tracking-tighter bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">3.5<span className="text-xl sm:text-2xl font-bold">kW</span></div>
                      <div className="text-[9px] font-bold text-emerald-300 uppercase tracking-widest mt-1.5">System Capacity</div>
                    </div>
                    <div className="hidden sm:flex bg-black/40 backdrop-blur-xl rounded-2xl px-5 py-3.5 items-center gap-3 shadow-2xl border border-white/15 hover:border-emerald-400/30 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-black tracking-wide text-white">N-Type Topcon</div>
                        <div className="text-[10px] font-medium text-emerald-200/80">Premium bifacial module</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* dashboard */}
                <div className="p-5 sm:p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-3 mb-5 relative z-10">
                    {heroMetrics.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-black/20 hover:bg-black/40 transition-all duration-300 backdrop-blur-md border border-white/10 px-2 py-4 text-center group/metric hover:border-emerald-400/30">
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-white mb-1 group-hover/metric:text-emerald-300 transition-colors">{item.value}</div>
                        <div className="text-[8px] uppercase tracking-wider text-white/50 font-semibold leading-tight">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature cards */}
                  <div className="grid sm:grid-cols-2 gap-3.5 relative z-10">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-400/30 p-4 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-emerald-300 font-black mb-3">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" /></svg>
                        <span>Primary Edge</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-white mb-1.5 leading-snug">High-Output N-Type Panels</div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-emerald-100/70 leading-relaxed">Tier-1 N-Type Topcon bifacial modules engineered for maximum yield.</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 border border-white/10 p-4 hover:bg-white/5 hover:border-emerald-400/20 transition-all duration-300">
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Execution Promise</span>
                      </div>
                      <div className="text-sm sm:text-base font-black text-white mb-1.5 leading-snug">Unmatched Turnkey EPC</div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 leading-relaxed">Site-survey to commissioning with full net metering support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating bottom cards */}
              <div className="relative z-20 mt-6 hidden xl:grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 px-4 py-3.5 flex items-center gap-3 animate-float hover:bg-white/15 hover:border-emerald-400/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex shrink-0 items-center justify-center text-emerald-300 shadow-inner shadow-emerald-500/10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black leading-tight text-white">30 Year Warranty</div>
                    <div className="mt-0.5 text-[10px] leading-snug text-white/60">Performance backed assurance</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/15 px-4 py-3.5 flex items-center gap-3 animate-float hover:bg-white/15 hover:border-emerald-400/30 transition-all duration-300" style={{ animationDelay: '1.2s' }}>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex shrink-0 items-center justify-center text-emerald-300 shadow-inner shadow-emerald-500/10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black leading-tight text-white">₹61,200 / kW</div>
                    <div className="mt-0.5 text-[10px] leading-snug text-white/60">Indicative EPC pricing</div>
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
