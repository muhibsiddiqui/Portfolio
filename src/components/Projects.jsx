import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'AI-Based Interview Assistant',
    label: 'Final Year Project',
    labelColor: 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300',
    accentColor: 'from-cyan-500/20 to-blue-600/10',
    borderColor: 'border-cyan-500/40 hover:border-cyan-400/60',
    description:
      'Built an AI-powered system to automate candidate screening, generate evaluation reports, and enhance hiring decisions through bias-aware analysis. Implemented real-time STT/TTS pipeline, AI answer evaluation, multi-modal candidate scoring, and AI-driven proctoring.',
    image: '/images/CODING.jpg',
    tags: [ 'Python', 'Flask', 'React', 'TypeScript','JWT Auth', 'DeepSeek', 'REST API', 'ElevenLabs', 'gTTS', 'OpenCV', 'ATS', 'YOLOv8', 'MediaPipe', 'LangChain'],
    github: 'https://github.com/muhibsiddiqui',
    demo: 'https://intellihire.com.pk',
    featured: true,
    wide: true,
  },
  {
    title: '100+ PPC Landing Pages',
    label: 'Freelance · Web',
    labelColor: 'bg-violet-500/15 border-violet-500/40 text-violet-300',
    accentColor: 'from-violet-500/15 to-violet-600/5',
    borderColor: 'border-violet-500/30 hover:border-violet-400/50',
    description:
      'Designed and developed high-converting PPC landing pages with fast performance, enhanced UI/UX, clear CTAs, and optimised user flows to maximise ad ROI.',
    image: '/images/webapp.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Conversion Optimization'],
    github: '#',
    demo: null,
    featured: false,
    wide: false,
  },
  {
    title: 'Car Showroom App',
    label: 'Full-Stack',
    labelColor: 'bg-blue-500/15 border-blue-500/40 text-blue-300',
    accentColor: 'from-blue-500/15 to-blue-600/5',
    borderColor: 'border-blue-500/30 hover:border-blue-400/50',
    description:
      'Full-stack web application for managing vehicle listings, test drives, and customer inquiries for car and bike showrooms.',
    image: '/images/webapp.jpg',
    tags: ['Python', 'Flask', 'ReactJs', 'SQL', 'phpMyAdmin'],
    github: 'https://github.com/muhibsiddiqui',
    demo: null,
    featured: false,
    wide: false,
  },
  {
    title: 'Web Crawler',
    label: 'Data Engineering',
    labelColor: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
    accentColor: 'from-emerald-500/15 to-emerald-600/5',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/50',
    description:
      'Python-Flask web crawler to extract and display website data using data cleaning techniques, integrating SQL and front-end technologies.',
    image: '/images/CODING.jpg',
    tags: ['Python', 'Flask', 'ReactJs', 'SQL', 'Data Cleaning'],
    github: 'https://github.com/muhibsiddiqui',
    demo: null,
    featured: false,
    wide: false,
  },
]

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(6,182,212,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            From AI-powered screening systems and BI pipelines to full-stack apps and high-performance landing pages.
          </p>
        </div>

        {/* ── Featured project (FYP) — full width ── */}
        <div className={`group relative rounded-2xl border bg-gradient-to-br ${featured.accentColor} ${featured.borderColor} overflow-hidden mb-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1`}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Image */}
            <div className="lg:col-span-2 h-56 lg:h-auto overflow-hidden bg-gray-900 relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/80 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${featured.labelColor}`}>
                    <Star size={11} className="fill-current" />
                    {featured.label}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border bg-emerald-500/15 border-emerald-500/40 text-emerald-300">Completed</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-lg">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-950/70 border border-gray-700 rounded-lg text-xs text-gray-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/60">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors font-medium"
                >
                  <Github size={16} />
                  View Code
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                >
                  <ExternalLink size={15} />
                  intellihire.com.pk
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Remaining 3 projects — grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-xl border bg-gradient-to-br ${project.accentColor} ${project.borderColor} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col`}
            >
              {/* Image */}
              <div className="h-40 overflow-hidden bg-gray-900 relative flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                {/* Label overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${project.labelColor}`}>
                    {project.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-950/60 border border-gray-700/70 rounded text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-gray-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <Github size={13} />
                    View Code
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
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
