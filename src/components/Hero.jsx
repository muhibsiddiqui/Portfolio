import { ArrowDown, Github, Linkedin, Mail, ChevronRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      {/* Radial glow left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_50%,rgba(6,182,212,0.10),transparent)]" />
      {/* Radial glow right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_30%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-7">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Muhammad
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Muhib Siddiqui
              </span>
            </h1>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Data Engineer', 'Data Analyst', 'Software Engineer', 'Full-Stack Dev'].map(role => (
                <span
                  key={role}
                  className="px-3 py-1 bg-gray-900 border border-cyan-500/40 rounded-full text-cyan-300 text-xs font-semibold tracking-wide"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
              CS final-year student specialising in{' '}
              <span className="text-cyan-400 font-medium">Data Engineering</span>,{' '}
              <span className="text-cyan-400 font-medium">Business Intelligence</span>, and{' '}
              <span className="text-cyan-400 font-medium">Software Engineering</span> — turning raw data
              into actionable insights and building robust, scalable systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
                <ChevronRight size={18} />
              </a>
              <a href="/CV_MUHIB.pdf" download className="btn-outline">
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600 uppercase tracking-widest mr-1">Find me on</span>
              <a
                href="https://github.com/muhibsiddiqui"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/muhibsiddiqui"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:muhibsiddiqui25@gmail.com"
                className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* ── Right: Profile picture ── */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-transparent blur-2xl" />
              {/* Slow-spin dashed ring */}
              <div className="absolute -inset-5 rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_30s_linear_infinite]" />
              {/* Static outer ring */}
              <div className="absolute -inset-2 rounded-full border border-gray-700/60" />

              {/* Photo circle */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-cyan-500/10 bg-gray-900">
                {/* ↓ Replace with your real photo: src="/images/your-photo.jpg" */}
                <img
                  src="/images/pp.png"
                  alt="Muhammad Muhib Siddiqui"
                  className="w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge — experience */}
            

              {/* Floating badge — open to work */}
              <div className="absolute -right-8 bottom-10 bg-gray-900/95 border border-gray-700 rounded-xl px-3 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium whitespace-nowrap">Open to Work</span>
                </div>
              </div>

              {/* Floating badge — FAST NUCES */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/95 border border-cyan-500/30 rounded-full px-4 py-1.5 shadow-xl whitespace-nowrap">
                <span className="text-xs text-cyan-400 font-semibold">FAST-NUCES '26</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
