import { ArrowDown, Github, Linkedin, ChevronRight, Download, MapPin, Handshake } from 'lucide-react'
import FocusCards from './FocusCards'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-start overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 md:pt-44 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-primary sm:text-5xl md:text-6xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Muhammad
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Muhib Siddiqui
              </span>
            </h1>

            <p className="mb-7 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg">
              Full-Stack Software Engineer specialising in{' '}
              <span className="font-medium text-cyan-400">Software Engineering</span>,{' '}
              <span className="font-medium text-cyan-400">Business Intelligence</span>, and{' '}
              <span className="font-medium text-cyan-400">Data Engineering</span> — turning raw data
              into actionable insights and building robust, scalable systems.
            </p>

            <div className="mb-6">
              <FocusCards />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-[15px] text-slate-200">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-cyan-400" />
                Karachi, Pakistan
              </span>
              <span className="text-slate-500">·</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                Open to work
              </span>
            </div>

            <div className="mb-7 flex items-center gap-3">
              {[
                { href: 'https://github.com/muhibsiddiqui', icon: Github, label: 'GitHub', external: true },
                { href: 'https://linkedin.com/in/muhibsiddiqui', icon: Linkedin, label: 'LinkedIn', external: true },
                { href: '#contact', icon: Handshake, label: "Let's Connect", external: false },
              ].map(({ href, icon: Icon, label, external }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-slate-300 ring-1 ring-white/10 transition-colors hover:text-cyan-400 hover:ring-cyan-400/30"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/CV_MuhibSiddiquiSE.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="order-first flex justify-center lg:order-last lg:justify-end">
            <div className="hero-photo relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-violet-500/15 blur-2xl" />

              {/* Spinning gradient border */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="hero-photo-spin absolute -inset-[35%] bg-[conic-gradient(from_0deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)] opacity-80" />
              </div>

              {/* Photo */}
              <div className="absolute inset-[3px] overflow-hidden rounded-full bg-[#070d18]">
                <img
                  src="/images/pp.jpeg"
                  alt="Muhammad Muhib Siddiqui"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/30 via-transparent to-transparent" />
              </div>

              {/* Dashed orbit ring */}
              <div className="absolute -inset-4 animate-spin-slow rounded-full border border-dashed border-cyan-400/25" />

              {/* Open to Work badge */}
              <div className="absolute -bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#0b1220]/95 px-3.5 py-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-[12px] font-medium text-slate-100">Open to Work</span>
              </div>

              {/* FAST badge */}
              <div className="absolute -right-2 top-[15%] z-10 rounded-full bg-[#0b1220]/95 px-3 py-1 shadow-lg ring-1 ring-cyan-400/40 backdrop-blur-sm">
                <span className="text-[11px] font-semibold tracking-wide text-cyan-300">FAST-NUCES '26</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-faint transition-colors hover:text-cyan-500"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
