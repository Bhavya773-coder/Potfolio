import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com",
      image: "/project1.jpg" // Add your project image path
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization. Integrates with multiple social platforms and provides detailed insights and metrics.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://your-dashboard.com",
      image: "/project2.jpg"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses. Features include message translation, sentiment analysis, and voice messages.",
      technologies: ["React", "Python", "Socket.io", "TensorFlow", "WebRTC"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://your-chat-app.com",
      image: "/project3.jpg"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#5BA4FC]/20 via-[#A495FD]/20 to-[#E975FF]/20 z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
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
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={22} />
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