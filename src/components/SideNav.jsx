import { useState, useEffect } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function SideNav() {
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(sections[i].id)
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:flex flex-col items-end gap-5"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id
        const showLabel = isActive || hovered === id

        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
              className="group flex items-center gap-3"
          >
            <span
              className={`text-[13px] font-medium transition-all duration-200 ${
                showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
              } ${isActive ? 'text-[#3b9eff]' : 'text-slate-400'}`}
            >
              {label}
            </span>

            {isActive ? (
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-[1.5px] border-[#3b9eff] shadow-[0_0_10px_rgba(59,158,255,0.7)]" />
                <span className="h-2 w-2 rounded-full bg-[#3b9eff]" />
              </span>
            ) : (
              <span className="block h-2 w-2 rounded-full bg-slate-500/80 group-hover:bg-slate-400" />
            )}
          </a>
        )
      })}
    </nav>
  )
}
