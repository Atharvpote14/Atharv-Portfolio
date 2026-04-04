'use client'

import { useState, useMemo } from 'react'
import Layout from '@/components/Layout'
import { projects, categories } from '@/data/projects'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code, Filter, Search, X, ChevronDown } from 'lucide-react'

// Get all unique tech stacks from projects
const allTechStacks = [...new Set(projects.flatMap(p => p.techStack))].sort()

// Sort options
const sortOptions = [
  { value: 'featured', label: 'Featured First' },
  { value: 'newest', label: 'Newest First' },
  { value: 'name', label: 'Name A-Z' },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = useMemo(() => {
    let result = projects

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(project => project.category === selectedCategory)
    }

    // Filter by tech stack
    if (selectedTech.length > 0) {
      result = result.filter(project =>
        selectedTech.every(tech => project.techStack.includes(tech))
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some(tech => tech.toLowerCase().includes(query))
      )
    }

    // Sort projects
    switch (sortBy) {
      case 'featured':
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case 'newest':
        result = [...result].sort((a, b) => parseInt(b.id) - parseInt(a.id))
        break
      case 'name':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return result
  }, [selectedCategory, selectedTech, searchQuery, sortBy])

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategory('All')
    setSelectedTech([])
    setSearchQuery('')
    setSortBy('featured')
  }

  const hasActiveFilters = selectedCategory !== 'All' || selectedTech.length > 0 || searchQuery.trim() !== ''

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore my portfolio of web applications, showcasing various technologies, 
              design patterns, and problem-solving approaches.
            </p>
          </motion.div>

          {/* Enhanced Filter Section */}
          <motion.div
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Search and Sort Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Toggle Filters Button */}
              <Button
                variant={showFilters ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-1 px-2 py-0.5 bg-primary-500 text-white text-xs rounded-full">
                    {selectedTech.length + (selectedCategory !== 'All' ? 1 : 0)}
                  </span>
                )}
              </Button>
            </div>

            {/* Expandable Filter Section */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 space-y-6">
                    {/* Category Filter */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Category
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              selectedCategory === category.value
                                ? 'bg-primary-500 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Filter */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Tech Stack {selectedTech.length > 0 && `(${selectedTech.length} selected)`}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {allTechStacks.map((tech) => (
                          <button
                            key={tech}
                            onClick={() => toggleTech(tech)}
                            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                              selectedTech.includes(tech)
                                ? 'bg-secondary-500 text-white shadow-md'
                                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Clear All */}
                    {hasActiveFilters && (
                      <div className="flex justify-end pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button
                          onClick={clearAllFilters}
                          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          Clear all filters
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filters Pills */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 items-center"
              >
                <span className="text-sm text-gray-500">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                    {categories.find(c => c.value === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('All')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedTech.map(tech => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 text-sm rounded-full"
                  >
                    {tech}
                    <button onClick={() => toggleTech(tech)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery('')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </motion.div>
            )}

            {/* Results Count */}
            <p className="text-sm text-gray-500">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-md transition-colors ${
                              selectedTech.includes(tech)
                                ? 'bg-secondary-500/20 text-secondary-400 ring-1 ring-secondary-500'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {project.caseStudy && (
                        <p className="text-gray-500 text-xs mb-4 italic">
                          {project.caseStudy}
                        </p>
                      )}
                      
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
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No projects found */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                No projects found matching your criteria.
              </p>
              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                <X className="w-4 h-4 mr-2" />
                Clear all filters
              </Button>
            </motion.div>
          )}

          {/* Project Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Featured Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {[...new Set(projects.flatMap(p => p.techStack))].length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Technologies Used</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
