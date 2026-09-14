import { GraduationCap, Award, Briefcase, Mail } from 'lucide-react';
import Section from './Section.jsx';
import { profile, education, certifications } from '../data/profile.js';

export default function About() {
  return (
    <Section id="about" kicker="About Me" title="A short, honest introduction.">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10">
        <div className="space-y-5 text-ink-dim leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-ink' : ''}>
              {p}
            </p>
          ))}
        </div>

        <aside className="space-y-3">
          <div className="card card-hover p-5">
            <div className="flex items-center gap-2 text-ink mb-3">
              <GraduationCap className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-sm">Education</h3>
            </div>
            <ul className="space-y-3">
              {education.map(e => (
                <li key={e.school}>
                  <div className="text-sm text-ink">{e.school}</div>
                  <div className="text-xs text-ink-dim">{e.degree}</div>
                  <div className="text-xs text-ink-mute font-mono mt-0.5">{e.period}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-hover p-5">
            <div className="flex items-center gap-2 text-ink mb-3">
              <Award className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-sm">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map(c => (
                <li key={c.name} className="flex items-baseline justify-between gap-3">
                  <div>
                    <div className="text-sm text-ink">{c.name}</div>
                    <div className="text-xs text-ink-dim">{c.issuer}</div>
                  </div>
                  <div className="text-xs text-ink-mute font-mono">{c.year}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-hover p-5">
            <div className="flex items-center gap-2 text-ink mb-3">
              <Briefcase className="h-4 w-4 text-accent" />
              <h3 className="font-semibold text-sm">Currently</h3>
            </div>
            <p className="text-sm text-ink-dim mb-3">
              Internship completed at Bonzaire Enterprises. Available for junior software developer roles &mdash; on-site (Metro Manila) or remote. Particularly interested in AI-assisted development and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={profile.socials.find(s => s.label === 'GitHub')?.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="pill text-xs hover:border-accent/40"
              >
                GitHub
              </a>
              <a
                href={profile.socials.find(s => s.label === 'LinkedIn')?.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="pill text-xs hover:border-accent/40"
              >
                LinkedIn
              </a>
              <a
                href="/Jared_Christian_Miguel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill text-xs hover:border-accent/40"
              >
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="pill text-xs hover:border-accent/40"
              >
                <Mail className="h-3 w-3 inline mr-1" />
                Email
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
