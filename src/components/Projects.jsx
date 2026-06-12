import { Reveal, Section, SectionHeading, ArrowUpRight } from './shared';

const projects = [
  {
    title: 'envcheck',
    eyebrow: 'New',
    isNew: true,
    description:
      'Catches misconfigured environments before they cause runtime failures by cross-referencing .env files against actual code usage — flags missing and unused variables across 10 languages, with a --strict mode for CI pipelines.',
    tech: 'Python · CLI · Static analysis',
    href: 'https://github.com/Jbutler23-ai/envcheck',
  },
  {
    title: 'StandupScribe',
    eyebrow: 'New',
    isNew: true,
    description:
      'Cuts the time spent writing daily standups by scanning local git repos for recent commits and formatting them into ready-to-send notes — plain text, Markdown, or Slack output, zero external dependencies.',
    tech: 'Python · CLI · Git',
    href: 'https://github.com/Jbutler23-ai/standup-scribe',
  },
  {
    title: 'ShiftGuard',
    eyebrow: 'CLI tool',
    description:
      'Solves a real scheduling problem for small teams by parsing two CSV files — employee availability and a weekly schedule — and reporting every conflict it finds, clearly.',
    tech: 'Python · CLI · CSV',
    href: 'https://github.com/Jbutler23-ai/ShiftGuard',
  },
  {
    title: 'Plant Identification App',
    eyebrow: 'Mobile concept',
    description:
      'Reduces friction for plant owners with a React Native concept that identifies plants and surfaces care info in as few taps as possible — designed around real usage patterns.',
    tech: 'React Native · Mobile · UI/UX',
  },
];

export default function Projects() {
  return (
    <Section id="projects" tone="gray">
      <SectionHeading title="Projects" tagline="Take a look at what I've built." />

      <Reveal className="mb-5">
        <div className="rounded-[18px] bg-black p-8 md:p-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.14em] mb-3">
                Featured
              </p>
              <h3 className="text-2xl md:text-[28px] font-semibold text-white tracking-[-0.02em] mb-2">
                Rec Room VR Experiences
              </h3>
              <p className="text-[15px] font-medium text-neutral-300 mb-3">
                All out play. Built solo, played 577,000+ times.
              </p>
              <p className="text-[14px] text-neutral-400 leading-[1.75] mb-4 max-w-xl">
                Grew a self-published VR game to 577,000+ organic plays by iterating on level
                design, challenge balance, and player flow — using observed in-game behavior
                as the primary feedback signal for each update.
              </p>
              <p className="text-[13px] text-neutral-500">Game design · VR · Level design · UX</p>
            </div>
            <div className="shrink-0 md:text-right md:border-l md:border-white/10 md:pl-12">
              <p className="text-5xl font-bold text-white tracking-[-0.03em] tabular-nums">577K+</p>
              <p className="text-[13px] text-neutral-400 mt-2">organic plays</p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const inner = (
            <>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.14em] mb-3 ${
                  project.isNew ? 'text-orange-600' : 'text-neutral-500'
                }`}
              >
                {project.eyebrow}
              </p>
              <h3 className="text-[19px] font-semibold text-neutral-950 tracking-[-0.01em] mb-2.5">
                {project.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-[1.75] mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[13px] text-neutral-400">{project.tech}</p>
                {project.href && (
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-blue-600 shrink-0">
                    GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </>
          );

          const cardClass =
            'flex flex-col h-full rounded-[18px] bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200';

          return (
            <Reveal key={project.title} delay={i * 0.06} className="h-full">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${cardClass} hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]`}
                >
                  {inner}
                </a>
              ) : (
                <div className={cardClass}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-8">
        <a
          href="https://github.com/Jbutler23-ai?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline underline-offset-4"
        >
          More on GitHub
          <ArrowUpRight />
        </a>
      </Reveal>
    </Section>
  );
}
