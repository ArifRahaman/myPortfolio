import React from 'react';
import reactIcon from '../assets/icons/react.svg';       
import nodeIcon from '../assets/icons/node-js.svg';         
import javaIcon from '../assets/icons/java.png';          
import jsIcon from '../assets/icons/java-script.png';      
import mongoIcon from '../assets/icons/mongodb.svg';      
import postmanIcon from '../assets/icons/postman.svg';    
import sqlIcon from '../assets/icons/mysql.svg';            
import vscodeIcon from '../assets/icons/vscode.png';      
import socketIcon from '../assets/icons/socket.svg';    
import GitIcon from '../assets/icons/Git.png';   
import GithubIcon from '../assets/icons/github.svg';     
import HtmlIcon from "../assets/icons/Html.png";   
import css from "../assets/icons/css.svg" 
import Api from "../assets/icons/Api.png"; 
const Skills = () => {
  return (
    <section className=" text-center py-12  bg-gradient-to-r from-green-100 via-gray-100 to-yellow-100" id="skills">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center space-x-6 text-gray-700 max-w-screen-lg mx-auto">
        {/* First Line */}
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={reactIcon} alt="React" className="h-12 w-12 mr-4" />
          React
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={nodeIcon} alt="Node.js" className="h-12 w-12 mr-4" />
          Node.js
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={javaIcon} alt="Java" className="h-12 w-12 mr-4" />
          Java
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={jsIcon} alt="JavaScript" className="h-12 w-12 mr-4" />
          JavaScript
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={mongoIcon} alt="MongoDB" className="h-12 w-12 mr-4" />
          MongoDB
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={css} alt="MongoDB" className="h-12 w-12 mr-4" />
          Css
        </div>
        
        {/* Second Line */}
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={postmanIcon} alt="Postman" className="h-12 w-12 mr-4" />
          Postman
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={Api} alt="Postman" className="h-12 w-12 mr-4" />
        API
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={HtmlIcon} alt="Postman" className="h-12 w-12 mr-4" />
          HTML
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={GitIcon} alt="Postman" className="h-12 w-12 mr-4" />
          Git
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={socketIcon} alt="Socket.IO" className="h-12 w-12 mr-4" />
          Socket.IO
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={GithubIcon} alt="Socket.IO" className="h-12 w-12 mr-4" />
          Github
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={vscodeIcon} alt="VS Code" className="h-12 w-12 mr-4" />
          VS Code
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex items-center m-2">
          <img src={sqlIcon} alt="MySQL" className="h-12 w-12 mr-4" />
          MySQL
        </div>
      </div>
    </section>
  );
};

export default Skills;
