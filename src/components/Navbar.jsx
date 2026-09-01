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
      <nav className="fixed top-5 left-1/2 z-50 hidden w-full max-w-4xl -translate-x-1/2 px-4 md:block">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'bg-nav/90 shadow-2xl shadow-black/20 backdrop-blur-xl'
              : 'bg-nav/70 shadow-lg backdrop-blur-lg'
          }`}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20">
              <span className="text-sm font-black text-cyan-500">M</span>
            </span>
            <span className="text-lg font-bold text-primary transition-colors group-hover:text-cyan-500">
              Muhib<span className="text-cyan-500">.</span>
            </span>
          </a>

          <p className="hidden text-base font-medium tracking-wide text-muted lg:block">
            Software Developer &nbsp;·&nbsp; Data Engineer
          </p>

          <a
              href="/CV_MUHIB.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-[15px] font-semibold text-gray-950 transition-all duration-200 hover:-translate-y-px hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Download size={15} />
              Resume
            </a>
        </div>
      </nav>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 md:hidden transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-nav/95 shadow-xl backdrop-blur-xl'
            : 'bg-nav/80 backdrop-blur-md'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/20">
              <span className="text-sm font-black text-cyan-500">M</span>
            </span>
            <span className="text-lg font-bold text-primary">
              Muhib<span className="text-cyan-500">.</span>
            </span>
          </a>
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-1 px-4 pb-5 pt-1">
            {mobileLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href="/CV_MUHIB.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-400"
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
