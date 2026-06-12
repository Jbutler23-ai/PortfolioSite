import { motion } from 'framer-motion';
import { EASE } from '../motion';

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, tone = 'white', divider = false, children }) {
  return (
    <section id={id} className={tone === 'gray' ? 'bg-[#f5f5f7]' : 'bg-white'}>
      <div className={`max-w-5xl mx-auto px-6 py-24 ${divider ? 'border-t border-neutral-200/70' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, tagline }) {
  return (
    <Reveal className="mb-12">
      <h2 className="text-[26px] md:text-[30px] font-semibold tracking-[-0.02em] leading-snug max-w-2xl">
        <span className="text-neutral-950">{title}.</span>{' '}
        <span className="text-neutral-500">{tagline}</span>
      </h2>
    </Reveal>
  );
}

export function ArrowUpRight({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
