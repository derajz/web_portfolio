import Section from './Section.jsx';
import { BookOpen, TrendingUp } from 'lucide-react';
import { currentlyLearning } from '../data/profile.js';

export default function CurrentlyLearning() {
  return (
    <Section id="currently-learning" kicker="Currently Exploring" title="What I'm learning now">
      <div className="mb-8">
        <p className="text-base text-ink-dim leading-relaxed">
          I'm actively developing my skills in these areas to become a more effective software developer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentlyLearning.map((topic) => (
          <div key={topic} className="card card-hover p-4 flex items-center gap-3">
            <div className="grid place-items-center h-8 w-8 rounded-lg bg-accent/10 text-accent flex-shrink-0">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="text-sm text-ink">{topic}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 card p-5 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
        <div className="flex items-start gap-4">
          <div className="grid place-items-center h-10 w-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink mb-2">
              Continuous learning is essential
            </h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              Technology evolves quickly, and I'm committed to staying current with modern development practices, tools, and methodologies. I believe in learning by building and applying new knowledge to real projects.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}