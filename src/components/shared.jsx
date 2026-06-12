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

export function SectionHeading({ index, title }) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-baseline gap-4">
        <span className="text-[13px] font-medium text-neutral-300 tabular-nums">{index}</span>
        <h2 className="text-[1.7rem] md:text-[2rem] font-semibold text-neutral-950 tracking-[-0.02em]">
          {title}
        </h2>
      </div>
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
