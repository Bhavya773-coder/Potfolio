import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaCode } from 'react-icons/fa';
import resume from '../assets/potfolio-resume.png';

const Experience = () => {
  const experiences = [
    {
      title: "Diploma in Computer Science",
      company: "Kalyan Polytechnic.",
      duration: "3 Years",
      period: "Jun 2020 - Aug 2023",
      description: [
        "Developed 3d Car Runner Project using Unity and Blender",
        "Collaborated with frontend and created a iot bluetooth car project",
        "Gained hands-on experience with Git version control system"
      ],
      technologies: ["Android", "Java", "SQL", "PHP", "HTML", "CSS"]
    },
    {
      title: "BTech in Computer Science",
      company: "Darshan University",
      duration: "3 Years",
      period: "Jan 2023 - Jun 2026",
      description: [
        "Completed Discord Clone Project using Next.Js and MongoDB",
        "Built 5+ AIML projects using Python ",
        "Learned modern web development technologies and best practices"
      ],
      technologies: ["ML", "AI", "Python","Tensorflow","Keras","OpenCV","CNN"]
    }
  ];

  const relevantCourses = [
    "Data Science with Python",
    "Web Development",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Python Programming",
    "Iot Development"
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Bhavya_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <h4 className="text-[#A495FD] mb-2">Machine Lernining and Data Science</h4>
            <div className="flex flex-wrap gap-2">
              {["Classification","Clustering","Hyper Parameter Tuning","Data Cleaning","Feature Engineering"].map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm text-[#8892b0] bg-[#A495FD]/10 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#A495FD] mb-2">Deep Lerning</h4>
            <div className="flex flex-wrap gap-2">
              {["CNN","RNN","TenserFlow","Keras","PyTorch"].map((skill, index) => (
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
          <h3 className="text-xl font-bold text-white">Most Preffered Techs</h3>
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
        <button 
          onClick={handleResumeDownload}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          <FaCertificate size={20} />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
};

export default Experience;