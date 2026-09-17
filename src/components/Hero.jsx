import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CircleDot, Github, Linkedin, Mail, Download } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Hero() {
  const techStack = ['PHP', 'MySQL', 'JavaScript', 'React', 'Next.js', 'AI-Assisted Development'];

  return (
    <section id="top" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* subtle decorative grid behind the hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-tight grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center"
      >
        {/* left: text */}
        <div>
          {/* availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-bg-line bg-bg-card/60 px-3 py-1 text-xs text-ink-dim mb-6">
            <CircleDot className="h-3 w-3 text-emerald-400" />
            <span>Available for junior roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05] text-ink">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-accent">
            {profile.role}
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-ink-dim font-medium">
            "{profile.tagline}"
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-dim leading-relaxed">
            Recent BSIT graduate focused on web applications, business systems, and AI-assisted development.
            I use AI coding tools to move faster while still understanding, testing, debugging, and improving the software I build.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/Jared_Christian_Miguel_CV.pdf" download="Jared_Christian_Miguel_CV.pdf" className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* social links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={profile.socials.find(s => s.label === 'GitHub')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-dim hover:text-accent transition-colors"
              aria-label="View GitHub profile"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.socials.find(s => s.label === 'LinkedIn')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-dim hover:text-accent transition-colors"
              aria-label="View LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.socials.find(s => s.label === 'Email')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink-dim hover:text-accent transition-colors"
              aria-label="Send email"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          {/* technology row */}
          <div className="mt-8">
            <p className="text-xs text-ink-mute font-mono uppercase tracking-wider mb-3">Technologies I work with</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* stats */}
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {profile.stats.map(s => (
              <div key={s.label}>
                <dt className="text-2xl sm:text-3xl font-semibold text-ink tabular-nums">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-ink-mute leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: portrait */}
        <div className="relative justify-self-center lg:justify-self-end">
          {/* glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-indigo-500/20" />
            <img
              src="/profile.jpg"
              alt={profile.name}
              className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-2xl object-cover border border-bg-line"
            />
            {/* small floating card */}
            <div className="absolute -bottom-5 -left-5 sm:-left-8 card shadow-card px-3 py-2 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs text-ink-dim">
                {profile.location} · {profile.timezone}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
