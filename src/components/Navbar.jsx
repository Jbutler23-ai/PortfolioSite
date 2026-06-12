import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-neutral-950 tracking-tight hover:text-neutral-500 transition-colors duration-150"
          >
            Joseph Butler
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => {
              const isActive = active === l.toLowerCase();
              return (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className={`text-[13px] transition-colors duration-150 ${
                      isActive
                        ? 'text-neutral-950 font-medium'
                        : 'text-neutral-500 hover:text-neutral-950'
                    }`}
                  >
                    {l}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Joseph_Butler_Resume.pdf"
              className="hidden md:inline-flex items-center text-[13px] font-medium px-4 py-1.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-700 transition-colors duration-150"
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
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white flex flex-col md:hidden"
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
                  className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-150"
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
