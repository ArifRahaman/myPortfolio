import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import codeforces from '../assets/icons/codeforces.svg';       
import me from '../assets/icons/wh.jpeg';    
import { ReactTyped } from "react-typed";
import resume from '../assets/icons/ArifRahamanresume.pdf'; // Add the path to your resume

const About = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-black via-black to-gray-700 min-h-screen" id="about">
      <h2 className="text-5xl font-bold mb-10 text-center text-white py-4 rounded-lg shadow-lg">About Me</h2>
      
      <div className="flex flex-col lg:flex-row items-center justify-center mx-12 lg:mx-48">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <p className="text-white text-3xl lg:text-3xl leading-relaxed">
            <ReactTyped
              strings={[
                "<strong>Hi I am Arif Rahaman</strong>, a developer with a passion for creating awesome projects! I am a B.Tech/BE student at Jadavpur University, Kolkata, specializing in Information Technology."
              ]}
              typeSpeed={22}
              backSpeed={5}
              loop
            />
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
        <img
            src={me}
            alt="Your profile"
            className="w-59 h-64 lg:w-66 lg:h-80 rounded-full shadow-lg animate-border-glow"
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold mt-12 mb-4 text-center text-white">Profiles</h2>
      <p className="text-gray-300 text-center mb-6">You can find me on:</p>

      <div className="flex justify-center space-x-8">
        <a href="https://github.com/Arifrahaman" className="text-blue-500 text-4xl hover:text-white transition-colors duration-200 ease-in-out" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/arif-rahaman-01b884255/" className="text-blue-500 text-4xl hover:text-white transition-colors duration-200 ease-in-out" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/arifrahaman" className="text-yellow-500 text-4xl hover:text-white transition-colors duration-200 ease-in-out" aria-label="LeetCode">
          <SiLeetcode />
        </a>
        <a href="https://www.geeksforgeeks.org/user/arifraham2t6/" className="text-green-500 text-4xl hover:text-white transition-colors duration-200 ease-in-out" aria-label="GeeksforGeeks">
          <SiGeeksforgeeks />
        </a>
      </div>

      {/* Download Resume Section */}
      <div className="mt-10 flex justify-center">
        <a
          href={resume}
          download="Arif_Rahaman_Resume.pdf"
          className="bg-red-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition-colors duration-200 ease-in-out"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
