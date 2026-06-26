'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Target, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with Next.js and React',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Creating cross-platform mobile applications with Flutter',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Full Stack',
      description: 'End-to-end development from frontend to backend with Node.js and databases',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and user experience',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer specializing in creating beautiful, functional, and user-friendly digital experiences. With expertise in both web and mobile development, I bring ideas to life using cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg opacity-90 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need a website, mobile app, or full-stack solution, I'm here to help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
