import { Reveal, SectionHeading } from './shared';

const groups = [
  { label: 'Languages', skills: 'Python · JavaScript · SQL' },
  { label: 'Frameworks', skills: 'React · React Native' },
  { label: 'Practices', skills: 'REST APIs · Responsive design · Debugging · Project planning' },
  { label: 'Tools', skills: 'Git & GitHub · VS Code · Browser DevTools' },
  { label: 'Also', skills: 'AI output evaluation · Written feedback · Problem solving' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading index="04" title="Skills" />

      <div className="max-w-3xl">
        {groups.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.05}
            className={`grid sm:grid-cols-[170px_1fr] gap-x-12 gap-y-1 py-5 ${
              i < groups.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
          >
            <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.12em] sm:pt-1">
              {group.label}
            </p>
            <p className="text-[15px] text-neutral-700">{group.skills}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
