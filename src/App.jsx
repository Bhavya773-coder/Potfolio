import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Cirtificates from './components/Cirtificates';
import ContactMe from './components/ContectMe';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Navbar />
      
      {/* Hero Section - Full screen with better spacing */}
      <section className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
              Hi, I'm Bhavya
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[#8892b0] text-xl sm:text-2xl md:text-3xl max-w-3xl mb-12">
            AI/ML Developer | Creating innovative Real Life solutions
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white text-lg md:text-xl hover:opacity-90 transition-all duration-300 hover:scale-105" onClick={() => 
            {window.location.href = "#Projects" ;behavior: 'smooth'}
            }>
              View Projects
            </button>
            <button className="px-8 py-4 rounded-full text-white text-lg md:text-xl border border-[#8892b0]/30 hover:border-[#A495FD]/50 transition-all duration-300 hover:scale-105" onClick={() =>{window.location.href = "#Contact" ;behavior: 'smooth'}}>
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 md:mt-32">
            <div className="w-6 h-10 border-2 border-[#8892b0]/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#8892b0]/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="About Me" className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <AboutMe />
        </div>
        <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#A495FD]/30 to-transparent"></div>
        </div>
      </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-[#8892b0] text-xl max-w-2xl mb-16">
            Here are some of my recent works that showcase my skills and experience
          </p>
          
          <Projects />
        </div>
      </section>


      {/* Experience Section */}
      <section id="Experience" className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
            Experience
          </h2>
          {/* Add your experience content here */}
          <Experience/>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="Cirtificates" className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
            Certificates
          </h2>
          {/* Add your certificates content here */}
          <Cirtificates/>
        </div>
      </section>
      {/* Contact Section */}
      <section id="Contact" className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
  <div className="max-w-[1400px] mx-auto">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
      Get In Touch
    </h2>
    <p className="text-[#8892b0] text-xl max-w-2xl mb-16">
      Have a question or want to work together? Feel free to reach out!
    </p>
    
    <ContactMe />
  </div>
</section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-[#8892b0]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-[#8892b0] text-center">
            <p>© 2024 Bhavya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;