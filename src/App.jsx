import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Tech from './components/Tech'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Background luxe gradient grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(2000px_800px_at_50%_-10%,rgba(2,6,23,0.6),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Tech />
        <Pricing />

        <footer className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
              <p className="text-white/70">© {new Date().getFullYear()} AURORA FX AI — All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex items-center gap-6 text-white/60 text-sm">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
