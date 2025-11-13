import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';
import pfp from '../assets/image.jpg';

const navLinks = [
  { name: 'About Me', href: '#AboutMe' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Study', href: '#Experience' },
  { name: 'Certificates', href: '#Certificates' },
  { name: 'Contact', href: '#Contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com/Bhavya773-coder' },
  { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/bhavya-mashru-1178862b2/' },
  { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com' },
  { name: 'Discord', icon: <FaDiscord size={20} />, href: 'https://discord.com' },
];

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

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#top" className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={pfp} alt="Bhavya avatar" />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Bhavya
                </span>
              </a>
            </div>

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

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 h-screen w-[300px] bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
            >
              <HiX size={28} />
            </button>
          </div>

          <div className="px-6 py-4 space-y-8">
            <div className="space-y-4">
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

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Connect</p>
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
      <div className="h-20" />
    </>
  );
};

export default Navbar;
