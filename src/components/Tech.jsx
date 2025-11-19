import { motion } from 'framer-motion'
import { Satellite, Activity, Layers, ShieldCheck } from 'lucide-react'

export default function Tech() {
  const items = [
    { icon: Satellite, title: 'Market Intelligence', desc: 'Real-time macro events, liquidity, and volatility context fueling decision-making.' },
    { icon: Activity, title: 'Signal Engine', desc: 'Hybrid statistical-learning models trained on regime shifts, not just price.' },
    { icon: Layers, title: 'Execution Core', desc: 'Latency-optimized order routing with slippage-aware fills and broker abstraction.' },
    { icon: ShieldCheck, title: 'Risk Guard', desc: 'Position sizing, trailing protection, and exposure limits calibrated per account.' },
  ]

  return (
    <section id="technology" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-sky-200">
            Technology
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Built like a high-frequency desk</h2>
          <p className="mt-3 text-sky-100/80">Engineered for precision, resilience, and consistency.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-sky-500/10 to-transparent" />
    </section>
  )
}
