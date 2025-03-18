import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Tech Solutions Inc.",
      duration: "3 months",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Developed and maintained responsive web applications using React.js and Node.js",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Gained hands-on experience with Git version control and Agile methodologies"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Git"]
    },
    {
      title: "Full Stack Development Training",
      company: "CodeCamp Academy",
      duration: "6 months",
      period: "Jan 2023 - Jun 2023",
      description: [
        "Completed intensive full-stack development bootcamp",
        "Built 5+ full-stack projects from scratch",
        "Learned modern web development technologies and best practices"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
    }
  ];

  const relevantCourses = [
    "Data Structures and Algorithms",
    "Web Development",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Engineering",
    "Cloud Computing"
  ];

  return (
    <div className="space-y-12">
      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-[#112240] rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#8892b0]/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-[#5BA4FC]/20 via-[#A495FD]/20 to-[#E975FF]/20 rounded-lg">
                <FaLaptopCode className="text-[#A495FD] text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-[#A495FD] mb-1">{exp.company}</p>
                <p className="text-[#8892b0] text-sm mb-4">{exp.period} • {exp.duration}</p>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-[#8892b0] flex items-start">
                      <span className="text-[#A495FD] mr-2">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm text-[#A495FD] bg-[#A495FD]/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills */}
      <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
        <div className="flex items-center gap-3 mb-6">
          <FaCode className="text-[#A495FD] text-2xl" />
          <h3 className="text-xl font-bold text-white">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-[#A495FD] mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Redux"].map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm text-[#8892b0] bg-[#A495FD]/10 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#A495FD] mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs", "Git"].map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm text-[#8892b0] bg-[#A495FD]/10 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Relevant Coursework */}
      <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
        <div className="flex items-center gap-3 mb-6">
          <FaGraduationCap className="text-[#A495FD] text-2xl" />
          <h3 className="text-xl font-bold text-white">Relevant Coursework</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relevantCourses.map((course, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-[#8892b0] bg-[#A495FD]/5 p-3 rounded-lg"
            >
              <span className="text-[#A495FD]">◆</span>
              {course}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a 
          href="/resume.pdf" 
          download
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          <FaCertificate size={20} />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Experience;