import { useScroll, motion } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100] bg-blue-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-neutral-100 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">© {new Date().getFullYear()} Joseph Butler</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Jbutler23-ai" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors duration-150">GitHub</a>
            <a href="https://www.linkedin.com/in/joseph-butler-5357b1406" target="_blank" rel="noreferrer" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors duration-150">LinkedIn</a>
            <a href="mailto:jbutler0523@icloud.com" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors duration-150">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
