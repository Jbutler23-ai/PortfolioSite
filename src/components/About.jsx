import { Reveal, SectionHeading } from './shared';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading index="01" title="About" />

      <div className="grid lg:grid-cols-[1fr_300px] gap-16 xl:gap-24">
        <Reveal delay={0.1} className="space-y-5 max-w-[560px]">
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            One of my VR games has been played over 577,000 times — not by luck, but because
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

        <Reveal delay={0.2}>
          <div className="lg:border-l lg:border-neutral-100 lg:pl-10">
            <Stat value="577K+" label="VR game plays" />
            <Stat value="5+" label="Projects shipped" />
            <Stat value="3" label="Platforms — web, mobile, CLI" last />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label, last }) {
  return (
    <div className={`py-5 ${last ? '' : 'border-b border-neutral-100'}`}>
      <p className="text-2xl font-semibold text-neutral-950 tracking-[-0.02em] tabular-nums">{value}</p>
      <p className="text-[13px] text-neutral-400 mt-1">{label}</p>
    </div>
  );
}
