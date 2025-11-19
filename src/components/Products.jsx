import { motion } from 'framer-motion'
import { Shield, Cpu, LineChart, Zap } from 'lucide-react'

const products = [
  {
    name: 'AURORA FX Pro',
    tag: 'Fully Automated',
    desc: 'Institutional-grade AI robot executing high-probability setups across major FX pairs with dynamic risk control.',
    bullets: ['Adaptive ML models', 'Smart risk parity', 'News-aware execution'],
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'AURORA Signal Elite',
    tag: 'Semi-Automated',
    desc: 'Human-in-the-loop signals with AI confirmation and instant execution bridges to your broker.',
    bullets: ['Proprietary signal engine', 'One-tap execution', 'Cross-broker routing'],
    accent: 'from-fuchsia-600 to-violet-500',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-sky-200">
            Our Products
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Two ways to trade smarter</h2>
          <p className="mt-3 text-sky-100/80">Choose the automation level that matches your style.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="relative rounded-3xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-10`} />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">{p.tag}</p>
                    <h3 className="text-2xl md:text-3xl text-white font-semibold mt-1">{p.name}</h3>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                    {i === 0 ? <Cpu className="h-6 w-6" /> : <LineChart className="h-6 w-6" />}
                  </div>
                </div>
                <p className="mt-4 text-slate-200/90">{p.desc}</p>
                <div className="mt-6 grid gap-2">
                  {p.bullets.map(b => (
                    <div key={b} className="inline-flex items-center gap-2 text-sm text-white/80">
                      <Shield className="h-4 w-4 text-sky-300" />
                      {b}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-3">
                  <a href="#pricing" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/10 transition">
                    Try Demo
                  </a>
                  <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-tr from-slate-100 to-white text-slate-900 px-4 py-2 rounded-xl shadow">
                    Purchase
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 -bottom-20 h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  )
}
