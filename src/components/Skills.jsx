import Section from './Section.jsx';
import { skills } from '../data/profile.js';

export default function Skills() {
  return (
    <Section id="skills" kicker="04 — Skills" title="What I reach for, and how often.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map(group => (
          <div key={group.category} className="card card-hover p-5">
            <h3 className="text-sm font-semibold text-ink mb-3">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map(s => (
                <li key={s} className="flex items-center gap-2 text-sm text-ink-dim">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
