import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { SectionHeading } from './Education'
import { FaGithub } from 'react-icons/fa6'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
      <SectionHeading eyebrow="Selected Work" title="Projects" />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-panel border border-line rounded-2xl overflow-hidden hover:border-signal/50 transition-colors"
          >
            <div className="overflow-hidden grid-fade">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display italic font-semibold text-lg text-fog mb-2">
                {project.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-signal/10 text-signal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a target='_blank' href={project.live} className="flex items-center gap-1.5 text-sm text-fog hover:text-signal transition-colors">
                  <ExternalLink size={16} /> Live
                </a>
                <a target='_blank' href={project.github} className="flex items-center gap-1.5 text-sm text-fog hover:text-signal transition-colors">
                  <FaGithub size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}