import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin,FaTwitter, FaDiscord, FaPaperPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Bhavya773-coder',
      username: 'Bhavya773-coder'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/bhavya-mashru-1178862b2/',
      username: 'Bhavya Mashru'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={24} />,
      url: 'https://twitter.com/yourusername',
      username: '@_Bhavya_77'
    },
    {
      name: 'Discord',
      icon: <FaDiscord size={24} />,
      url: 'https://discord.com/users/yourid',
      username: 'bhavyaop_'
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20 hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#A495FD]/10 rounded-lg">
              <FaEnvelope className="text-[#A495FD]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold">Email</h3>
              <a href="mailto:your.email@example.com" className="text-[#8892b0] hover:text-[#A495FD] transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20 hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#A495FD]/10 rounded-lg">
              <FaPhone className="text-[#A495FD]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold">Phone</h3>
              <a href="tel:+1234567890" className="text-[#8892b0] hover:text-[#A495FD] transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20 hover:transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#A495FD]/10 rounded-lg">
              <FaMapMarkerAlt className="text-[#A495FD]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold">Location</h3>
              <p className="text-[#8892b0]">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Social Links */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1A1F35] text-white rounded-lg px-4 py-3 border border-[#8892b0]/20 focus:border-[#A495FD] outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1A1F35] text-white rounded-lg px-4 py-3 border border-[#8892b0]/20 focus:border-[#A495FD] outline-none transition-colors"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#1A1F35] text-white rounded-lg px-4 py-3 border border-[#8892b0]/20 focus:border-[#A495FD] outline-none transition-colors"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full bg-[#1A1F35] text-white rounded-lg px-4 py-3 border border-[#8892b0]/20 focus:border-[#A495FD] outline-none transition-colors resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <FaPaperPlane size={16} />
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="lg:col-span-2 bg-[#112240] rounded-xl p-6 border border-[#8892b0]/20">
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1A1F35] rounded-lg hover:bg-[#A495FD]/10 transition-colors group"
              >
                <div className="p-3 bg-[#A495FD]/10 rounded-lg group-hover:bg-[#A495FD]/20 transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold">{social.name}</h4>
                  <p className="text-[#8892b0]">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;