import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Download, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

const contactInfo = {
  email: 'jaredmiguel024@gmail.com',
  emailLink: 'https://mail.google.com/mail/?view=cm&fs=1&to=jaredmiguel024@gmail.com&su=Inquiry%20about%20Junior%20Software%20Developer%20Position&body=Hi%20Jared,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20potential%20opportunities.%0A%0ABest%20regards',
  phone: '0918-299-6474',
  phoneLink: 'tel:+639182996474',
  location: 'Pasig City, Philippines',
  locationLink: 'https://www.google.com/maps/search/?api=1&query=Pasig+City+Philippines'
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-zinc-400 mb-12">
            I'm currently open to opportunities. Feel free to reach out.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href={contactInfo.emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer"
              aria-label="Send email to jaredmiguel024@gmail.com"
            >
              <Mail className="w-6 h-6 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.email}</p>
              <p className="text-zinc-500 text-xs mt-2">Click to email</p>
            </a>

            <a
              href={contactInfo.phoneLink}
              className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer"
              aria-label="Call 0918-299-6474"
            >
              <Phone className="w-6 h-6 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.phone}</p>
              <p className="text-zinc-500 text-xs mt-2">Click to call</p>
            </a>

            <a
              href={contactInfo.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 cursor-pointer"
              aria-label="Open Pasig City, Philippines in Google Maps"
            >
              <MapPin className="w-6 h-6 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.location}</p>
              <p className="text-zinc-500 text-xs mt-2">Open in Maps</p>
            </a>
          </div>

          <div className="card p-6 mb-8">
            <h3 className="text-sm font-semibold text-ink mb-4 text-center">Connect with me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={profile.socials.find(s => s.label === 'GitHub')?.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="View GitHub profile"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.socials.find(s => s.label === 'LinkedIn')?.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="View LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="/Jared_Christian_Miguel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="View resume"
              >
                <Download className="h-4 w-4" />
                View Resume
              </a>
              <a
                href="/Jared_Christian_Miguel_CV.pdf"
                download="Jared_Christian_Miguel_CV.pdf"
                className="btn-primary"
                aria-label="Download resume"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <p className="text-zinc-500 text-sm text-center">
              Open to entry-level opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
