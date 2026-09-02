import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react'

const socials = [
  { icon: <Github size={17} />, href: 'https://github.com/muhibsiddiqui', label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/muhibsiddiqui', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:muhibsiddiqui25@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-page/70 backdrop-blur-sm">
      <div className="absolute left-1/2 top-0 h-px w-96 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute left-1/2 top-0 h-16 w-64 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2">
          <div className="space-y-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20">
                <span className="text-sm font-black text-cyan-500">M</span>
              </span>
              <span className="text-xl font-bold text-primary transition-colors group-hover:text-cyan-500">
                Muhib<span className="text-cyan-500">.</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Data Engineer · Software developer · AI Engineer based in Karachi, Pakistan.
              Fresh Graduate from FAST-NUCES.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-faint">
                <MapPin size={12} className="flex-shrink-0 text-cyan-500/70" />
                Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-xs text-faint">
                <Phone size={12} className="flex-shrink-0 text-cyan-500/70" />
                +92 318 0235426
              </div>
              <div className="flex items-center gap-2 text-xs text-faint">
                <Mail size={12} className="flex-shrink-0 text-cyan-500/70" />
                muhibsiddiqui25@gmail.com
              </div>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">Get in Touch</p>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              Open to full-time roles, freelance projects, and collaborations.
            </p>
            <div className="mb-6 flex gap-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-card text-faint transition-all duration-200 hover:bg-card-solid hover:text-cyan-500"
                >
                  {icon}
                </a>
              ))}
            </div>
            <a
              href="/CV_MuhibSiddiquiSE.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-500/20 dark:text-cyan-400"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Muhammad Muhib Siddiqui · Built with passion.
          </p>
          <a
            href="#home"
            className="group flex items-center gap-2 text-xs text-faint transition-colors hover:text-cyan-500"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-card transition-colors group-hover:text-cyan-400">
              <ArrowUp size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
