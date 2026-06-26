import { useState, type ReactNode } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
  sub: string;
  icon: ReactNode;
  index: number;
}

export default function StatCard({ target, suffix, label, sub, icon, index }: StatCardProps) {
  const [done, setDone] = useState(false);

  return (
    <div
      className="group relative bg-white/10 hover:bg-white/[0.16] backdrop-blur-md border border-white/15 hover:border-emerald-300/50 rounded-3xl p-6 sm:p-7 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Animated gradient border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-300/0 group-hover:from-emerald-400/10 group-hover:to-emerald-300/5 transition-all duration-500" />

      {/* Decorative corner glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Icon with rotating ring */}
      <div className="relative mx-auto mb-5 w-20 h-20 flex items-center justify-center">
        {/* Rotating conic ring */}
        <div
          className="absolute inset-0 rounded-full animate-ring-spin opacity-60 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(68, 232, 68,0.7) 90deg, transparent 180deg, rgba(68, 232, 68,0.4) 270deg, transparent 360deg)',
            maskImage: 'radial-gradient(transparent 60%, black 61%)',
            WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)',
          }}
        />
        {/* Static thin ring */}
        <div className="absolute inset-[6px] rounded-full border border-white/10" />

        {/* Icon disc */}
        <div className={`relative w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-all duration-500 ${done ? 'animate-stat-glow' : ''}`}>
          {icon}
        </div>
      </div>

      {/* Animated number */}
      <div className="relative text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums leading-none">
        <AnimatedCounter
          target={target}
          suffix={suffix}
          duration={2400}
          onComplete={() => setDone(true)}
        />
      </div>

      {/* Label */}
      <div className="relative text-sm font-semibold text-emerald-100 mb-1 mt-2">{label}</div>
      <div className="relative text-[10px] text-emerald-200/60 tracking-[0.2em] font-medium uppercase">{sub}</div>

      {/* Animated progress bar — fills automatically after count completes */}
      <div className="relative mt-5 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 rounded-full transition-all ease-out ${done ? 'w-full duration-1000' : 'w-0 duration-300'}`}
          style={{ backgroundSize: '200% auto' }}
        />
      </div>
    </div>
  );
}
