'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Edu-Pulse',
    description: 'A comprehensive school system management platform with four roles: admin, parent, student, and teacher. Streamlines school operations efficiently.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://edu-pulse-opal.vercel.app/',
    github: 'https://github.com/halazYoha/edu-pulse.git',
    image: '/school.jpg',
  },
  {
    title: 'Aero-Drive',
    description: 'A car selling management system designed to efficiently handle car inventory, sales, and customer interactions.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    link: 'https://aero-drive.vercel.app/',
    github: 'https://github.com/halazYoha/aero-drive.git',
    image: '/car.jpg',
  },
  {
    title: 'Kids Learn English',
    description: 'Interactive Flutter application for children education with engaging animations and gamified learning experience to teach English.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Animations'],
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
    link: '#',
    github: 'https://github.com/halazYoha/kids-learn-app.git',
    image: '/kid.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web and mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Code size={18} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
