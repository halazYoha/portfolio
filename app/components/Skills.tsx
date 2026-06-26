'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 95, icon: Code2, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', level: 90, icon: Layout, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 92, icon: Code2, color: 'from-yellow-500 to-orange-500' },
  { name: 'React', level: 88, icon: Code2, color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', level: 85, icon: Code2, color: 'from-gray-900 to-gray-700' },
  { name: 'Node.js', level: 82, icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'Express', level: 80, icon: Server, color: 'from-gray-700 to-gray-600' },
  { name: 'MongoDB', level: 78, icon: Database, color: 'from-green-600 to-green-800' },
  { name: 'PostgreSQL', level: 75, icon: Database, color: 'from-blue-600 to-blue-800' },
  { name: 'Flutter', level: 85, icon: Smartphone, color: 'from-cyan-400 to-blue-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
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
              My Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.6 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{skill.level}%</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
