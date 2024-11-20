import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      icon: '/icons/facebook.svg'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: '/icons/twitter.svg'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '/icons/linkedin.svg'
    }
  ];

  return (
    <footer className="bg-card-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-text-light mb-4 md:mb-0"
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors duration-300"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
