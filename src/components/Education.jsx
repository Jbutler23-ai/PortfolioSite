import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

const schools = [
  {
    abbr: 'IT',
    name: 'Ivy Tech Community College',
    program: 'Software Development',
    status: 'Current',
    statusColor: 'emerald',
    dark: true,
  },
  {
    abbr: 'IU',
    name: 'Indiana University Southeast',
    program: 'Software Engineering — Planned continuation',
    status: 'Upcoming',
    statusColor: 'neutral',
    dark: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="Education" title="Academic background" />

      <div className="flex flex-col gap-4 max-w-2xl">
        {schools.map((school, i) => (
          <motion.div
            key={school.name}
            className="flex items-center gap-5 p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/40 transition-all duration-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold tracking-tight ${
                school.dark
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-400'
              }`}
            >
              {school.abbr}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap mb-1">
                <h4 className={`text-sm font-semibold ${school.dark ? 'text-neutral-900' : 'text-neutral-500'}`}>
                  {school.name}
                </h4>
                <StatusBadge color={school.statusColor}>{school.status}</StatusBadge>
              </div>
              <p className="text-sm text-neutral-400">{school.program}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StatusBadge({ color, children }) {
  const cls = color === 'emerald'
    ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
    : 'bg-neutral-100 text-neutral-400 border-neutral-200';
  return (
    <span className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${cls}`}>
      {children}
    </span>
  );
}
