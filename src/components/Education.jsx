import { Reveal, SectionHeading } from './shared';

const schools = [
  {
    name: 'Ivy Tech Community College',
    program: 'Software Development',
    status: 'Current',
    current: true,
  },
  {
    name: 'Indiana University Southeast',
    program: 'Software Engineering',
    status: 'Planned continuation',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading index="05" title="Education" />

      <div className="max-w-3xl">
        {schools.map((school, i) => (
          <Reveal
            key={school.name}
            delay={i * 0.08}
            className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-12 py-6 ${
              i < schools.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
          >
            <div className="sm:w-[170px] shrink-0">
              <span
                className={`inline-flex items-center gap-2 text-[13px] font-medium ${
                  school.current ? 'text-emerald-600' : 'text-neutral-400'
                }`}
              >
                {school.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                {school.status}
              </span>
            </div>
            <div>
              <h3 className={`text-[15px] font-semibold tracking-[-0.01em] ${school.current ? 'text-neutral-950' : 'text-neutral-600'}`}>
                {school.name}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{school.program}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
