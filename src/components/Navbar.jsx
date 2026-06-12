import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { EASE } from '../motion';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

const menus = {
  About: {
    lead: {
      title: 'Get to know me',
      items: [
        { label: 'About me', href: '#about' },
        { label: 'Education', href: '#education' },
      ],
    },
    cols: [
      {
        title: 'Quick facts',
        items: [
          { label: 'Indiana, USA' },
          { label: 'Ivy Tech — Software Development' },
          { label: 'Open to opportunities' },
        ],
      },
      {
        title: 'Elsewhere',
        items: [
          { label: 'GitHub', href: 'https://github.com/Jbutler23-ai', external: true },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-butler-5357b1406', external: true },
        ],
      },
    ],
  },
  Experience: {
    lead: {
      title: 'Explore experience',
      items: [
        { label: 'AI Engineer', href: '#experience' },
        { label: 'Independent Projects', href: '#experience' },
        { label: 'VR Game Creator', href: '#experience' },
      ],
    },
    cols: [
      {
        title: 'More',
        items: [
          { label: 'Projects', href: '#projects' },
          { label: 'Skills', href: '#skills' },
        ],
      },
      {
        title: 'Resume',
        items: [{ label: 'Download Resume', pdf: true }],
      },
    ],
  },
  Projects: {
    lead: {
      title: 'Explore projects',
      items: [
        { label: 'Rec Room VR Experiences', href: '#projects' },
        { label: 'envcheck', href: 'https://github.com/Jbutler23-ai/envcheck', external: true },
        { label: 'StandupScribe', href: 'https://github.com/Jbutler23-ai/standup-scribe', external: true },
        { label: 'ShiftGuard', href: 'https://github.com/Jbutler23-ai/ShiftGuard', external: true },
        { label: 'Plant Identification App', href: '#projects' },
      ],
    },
    cols: [
      {
        title: 'On GitHub',
        items: [
          { label: 'envcheck', href: 'https://github.com/Jbutler23-ai/envcheck', external: true },
          { label: 'standup-scribe', href: 'https://github.com/Jbutler23-ai/standup-scribe', external: true },
          { label: 'ShiftGuard', href: 'https://github.com/Jbutler23-ai/ShiftGuard', external: true },
          { label: 'All repositories', href: 'https://github.com/Jbutler23-ai?tab=repositories', external: true },
        ],
      },
      {
        title: 'Highlights',
        items: [
          { label: '1.8M+ VR game plays' },
          { label: '5+ projects shipped' },
        ],
      },
    ],
  },
  Skills: {
    lead: {
      title: 'Explore skills',
      items: [{ label: 'What I work with', href: '#skills' }],
    },
    cols: [
      {
        title: 'Languages',
        items: [{ label: 'Python' }, { label: 'JavaScript' }, { label: 'SQL' }],
      },
      {
        title: 'Frameworks & tools',
        items: [
          { label: 'React' },
          { label: 'React Native' },
          { label: 'Git & GitHub' },
        ],
      },
    ],
  },
  Contact: {
    lead: {
      title: 'Get in touch',
      items: [
        { label: 'jbutler0523@icloud.com', href: 'mailto:jbutler0523@icloud.com' },
        { label: '217-331-4003', href: 'tel:2173314003' },
      ],
    },
    cols: [
      {
        title: 'Elsewhere',
        items: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-butler-5357b1406', external: true },
          { label: 'GitHub', href: 'https://github.com/Jbutler23-ai', external: true },
        ],
      },
      {
        title: 'Availability',
        items: [{ label: 'Open to internships & entry-level roles' }],
      },
    ],
  },
};

const panelStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
};

const panelItem = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
      setMenu(null);
      if (window.scrollY < window.innerHeight * 0.4) setActive('');
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.toLowerCase()))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && window.scrollY >= window.innerHeight * 0.4) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') setMenu(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const close = () => setMenu(null);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50"
        onMouseLeave={close}
      >
        <nav
          className={`bg-white/80 backdrop-blur-xl transition-colors duration-300 ${
            (scrolled || open) && !menu ? 'border-b border-black/[0.08]' : 'border-b border-transparent'
          }`}
        >
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-12">
            <a
              href="#"
              onClick={() => { setOpen(false); close(); }}
              onMouseEnter={close}
              className="text-[13px] font-semibold text-neutral-950 tracking-tight hover:text-neutral-500 transition-colors duration-150"
            >
              Joseph Butler
            </a>

            <ul className="hidden md:flex items-center gap-9">
              {links.map(l => {
                const isActive = active === l.toLowerCase();
                return (
                  <li key={l} onMouseEnter={() => setMenu(l)}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      onClick={close}
                      className={`text-[12px] transition-colors duration-150 ${
                        isActive
                          ? 'text-neutral-950 font-medium'
                          : 'text-neutral-600 hover:text-neutral-950'
                      }`}
                    >
                      {l}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3" onMouseEnter={close}>
              <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Joseph_Butler_Resume.pdf"
                className="hidden md:inline-flex items-center text-[12px] font-medium px-3.5 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-150"
              >
                {({ loading }) => (loading ? 'Building…' : 'Resume')}
              </PDFDownloadLink>

              <button
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-neutral-100 transition-colors text-neutral-700"
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle navigation"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block w-[18px] h-px bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                  className="block w-[18px] h-px bg-current rounded-full"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block w-[18px] h-px bg-current rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {menu && menus[menu] && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: EASE }}
              className="hidden md:block bg-white/90 backdrop-blur-2xl border-b border-black/[0.08] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.12)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menu}
                  variants={panelStagger}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.12 } }}
                  className="max-w-5xl mx-auto px-6 pt-9 pb-12 min-h-[270px] flex gap-x-20"
                >
                  <div className="min-w-[260px]">
                    <motion.p
                      variants={panelItem}
                      className="text-[12px] text-neutral-400 mb-5"
                    >
                      {menus[menu].lead.title}
                    </motion.p>
                    <ul className="flex flex-col gap-3.5">
                      {menus[menu].lead.items.map(item => (
                        <motion.li key={item.label} variants={panelItem}>
                          <MenuLink
                            item={item}
                            onNavigate={close}
                            className="text-[21px] font-semibold text-neutral-950 tracking-[-0.02em] hover:text-blue-600 transition-colors duration-150"
                          />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {menus[menu].cols.map(col => (
                    <div key={col.title}>
                      <motion.p
                        variants={panelItem}
                        className="text-[12px] text-neutral-400 mb-5"
                      >
                        {col.title}
                      </motion.p>
                      <ul className="flex flex-col gap-3">
                        {col.items.map(item => (
                          <motion.li key={item.label} variants={panelItem}>
                            <MenuLink
                              item={item}
                              onNavigate={close}
                              className="text-[12.5px] font-medium text-neutral-800 hover:text-blue-600 transition-colors duration-150"
                            />
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onMouseEnter={close}
            className="hidden md:block fixed inset-0 z-40 backdrop-blur-md bg-white/30"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-12 z-40 bg-white flex flex-col md:hidden"
          >
            <div className="flex flex-col px-6 py-8 flex-1">
              <ul className="flex flex-col">
                {links.map((l, i) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2, ease: 'easeOut' }}
                  >
                    <a
                      href={`#${l.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-xl font-semibold text-neutral-950 border-b border-neutral-100 hover:text-blue-600 transition-colors duration-150"
                    >
                      {l}
                      <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="mt-10"
              >
                <PDFDownloadLink
                  document={<ResumePDF />}
                  fileName="Joseph_Butler_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-150"
                >
                  {({ loading }) => (loading ? 'Building…' : 'Download Resume')}
                </PDFDownloadLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuLink({ item, onNavigate, className }) {
  if (item.pdf) {
    return (
      <PDFDownloadLink
        document={<ResumePDF />}
        fileName="Joseph_Butler_Resume.pdf"
        className={className}
      >
        {({ loading }) => (loading ? 'Building…' : item.label)}
      </PDFDownloadLink>
    );
  }
  if (!item.href) {
    return <span className="text-[12.5px] text-neutral-500">{item.label}</span>;
  }
  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      onClick={onNavigate}
      className={className}
    >
      {item.label}
    </a>
  );
}
