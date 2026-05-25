import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = {
  email: 'jaredmiguel024@gmail.com',
  phone: '0918-299-6474 / 0924-115-9199',
  location: 'Pasig City, Philippines'
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
            I'm currently open to opportunities. Feel free to reach out through any of these channels.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <Mail className="w-6 h-6 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.email}</p>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <Phone className="w-6 h-6 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.phone}</p>
            </a>

            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <MapPin className="w-6 h-6 text-amber-500 mb-3" />
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-zinc-400 text-sm">{contactInfo.location}</p>
            </div>
          </div>

          <div className="mt-12 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <p className="text-zinc-500 text-sm text-center">
              Responses typically within 24-48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
