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
                href="/CV_MUHIB.pdf"
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
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/35 via-blue-500/20 to-violet-500/30 blur-2xl" />

              <div className="photo-orbit absolute inset-0 rounded-full border-[1.5px] border-dashed border-cyan-400/50 animate-spin-slow" />

              <div className="absolute inset-[14px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[3px] shadow-[0_0_32px_rgba(34,211,238,0.25)]">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#070d18] p-[5px]">
                  <img
                    src="/images/pp.jpeg"
                    alt="Muhammad Muhib Siddiqui"
                    className="h-full w-full scale-110 object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute right-0 top-[58%] z-10 rounded-2xl bg-[#1a2332]/95 px-3.5 py-2.5 shadow-lg ring-1 ring-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-200">Open to Work</span>
                </div>
              </div>

              <div className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0b1220]/90 px-4 py-1.5 ring-1 ring-cyan-400/40">
                <span className="text-sm font-semibold tracking-wide text-cyan-400">FAST-NUCES '26</span>
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
