import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muhibsiddiqui25@gmail.com',
    href: 'mailto:muhibsiddiqui25@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 318 0235426',
    href: 'tel:+923180235426',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
  },
]

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/muhibsiddiqui',
    handle: 'muhibsiddiqui',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/muhibsiddiqui',
    handle: 'Muhib Siddiqui',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:muhibsiddiqui25@gmail.com',
    handle: 'Write to me',
  },
]

const fieldClass =
  'w-full rounded-xl bg-white/[0.04] px-4 py-3 text-[14px] text-slate-100 placeholder-slate-500 ring-1 ring-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'A valid email is required.'
    if (!form.message.trim() || form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters.'
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-subtitle">Let's connect</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="divider" />
          <p className="max-w-xl text-[15px] leading-relaxed text-slate-400">
            I'm currently open to full-time roles and freelance opportunities. Drop me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/[0.07]">
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span className="text-[13px] font-medium text-emerald-300">Open to work</span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-100">Get in touch</h3>
              <p className="mb-7 text-[14px] leading-relaxed text-slate-400">
                Prefer email or a quick call? Reach me directly, or send a message using the form.
              </p>

              <div className="space-y-3">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                        <p className="truncate text-[14px] font-medium text-slate-200">{value}</p>
                      </div>
                    </>
                  )

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3.5 rounded-xl bg-white/[0.03] p-3.5 ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.06] hover:ring-white/10"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="flex items-center gap-3.5 rounded-xl bg-white/[0.03] p-3.5 ring-1 ring-white/[0.06]"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>

              <p className="mb-3 mt-8 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                Find me on
              </p>
              <div className="grid grid-cols-3 gap-3">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex flex-col items-center gap-2 rounded-xl bg-white/[0.03] px-3 py-4 ring-1 ring-white/[0.06] transition-all hover:-translate-y-0.5 hover:ring-cyan-400/30"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                      <Icon size={18} />
                    </span>
                    <span className="text-[13px] font-semibold text-slate-200">{label}</span>
                    <span className="max-w-full truncate text-center text-[11px] text-slate-500">{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl bg-white/[0.025] ring-1 ring-white/[0.07]">
            <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500" />
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              {sent ? (
                <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-100">Message Sent</h3>
                  <p className="mb-6 max-w-sm text-[14px] text-slate-400">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline py-2 text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`${fieldClass} ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${fieldClass} ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Muhib, I'd like to discuss..."
                      className={`${fieldClass} min-h-[140px] flex-1 resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
