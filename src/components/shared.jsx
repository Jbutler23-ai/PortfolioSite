import { motion } from 'framer-motion';

export function SectionHeading({ label, title }) {
  return (
    <motion.div
      className="mb-14"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.15em] mb-3">{label}</p>
      <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-neutral-900 tracking-tight leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
