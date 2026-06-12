import { Reveal, Section, SectionHeading } from './shared';

const stats = [
  { value: '1.8M+', label: 'VR game plays' },
  { value: '5+', label: 'Projects shipped' },
  { value: '3', label: 'Platforms — web, mobile, CLI' },
];

export default function About() {
  return (
    <Section id="about" tone="gray">
      <SectionHeading title="About" tagline="The short version." />

      <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-20">
        <Reveal delay={0.1} className="space-y-5 max-w-[560px]">
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            One of my VR games has been played over 1.8 million times — not by luck, but because
            I kept watching how people interacted with it and iterated on what they actually
            responded to. That&apos;s how I approach everything I build.
          </p>
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            I work across web, mobile, and CLI using Python, JavaScript, React, React Native,
            and SQL. I&apos;ve also done professional AI evaluation work that sharpened how
            carefully I read requirements, spot inconsistencies, and think about the person
            on the other end of whatever I&apos;m making.
          </p>
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            I&apos;m studying software development at Ivy Tech and continuing at Indiana
            University Southeast. I&apos;m looking for a team where I can contribute from
            day one and keep learning from people better than me.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.06}>
              <div className="rounded-[18px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <p className="text-3xl font-semibold text-neutral-950 tracking-[-0.02em] tabular-nums">
                  {stat.value}
                </p>
                <p className="text-[13px] text-neutral-500 mt-1.5">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
