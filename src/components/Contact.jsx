import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const socials = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/muhibsiddiqui',
    handle: 'muhibsiddiqui',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/muhibsiddiqui',
    handle: 'Muhib Siddiqui',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:muhibsiddiqui25@gmail.com',
    handle: 'muhibsiddiqui25@gmail.com',
  },
]

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

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // In a real app, send to a backend / email service here
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="section-subtitle">Let's connect</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="divider" />
          <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
            I'm currently open to full-time roles and freelance opportunities. Drop me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'muhibsiddiqui25@gmail.com', href: 'mailto:muhibsiddiqui25@gmail.com' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+92 318 0235426', href: 'tel:+923180235426' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Karachi, Pakistan', href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm text-gray-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-white hover:border-cyan-500/40 transition-all duration-200 group"
                  >
                    <span className="text-cyan-400 group-hover:scale-110 transition-transform">{icon}</span>
                    <span className="text-sm font-medium">{label}</span>
                    <span className="ml-auto text-xs text-gray-600 group-hover:text-gray-400 transition-colors">{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle size={48} className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={() => setSent(false)} className="btn-outline text-sm py-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-gray-950 border rounded-lg text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-gray-950 border rounded-lg text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Muhib, I'd like to discuss..."
                    className={`w-full px-4 py-3 bg-gray-950 border rounded-lg text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
