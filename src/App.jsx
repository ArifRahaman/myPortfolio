import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Education from './components/Education';
const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar scrollToSection={scrollToSection} />
      <div className="pt-16"> {/* Compensate for fixed navbar */}
        <About />
        <Education/>
        <Projects />
        <Skills />
        {/* <Profiles /> */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
