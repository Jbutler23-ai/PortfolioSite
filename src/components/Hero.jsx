import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full bg-blue-50/70 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 xl:gap-20 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-neutral-500">Open to opportunities · Indiana, USA</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(56px,9vw,92px)] font-bold text-neutral-900 tracking-[-0.03em] leading-[1.02] mb-6"
            >
              Joseph<br />Butler
            </motion.h1>

            <motion.p variants={item} className="text-[19px] text-neutral-500 font-normal mb-4 max-w-sm leading-snug">
              Junior Software Developer
            </motion.p>

            <motion.p variants={item} className="text-[15px] text-neutral-400 max-w-[380px] leading-[1.85] mb-10">
              I&apos;ve shipped web apps, mobile apps, CLI tools, and a VR game played over
              577,000 times. I study software development at Ivy Tech and I&apos;m actively
              looking for my first professional role.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Joseph_Butler_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 active:bg-neutral-800 transition-colors duration-200 shadow-sm shadow-neutral-900/10"
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
                className="px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-6">
              <SocialLink href="https://github.com/Jbutler23-ai" label="GitHub">
                <GitHubIcon />
                GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/joseph-butler-5357b1406" label="LinkedIn">
                <LinkedInIcon />
                LinkedIn
              </SocialLink>
              <SocialLink href="mailto:jbutler0523@icloud.com" label="Email">
                <EmailIcon />
                Email
              </SocialLink>
              <SocialLink href="tel:2173314003" label="Phone">
                <PhoneIcon />
                217-331-4003
              </SocialLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
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
    <div className="relative select-none">
      <div className="absolute -inset-6 bg-blue-400/8 rounded-[28px] blur-2xl" />
      <div className="relative rounded-2xl bg-[#0d0d0f] border border-white/[0.06] shadow-2xl shadow-black/25 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 h-10 border-b border-white/[0.05] bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-neutral-600 font-mono tracking-wide">profile.js</span>
        </div>
        <div className="p-5 font-mono text-[12.5px] leading-[1.75] overflow-hidden">
          <div className="text-neutral-600 mb-1 text-[11px]">{'// Joseph Butler'}</div>
          <div className="space-y-0.5">
            <CodeLine>
              <Kw>const</Kw> <Var>{' butler'}</Var> <Punct> {'= {'}</Punct>
            </CodeLine>
            <CodeLine indent={1}>
              <Key>role</Key><Punct>:</Punct> <Str>{' "Software Developer"'}</Str><Punct>,</Punct>
            </CodeLine>
            <CodeLine indent={1}>
              <Key>location</Key><Punct>:</Punct> <Str>{' "Indiana, USA"'}</Str><Punct>,</Punct>
            </CodeLine>
            <CodeLine indent={1}>
              <Key>available</Key><Punct>:</Punct> <Bool>{' true'}</Bool><Punct>,</Punct>
            </CodeLine>
            <CodeLine indent={1}>
              <Key>education</Key><Punct>:</Punct> <Str>{' "Ivy Tech"'}</Str><Punct>,</Punct>
            </CodeLine>
            <CodeLine indent={1}>
              <Key>skills</Key><Punct>: [</Punct>
            </CodeLine>
            <CodeLine indent={2}>
              <Str>"React"</Str><Punct>,</Punct> <Str>"Python"</Str><Punct>,</Punct>
            </CodeLine>
            <CodeLine indent={2}>
              <Str>"React Native"</Str><Punct>,</Punct> <Str>"SQL"</Str>
            </CodeLine>
            <CodeLine indent={1}><Punct>{'],'}</Punct></CodeLine>
            <CodeLine indent={1}>
              <Key>vrPlays</Key><Punct>:</Punct> <Num>{' 577_000'}</Num>
            </CodeLine>
            <CodeLine><Punct>{'}'}</Punct></CodeLine>
          </div>
        </div>

        <div className="px-5 pb-5 flex flex-col gap-2.5 border-t border-white/[0.04] pt-4">
          <StatRow label="VR Game Plays" value="577K+" accent />
          <StatRow label="Projects Built" value="4+" />
          <StatRow label="Technologies" value="6+" />
        </div>
      </div>
    </div>
  );
}

function CodeLine({ children, indent = 0 }) {
  return (
    <div className="flex" style={{ paddingLeft: indent * 18 }}>
      {children}
    </div>
  );
}

function StatRow({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-neutral-600 font-mono">{label}</span>
      <span className={`text-[12px] font-semibold font-mono ${accent ? 'text-blue-400' : 'text-neutral-300'}`}>
        {value}
      </span>
    </div>
  );
}

const Kw = ({ children }) => <span className="text-purple-400">{children}</span>;
const Var = ({ children }) => <span className="text-blue-300">{children}</span>;
const Key = ({ children }) => <span className="text-sky-300">{children}</span>;
const Str = ({ children }) => <span className="text-emerald-300">{children}</span>;
const Bool = ({ children }) => <span className="text-amber-300">{children}</span>;
const Num = ({ children }) => <span className="text-amber-200">{children}</span>;
const Punct = ({ children }) => <span className="text-neutral-500">{children}</span>;

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
      className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
    >
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
