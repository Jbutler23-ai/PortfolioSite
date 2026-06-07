import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-sm shadow-neutral-900/[0.03]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-500 transition-colors duration-150"
          >
            Joseph Butler
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Joseph_Butler_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-150"
            >
              {({ loading }) => (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {loading ? 'Building…' : 'Resume'}
                </>
              )}
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
            className="fixed inset-0 top-[57px] z-40 bg-white flex flex-col md:hidden"
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
                      className="flex items-center justify-between py-4 text-xl font-semibold text-neutral-900 border-b border-neutral-100 hover:text-blue-600 transition-colors duration-150"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-150"
                >
                  {({ loading }) => (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {loading ? 'Building…' : 'Download Resume'}
                    </>
                  )}
                </PDFDownloadLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
