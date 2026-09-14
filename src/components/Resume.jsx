import Section from './Section.jsx';
import { Briefcase, FolderOpen, GraduationCap, Code2, Download, ExternalLink } from 'lucide-react';
import { experience, education, skills } from '../data/profile.js';
import { projects } from '../data/projects.js';

export default function Resume() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <Section id="resume" kicker="Resume" title="Professional Background">
      <div className="space-y-10">
        {/* Professional Summary */}
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-ink">Professional Summary</h3>
          </div>
          <p className="text-sm text-ink-dim leading-relaxed">
            Recent BSIT graduate with hands-on experience developing web applications and business systems. 
            Completed internship at Bonzaire Enterprises working on a production booking system. 
            Experienced in PHP, MySQL, JavaScript, and modern web technologies with a focus on AI-assisted development practices.
          </p>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-ink">Experience</h3>
          </div>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.company} className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold text-ink">{exp.role}</h4>
                  <span className="text-xs font-mono text-ink-mute">{exp.period}</span>
                </div>
                <p className="text-sm text-ink-dim mb-2">{exp.company}</p>
                <p className="text-xs text-ink-mute mb-3">{exp.location}</p>
                <ul className="space-y-1">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink-dim">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-ink">Key Projects</h3>
          </div>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold text-ink">{project.title}</h4>
                  <span className="text-xs text-ink-mute">{project.subtitle}</span>
                </div>
                <p className="text-sm text-ink-dim mb-3">{project.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-ink">Education</h3>
          </div>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.school} className="card p-5">
                <h4 className="text-base font-semibold text-ink mb-1">{edu.school}</h4>
                <p className="text-sm text-ink-dim mb-1">{edu.degree}</p>
                <p className="text-xs text-ink-mute font-mono">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-ink">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="card p-4">
                <h4 className="text-sm font-semibold text-ink mb-2">{group.category}</h4>
                <ul className="space-y-1">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-xs text-ink-dim">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download CTA */}
        <div className="card p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-ink mb-1">Want the full resume?</h3>
              <p className="text-sm text-ink-dim">Download or view my complete resume as a PDF.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="/Jared_Christian_Miguel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Resume
              </a>
              <a
                href="/Jared_Christian_Miguel_CV.pdf"
                download="Jared_Christian_Miguel_CV.pdf"
                className="btn-primary flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}