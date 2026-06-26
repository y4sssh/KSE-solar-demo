import { useState, useMemo } from 'react';

import ScrollRevealHeading from './ScrollRevealHeading';

const states = [
  'Maharashtra', 'Gujarat', 'Rajasthan', 'Karnataka', 'Tamil Nadu',
  'Telangana', 'Andhra Pradesh', 'Madhya Pradesh', 'Uttar Pradesh',
  'Haryana', 'Punjab', 'Delhi', 'Kerala', 'West Bengal', 'Odisha', 'Bihar',
];

export default function SolarCalculator() {
  const [category, setCategory] = useState<'Residential' | 'Commercial'>('Residential');
  const [state, setState] = useState('Maharashtra');
  const [monthlyBill, setMonthlyBill] = useState(3000);

  const result = useMemo(() => {
    // Approx rate per unit
    const ratePerUnit = category === 'Residential' ? 7.5 : 9.0;
    const monthlyUnits = monthlyBill / ratePerUnit;
    // System size: approx 1 kW generates 120-150 units/month
    const systemKW = Math.max(1, Math.round(monthlyUnits / 130));
    // Cost per kW - Kaustubh Solar Evolution pricing
    const costPerKW = category === 'Residential' ? 61200 : 58000;
    const totalCost = systemKW * costPerKW;
    // PM Surya Ghar Muft Bijli Yojana subsidy (corrected)
    let subsidy = 0;
    if (category === 'Residential') {
      if (systemKW >= 3) subsidy = 78000;
      else if (systemKW === 2) subsidy = 60000;
      else if (systemKW === 1) subsidy = 30000;
      else subsidy = Math.min(30000 + (systemKW - 1) * 18000, 78000);
    } else {
      subsidy = Math.min(Math.round(totalCost * 0.15), 500000);
    }
    const investment = totalCost - subsidy;
    // Monthly savings based on offset, not flat 85%
    const offsetPercent = Math.min(systemKW * 130 / monthlyUnits, 1);
    const monthlySavings = Math.round(monthlyBill * offsetPercent * 0.9);
    const annualSavings = monthlySavings * 12;
    const paybackYears = investment / annualSavings;
    const lifeSavings = annualSavings * 25 - investment;
    return {
      systemKW,
      totalCost,
      subsidy,
      investment,
      monthlySavings,
      annualSavings,
      paybackYears: Math.round(paybackYears * 10) / 10,
      lifeSavings,
    };
  }, [category, monthlyBill]);

  const formatINR = (n: number) =>
    '₹' +
    Math.round(n).toLocaleString('en-IN', {
      maximumFractionDigits: 0,
    });

  const savingsPercent = Math.round((result.monthlySavings / monthlyBill) * 100);

  return (
    <section id="calculator" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-emerald-950/20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold tracking-wider mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            SOLAR CALCULATOR
          </div>
          <ScrollRevealHeading
            as="h2"
            className="justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
            segments={[
              { text: 'Calculate Your' },
              { text: 'Solar Savings', accent: true },
            ]}
          />
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Find out how much you can save by switching to solar. Get instant estimates on system size, cost, government subsidy, and ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 p-6 sm:p-8 border border-slate-100 dark:border-slate-700 h-fit">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Enter Your Details</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Customize your estimate</p>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Consumer Category
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                {(['Residential', 'Commercial'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl transition-all ${
                      category === c
                        ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-md'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {c === 'Residential' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      )}
                    </svg>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* State */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Select Your State
              </label>
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
                >
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Monthly Bill */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Monthly Electricity Bill
              </label>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 mb-4 text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {formatINR(monthlyBill)}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">per month</div>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex items-center justify-between mt-2 text-xs text-slate-400 dark:text-slate-500 font-medium">
                <span>₹500</span>
                <span>₹50,000</span>
              </div>
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
            >
              Get Detailed Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-3 flex items-center justify-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free site survey • No obligation
            </p>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-4">
            {/* Top 3 cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* System Size - Featured */}
              <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-4 sm:p-6 text-white shadow-xl shadow-emerald-500/30 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <svg className="w-6 h-6 mb-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="text-xs font-medium opacity-90 mb-1">Required System</div>
                <div className="text-3xl sm:text-4xl font-bold mb-0.5">{result.systemKW}</div>
                <div className="text-xs opacity-90">kW Solar Plant</div>
              </div>

              {/* Monthly Savings */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Monthly Savings</div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                  {formatINR(result.monthlySavings)}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">~{savingsPercent}% of bill</div>
              </div>

              {/* Payback */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Payback Period</div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                  {result.paybackYears}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">years to recover</div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Financial Summary</h3>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">
                  KSE EPC
                </span>
              </div>
              <div className="space-y-1">
                {[
                  { label: 'Total System Cost', value: formatINR(result.totalCost), type: 'normal' },
                  { label: 'Government Subsidy', value: `− ${formatINR(result.subsidy)}`, type: 'green' },
                  { label: 'Your Net Investment', value: formatINR(result.investment), type: 'bold' },
                  { label: 'Annual Savings', value: formatINR(result.annualSavings), type: 'green' },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between py-3 ${
                      i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''
                    }`}
                  >
                    <span className="text-sm text-slate-600 dark:text-slate-400">{row.label}</span>
                    <span
                      className={`font-bold ${
                        row.type === 'green'
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : row.type === 'bold'
                          ? 'text-slate-900 dark:text-white text-base'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlighted 25-year savings */}
              <div className="mt-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-5 flex items-center justify-between text-white shadow-lg shadow-emerald-500/30">
                <div>
                  <div className="text-sm font-medium opacity-90">25-Year Life Savings</div>
                  <div className="text-xs opacity-75">Total lifetime returns</div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">{formatINR(result.lifeSavings)}</div>
              </div>
            </div>

            <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
              *These are indicative values. Final pricing may vary based on site survey, shadow analysis, and equipment selection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
