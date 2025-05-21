import React, { useState, useEffect } from 'react';
import discordImage from '../assets/discord.png';
import wagonImage from '../assets/8.webp';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "Discord Colne",
      description: "A fully Functional Clone of Discord with Realtime Chat and Voice Channels using Websockets and WebRTC.",
      technologies: [ "Node.js", "MongoDB", "Express", "Tailwind CSS","Websockets","WebRTC"],
      github: "https://github.com/Bhavya773-coder/DiscordClone",
      live: "https://your-ecommerce.com",
      image: discordImage // Add your project image path
    },
    {
      title: "Car Runner Game",
      description: "A 3D Car Racing Game with Multiplayer Support and Realtime Leaderboard using Unity and Blender.",
      technologies: ["Unity", "C#", "Blender"],
      github: "https://github.com/Bhavya773-coder/Car-Runner",
      live: "https://your-dashboard.com",
      image: wagonImage
    },
    {
      title: "AI Wegon Detection",
      description: "A Realtime Object Detection System for Wegons using Own Models and OpenCV,Pytorch.",
      technologies: ["Python", "Training Models", "OpenCV","Pytorch","Deep Learning","CNN"],
      github: "https://github.com/Bhavya773-coder/Minded-JK-Lakshmi-Wegon-Detection",
      live: "https://your-chat-app.com",
      image: wagonImage
    },
  ];

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#112240] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#8892b0]/20"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-[#112240] animate-pulse" />
              )}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  e.target.src = '/placeholder.png'; // Add a placeholder image
                }}
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-[#8892b0] mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm text-[#A495FD] bg-[#A495FD]/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-16">
        <a 
          href="https://github.com/Bhavya773-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          <FaGithub size={20} />
          <span>View More on GitHub</span>
        </a>
      </div>
    </>
  );
};

export default Projects;