import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950" />

      {/* 3D Spline scene */}
      <div className="relative z-10 h-[60vh] md:h-[70vh] max-w-7xl mx-auto">
        <Spline scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Floating glass panel */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-sky-500/20 border border-white/10 text-[11px] text-sky-200">
                  LIVE • AI-POWERED FOREX AUTOMATION
                </div>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                  Elevate Your Trading with an Autonomous FX AI
                </h1>
                <p className="mt-4 text-sky-100/90 text-lg md:text-xl leading-relaxed">
                  Meet your always-on, precision-driven trading co‑pilot. Built for speed, discipline, and profitability — wrapped in a luxurious, futuristic experience.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#products" className="inline-flex items-center gap-2 bg-gradient-to-tr from-blue-600 to-sky-500 text-white px-5 py-3 rounded-xl shadow-lg shadow-sky-900/30 hover:shadow-sky-900/50 transition">
                    Explore Products
                  </a>
                  <a href="#technology" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">
                    See Technology
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { kpi: '24/7', label: 'Autonomy' },
                  { kpi: '0.02s', label: 'Signal Latency' },
                  { kpi: '99.9%', label: 'Uptime' },
                  { kpi: 'Tier-1', label: 'Liquidity Routing' },
                ].map((card) => (
                  <motion.div key={card.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <p className="text-3xl font-semibold text-white">{card.kpi}</p>
                    <p className="text-sm text-slate-300 mt-1">{card.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-sky-500/10 to-transparent" />
    </section>
  )
}
