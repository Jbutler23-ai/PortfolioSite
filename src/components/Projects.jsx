import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

const GITHUB = 'https://github.com/Jbutler23-ai';

const projects = [
  {
    title: 'Rec Room VR Experiences',
    description:
      'Grew a self-published VR game to 577,000+ organic plays by iterating on level design, challenge balance, and player flow — using observed in-game behavior as the primary feedback signal for each update.',
    tags: ['Game Design', 'VR', 'Level Design', 'UX'],
    stat: { value: '577K+', label: 'plays' },
    featured: true,
  },
  {
    title: 'Plant Identification App',
    description:
      'Reduced friction for plant owners by designing a mobile app concept that identifies plants and surfaces care info in as few taps as possible — built with React Native around real usage patterns.',
    tags: ['React Native', 'Mobile', 'UI/UX'],
  },
  {
    title: 'PixView',
    description:
      'Eliminated unnecessary complexity by building a desktop image viewer in Python that opens and browses local images without the bloat of larger apps — focused on speed and simplicity.',
    tags: ['Python', 'Tkinter', 'Desktop'],
  },
  {
    title: 'ClearMyTabs',
    description:
      'Reduced tab overload for heavy browser users by designing a Chrome extension concept that groups tabs by context, saves sessions, and cuts the cognitive cost of managing too many open pages.',
    tags: ['JavaScript', 'Chrome Extension'],
  },
  {
    title: 'ShiftGuard',
    description:
      'Solved a real scheduling problem for small teams by building a CLI tool that parses two CSV files — employee availability and a weekly schedule — and clearly reports every conflict found.',
    tags: ['Python', 'CLI', 'CSV'],
  },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="Projects" title="Things I've built" />

      <motion.div
        className="relative rounded-2xl border border-neutral-200 overflow-hidden mb-4 hover:border-blue-200 transition-colors duration-200 group"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent pointer-events-none" />
        <div className="relative p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-[0.14em]">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-[15px] text-neutral-500 leading-[1.8] mb-5 max-w-xl">
                {featured.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {featured.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-500 font-medium ml-1 transition-colors duration-150"
                >
                  View on GitHub
                  <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center px-8 py-6 rounded-xl bg-white border border-neutral-200 shadow-sm min-w-[130px] group-hover:border-blue-100 transition-all duration-300">
              <span className="text-3xl font-bold text-blue-600 tracking-tight">
                {featured.stat.value}
              </span>
              <span className="text-xs text-neutral-400 mt-1">{featured.stat.label}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="border border-neutral-200 rounded-2xl overflow-hidden">
        {rest.map((project, i) => (
          <motion.a
            key={project.title}
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-5 hover:bg-blue-50/30 transition-colors duration-150 group ${
              i < rest.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="sm:w-6 sm:pt-[3px] shrink-0">
              <span className="text-xs font-medium text-neutral-300 tabular-nums">
                {String(i + 2).padStart(2, '0')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-neutral-800 mb-1.5 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h4>
              <p className="text-[13.5px] text-neutral-400 leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(t => (
                  <span
                    key={t}
                    className="text-[11.5px] px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-blue-500">
              <ArrowUpRight />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}
