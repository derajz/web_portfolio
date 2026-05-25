import { Building2 } from 'lucide-react';
import Section from './Section.jsx';
import { experience } from '../data/profile.js';

export default function Experience() {
  return (
    <Section id="experience" kicker="02 — Experience" title="Where I've actually shipped.">
      <ol className="relative border-l border-bg-line ml-3 space-y-6">
        {experience.map(e => (
          <li key={e.company} className="pl-8 relative">
            {/* timeline dot */}
            <span className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
            <article className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-10 w-10 rounded-md bg-bg-surface border border-bg-line text-ink-dim">
                  <Building2 className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink">{e.role}</h3>
                    <span className="text-xs font-mono text-ink-mute">{e.period}</span>
                  </div>
                  <p className="text-sm text-ink-dim">
                    {e.company}
                    <span className="text-ink-mute"> · {e.type}</span>
                  </p>
                  <p className="text-xs text-ink-mute mt-0.5">{e.location}</p>

                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-dim">
                        <span className="mt-2 h-1 w-1 rounded-full bg-ink-mute flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.stack.map(s => (
                      <span key={s} className="pill">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
