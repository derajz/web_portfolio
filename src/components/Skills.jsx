import Section from './Section.jsx';
import { skills } from '../data/profile.js';

export default function Skills() {
  return (
    <Section id="skills" kicker="Technical Skills" title="What I work with">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <div className="mt-8 text-sm text-ink-dim leading-relaxed">
        <p>
          I'm continuously learning and expanding my skill set. While I have solid foundations in these technologies, I'm particularly focused on practical application in real-world projects and staying current with modern development practices.
        </p>
      </div>
    </Section>
  );
}
