import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import img from "../assets/icons/Upload.png"
import Doco from "../assets/icons/DOCO.png"
import snake from "../assets/icons/Snake.png"

const Projects = () => {
  const projectData = [
    {
      title: 'PDF and POST Management',
      description: 'This project is a comprehensive platform designed to enhance user interaction and content management. Users can seamlessly manage their PDF documents by easily naming, deleting, and reading files. The platform also allows users to create rich posts, incorporating text, images, and PDF attachments, fostering engagement through likes and comments. Additionally, a user-friendly dashboard enables account customization and profile image uploads, contributing to a 30% increase in user satisfaction.',
      image: img,
      frontendLink: 'https://frontend-pdfchat-2.onrender.com/', 
      backendLink: 'https://backend-pdfchatarif.onrender.com/',   
      githubLink: 'https://github.com/ArifRahaman/frontend_pdfchat'    
    },
    {
      title: 'HealthCare-DOCO',
      description: 'This project focuses on improving patient-doctor communication through a robust platform that allows users to book appointments, engage in video consultations, and chat with AI for quick support. A user-friendly patient portal facilitates seamless appointment scheduling with preferred physicians, significantly reducing no-show rates by 40% and increasing bookings by 25%. The platform includes separate dashboards tailored to the needs of both patients and doctors, enhancing their user experience. Additionally, it offers a subscription-based plan for patients to access premium membership features, providing added value and convenience.',
      image: Doco,
      frontendLink: 'https://frontendc.onrender.com/',
      backendLink: 'https://backend-uq9j.onrender.com/',
      githubLink: 'https://github.com/ArifRahaman/JU-Srijan-Healthcare-website'
    },
    {
      title: 'The Snake Game',
      description: 'This project is a simple snake game where users control a snake\'s movement within a confined space, trying to avoid collisions with the walls. The game offers various difficulty levels and keeps track of the user\'s current and highest scores, providing a competitive and engaging experience. The JavaScript logic ensures smooth gameplay, making the game both fun and challenging.',
      image: snake,
      frontendLink: 'https://arifrahaman.github.io/The-SNAKE-GAME/',
      // backendLink: 'https://backend-project3.com',
      githubLink: 'https://github.com/ArifRahaman/The-SNAKE-GAME'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-r min-h-svh from-gray-800 via-black to-black " id="projects">
      <h2 className="text-white text-6xl font-bold text-center mb-9  py-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-8 mx-24">
        {projectData.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg border-2 border-gray-300 hover:shadow-2xl transition transform hover:-translate-y-1 animate-border-glow">
            <img src={project.image} alt={project.title} className="mb-4 rounded-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div>
                {/* Conditionally render the frontend link */}
                {project.frontendLink && (
                  <a
                    href={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline block"
                  >
                    Frontend Link
                  </a>
                )}
                {/* Conditionally render the backend link if available */}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline block"
                  >
                    Backend Link
                  </a>
                )}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition"
                aria-label="GitHub Link"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
