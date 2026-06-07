import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'React Native'],
  },
  {
    label: 'Concepts',
    skills: ['Responsive Design', 'REST APIs', 'Debugging', 'Project Planning'],
  },
  {
    label: 'Tools',
    skills: ['GitHub', 'VS Code', 'Browser DevTools'],
  },
  {
    label: 'Other',
    skills: ['Data Annotation', 'Evaluation & Feedback', 'Problem Solving'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="Skills" title="What I work with" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group, i) => (
          <motion.div
            key={group.label}
            className="p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50/50 transition-all duration-200 group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.14em] mb-3.5">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(s => (
                <span
                  key={s}
                  className="text-[13px] px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 group-hover:bg-white group-hover:border group-hover:border-neutral-200 transition-all duration-200 border border-transparent"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
