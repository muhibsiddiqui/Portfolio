import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react'

const socials = [
  { icon: <Github size={17} />, href: 'https://github.com/muhibsiddiqui', label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/muhibsiddiqui', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:muhibsiddiqui25@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/60 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-cyan-500/5 blur-2xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main footer content (2-col) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 border-b border-gray-800/50">

          {/* Brand column */}
          <div className="space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <span className="text-cyan-400 font-black text-sm">M</span>
              </span>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Muhib<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Data Engineer · Software developer · Software Engineer based in Karachi, Pakistan.
              Fresh Graduate from FAST-NUCES.
            </p>
            {/* Contact mini */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={12} className="text-cyan-500/60 flex-shrink-0" />
                Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Phone size={12} className="text-cyan-500/60 flex-shrink-0" />
                +92 318 0235426
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Mail size={12} className="text-cyan-500/60 flex-shrink-0" />
                muhibsiddiqui25@gmail.com
              </div>
            </div>
          </div>

          {/* CTA column */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Get in Touch</p>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">
              Open to full-time roles, freelance projects, and collaborations.
            </p>
            <div className="flex gap-2 mb-6">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-gray-800 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <a
              href="/CV_MUHIB.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded-xl hover:bg-cyan-500/20 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Muhammad Muhib Siddiqui · Built with passion.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-cyan-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
              <ArrowUp size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
