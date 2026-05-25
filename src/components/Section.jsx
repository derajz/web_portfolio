import { motion } from 'framer-motion';

/**
 * Section wrapper with a single, subtle reveal animation.
 * Used by every major section so motion stays consistent + restrained.
 */
export default function Section({ id, kicker, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="container-tight"
      >
        {(kicker || title) && (
          <header className="mb-10 sm:mb-14">
            {kicker && <p className="kicker mb-3">{kicker}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
