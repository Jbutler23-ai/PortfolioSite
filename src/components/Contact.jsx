import { Reveal, Section, SectionHeading, ArrowUpRight } from './shared';

const links = [
  { label: 'Call me', value: '217-331-4003', href: 'tel:2173314003' },
  { label: 'Connect on LinkedIn', value: 'joseph-butler', href: 'https://www.linkedin.com/in/joseph-butler-5357b1406', external: true },
  { label: 'See the code', value: 'github.com/Jbutler23-ai', href: 'https://github.com/Jbutler23-ai', external: true },
];

export default function Contact() {
  return (
    <Section id="contact" tone="gray">
      <SectionHeading title="Contact" tagline="Let's talk." />

      <Reveal delay={0.05}>
        <p className="text-[15px] text-neutral-500 max-w-md leading-[1.85] mb-10">
          I&apos;m actively looking for internships and entry-level developer roles.
          If you&apos;re building something and need someone who learns fast and ships
          real work — I&apos;d like to talk.
        </p>
      </Reveal>

      <Reveal delay={0.12} className="mb-12">
        <a
          href="mailto:jbutler0523@icloud.com"
          className="group inline-flex items-center gap-3 text-[clamp(22px,4.5vw,40px)] font-semibold text-neutral-950 tracking-[-0.025em] hover:text-blue-600 transition-colors duration-200"
        >
          jbutler0523@icloud.com
          <span className="text-neutral-300 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="flex flex-col gap-3.5 items-start">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-blue-600 hover:underline underline-offset-4"
            >
              {l.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
