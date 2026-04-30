import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const mobileLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── Floating desktop navbar (logo + resume only) ── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block w-full max-w-3xl px-4">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-gray-950/80 backdrop-blur-xl border-gray-700/70 shadow-2xl shadow-black/40'
              : 'bg-gray-900/50 backdrop-blur-lg border-gray-700/30 shadow-lg shadow-black/10'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <span className="text-cyan-400 font-black text-xs">M</span>
            </span>
            <span className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
              Muhib<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Tagline — centre */}
          <p className="text-sm text-gray-400 hidden lg:block tracking-wide font-medium">
            Data Analyst &nbsp;·&nbsp; SQA &nbsp;·&nbsp; Software Engineer
          </p>

          {/* Resume CTA */}
          <a
            href="/CV_MUHIB.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-px"
          >
            <Download size={13} />
            Resume
          </a>
        </div>
      </nav>

      {/* ── Mobile navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/70 shadow-xl'
            : 'bg-gray-950/70 backdrop-blur-md border-b border-gray-800/30'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
              <span className="text-cyan-400 font-black text-xs">M</span>
            </span>
            <span className="text-base font-bold text-white">
              Muhib<span className="text-cyan-400">.</span>
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-5 pt-1 flex flex-col gap-1 border-t border-gray-800/50">
            {mobileLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-xl transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="/CV_MUHIB.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-gray-950 text-sm font-semibold rounded-xl transition-colors"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
