import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6 py-7 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Joseph Butler · Designed &amp; built by me
          </span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Jbutler23-ai" target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-150">GitHub</a>
            <a href="https://www.linkedin.com/in/joseph-butler-5357b1406" target="_blank" rel="noreferrer" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-150">LinkedIn</a>
            <a href="mailto:jbutler0523@icloud.com" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-150">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
