import { motion } from 'framer-motion';
import { SectionHeading } from './shared';

const contacts = [
  {
    label: 'Email',
    value: 'jbutler0523@icloud.com',
    href: 'mailto:jbutler0523@icloud.com',
    external: false,
    icon: EmailIcon,
  },
  {
    label: 'Phone',
    value: '217-331-4003',
    href: 'tel:2173314003',
    external: false,
    icon: PhoneIcon,
  },
  {
    label: 'LinkedIn',
    value: 'joseph-butler-5357b1406',
    href: 'https://www.linkedin.com/in/joseph-butler-5357b1406',
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'Jbutler23-ai',
    href: 'https://github.com/Jbutler23-ai',
    external: true,
    icon: GitHubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-neutral-100">
      <SectionHeading label="Contact" title="Let's connect" />

      <motion.p
        className="text-[15px] text-neutral-500 max-w-md leading-[1.85] mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        I&apos;m actively looking for internships and entry-level developer roles.
        If you&apos;re building something and need someone who learns fast and ships real
        work — I&apos;d like to talk.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
        {contacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noreferrer' : undefined}
              className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-200">
                <Icon />
              </div>
              <div className="min-w-0">
                <p className="text-[10.5px] font-semibold text-neutral-400 uppercase tracking-[0.12em] mb-0.5">
                  {c.label}
                </p>
                <p className="text-sm text-neutral-700 font-medium group-hover:text-blue-600 transition-colors truncate">
                  {c.value}
                </p>
              </div>
              {c.external && (
                <svg
                  className="w-3.5 h-3.5 text-neutral-300 group-hover:text-blue-400 transition-colors ml-auto shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
