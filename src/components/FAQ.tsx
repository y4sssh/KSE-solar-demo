import { useState } from 'react';

const faqs = [
  {
    q: 'What solar solutions does KSE provide?',
    a: 'We provide end-to-end solar solutions including rooftop solar for residential, commercial, and industrial sectors, ground-mounted solar farms, solar street lights, solar water pumps, battery storage systems, and complete EPC services from design to commissioning.',
  },
  {
    q: 'How does KSE ensure quality?',
    a: 'We use only Tier-1 certified components from leading brands like KSE, Adani, Tata Power, Vikram, and Growatt. Our installations follow strict MNRE guidelines and our team of certified engineers ensures every project meets international quality standards with 25-year performance warranty.',
  },
  {
    q: 'What is the payback period for a solar installation?',
    a: 'Typically, residential solar systems have a payback period of 4-6 years, while commercial and industrial systems can pay back in 3-5 years. Use our Solar Calculator above to get an estimate tailored to your electricity consumption and location.',
  },
  {
    q: 'Is government subsidy available for solar?',
    a: 'Yes! The Government of India provides attractive subsidies for residential rooftop solar installations under the PM Surya Ghar Muft Bijli Yojana. Currently, up to ₹78,000 subsidy is available for 3kW systems. We handle the complete subsidy documentation and approval process for you.',
  },
  {
    q: 'How much can I save with solar?',
    a: 'You can save 80-90% on your electricity bills. A typical 5kW residential system can save ₹40,000-₹60,000 annually. Over 25 years, cumulative savings can exceed ₹15-20 lakhs, plus you get protection against rising electricity tariffs.',
  },
  {
    q: 'What maintenance is required for solar panels?',
    a: 'Solar panels require minimal maintenance — just periodic cleaning to remove dust and debris. We include 5 years of AMC (Annual Maintenance Contract) with all our installations. Panels have no moving parts and are designed to last 25+ years with minimal attention.',
  },
  {
    q: 'How long does installation take?',
    a: 'A typical residential installation (3-10 kW) takes 2-3 days for physical installation plus 2-3 weeks for net metering approval. Commercial and industrial projects take 4-12 weeks depending on size and complexity.',
  },
  {
    q: 'Do you provide financing options?',
    a: 'Yes, we have partnered with leading banks and NBFCs to offer easy EMI financing options for solar installations. You can avail loans with attractive interest rates and flexible tenures of up to 7 years. Many customers achieve zero upfront cost through EMI savings.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-lines opacity-70" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 bg-light-sweep opacity-30" />
      <div className="absolute inset-0 bg-conic-spin opacity-[0.10]" />
      <div className="absolute inset-0 bg-aurora-top opacity-25" />
      <div className="absolute inset-0 bg-aurora-bottom opacity-15" />
      <div className="absolute inset-0 bg-corner-glow-tl opacity-50" />
      <div className="absolute inset-0 bg-corner-glow-tr opacity-40" />

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-emerald-100/40 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-3xl animate-energy-wave" />

      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '20%', t: '25%', s: 7, d: '0s', du: '11s' },
          { l: '72%', t: '55%', s: 8, d: '2s', du: '13s' },
          { l: '48%', t: '75%', s: 6, d: '1.5s', du: '10s' },
        ].map((p, i) => (
          <span key={i} className="hero-particle" style={{ left: p.l, top: p.t, width: `${p.s}px`, height: `${p.s}px`, animationDelay: p.d, animationDuration: p.du }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="absolute bg-emerald-400 rounded-full animate-sparkle-twinkle" style={{ left: `${10 + i * 18}%`, top: `${15 + i * 14}%`, width: `${2 + i % 2}px`, height: `${2 + i % 2}px`, animationDelay: `${i * 0.5}s`, opacity: 0.5 }} />
        ))}
      </div>

      <div className="absolute top-[38%] right-[8%] w-3.5 h-3.5 border border-emerald-400/40 rotate-45 animate-diamond-float pointer-events-none" />
      <div className="absolute bottom-[25%] left-[12%] w-3 h-3 border border-emerald-500/35 rotate-45 animate-diamond-float pointer-events-none" style={{ animationDelay: '-9s' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Everything you need to know about going solar with us
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                open === idx
                  ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-500 shadow-lg shadow-emerald-500/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700'
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    open === idx
                      ? 'bg-emerald-500 text-white rotate-180'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === idx && (
                <div className="px-5 sm:px-6 pb-6">
                  <div className="border-l-2 border-emerald-500 pl-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
