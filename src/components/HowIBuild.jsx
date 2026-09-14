import Section from './Section.jsx';
import { Cpu, CheckCircle, TestTube, Bug, Rocket } from 'lucide-react';

export default function HowIBuild() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Understand the problem, requirements, and expected behavior.',
      icon: null,
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Plan the system, workflow, data, and implementation.',
      icon: null,
    },
    {
      number: '03',
      title: 'Build',
      description: 'Implement the system using normal development practices.',
      icon: null,
    },
    {
      number: '04',
      title: 'AI Assistance',
      description: 'Use AI coding tools to accelerate development, explore solutions, generate boilerplate, investigate errors, and help with unfamiliar concepts.',
      icon: Cpu,
    },
    {
      number: '05',
      title: 'Review',
      description: 'Read and understand the generated code.',
      icon: null,
    },
    {
      number: '06',
      title: 'Test',
      description: 'Test the functionality and expected behavior.',
      icon: TestTube,
    },
    {
      number: '07',
      title: 'Debug',
      description: 'Investigate problems and fix issues.',
      icon: Bug,
    },
    {
      number: '08',
      title: 'Improve',
      description: 'Refactor, optimize, and adjust the implementation.',
      icon: null,
    },
    {
      number: '09',
      title: 'Deploy',
      description: 'Deploy the finished system.',
      icon: Rocket,
    },
  ];

  return (
    <Section id="how-i-build" kicker="How I Build With AI" title="My development workflow">
      <div className="mb-12">
        <p className="text-lg text-ink-dim leading-relaxed">
          I use AI as part of my development workflow, not as a replacement for understanding the system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
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
              AI is part of my development workflow, not a replacement for understanding the system.
            </h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              I use AI coding tools to move faster, but I always review, test, debug, and improve the code before considering it production-ready. Understanding the system logic and being able to modify it independently is essential to my process.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}