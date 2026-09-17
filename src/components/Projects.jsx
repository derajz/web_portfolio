import Section from './Section.jsx';
import ProjectMock from './ProjectMock.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <Section id="projects" kicker="Projects" title="What I've built">
      <div className="space-y-8">
        {projects.map(p => (
          <article
            key={p.slug}
            className="card card-hover overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr]">
              {/* preview */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-bg-surface to-bg-card/40 border-b lg:border-b-0 lg:border-r border-bg-line">
                <ProjectMock kind={p.mock} slug={p.slug} />
              </div>

              {/* content */}
              <div className="p-6 sm:p-8 flex flex-col">
                <p className="kicker">{p.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-dim">{p.role}</p>

                <p className="mt-4 text-sm text-ink leading-relaxed">{p.summary}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-accent">Problem</dt>
                    <dd className="mt-1 text-ink-dim leading-relaxed">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-accent">Solution</dt>
                    <dd className="mt-1 text-ink-dim leading-relaxed">{p.solution || p.challenge}</dd>
                  </div>
                  {p.myRole && (
                    <div>
                      <dt className="text-xs font-mono uppercase tracking-wider text-accent">My Role</dt>
                      <dd className="mt-1 text-ink-dim leading-relaxed">{p.myRole}</dd>
                    </div>
                  )}
                </dl>

                {/* features */}
                {p.features && (
                  <div className="mt-5">
                    <dt className="text-xs font-mono uppercase tracking-wider text-accent mb-2">Key Features</dt>
                    <ul className="space-y-1">
                      {p.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink-dim">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>

                {p.href && p.href !== '#' && (
                  <div className="mt-auto pt-5">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-amber-400 transition-colors"
                    >
                      View live site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
