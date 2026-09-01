import { Code2, BrainCircuit, BarChart3 } from 'lucide-react'

const icon = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`

const techGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C', logo: icon('c/c-original.svg') },
      { name: 'C++', logo: icon('cplusplus/cplusplus-original.svg') },
      { name: 'C#', logo: icon('csharp/csharp-original.svg') },
      { name: 'Python', logo: icon('python/python-original.svg') },
      { name: 'JavaScript', logo: icon('javascript/javascript-original.svg') },
      { name: 'TypeScript', logo: icon('typescript/typescript-original.svg') },
      { name: 'HTML5', logo: icon('html5/html5-original.svg') },
      { name: 'CSS3', logo: icon('css3/css3-original.svg') },
      { name: 'Java', logo: icon('java/java-original.svg') },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: '.NET', logo: icon('dotnetcore/dotnetcore-original.svg') },
      { name: 'Angular', logo: icon('angular/angular-original.svg') },
      { name: 'Flask', logo: icon('flask/flask-original.svg'), invert: true },
      { name: 'FastAPI', logo: icon('fastapi/fastapi-original.svg') },
      { name: 'React', logo: icon('react/react-original.svg') },
      { name: 'Express.js', logo: icon('express/express-original.svg'), invert: true },
      { name: 'Node.js', logo: icon('nodejs/nodejs-original.svg') },
      { name: 'Next.js', logo: icon('nextjs/nextjs-original.svg'), invert: true },
      { name: 'Nest.js', logo: icon('nestjs/nestjs-original.svg') },
      { name: 'NumPy', logo: icon('numpy/numpy-original.svg') },
      { name: 'Pandas', logo: icon('pandas/pandas-original.svg') },
      { name: 'Playwright', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/playwright.svg', invert: true },
    ],
  },
  {
    title: 'Data & Databases',
    items: [
      { name: 'MySQL', logo: icon('mysql/mysql-original.svg') },
      { name: 'PostgreSQL', logo: icon('postgresql/postgresql-original.svg') },
      { name: 'MongoDB', logo: icon('mongodb/mongodb-original.svg') },
      { name: 'Redis', logo: icon('redis/redis-original.svg') },
      { name: 'Prisma', logo: icon('prisma/prisma-original.svg'), invert: true },
      { name: 'SQL Server', logo: icon('microsoftsqlserver/microsoftsqlserver-plain.svg') },
      { name: 'SQLite', logo: icon('sqlite/sqlite-original.svg') },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'VS Code', logo: icon('vscode/vscode-original.svg') },
      { name: 'Git', logo: icon('git/git-original.svg') },
      { name: 'GitHub', logo: icon('github/github-original.svg'), invert: true },
      { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/powerbi.svg', invert: true },
      { name: 'MS Dynamics', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/dynamics365.svg', invert: true },
      { name: 'Docker', logo: icon('docker/docker-original.svg') },
      { name: 'Linux', logo: icon('linux/linux-original.svg') },
      { name: 'Jupyter', logo: icon('jupyter/jupyter-original.svg') },
      { name: 'OpenCV', logo: icon('opencv/opencv-original.svg') },
    ],
  },
]

const conceptGroups = [
  {
    title: 'Software Engineering',
    icon: Code2,
    accent: 'from-blue-500 to-cyan-500',
    titleColor: 'text-blue-400',
    tagClass: 'bg-blue-500/10 text-blue-300',
    tags: ['OOP', 'Data Structures', 'Software Design', 'SDLC', 'REST APIs', 'JWT Auth', 'SQA'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    accent: 'from-violet-500 to-fuchsia-500',
    titleColor: 'text-violet-400',
    tagClass: 'bg-violet-500/10 text-violet-300',
    tags: ['LLMs', 'RAG', 'Generative AI', 'LangChain', 'LangGraph', 'Embeddings', 'RNN', 'CNN'],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    accent: 'from-emerald-500 to-teal-500',
    titleColor: 'text-emerald-400',
    tagClass: 'bg-emerald-500/10 text-emerald-300',
    tags: ['ETL Pipelines', 'Data Cleaning', 'Preprocessing', 'Data Modeling', 'Visualization', 'Dashboards', 'BI', 'KPIs'],
  },
]

function Tile({ name, logo, invert = false, delay = 0, floatDelay = 0 }) {
  return (
    <div
      className="skill-tile group flex w-full flex-col items-center gap-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="skill-tile-float w-full"
        style={{ animationDelay: `${floatDelay}ms` }}
      >
        <div className="skill-tile-inner flex aspect-square w-full items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.07] group-hover:ring-cyan-400/45 group-hover:shadow-[0_10px_28px_rgba(34,211,238,0.14)]">
          <img
            src={logo}
            alt={name}
            className={`h-[42%] w-[42%] object-contain transition-transform duration-300 group-hover:scale-110 ${invert ? 'invert' : ''}`}
            loading="lazy"
          />
        </div>
      </div>
      <span className="text-center text-[12px] font-medium leading-tight text-slate-400">
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  let tileIndex = 0

  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider" />
        </div>

        <div className="space-y-6">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-2xl bg-white/[0.025] p-5 ring-1 ring-white/[0.07] sm:p-6"
            >
              <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {group.title}
              </h3>
              <div className="grid grid-cols-4 gap-x-3 gap-y-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
                {group.items.map((item) => {
                  const delay = tileIndex * 45
                  const floatDelay = (tileIndex % 6) * 350
                  tileIndex += 1
                  return (
                    <Tile
                      key={item.name}
                      {...item}
                      delay={delay}
                      floatDelay={floatDelay}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {conceptGroups.map((block) => {
            const Icon = block.icon
            return (
              <div
                key={block.title}
                className="group overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/[0.07] transition-all duration-300 hover:-translate-y-1 hover:ring-white/[0.12]"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${block.accent}`} />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${block.accent}`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <h3 className={`text-[15px] font-bold ${block.titleColor}`}>
                      {block.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-[12px] font-medium ${block.tagClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
