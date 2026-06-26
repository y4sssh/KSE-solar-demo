import { useState } from 'react';

const projectTypes = ['Residential Rooftop', 'Commercial EPC', 'Industrial Solar', 'Investor / Partner'];

const heroStats = [
  { value: 'EPC', label: 'Turnkey Delivery' },
  { value: '30Y', label: 'Module Lifecycle' },
  { value: '98%', label: 'Inverter Efficiency' },
  { value: 'EPC', label: 'Solar EPC' },
];

const businessDetails = [
  { label: 'Contact Person', value: 'Mr. Nikhil Mohadikar' },
  { label: 'Phone', value: '+91-9168031615' },
  { label: 'Email', value: 'kaustubhsolarevolution@gmail.com' },
  { label: 'GSTIN', value: '27BMZPM6624E1ZI' },
  { label: 'Address', value: 'Shantinagar Nagraj Sq., Nagpur, Maharashtra 440017' },
  { label: 'Solar EPC', value: 'Kaustubh Solar Evolution (KSE)' },
];

const whatToShare = [
  'Latest electricity bill and sanctioned load',
  'Roof size, roof type and shadow constraints',
  'Site address and preferred commissioning timeline',
  'Need for net-metering, storage, EV charging or monitoring',
];

const bankingDetails = [
  { label: 'A/C Name', value: 'KAUSTUBH SOLAR EVOLUTION' },
  { label: 'A/C No.', value: '924020031964037' },
  { label: 'A/C Type', value: 'Current Account' },
  { label: 'Bank Name', value: 'Axis Bank Ltd.' },
  { label: 'IFSC Code', value: 'UTIB0000330' },
  { label: 'Branch', value: 'Lakadganj, Nagpur' },
];

const legalNotes = [
  'Proposal documents are prepared in good faith based on available information, site assumptions and public-domain material.',
  'Final scope, pricing, taxes, approvals and execution terms may change after site survey, statutory requirements and mutual contract finalization.',
  'Binding terms should be governed by the final EPC, material supply or service contract issued between the client and Kaustubh Solar Evolution.',
  'Payment and banking information should be verified with the official KSE contact before initiating any transaction.',
];

export default function Contact() {
  const [activeType, setActiveType] = useState(projectTypes[0]);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '', bill: '', size: '', summary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', location: '', bill: '', size: '', summary: '' });
  };

  const inputClass =
    'w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-grid-lines opacity-25" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.08]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-40" />
      <div className="absolute inset-0 bg-corner-glow-br opacity-40" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-200/25 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '12%', t: '18%', s: 7, d: '0s', du: '11s' },
          { l: '75%', t: '55%', s: 8, d: '2s', du: '13s' },
          { l: '45%', t: '78%', s: 6, d: '1.5s', du: '12s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${15 + i * 16}%`, top: `${12 + i * 15}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[30%] right-[10%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[28%] left-[8%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-10s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              CONTACT KSE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
              Solar EPC <span className="gradient-text">command hub</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Start a structured conversation with Kaustubh Solar Evolution for rooftop solar, commercial EPC, 
              industrial decarbonisation, storage integration or investment-grade clean-energy opportunities.
            </p>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 p-4 text-center shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all"
              >
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main two columns */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT: Business desk + What to share */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Desk */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6">
                <div className="text-xs font-bold text-emerald-50 tracking-widest uppercase mb-1">Official Business Desk</div>
                <h3 className="text-xl font-bold text-white">Kaustubh Solar Evolution</h3>
                <p className="text-sm text-emerald-50/90 mt-1">Make the future bright with solar power</p>
              </div>

              <div className="p-6">
                <div className="space-y-1">
                  {businessDetails.map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex flex-col sm:flex-row items-start sm:justify-between gap-1 sm:gap-4 py-3 ${
                        i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
                      }`}
                    >
                      <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium pt-0.5">{item.label}</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white text-left sm:text-right break-words">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <a
                    href="tel:+919168031615"
                    className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:from-emerald-700 hover:to-emerald-600 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call EPC Desk
                  </a>
                  <a
                    href="mailto:kaustubhsolarevolution@gmail.com"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Team
                  </a>
                </div>
              </div>
            </div>

            {/* What to Share */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-4">What to Share</div>
              <div className="space-y-3">
                {whatToShare.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Project Briefing Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 sm:p-8 h-full">
              <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">Project Briefing Terminal</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Request a Solar Consultation</h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Response: 24 hours
                </span>
              </div>

              {/* Project type tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`py-2.5 px-2 text-xs font-semibold rounded-xl transition-all text-center ${
                      activeType === type
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Full Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Phone</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Location</label>
                    <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="City, state" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Monthly Bill</label>
                    <input type="text" value={form.bill} onChange={(e) => setForm({ ...form, bill: e.target.value })} placeholder="Approx. INR / month" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Roof / Site Size</label>
                    <input type="text" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} placeholder="Sq.ft / acres / kW target" className={inputClass} />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Requirement Summary</label>
                  <textarea rows={4} value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} placeholder="Tell us about your requirement, timeline, load and goals." className={`${inputClass} resize-none`} />
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-5 border border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    By submitting this inquiry, you are requesting KSE to contact you for solar EPC consultation. 
                    Final technical and commercial proposals are subject to site survey, statutory approvals and feasibility validation.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Project Brief Submitted!
                    </>
                  ) : (
                    <>
                      Submit Project Brief
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom: Banking + Legal */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Banking Details */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 sm:p-8">
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">Banking Details</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Payment Reference</h3>
            <div className="space-y-1">
              {bankingDetails.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-1 sm:gap-4 py-3 ${
                    i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
                  }`}
                >
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white break-words">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-4 flex items-start gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Please verify banking details with the official KSE contact person before initiating any payment.
            </p>
          </div>

          {/* Legal Notes */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg p-6 sm:p-8">
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">Proposal Disclaimer</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Commercial & Legal Notes</h3>
            <div className="space-y-4">
              {legalNotes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
