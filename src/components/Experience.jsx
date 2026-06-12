import { Reveal, Section, SectionHeading } from './shared';

const items = [
  {
    role: 'AI Engineer',
    type: 'Contract',
    period: 'Apr 2025 – Present',
    bullets: [
      'Maintained high accuracy across thousands of reviewed AI model responses by applying rubric frameworks consistently and flagging recurring error patterns before submission.',
      'Kept review quality steady under high-volume conditions by adjusting focus based on observed error trends, cutting time lost to resubmissions.',
    ],
    skills: 'AI evaluation · Prompt analysis · Quality review',
  },
  {
    role: 'Independent Software Projects',
    type: 'Personal',
    period: '2023 – Present',
    bullets: [
      'Built 5+ working applications across web, mobile, and CLI by applying Python, JavaScript, React, and React Native to specific user problems.',
      'Improved reliability and debugging speed across projects by adopting consistent component structure, modular design, and step-by-step isolation testing.',
    ],
    skills: 'Python · JavaScript · React · React Native · SQL',
  },
  {
    role: 'VR Game Creator — Rec Room',
    type: 'Independent',
    period: '2021 – 2023',
    bullets: [
      'Grew a self-published VR game to 577,000+ organic plays by iterating on level design, challenge balance, and player flow.',
      'Shipped multiple interactive environments from concept to live audience, using observed player behavior as the primary feedback signal for each update.',
    ],
    skills: 'Level design · Game logic · User experience',
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" tagline="What I've done so far." />

      <div className="flex flex-col">
        {items.map((item, i) => (
          <Reveal
            key={item.role}
            delay={i * 0.08}
            className={`grid sm:grid-cols-[170px_1fr] gap-x-12 gap-y-3 py-9 ${
              i < items.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
          >
            <div>
              <p className="text-[13px] text-neutral-800 font-medium">{item.period}</p>
              <p className="text-[13px] text-neutral-400 mt-0.5">{item.type}</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-neutral-950 tracking-[-0.01em] mb-3.5">
                {item.role}
              </h3>
              <ul className="space-y-2.5 mb-4">
                {item.bullets.map(b => (
                  <li key={b} className="flex gap-3 text-[14.5px] text-neutral-500 leading-[1.75]">
                    <span className="text-neutral-300 select-none mt-px">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-neutral-400">{item.skills}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
