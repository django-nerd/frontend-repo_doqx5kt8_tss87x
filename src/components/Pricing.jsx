import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Signal Elite',
    price: '$49/mo',
    desc: 'Pro signals with AI confirmation and execution bridge.',
    features: ['Major pairs & gold', 'Mobile alerts', '1 broker link', 'Backtest snapshots'],
    highlight: false,
  },
  {
    name: 'FX Pro Bot',
    price: '$199/mo',
    desc: 'Full automation with risk guard and smart execution.',
    features: ['All pairs + metals', 'Advanced risk guard', 'Multi-broker routing', 'Priority support'],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-sky-200">
            Pricing
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Choose your edge</h2>
          <p className="mt-3 text-sky-100/80">Start with signals or go fully autonomous.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className={`relative rounded-3xl p-8 border ${t.highlight ? 'bg-gradient-to-tr from-blue-600/20 to-sky-500/20 border-white/20' : 'bg-white/5 border-white/10'} backdrop-blur-xl`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white text-2xl font-semibold">{t.name}</h3>
                  <p className="text-sky-100/80 mt-1">{t.desc}</p>
                </div>
                <p className="text-white text-3xl font-semibold">{t.price}</p>
              </div>
              <div className="mt-6 grid gap-2">
                {t.features.map(f => (
                  <div key={f} className="inline-flex items-center gap-2 text-white/90">
                    <span className="h-5 w-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="#" className={`inline-flex items-center justify-center w-full px-5 py-3 rounded-xl ${t.highlight ? 'bg-gradient-to-tr from-slate-100 to-white text-slate-900' : 'bg-white/10 text-white border border-white/10 hover:bg-white/15'} transition`}>
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
