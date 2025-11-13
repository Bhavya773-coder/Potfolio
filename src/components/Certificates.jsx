import React from 'react';
import {
  FaExternalLinkAlt,
  FaAward,
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaCheckCircle,
  FaGamepad
} from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "February 2024",
      credentialId: "NPTEL-PDS-2024",
      image: "/cert_nptel_python.jpg", // Replace with actual image path
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS68S14510005302615516", // Replace with actual certificate link
      skills: ["Python", "Data Analysis", "Visualization", "Machine Learning"],
      icon: <FaMedal className="text-yellow-400" size={24} />
    },
    {
      title: "MINeD 2025",
      issuer: "United Latino Students Association",
      date: "April 2025",
      credentialId: "ULSA-MINeD-2025",
      image: "/cert_mined.jpg",
      link: "https://certificate.givemycertificate.com/c/1eadb95e-24a8-43d4-82eb-7a788202b809",
      skills: ["Leadership", "Education", "Community Engagement"],
      icon: <FaAward className="text-yellow-400" size={24} />
    },
    {
      title: "2D RPG Game Development",
      issuer: "Udemy",
      date: "March 2025",
      credentialId: "GDFI-2025-GAME",
      image: "/cert_gamedev.jpg", // Replace with actual image path
      link: "https://www.udemy.com/certificate/UC-64d0e3ff-7e19-41d2-872e-cc2381608086/", // Replace with actual certificate link
      skills: ["Unity", "C#", "Game Design", "3D Modeling"],
      icon: <FaGamepad className="text-yellow-400" size={24} />
    }
  ];

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
      {/* <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <FaTrophy className="text-yellow-400" size={24} />
          Additional Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-[#8892b0] bg-[#A495FD]/5 p-3 rounded-lg"
            >
              <FaCheckCircle className="text-[#A495FD]" size={16} />
              {achievement}
            </div>
          ))}
        </div>
      </div> */}

      {/* Verification Note */}
      <div className="text-center text-[#8892b0]">
        <p>All certificates can be verified through their respective platforms using the credential IDs</p>
      </div>
    </div>
  );
};

export default Certificates;
