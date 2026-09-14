import Section from './Section.jsx';
import { Globe, Building2, Cpu } from 'lucide-react';

export default function WhatIBuild() {
  const categories = [
    {
      icon: Globe,
      title: 'Web Systems',
      description: 'Business websites, booking systems, CRUD applications, database-driven applications, and admin dashboards.',
      items: ['Business websites', 'Booking systems', 'CRUD applications', 'Database-driven apps', 'Admin dashboards'],
    },
    {
      icon: Building2,
      title: 'Business Systems',
      description: 'Booking workflows, service management, customer records, administrative workflows, and data management.',
      items: ['Booking workflows', 'Service management', 'Customer records', 'Administrative workflows', 'Data management'],
    },
    {
      icon: Cpu,
      title: 'AI-Assisted Applications',
      description: 'AI-powered features, API integrations, AI-assisted workflows, and developer productivity tools.',
      items: ['AI-powered features', 'API integrations', 'AI-assisted workflows', 'Developer productivity tools'],
    },
  ];

  return (
    <Section id="what-i-build" kicker="What I Build" title="Types of systems I focus on">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="card card-hover p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
              </div>
              <p className="text-sm text-ink-dim leading-relaxed mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-dim">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}