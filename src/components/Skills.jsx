// ── Icon components (inline SVGs keep bundle light) ──────────────────────────
const icons = {
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  db: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  person: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
}

const categories = [
  {
    id: 'data',
    label: 'Data & Analytics',
    icon: icons.data,
    accent: 'cyan',
    ring: 'ring-cyan-500/30',
    glow: 'shadow-cyan-500/10',
    iconBg: 'bg-cyan-500/10 text-cyan-400',
    bar: 'bg-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    skills: [
      { name: 'SQL', logo: null },
      { name: 'MS Dynamics 365', logo: null },
      { name: 'Data Analysis', logo: null },
      { name: 'Power BI / BI Dev', logo: null },
      { name: 'Data Pipelines', logo: null },
      { name: 'ETL Processes', logo: null },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: icons.ai,
    accent: 'emerald',
    ring: 'ring-emerald-500/30',
    glow: 'shadow-emerald-500/10',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    bar: 'bg-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    skills: [
      { name: 'Python', logo: null },
      { name: 'Machine Learning', logo: null },
      { name: 'RAG / LLMs', logo: null },
      { name: 'Neural Networks', logo: null },
      { name: 'NLP', logo: null },
      { name: 'Data Science', logo: null },
    ],
  },
  {
    id: 'code',
    label: 'Software Engineering',
    icon: icons.code,
    accent: 'blue',
    ring: 'ring-blue-500/30',
    glow: 'shadow-blue-500/10',
    iconBg: 'bg-blue-500/10 text-blue-400',
    bar: 'bg-blue-400',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    skills: [
      { name: 'React.js', logo: null },
      { name: 'Flask', logo: null },
      { name: 'TypeScript', logo: null },
      { name: 'Node.js', logo: null },
      { name: 'C / C++', logo: null },
      { name: 'HTML / CSS / JS', logo: null },
    ],
  },
  {
    id: 'db',
    label: 'Databases',
    icon: icons.db,
    accent: 'violet',
    ring: 'ring-violet-500/30',
    glow: 'shadow-violet-500/10',
    iconBg: 'bg-violet-500/10 text-violet-400',
    bar: 'bg-violet-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    skills: [
      { name: 'SQL Server / MySQL', logo: null },
      { name: 'MongoDB', logo: null },
      { name: 'Firebase', logo: null },
      { name: 'phpMyAdmin', logo: null },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: icons.tools,
    accent: 'orange',
    ring: 'ring-orange-500/30',
    glow: 'shadow-orange-500/10',
    iconBg: 'bg-orange-500/10 text-orange-400',
    bar: 'bg-orange-400',
    badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    skills: [
      { name: 'Git & GitHub', logo: null },
            { name: 'Visual Studio Code', logo: null },
      { name: 'Linux', logo: null },
      { name: 'Postman', logo: null },
      { name: 'MS Office', logo: null },
      { name: 'Jira / Agile', logo: null },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    icon: icons.person,
    accent: 'pink',
    ring: 'ring-pink-500/30',
    glow: 'shadow-pink-500/10',
    iconBg: 'bg-pink-500/10 text-pink-400',
    bar: 'bg-pink-400',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    skills: [
      { name: 'Project Management', logo: null },
      { name: 'Software Testing', logo: null },
      { name: 'Business Development', logo: null },
      { name: 'Team Leadership', logo: null },
      { name: 'Agile / Scrum', logo: null },
    ],
  },
]

// Logo tiles — real images + styled letter tiles for others
const logoTiles = [
  { img: '/logos/python.png', name: 'Python' },
  { img: '/logos/JS.png',     name: 'JavaScript' },
  { img: '/logos/HTML.png',   name: 'HTML5' },
  { img: '/logos/CSS.png',    name: 'CSS3' },
  { img: '/logos/SQL.png',    name: 'SQL' },
  { img: '/logos/Cpp.png',    name: 'C++' },
  { img: '/logos/Linux.png',  name: 'Linux' },
  { img: '/logos/dart.png',   name: 'Dart' },
  { img: '/logos/github.png', name: 'GitHub' },
  { img: '/logos/jira.png',   name: 'Jira' },
  { img: '/logos/st.png',     name: 'Streamlit' },
]

function LogoTile({ item }) {
  return (
    <div
      title={item.name}
      className="w-16 h-16 rounded-2xl border border-gray-800/80 flex flex-col items-center justify-center gap-1 hover:border-cyan-500/40 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-default"
      style={{ background: item.bg || '#111827' }}
    >
      {item.img ? (
        <img src={item.img} alt={item.name} className="w-9 h-9 object-contain" />
      ) : (
        <span className="text-sm font-bold tracking-tight" style={{ color: item.color }}>
          {item.letter}
        </span>
      )}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-500/4 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="mb-14">
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider" />
        </div>
      </div>

      {/* ── Centered logo row ── */}
      <div className="mb-14 select-none flex justify-center">
        <div className="flex items-center gap-4 flex-wrap justify-center px-6">
          {logoTiles.map((item) => (
            <LogoTile key={item.name} item={item} />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ id, label, icon, iconBg, ring, glow, badge, skills }) => (
            <div
              key={id}
              className={`group relative bg-gray-900/60 border border-gray-800/70 rounded-2xl p-6 hover:ring-1 ${ring} hover:shadow-xl ${glow} transition-all duration-300 hover:-translate-y-0.5`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg}`}>
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{label}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, logo }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${badge} transition-colors`}
                  >
                    {logo && (
                      <img src={logo} alt={name} className="w-3.5 h-3.5 object-contain opacity-80" />
                    )}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <p className="mt-10 text-center text-xs text-gray-600">
          Proficiency levels are self-assessed based on project experience and coursework.
        </p>
      </div>
    </section>
  )
}
