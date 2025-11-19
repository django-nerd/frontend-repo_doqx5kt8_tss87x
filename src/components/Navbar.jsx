import { useState } from 'react'
import { Menu, X, Bot, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Products', href: '#products' },
    { label: 'Technology', href: '#technology' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/40 via-cyan-400/30 to-fuchsia-500/40 blur-xl opacity-70 group-hover:opacity-100 transition" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-lg">
                  <Bot className="h-5 w-5 text-white/90" />
                </div>
              </div>
              <div>
                <p className="text-white font-semibold tracking-tight leading-none">AURORA FX AI</p>
                <p className="text-[10px] text-white/60 -mt-0.5">Autonomous Trading Intelligence</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-tr from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl shadow-lg shadow-sky-900/30 hover:shadow-sky-900/50 transition">
                <Sparkles className="h-4 w-4" />
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map(item => (
                  <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl">
                  <Sparkles className="h-4 w-4" />
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
