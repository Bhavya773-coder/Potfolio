import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaMobile, FaDatabase, FaGithub, FaFigma } from 'react-icons/fa6';
import pfp from '../assets/Image.jpg';

const AboutMe = () => {
  const technologies = [
    { name: "Frontend", icon: <FaLaptopCode size={24} />, skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
    { name: "Backend", icon: <FaServer size={24} />, skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs"] },
    { name: "Mobile", icon: <FaMobile size={24} />, skills: ["React Native", "Flutter", "Android", "iOS"] },
    { name: "Database", icon: <FaDatabase size={24} />, skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { name: "Tools", icon: <FaGithub size={24} />, skills: ["Git", "Docker", "AWS", "Vercel", "Linux"] },
    { name: "Design", icon: <FaFigma size={24} />, skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
  ];

  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Github Repos", value: "100+" },
  ];

  return (
    <section id="About Me" className="py-20 max-h-screen item-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="relative">
  {/* Pulse effect */}
  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse blur-sm opacity-75"></div>
  
  {/* Image container */}
  <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <img 
      src={pfp} 
      alt="Profile" 
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
    />
  </div>
</div>

          {/* Bio */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Bhavya</span>
              </h3>
              <p className="text-xl text-gray-400">Full Stack Developer</p>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions. 
                When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
             
        
      </div>
     
        </div>

     
    </section>
  );
};

export default AboutMe;