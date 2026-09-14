import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatIBuild from './components/WhatIBuild';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import HowIBuild from './components/HowIBuild';
import AITransparency from './components/AITransparency';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import RecruiterCTA from './components/RecruiterCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Nav />
      <main>
        <Hero />
        <WhatIBuild />
        <Experience />
        <Projects />
        <Resume />
        <HowIBuild />
        <AITransparency />
        <Skills />
        <CurrentlyLearning />
        <About />
        <RecruiterCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
