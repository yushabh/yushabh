import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
}

const Resume: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      period: "2018 - 2022",
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      description: "Studied computer science with a focus on software engineering and web development. Graduated with honors."
    },
    {
      id: 2,
      period: "2016 - 2018",
      degree: "Associate Degree in Web Design",
      institution: "Design Institute",
      description: "Learned fundamentals of web design, UI/UX principles, and digital media production."
    }
  ];

  const experience: Experience[] = [
    {
      id: 1,
      period: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development team, implementing modern web applications using React and TypeScript."
    },
    {
      id: 2,
      period: "2020 - 2022",
      role: "Web Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and web applications for various clients using modern technologies."
    },
    {
      id: 3,
      period: "2019 - 2020",
      role: "Junior Developer",
      company: "Startup Hub",
      description: "Worked on frontend development tasks and collaborated with the design team on UI implementation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="section bg-secondary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-lg font-medium mb-4">YEARS OF EXPERIENCE</h2>
          <h3 className="text-4xl font-bold text-white mb-6">My Resume</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-8">Education</h4>
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="bg-card-gradient p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-primary text-sm font-medium">{edu.period}</span>
                  <h5 className="text-white text-xl font-bold mt-2">{edu.degree}</h5>
                  <p className="text-text-light mt-1">{edu.institution}</p>
                  <p className="text-text-dark mt-4">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-white mb-8">Experience</h4>
            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="bg-card-gradient p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h5 className="text-white text-xl font-bold mt-2">{exp.role}</h5>
                  <p className="text-text-light mt-1">{exp.company}</p>
                  <p className="text-text-dark mt-4">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-colors duration-300"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
