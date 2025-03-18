import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';
import pfp from '../assets/Image.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#About Me' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Cirtificates', href: '#Cirtificates' },
    { name: 'Contact', href: '#Contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com/Bhavya773-coder' },
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/bhavya-mashru-1178862b2/' },
    { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com' },
    { name: 'Discord', icon: <FaDiscord size={20} />, href: 'https://discord.com' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
              <img className="w-12 h-12 rounded-full" src={pfp} alt="Rounded avatar" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                &nbsp; Bhavya
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Social & CTA */}
            <div className="hidden md:flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 h-screen w-[300px] bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
            >
              <HiX size={28} />
            </button>
          </div>

          <div className="px-6 py-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white py-2 text-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

           
            {/* Mobile Social Links */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
                Connect With Us
              </p>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center p-2 rounded-lg hover:bg-white/5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;