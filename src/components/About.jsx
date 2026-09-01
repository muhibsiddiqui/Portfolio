import { GraduationCap, Briefcase, BrainCircuit, Code2, BarChart3, MapPin, Phone, Mail, Github } from 'lucide-react'
import FocusCards from './FocusCards'

const highlights = [
  {
    icon: <BrainCircuit size={20} />,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'AI-Powered Interview Assistant (FYP) — Completed Successfully',
    description:
      'Building an end-to-end AI system using Python, React, TypeScript, and RAG/LLMs to automate candidate screening, generate bias-aware evaluation reports, and enhance data-driven hiring decisions.',
  },
  {
    icon: <BarChart3 size={20} />,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    title: 'Data Analyst & BI Developer Intern — J. Junaid Jamshed',
    description:
      'Built end-to-end reporting and BI solutions using MS Dynamics 365, SQL, and BI tooling — transforming raw business data into dashboards and decision-ready insights.',
  },
  {
    icon: <Code2 size={20} />,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Full-Stack Development',
    description:
      'Shipped production-ready React & Flask applications, including a Car Showroom management platform and a Python-based Web Crawler, plus 100+ performance-optimised web builds.',
  },
]

const timeline = [
  {
    icon: <GraduationCap size={18} />,
    title: 'BS Computer Science',
    place: 'FAST-NUCES, Karachi',
    period: '2022 – 2026',
  },
  {
    icon: <Briefcase size={18} />,
    title: 'Data Analyst & BI Developer Intern',
    place: 'J. Junaid Jamshed Pvt. Ltd.',
    period: '2025',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </div>

        <div className="mb-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[22rem]">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-600/15 blur-md" />
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-2xl bg-card-solid shadow-2xl shadow-cyan-500/5">
                <img
                  src="/images/Developer activity-bro (1).png"
                  alt="Muhammad Muhib Siddiqui"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-page/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 bg-nav/90 px-4 py-3 backdrop-blur">
                  <p className="text-[15px] font-semibold text-primary">Muhammad Muhib Siddiqui</p>
                  <p className="text-sm text-cyan-400">FAST-NUCES · CS '26</p>
                </div>
              </div>
              <div className="absolute -right-3 -top-4 rounded-xl bg-card-solid px-4 py-3 shadow-xl ring-1 ring-white/10">
                <p className="text-2xl font-extrabold leading-none text-cyan-500">3+</p>
                <p className="mt-0.5 text-sm text-muted">Yrs in Data & SE</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <FocusCards />

            <p className="text-[17px] leading-relaxed text-muted">
              I'm a <span className="font-medium text-cyan-400">Full-Stack Software Engineer</span>
              {' '}with a strong focus on{' '}
              <span className="font-medium text-primary">Software Engineering</span>,{' '}
              <span className="font-medium text-primary">Data Engineering</span>, and{' '}
              <span className="font-medium text-primary">Gen AI</span>. I design and build
              scalable web applications and intelligent software solutions using modern full-stack technologies and database —
              Skilled in Building Data Pipelines and Dashboards that transform complex datasets
              into clear, decision-ready insights too.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-[15px] text-slate-200">
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

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'muhibsiddiqui25@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+92 318 0235426' },
                { icon: <Github size={16} />, label: 'GitHub', value: 'muhibsiddiqui' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex min-w-0 items-start gap-2.5 rounded-xl bg-white/[0.025] p-3.5 ring-1 ring-white/[0.07]">
                  <span className="mt-0.5 flex-shrink-0 text-cyan-400">{icon}</span>
                  <div className="min-w-0">
                    <p className="mb-0.5 text-xs uppercase tracking-wide text-faint">{label}</p>
                    <p className="truncate text-sm text-slate-200">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.025] px-4 py-3 ring-1 ring-white/[0.07]">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-primary">{item.title}</p>
                    <p className="text-sm text-faint">{item.place} · {item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 flex items-center gap-2 text-sm uppercase tracking-widest text-faint">
            <span className="inline-block h-px w-8 bg-line" />
            Key Highlights
            <span className="inline-block h-px w-8 bg-line" />
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`group relative rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${h.bg}`}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${h.bg} ${h.color}`}>
                  {h.icon}
                </div>
                <h4 className="mb-2 text-base font-semibold leading-snug text-primary">{h.title}</h4>
                <p className="text-sm leading-relaxed text-muted">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
