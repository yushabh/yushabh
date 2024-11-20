import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yush2428',
      icon: FaGithub,
      bgColor: 'bg-[#6e40c9]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yushabhdhande',
      icon: FaLinkedinIn,
      bgColor: 'bg-[#0A66C2]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yush.d_2428',
      icon: FaInstagram,
      bgColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/yushabhvd',
      icon: FaFacebookF,
      bgColor: 'bg-[#1877f2]'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/yushabh3',
      icon: FaTwitter,
      bgColor: 'bg-[#1DA1F2]'
    },
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
            {currentYear} Yushabh Dhande. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 ${link.bgColor} rounded-lg flex items-center justify-center text-white`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
