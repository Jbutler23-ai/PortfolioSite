import { Reveal, SectionHeading, ArrowUpRight } from './shared';

const featured = {
  title: 'Rec Room VR Experiences',
  description:
    'Grew a self-published VR game to 577,000+ organic plays by iterating on level design, challenge balance, and player flow — using observed in-game behavior as the primary feedback signal for each update.',
  tech: 'Game design · VR · Level design · UX',
};

const projects = [
  {
    title: 'envcheck',
    description:
      'Catches misconfigured environments before they cause runtime failures by cross-referencing .env files against actual code usage — flags missing and unused variables across 10 languages, with a --strict mode for CI pipelines.',
    tech: 'Python · CLI · Static analysis',
    href: 'https://github.com/Jbutler23-ai/envcheck',
  },
  {
    title: 'StandupScribe',
    description:
      'Cuts the time spent writing daily standups by scanning local git repos for recent commits and formatting them into ready-to-send notes — plain text, Markdown, or Slack output, zero external dependencies.',
    tech: 'Python · CLI · Git',
    href: 'https://github.com/Jbutler23-ai/standup-scribe',
  },
  {
    title: 'ShiftGuard',
    description:
      'Solves a real scheduling problem for small teams by parsing two CSV files — employee availability and a weekly schedule — and reporting every conflict it finds, clearly.',
    tech: 'Python · CLI · CSV',
    href: 'https://github.com/Jbutler23-ai/ShiftGuard',
  },
  {
    title: 'Plant Identification App',
    description:
      'Reduces friction for plant owners with a React Native concept that identifies plants and surfaces care info in as few taps as possible — designed around real usage patterns.',
    tech: 'React Native · Mobile · UI/UX',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading index="03" title="Projects" />

      <Reveal className="rounded-2xl border border-neutral-200 p-8 md:p-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-blue-600 uppercase tracking-[0.14em] mb-3">
              Featured
            </p>
            <h3 className="text-xl font-semibold text-neutral-950 tracking-[-0.01em] mb-3">
              {featured.title}
            </h3>
            <p className="text-[15px] text-neutral-500 leading-[1.8] mb-4 max-w-xl">
              {featured.description}
            </p>
            <p className="text-[13px] text-neutral-400">{featured.tech}</p>
          </div>
          <div className="shrink-0 md:text-right md:border-l md:border-neutral-100 md:pl-12">
            <p className="text-4xl font-extrabold text-neutral-950 tracking-[-0.03em] tabular-nums">577K+</p>
            <p className="text-[13px] text-neutral-400 mt-1.5">organic plays</p>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((project, i) => {
          const inner = (
            <>
              <span className="text-[13px] font-medium text-neutral-300 tabular-nums sm:pt-1">
                {String(i + 2).padStart(2, '0')}
              </span>
              <span className="flex-1 min-w-0 block">
                <span className="flex items-center gap-2 mb-2">
                  <span className="text-[15px] font-semibold text-neutral-900 tracking-[-0.01em] group-hover:text-blue-600 transition-colors duration-150">
                    {project.title}
                  </span>
                  {project.href && (
                    <span className="text-neutral-300 group-hover:text-blue-500 transition-colors duration-150">
                      <ArrowUpRight />
                    </span>
                  )}
                </span>
                <span className="block text-[14px] text-neutral-500 leading-[1.75] mb-2.5 max-w-2xl">
                  {project.description}
                </span>
                <span className="block text-[13px] text-neutral-400">{project.tech}</span>
              </span>
            </>
          );

          const rowClass = `group flex flex-col sm:flex-row gap-2 sm:gap-12 py-7 ${
            i < projects.length - 1 ? 'border-b border-neutral-100' : ''
          }`;

          return (
            <Reveal key={project.title} delay={i * 0.06}>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className={rowClass}>
                  {inner}
                </a>
              ) : (
                <div className={rowClass}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <a
          href="https://github.com/Jbutler23-ai?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
        >
          More on GitHub
          <ArrowUpRight />
        </a>
      </Reveal>
    </section>
  );
}
