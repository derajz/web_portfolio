import Section from './Section.jsx';
import { Sparkles, CheckCircle, User } from 'lucide-react';

export default function AITransparency() {
  const aiHelps = [
    'Explore implementation approaches',
    'Generate boilerplate code',
    'Troubleshoot errors',
    'Refactor code',
    'Understand unfamiliar APIs',
    'Speed up repetitive development',
  ];

  const imResponsible = [
    'Understanding requirements',
    'System logic and architecture',
    'Database structure',
    'Business workflows',
    'Testing functionality',
    'Debugging issues',
    'Reviewing generated code',
    'Final implementation decisions',
  ];

  return (
    <Section id="ai-transparency" kicker="AI Transparency" title="How I use AI in development">
      <div className="mb-8">
        <p className="text-base text-ink-dim leading-relaxed">
          I openly acknowledge that I use AI coding tools in my development process. Here's how AI helps me and what I remain responsible for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card card-hover p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-ink">AI helps me with</h3>
          </div>
          <ul className="space-y-3">
            {aiHelps.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-dim">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card card-hover p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400">
              <User className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-ink">I am responsible for</h3>
          </div>
          <ul className="space-y-3">
            {imResponsible.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-dim">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 card p-5 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
        <p className="text-sm text-ink-dim leading-relaxed">
          <span className="font-semibold text-ink">The key difference:</span> AI accelerates my development process, but understanding the system, debugging issues, and making final implementation decisions always rests with me. I never blindly use generated code without reviewing and testing it.
        </p>
      </div>
    </Section>
  );
}