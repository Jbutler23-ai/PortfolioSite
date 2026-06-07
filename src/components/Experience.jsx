import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

const items = [
  {
    role: 'AI Engineer',
    type: 'Contract',
    period: 'Apr 2025 – Present',
    description:
      'Sustained high accuracy across thousands of reviewed AI model responses by systematically applying rubric frameworks, identifying recurring error patterns, and adjusting review focus accordingly — keeping quality consistent under high-volume conditions.',
    skills: ['AI Evaluation', 'Prompt Analysis', 'Attention to Detail', 'Quality Review'],
  },
  {
    role: 'Software Development Projects',
    type: 'Personal',
    period: '2023 – Present',
    description:
      'Built 5+ working applications across web, mobile, desktop, and CLI by applying Python, JavaScript, React, and React Native to solve specific user problems — with each project focused on clean architecture, thorough debugging, and user-friendly design.',
    skills: ['Python', 'JavaScript', 'React', 'React Native', 'SQL'],
  },
  {
    role: 'VR Game Creator — Rec Room',
    type: 'Independent',
    period: '2021 – 2023',
    description:
      'Grew a self-published VR game to 577,000+ organic plays by iterating on level design, challenge balance, and player flow — using observed in-game behavior as the primary feedback signal for each improvement.',
    skills: ['Level Design', 'Game Logic', 'User Experience'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="Experience" title="What I've worked on" />

      <div className="flex flex-col">
        {items.map((item, i) => (
          <motion.div
            key={item.role}
            className={`grid sm:grid-cols-[160px_1fr] gap-x-10 gap-y-3 py-8 ${
              i < items.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-1.5">
              <span className="inline-flex items-center self-start px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 text-neutral-500">
                {item.type}
              </span>
              <span className="text-xs text-neutral-400 sm:pt-0.5">{item.period}</span>
            </div>

            <div>
              <h4 className="text-[15px] font-semibold text-neutral-900 mb-2.5 tracking-tight">
                {item.role}
              </h4>
              <p className="text-[14.5px] text-neutral-500 leading-[1.85] mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map(s => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-neutral-200 text-neutral-500 bg-neutral-50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
