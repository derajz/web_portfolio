import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CircleDot } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Hero() {
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
            <span className="text-ink-mute">·</span>
            <span className="text-ink-mute">starting July 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05] text-ink">
            {profile.role.split(' ')[0]}{' '}
            <span className="text-accent">{profile.role.split(' ').slice(1).join(' ')}</span>
            <br />
            <span className="text-ink-dim">based in {profile.location.split(',')[0]}.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-dim leading-relaxed">
            Hi, I&apos;m {profile.shortName} — a junior dev who ships small, useful systems.
            Two are already running in production: an{' '}
            <span className="text-ink">RFID attendance platform</span> from my capstone, and a{' '}
            <span className="text-ink">booking website with a full admin panel</span> from my OJT
            at Bonzaire Enterprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
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
