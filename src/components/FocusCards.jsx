import { Code2, BrainCircuit, Database, Globe } from 'lucide-react'

const focuses = [
  { label: 'Full-Stack', icon: Code2, color: 'text-cyan-400' },
  { label: 'AI/ML', icon: BrainCircuit, color: 'text-violet-400' },
  { label: 'Data Analytics', icon: Database, color: 'text-emerald-400' },
  { label: 'Web Dev', icon: Globe, color: 'text-sky-400' },
]

export default function FocusCards() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
      {focuses.map(({ label, icon: Icon, color }) => (
        <div
          key={label}
          className="flex w-full flex-col items-center gap-2 rounded-2xl bg-white/[0.025] px-4 py-3.5 ring-1 ring-white/[0.07]"
        >
          <Icon size={22} className={color} />
          <span className="text-[13px] font-medium text-slate-200">{label}</span>
        </div>
      ))}
    </div>
  )
}
