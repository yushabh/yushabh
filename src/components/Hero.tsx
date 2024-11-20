import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '/icons/facebook.svg', url: '#' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: '#' },
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: '#' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary font-medium mb-4 block"
            >
              WELCOME TO MY WORLD
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="text-primary">John Doe</span>
              <br />
              <span className="text-text-light">
                a Creative Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-light text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-card-gradient hover:bg-hover text-white px-8 py-4 rounded-lg shadow-button hover:text-primary transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                View My Works
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Hire Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h6 className="text-text-light mb-4">Find me on</h6>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="bg-card-gradient p-4 rounded-lg shadow-button hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="w-5 h-5"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="bg-card-gradient rounded-3xl p-6 shadow-card overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Background Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
