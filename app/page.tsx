import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© 2024 Portfolio. Built with Next.js and Framer Motion</p>
      </footer>
    </div>
  );
}
