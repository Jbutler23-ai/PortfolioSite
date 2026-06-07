import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="About" title="A bit about me" />

      <div className="grid md:grid-cols-5 gap-14 items-start">
        <motion.div
          className="md:col-span-3 space-y-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            One of my VR games has been played over 577,000 times — not by luck, but because
            I kept watching how people interacted with it and iterated on what they actually
            responded to. That&apos;s how I approach everything I build.
          </p>
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            I build across web, mobile, desktop, and CLI using Python, JavaScript, React,
            React Native, and SQL. I&apos;ve also done professional AI engineering work that
            sharpened how carefully I read requirements, spot inconsistencies, and think about
            the person on the other end of whatever I&apos;m making.
          </p>
          <p className="text-[15px] text-neutral-500 leading-[1.9]">
            Studying software development at Ivy Tech, continuing at Indiana University
            Southeast. Looking for my first professional role where I can contribute from day one.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="rounded-2xl border border-neutral-200 overflow-hidden">
            <Stat value="577K+" label="VR game plays" accent />
            <Stat value="5" label="Projects shipped" />
            <Stat value="7" label="Technologies" />
            <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-200">
              <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1.5">Currently</p>
              <p className="text-sm text-neutral-800 font-semibold">Ivy Tech Community College</p>
              <p className="text-xs text-neutral-400 mt-0.5">Software Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label, accent }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
      <span className="text-sm text-neutral-500">{label}</span>
      <span className={`text-xl font-bold ${accent ? 'text-blue-600' : 'text-neutral-800'}`}>
        {value}
      </span>
    </div>
  );
}
