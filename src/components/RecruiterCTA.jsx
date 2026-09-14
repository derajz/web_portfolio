import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Briefcase, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function RecruiterCTA() {
  const potentialRoles = [
    'Junior Software Developer',
    'Web Developer',
    'PHP Developer',
    'Junior Systems Analyst',
    'Business Systems / IT roles',
    'AI Operations / AI-assisted development roles',
  ];

  return (
    <section id="recruiter-cta" className="py-20 px-6 bg-gradient-to-br from-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent mb-6">
              <Briefcase className="h-4 w-4" />
              <span>Looking for my next opportunity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-4">
              Ready to contribute to your team
            </h2>
            <p className="text-lg text-ink-dim max-w-2xl mx-auto">
              I'm currently open to entry-level opportunities where I can contribute to software development while continuing to grow in AI-assisted development, web applications, and business systems.
            </p>
          </div>

          <div className="card p-6 mb-8">
            <h3 className="text-sm font-semibold text-ink mb-4 text-center">Potential roles I'm interested in</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {potentialRoles.map((role) => (
                <span key={role} className="pill">
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href={profile.socials.find(s => s.label === 'LinkedIn')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.socials.find(s => s.label === 'GitHub')?.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="/Jared_Christian_Miguel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <ExternalLink className="h-4 w-4" />
              View Resume
            </a>
            <a
              href="/Jared_Christian_Miguel_CV.pdf"
              download="Jared_Christian_Miguel_CV.pdf"
              className="btn-ghost"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}