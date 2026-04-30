import { useState, useEffect } from 'react'

const sections = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
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
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-4"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id
        const isHovered = hovered === id

        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center gap-2.5 group"
          >
            {/* Label — slides in from right on hover or when active */}
            <span
              className={`text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'text-cyan-400 opacity-100 translate-x-0'
                  : isHovered
                  ? 'text-gray-300 opacity-100 translate-x-0'
                  : 'text-gray-500 opacity-0 translate-x-2 pointer-events-none'
              }`}
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-5 h-5 bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.55)]'
                  : isHovered
                  ? 'w-4 h-4 bg-gray-400'
                  : 'w-3 h-3 bg-gray-600 group-hover:bg-gray-400'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
