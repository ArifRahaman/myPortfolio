import React, { useState } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 fixed w-full z-10 shadow-lg" id="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white text-2xl hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white  text-2xl hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-white text-2xl hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white text-2xl hover:text-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-md mt-2 rounded-lg py-2">
          <button
            onClick={() => {
              scrollToSection('about');
              toggleMenu();
            }}
            className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition duration-300 rounded-lg"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection('projects');
              toggleMenu();
            }}
            className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition duration-300 rounded-lg"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection('skills');
              toggleMenu();
            }}
            className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition duration-300 rounded-lg"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection('contact');
              toggleMenu();
            }}
            className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-gray-900 transition duration-300 rounded-lg"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
