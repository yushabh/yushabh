import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const categories = ['All', 'Development', 'Design', 'Mobile App'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Development",
      image: "/portfolio/project1.jpg",
      link: "#",
      description: "Modern e-commerce solution with React and Node.js"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/portfolio/project2.jpg",
      link: "#",
      description: "Secure and user-friendly banking application"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Design",
      image: "/portfolio/project3.jpg",
      link: "#",
      description: "Creative portfolio design for photographers"
    },
    {
      id: 4,
      title: "Task Management",
      category: "Development",
      image: "/portfolio/project4.jpg",
      link: "#",
      description: "Collaborative task management platform"
    },
    {
      id: 5,
      title: "Travel App UI",
      category: "Design",
      image: "/portfolio/project5.jpg",
      link: "#",
      description: "Beautiful travel application interface"
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "/portfolio/project6.jpg",
      link: "#",
      description: "Restaurant food delivery application"
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-4">VISIT MY PORTFOLIO</h2>
          <h3 className="text-4xl font-bold text-white mb-6">My Projects</h3>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-card-gradient text-text-light hover:text-primary shadow-card'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card-gradient rounded-lg overflow-hidden shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-4">
                      <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-white text-sm mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        className="inline-block px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-text-light">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
