import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';

const AboutMeSection = lazy(() => import('./components/AboutMe'));
const ProjectsSection = lazy(() => import('./components/Projects'));
const ExperienceSection = lazy(() => import('./components/Experience'));
const CertificatesSection = lazy(() => import('./components/Certificates'));
const ContactMeSection = lazy(() => import('./components/ContactMe'));

const LoadingFallback = () => (
  <div className="py-20 flex items-center justify-center text-white/80 text-lg">
    Loading...
  </div>
);

const SectionDivider = () => (
  <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
    <div className="max-w-[1400px] mx-auto">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#A495FD]/30 to-transparent" />
    </div>
  </div>
);

const scrollToSection = (selector) => {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0a192f] text-white">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto w-full space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
                  Hi, I'm Bhavya
                </span>
              </h1>

              <p className="text-[#8892b0] text-xl sm:text-2xl md:text-3xl max-w-3xl">
                AI/ML Developer focused on building intelligent products and immersive experiences.
              </p>

              <div className="flex flex-wrap gap-6">
                <button
                  type="button"
                  onClick={() => scrollToSection('#Projects')}
                  className="px-8 py-4 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] rounded-full text-white text-lg md:text-xl hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('#Contact')}
                  className="px-8 py-4 rounded-full text-white text-lg md:text-xl border border-[#8892b0]/40 hover:border-[#A495FD]/60 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </button>
              </div>

              <div className="pt-12 md:pt-20">
                <div className="w-6 h-10 border-2 border-[#8892b0]/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-[#8892b0]/60 rounded-full mt-2 animate-bounce" />
                </div>
              </div>
            </div>
          </section>

          <SectionDivider />

          {/* About Me Section */}
          <section id="AboutMe" className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
              <Suspense fallback={<LoadingFallback />}>
                <AboutMeSection />
              </Suspense>
            </div>
          </section>

          <SectionDivider />

          {/* Projects Section */}
          <section id="Projects" className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-[#8892b0] text-xl max-w-2xl mb-16">
                Highlights from recent work showcasing my end-to-end development skills.
              </p>
              <Suspense fallback={<LoadingFallback />}>
                <ProjectsSection />
              </Suspense>
            </div>
          </section>

          <SectionDivider />

          {/* Experience Section */}
          <section id="Experience" className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
                Study
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <ExperienceSection />
              </Suspense>
            </div>
          </section>

          <SectionDivider />

          {/* Certificates Section */}
          <section id="Certificates" className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
                Certificates
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <CertificatesSection />
              </Suspense>
            </div>
          </section>

          <SectionDivider />

          {/* Contact Section */}
          <section id="Contact" className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5BA4FC] via-[#A495FD] to-[#E975FF] text-transparent bg-clip-text">
                Get In Touch
              </h2>
              <p className="text-[#8892b0] text-xl max-w-2xl mb-16">
                Have a question or want to collaborate? Reach out and let’s build something great.
              </p>
              <Suspense fallback={<LoadingFallback />}>
                <ContactMeSection />
              </Suspense>
            </div>
          </section>
        </main>

        <footer className="w-full py-8 border-t border-[#8892b0]/15">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-center text-[#8892b0]">
            © {new Date().getFullYear()} Bhavya. All rights reserved.
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;