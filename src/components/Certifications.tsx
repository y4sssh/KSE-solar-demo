import ScrollRevealHeading from './ScrollRevealHeading';

const certifications = [
  {
    title: 'ISO 9001:2015',
    desc: 'Quality Management System',
    detail: 'Internationally recognized standard ensuring consistent quality in every project.',
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'MNRE Approved',
    desc: 'Ministry of New & Renewable Energy',
    detail: 'Government of India approved channel partner for solar subsidy eligibility.',
    color: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'MSME Certified',
    desc: 'Micro, Small & Medium Enterprises',
    detail: 'Registered MSME ensuring reliability, accountability and quality service.',
    color: 'from-purple-500 to-purple-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'BIS Certified',
    desc: 'Bureau of Indian Standards',
    detail: 'All components meet strict Indian safety and quality benchmarks.',
    color: 'from-orange-500 to-orange-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'CEIG Approved',
    desc: 'Chief Electrical Inspector General',
    detail: 'Electrical safety certified for grid-connected solar installations.',
    color: 'from-cyan-500 to-cyan-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Make in India',
    desc: 'Government of India Initiative',
    detail: 'Proudly supporting domestic manufacturing and the Atmanirbhar Bharat vision.',
    color: 'from-rose-500 to-rose-600',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-grid-lines opacity-30" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-100/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-200/25 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '15%', t: '22%', s: 7, d: '0s', du: '12s' },
          { l: '70%', t: '55%', s: 8, d: '2s', du: '11s' },
          { l: '45%', t: '78%', s: 6, d: '1.5s', du: '14s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${12 + i * 17}%`, top: `${18 + i * 12}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[35%] right-[10%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[30%] left-[8%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-8s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            CERTIFICATIONS & ACCREDITATIONS
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: 'Certified &' },
              { text: 'Accredited', accent: true },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We meet the highest industry standards with government approvals and quality certifications — 
            ensuring every installation is safe, compliant, and built to last.
          </p>
        </div>

        {/* Featured Banner + Side gallery */}
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {/* Main banner */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[320px]">
            <img
              src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Inspectors checking documentation against solar panels"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/70 to-emerald-900/20" />

            <div className="relative h-full flex items-center p-8 sm:p-10 lg:p-12">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold mb-4">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></span>
                  GOVERNMENT APPROVED EPC
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  Quality You Can <br className="hidden sm:block" />Trust & Verify
                </h3>
                <p className="text-emerald-50 text-sm sm:text-base leading-relaxed mb-6">
                  As an ISO 9001:2015 certified & MNRE-approved company, every project we deliver 
                  meets stringent quality and safety standards with full documentation.
                </p>
                <div className="flex flex-wrap gap-5 sm:gap-7">
                  {[
                    { value: '6+', label: 'Certifications' },
                    { value: '100%', label: 'Compliance' },
                    { value: '500+', label: 'Certified Projects' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                      <div className="text-[11px] sm:text-xs text-emerald-100">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="grid grid-rows-2 gap-5">
            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group min-h-[150px]">
              <img
                src="https://images.pexels.com/photos/4254169/pexels-photo-4254169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Engineer checking technical documentation at solar site"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/20" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white font-bold text-sm">On-Site Quality Audits</div>
                <div className="text-white/70 text-xs mt-0.5">Every installation inspected & tested</div>
              </div>
            </div>

            {/* Stat card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg p-6 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <svg className="w-9 h-9 mb-3 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-xl font-bold relative">ISO 9001:2015</div>
              <div className="text-emerald-100 text-sm relative">Quality Management Certified</div>
            </div>
          </div>
        </div>

        {/* Quality Process Steps */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Our <span className="gradient-text">Quality Assurance</span> Process
            </h3>
            <p className="text-slate-600 dark:text-slate-400">Every project follows a rigorous 4-step quality protocol</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Site Survey & Design',
                desc: 'Detailed site assessment, shadow analysis and engineering design as per MNRE standards.',
                icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
              },
              {
                step: '02',
                title: 'Premium Procurement',
                desc: 'Only genuine KSE Tier-1 components sourced with full manufacturer documentation.',
                icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
              },
              {
                step: '03',
                title: 'Expert Installation',
                desc: 'Certified engineers execute installation with on-site quality audits at every stage.',
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
              },
              {
                step: '04',
                title: 'Testing & Handover',
                desc: 'Performance testing, net-metering, commissioning and complete documentation handover.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Connector */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-300 dark:from-emerald-700 to-transparent z-0"></div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-3xl font-black text-emerald-100 dark:text-emerald-900/50 group-hover:text-emerald-200 dark:group-hover:text-emerald-900 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Our <span className="gradient-text">Credentials</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400">Government approvals & industry certifications</p>
        </div>

        {/* Certifications Grid - Certificate badge style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300 overflow-hidden"
            >
              {/* Top colored accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

              {/* Decorative corner glow */}
              <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

              <div className="relative p-6">
                {/* Header row: medal seal + verified */}
                <div className="flex items-start justify-between mb-4">
                  {/* Medal/seal icon */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      {cert.icon}
                    </div>
                    {/* Ribbon notch */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                      <span className={`w-2 h-3 bg-gradient-to-b ${cert.color} rounded-b-sm opacity-80`}></span>
                      <span className={`w-2 h-3 bg-gradient-to-b ${cert.color} rounded-b-sm opacity-80`}></span>
                    </div>
                  </div>

                  {/* Verified seal */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    VERIFIED
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">
                  {cert.title}
                </h4>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{cert.desc}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{cert.detail}</p>

                {/* Footer - certificate style */}
                <div className="pt-3 border-t border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wide uppercase">
                    Active & Valid
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" strokeWidth={2} />
                    </svg>
                    KSE Certified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 flex-shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Verified & Documented</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">All certifications available on request during site survey</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all whitespace-nowrap"
          >
            Request Documentation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
