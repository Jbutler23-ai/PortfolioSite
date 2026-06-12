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

const facts = [
  { label: 'Currently', value: 'Ivy Tech — Software Development' },
  { label: 'Focus', value: 'React · Python · React Native' },
  { label: 'Most played', value: '577,000+ VR game plays' },
  { label: 'Looking for', value: 'Internships & entry-level roles' },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 xl:gap-24 items-center">
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

            <motion.p variants={item} className="text-lg text-neutral-600 mb-5 tracking-[-0.01em]">
              Junior software developer
            </motion.p>

            <motion.p variants={item} className="text-[15px] text-neutral-500 max-w-[440px] leading-[1.85] mb-10">
              I&apos;ve shipped web apps, mobile apps, and command-line tools — and a VR game
              that&apos;s been played more than 577,000 times. I study software development at
              Ivy Tech and I&apos;m looking for my first professional role.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-12">
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Joseph_Butler_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-700 active:bg-neutral-800 transition-colors duration-200"
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
                className="px-5 py-2.5 rounded-full border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 transition-colors duration-200"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <SocialLink href="https://github.com/Jbutler23-ai" label="GitHub">GitHub</SocialLink>
              <SocialLink href="https://www.linkedin.com/in/joseph-butler-5357b1406" label="LinkedIn">LinkedIn</SocialLink>
              <SocialLink href="mailto:jbutler0523@icloud.com" label="Email">jbutler0523@icloud.com</SocialLink>
              <SocialLink href="tel:2173314003" label="Phone">217-331-4003</SocialLink>
            </motion.div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="hidden lg:block"
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`py-4 ${i > 0 ? 'border-t border-neutral-100' : ''}`}
              >
                <dt className="text-[11px] font-medium text-neutral-400 uppercase tracking-[0.12em] mb-1">
                  {f.label}
                </dt>
                <dd className="text-sm text-neutral-800">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

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
