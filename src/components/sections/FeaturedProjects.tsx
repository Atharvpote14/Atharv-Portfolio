'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'
import { projects } from '@/data/projects'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.githubUrl}
                      className="flex-1"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        className="flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" href="/projects">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
