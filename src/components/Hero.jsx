import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { EASE } from '../motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_55%_50%_at_75%_20%,rgba(59,130,246,0.05),transparent)]"
      />

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-20 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="flex items-center gap-2.5 text-sm text-neutral-500 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Open to opportunities · Indiana, USA
            </motion.p>

            <motion.h1
              variants={item}
              className="text-[clamp(48px,8vw,84px)] font-extrabold text-neutral-950 tracking-[-0.035em] leading-[1.04] mb-6"
            >
              Joseph Butler
            </motion.h1>

            <motion.p variants={item} className="text-[19px] font-semibold tracking-[-0.015em] mb-5">
              <span className="text-neutral-950">Junior software developer.</span>{' '}
              <span className="text-neutral-500">Real apps, real users.</span>
            </motion.p>

            <motion.p variants={item} className="text-[15px] text-neutral-500 max-w-[440px] leading-[1.85] mb-10">
              I&apos;ve shipped web apps, mobile apps, and command-line tools — and a VR game
              that&apos;s been played more than 577,000 times. I study software development at
              Ivy Tech and I&apos;m looking for my first professional role.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-6 mb-12">
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Joseph_Butler_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 hover:-translate-y-px active:translate-y-0 active:bg-blue-700 transition-all duration-200"
              >
                {({ loading }) => (
                  <>
                    <DownloadIcon />
                    {loading ? 'Building PDF…' : 'Download Resume'}
                  </>
                )}
              </PDFDownloadLink>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline underline-offset-4"
              >
                View projects
                <svg className="w-3.5 h-3.5 mt-px" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <SocialLink href="https://github.com/Jbutler23-ai" label="GitHub">GitHub</SocialLink>
              <SocialLink href="https://www.linkedin.com/in/joseph-butler-5357b1406" label="LinkedIn">LinkedIn</SocialLink>
              <SocialLink href="mailto:jbutler0523@icloud.com" label="Email">jbutler0523@icloud.com</SocialLink>
              <SocialLink href="tel:2173314003" label="Phone">217-331-4003</SocialLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="hidden lg:block"
          >
            <CodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="select-none rounded-2xl bg-neutral-950 border border-neutral-800/70 shadow-2xl shadow-neutral-950/[0.15] overflow-hidden">
      <div className="flex items-center justify-between px-5 h-10 border-b border-white/[0.06]">
        <span className="text-[11px] text-neutral-500 font-mono tracking-wide">joseph.config.js</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
      </div>

      <div className="p-5 font-mono text-[12.5px] leading-[1.8]">
        <CodeLine>
          <Kw>const</Kw> <Var>{' joseph'}</Var> <Punct>{'= {'}</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>role</Key><Punct>:</Punct> <Str>{' "Junior Software Developer"'}</Str><Punct>,</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>school</Key><Punct>:</Punct> <Str>{' "Ivy Tech"'}</Str><Punct>,</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>stack</Key><Punct>{': ['}</Punct><Str>"React"</Str><Punct>,</Punct> <Str>"Python"</Str><Punct>,</Punct>
        </CodeLine>
        <CodeLine indent={2}>
          <Str>"React Native"</Str><Punct>,</Punct> <Str>"SQL"</Str><Punct>{'],'}</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>vrGamePlays</Key><Punct>:</Punct> <Num>{' 577_000'}</Num><Punct>,</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>openTo</Key><Punct>:</Punct> <Str>{' "internships & entry-level"'}</Str><Punct>,</Punct>
        </CodeLine>
        <CodeLine indent={1}>
          <Key>available</Key><Punct>:</Punct> <Bool>{' true'}</Bool><Punct>,</Punct>
        </CodeLine>
        <CodeLine>
          <Punct>{'};'}</Punct>
          <span className="inline-block w-[7px] h-[15px] ml-1.5 align-text-bottom bg-neutral-500 animate-blink" />
        </CodeLine>
      </div>

      <div className="px-5 pb-5 pt-4 flex flex-col gap-2.5 border-t border-white/[0.06]">
        <StatRow label="VR game plays" value="577K+" accent />
        <StatRow label="Projects shipped" value="5+" />
        <StatRow label="Platforms" value="web · mobile · CLI" />
      </div>
    </div>
  );
}

function CodeLine({ children, indent = 0 }) {
  return (
    <div style={{ paddingLeft: indent * 18 }}>
      {children}
    </div>
  );
}

function StatRow({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-neutral-500 font-mono">{label}</span>
      <span className={`text-[12px] font-semibold font-mono ${accent ? 'text-sky-400' : 'text-neutral-300'}`}>
        {value}
      </span>
    </div>
  );
}

const Kw = ({ children }) => <span className="text-sky-400">{children}</span>;
const Var = ({ children }) => <span className="text-neutral-100">{children}</span>;
const Key = ({ children }) => <span className="text-neutral-400">{children}</span>;
const Str = ({ children }) => <span className="text-emerald-300/90">{children}</span>;
const Bool = ({ children }) => <span className="text-sky-300">{children}</span>;
const Num = ({ children }) => <span className="text-sky-300">{children}</span>;
const Punct = ({ children }) => <span className="text-neutral-600">{children}</span>;

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function SocialLink({ href, label, children }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      aria-label={label}
      className="text-sm text-neutral-400 hover:text-neutral-800 underline decoration-neutral-200 underline-offset-4 hover:decoration-neutral-400 transition-colors duration-150"
    >
      {children}
    </a>
  );
}
