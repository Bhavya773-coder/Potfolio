import React from 'react';
import { FaExternalLinkAlt, FaAward, FaMedal, FaTrophy, FaCertificate, FaCheckCircle } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2023",
      credentialId: "UC-12345678",
      image: "/cert1.jpg", // Add your certificate image
      link: "https://udemy.com/certificate/...",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      icon: <FaMedal className="text-yellow-400" size={24} />
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "November 2023",
      credentialId: "FCC-789012",
      image: "/cert2.jpg",
      link: "https://freecodecamp.org/certification/...",
      skills: ["JavaScript", "DSA", "Problem Solving"],
      icon: <FaTrophy className="text-yellow-400" size={24} />
    },
    {
      title: "React Native Mobile Development",
      issuer: "Coursera",
      date: "October 2023",
      credentialId: "COURSERA-345678",
      image: "/cert3.jpg",
      link: "https://coursera.org/verify/...",
      skills: ["React Native", "Mobile Development", "iOS", "Android"],
      icon: <FaAward className="text-yellow-400" size={24} />
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2023",
      credentialId: "AWS-901234",
      image: "/cert4.jpg",
      link: "https://aws.amazon.com/verify/...",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      icon: <FaCertificate className="text-yellow-400" size={24} />
    }
  ];

  // Rest of your component code remains the same...
  return (
    <div className="space-y-12">
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            className="bg-[#112240] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#8892b0]/20"
          >
            {/* Certificate Header */}
            <div className="p-6 border-b border-[#8892b0]/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#A495FD]/10 rounded-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-[#A495FD]">{cert.issuer}</p>
                  </div>
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-white transition-colors p-2"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-sm text-[#8892b0]">
                <span>Issued: {cert.date}</span>
                <span>ID: {cert.credentialId}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm text-[#A495FD] bg-[#A495FD]/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Achievements */}
      <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <FaTrophy className="text-yellow-400" size={24} />
          Additional Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Hackathon Participant - TechFest 2023",
            "Coding Competition Finalist",
            "Open Source Contributor",
            "Web Development Workshop Leader",
            "Technical Blog Writer",
            "Community Mentor"
          ].map((achievement, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-[#8892b0] bg-[#A495FD]/5 p-3 rounded-lg"
            >
              <FaCheckCircle className="text-[#A495FD]" size={16} />
              {achievement}
            </div>
          ))}
        </div>
      </div>

      {/* Verification Note */}
      <div className="text-center text-[#8892b0]">
        <p>All certificates can be verified through their respective platforms using the credential IDs</p>
      </div>
    </div>
  );
};

export default Certificates;