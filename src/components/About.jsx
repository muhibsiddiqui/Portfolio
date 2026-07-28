import { GraduationCap, Briefcase, User, BrainCircuit, Code2, BarChart3, MapPin, Phone, Mail, Github } from 'lucide-react'

const highlights = [
  {
    icon: <BrainCircuit size={17} />,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
    title: 'AI-Powered Interview Assistant (FYP) — Completed Successfully',
    description:
      'Building an end-to-end AI system using Python, React, TypeScript, and RAG/LLMs to automate candidate screening, generate bias-aware evaluation reports, and enhance data-driven hiring decisions.',
  },
  {
    icon: <BarChart3 size={17} />,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
    title: 'Data Analyst & BI Developer Intern — J. Junaid Jamshed',
    description:
      'Built end-to-end reporting and BI solutions using MS Dynamics 365, SQL, and BI tooling — transforming raw business data into dashboards and decision-ready insights.',
  },
  {
    icon: <Code2 size={17} />,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/30',
    title: 'Full-Stack Development',
    description:
      'Shipped production-ready React & Flask applications, including a Car Showroom management platform and a Python-based Web Crawler, plus 100+ performance-optimised web builds.',
  },
]

const timeline = [
  {
    icon: <GraduationCap size={16} />,
    title: 'BS Computer Science',
    place: 'FAST-NUCES, Karachi',
    period: '2022 – 2026',
  },
  {
    icon: <Briefcase size={16} />,
    title: 'Data Analyst & BI Developer Intern',
    place: 'J. Junaid Jamshed Pvt. Ltd.',
    period: '2025',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </div>

        {/* ── Top row: photo + intro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start mb-14">

          {/* Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-600/15 blur-md" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl shadow-cyan-500/5">
                <img
                  src="/images/Developer activity-bro (1).png"
                  alt="Muhammad Muhib Siddiqui"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gray-950/80 backdrop-blur border-t border-gray-800">
                  <p className="text-sm font-semibold text-white">Muhammad Muhib Siddiqui</p>
                  <p className="text-xs text-cyan-400">FAST-NUCES · CS '26</p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -right-5 -top-5 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-2xl font-extrabold text-cyan-400 leading-none">3+</p>
                <p className="text-xs text-gray-400 mt-0.5">Yrs in Data & SE</p>
              </div>
            </div>
          </div>

          {/* Intro text + quick info */}
          <div className="lg:col-span-3 space-y-5">
            {/* Role badges */}
            <div className="flex flex-wrap gap-2">
              {['Data Engineer',  'Software Engineer', 'Full-Stack Developer', 'AI & ML'].map(role => (
                <span key={role} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wide">
                  {role}
                </span>
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed text-base">
              I'm a <span className="text-cyan-400 font-medium">Full-Stack Software Engineer</span>
               with a strong focus on{' '}
              <span className="text-white font-medium">Software Engineering</span>,{' '}
              <span className="text-white font-medium">Data Engineering</span>, and{' '}
              <span className="text-white font-medium"> Gen AI</span>. I design and build
              scalable web applications and intelligent software solutions using modern full-stack technologies and database —
               Skilled in Building
              Data Pipelines and Dashboards that transform complex datasets
              into clear, decision-ready insights too.
            </p>

            {/* Quick contact grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { icon: <MapPin size={13} />, label: 'Location', value: 'Karachi, Pakistan' },
                { icon: <Mail size={13} />, label: 'Email', value: 'muhibsiddiqui25@gmail.com' },
                { icon: <Phone size={13} />, label: 'Phone', value: '+92 318 0235426' },
                { icon: <Github size={13} />, label: 'GitHub', value: 'muhibsiddiqui' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-2.5 bg-gray-900/60 border border-gray-800 rounded-lg p-3">
                  <span className="mt-0.5 text-cyan-400 flex-shrink-0">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-xs text-gray-300 truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-3 flex-1">
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-tight">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.place} · {item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Highlight bullet points ── */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-8 h-px bg-gray-700 inline-block" />
            Key Highlights
            <span className="w-8 h-px bg-gray-700 inline-block" />
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`relative group rounded-xl border ${h.bg} p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className={`w-9 h-9 rounded-lg border ${h.bg} flex items-center justify-center mb-4 ${h.color}`}>
                  {h.icon}
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 leading-snug">{h.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
