import {
  ExternalLink, Github, ArrowUpRight, GraduationCap,
  Upload, Link2, ScanSearch, CalendarCheck, Mic, BarChart3,
  Globe, Layers, Bug, FileSearch
} from 'lucide-react'

const pipelineSteps = [
  { icon: Upload, title: 'Post Job', stat: '< 30s', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { icon: Link2, title: 'Share Link', stat: '247 applicants', color: 'text-violet-400', bg: 'bg-violet-400/10' },
  { icon: ScanSearch, title: 'AI Screens CVs', stat: '247 → 89', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { icon: CalendarCheck, title: 'Auto Schedule', stat: '34 booked', color: 'text-pink-400', bg: 'bg-pink-400/10' },
  { icon: Mic, title: 'AI Interview', stat: '~28 min', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { icon: BarChart3, title: 'Ranked Reports', stat: 'Top 8', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
]

const intellihireTech = [
  'Python', 'Flask', 'React', 'TypeScript', 'JWT Auth', 'DeepSeek',
  'REST API', 'ElevenLabs', 'gTTS', 'OpenCV', 'YOLOv8', 'MediaPipe',
  'LangChain', 'RAG', 'WebSockets', 'ATS',
]

const otherProjects = [
  {
    title: 'DocuMind',
    subtitle: null,
    label: 'RAG',
    accent: 'from-cyan-500 to-blue-500',
    icon: FileSearch,
    description:
      'An AI-powered platform where users upload documents and ask questions in natural language, getting instant answers with page-level source citations across single or multiple files.',
    tags: ['Next.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'LangChain', 'pgvector'],
    github: 'https://github.com/muhibsiddiqui',
    demo: null,
  },
  {
    title: '100+ PPC Landing Pages',
    subtitle: null,
    label: 'Freelance',
    accent: 'from-violet-500 to-fuchsia-500',
    icon: Globe,
    description:
      'Designed and developed high-converting PPC landing pages with fast performance, enhanced UI/UX, clear CTAs, and optimised user flows to maximise ad ROI.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CRO'],
    
    demo: null,
  },
  {
    title: 'Car Showroom App',
    subtitle: null,
    label: 'Full-Stack',
    accent: 'from-blue-500 to-cyan-500',
    icon: Layers,
    description:
      'Full-stack web application for managing vehicle listings, test drives, and customer inquiries for car and bike showrooms.',
    tags: ['Python', 'Flask', 'React', 'SQL', 'phpMyAdmin'],
    github: 'https://github.com/muhibsiddiqui',
    demo: null,
  },
  {
    title: 'Web Crawler',
    subtitle: null,
    label: 'Data Engineering',
    accent: 'from-emerald-500 to-teal-500',
    icon: Bug,
    description:
      'Python-Flask web crawler to extract and display website data using data cleaning techniques, integrating SQL and front-end technologies.',
    tags: ['Python', 'Flask', 'React', 'SQL', 'Data Cleaning'],
    github: 'https://github.com/muhibsiddiqui',
    demo: null,
  },
]

function PipelineStep({ step, index }) {
  const Icon = step.icon
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`relative mb-2 flex h-11 w-11 items-center justify-center rounded-full ${step.bg}`}>
        <Icon size={18} className={step.color} />
        <span className={`absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold ${step.color}`}>
          {index + 1}
        </span>
      </div>
      <p className="text-[13px] font-semibold text-slate-200">{step.title}</p>
      <span className={`mt-0.5 text-[11px] font-medium ${step.color}`}>{step.stat}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
        </div>

        {/* ── IntelliHire ── */}
        <div className="group relative mb-16 overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/[0.07] transition-all duration-300 hover:ring-white/[0.12]">
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

          <div className="p-7 sm:p-8">
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Final Year Project · FAST-NUCES 2026
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    IntelliHire
                  </span>
                </h3>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://intellihire.com.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/muhibsiddiqui"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/[0.06] px-5 py-2.5 text-[14px] font-semibold text-slate-200 ring-1 ring-white/10 transition-colors hover:bg-white/[0.1]"
                >
                  <Github size={15} />
                  Code
                </a>
              </div>
            </div>

            <p className="mb-2 max-w-3xl text-[16px] leading-relaxed text-slate-200">
              An end-to-end AI-powered hiring platform that automates the entire recruitment pipeline — from job posting to final candidate ranking.
            </p>
            <p className="mb-6 max-w-3xl text-[14px] leading-relaxed text-slate-400">
              5 AI models work simultaneously in real time during each live interview: one generates and speaks questions, one transcribes answers, one watches the candidate's eyes, one detects phone usage, and one evaluates responses semantically.
            </p>

            <div className="flex flex-wrap gap-2">
              {intellihireTech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-[12px] font-medium text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-7">
              <p className="mb-5 text-center text-[14px] font-semibold text-slate-300">
                The Pipeline — from job posting to hire, fully automated
              </p>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                {pipelineSteps.map((step, i) => (
                  <PipelineStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Other Projects ── */}
        <div className="mb-4">
          <h4 className="mb-2 text-xl font-bold text-slate-100">Other Projects</h4>
          <p className="text-[15px] text-slate-400">More things I've shipped.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={i}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/[0.07] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:ring-white/[0.12]"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {project.label}
                    </span>
                  </div>

                  <h5 className="mb-1 text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h5>
                  {project.subtitle && (
                    <p className="mb-3 text-[13px] font-medium text-cyan-400/80">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[12px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 border-t border-white/[0.06] pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      <Github size={14} />
                      Source Code
                      <ArrowUpRight size={12} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 transition-colors hover:text-cyan-400"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/muhibsiddiqui"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
