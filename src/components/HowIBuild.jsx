import Section from './Section.jsx';
import { Cpu, CheckCircle, TestTube, Bug } from 'lucide-react';

export default function HowIBuild() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'I understand the requirements and what the system needs to accomplish.',
      icon: null,
    },
    {
      number: '02',
      title: 'Build with AI',
      description: 'I use AI coding tools to speed up implementation and explore solutions.',
      icon: Cpu,
    },
    {
      number: '03',
      title: 'Review',
      description: 'I inspect the generated code and make sure I understand how it works.',
      icon: null,
    },
    {
      number: '04',
      title: 'Test',
      description: 'I test the functionality and look for problems.',
      icon: TestTube,
    },
    {
      number: '05',
      title: 'Debug and Improve',
      description: 'I fix issues, refine the implementation, and improve the system.',
      icon: Bug,
    },
  ];

  return (
    <Section id="how-i-build" kicker="How I Build With AI" title="My development process">
      <div className="mb-12">
        <p className="text-lg text-ink-dim leading-relaxed">
          I use AI to build faster, but I remain responsible for understanding, testing, debugging, and improving what I build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="card card-hover p-5"
            >
              <div className="text-2xl font-mono text-accent/60 mb-2">
                {step.number}
              </div>
              <div className="flex items-center gap-2 mb-2">
                {Icon && <Icon className="h-4 w-4 text-accent" />}
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              </div>
              <p className="text-sm text-ink-dim leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="card p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
        <div className="flex items-start gap-4">
          <div className="grid place-items-center h-10 w-10 rounded-full bg-accent/10 text-accent flex-shrink-0">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink mb-2">
              AI helps me build faster. I remain responsible for the results.
            </h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              I use AI coding tools to accelerate development, but I always review the generated code, test the functionality, debug issues, and make implementation decisions. Understanding the system and being able to modify it independently is essential to my process.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}