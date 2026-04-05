'use client'

import { motion } from 'framer-motion'
import { Code2, Trophy, Star, GitCommit, GitPullRequest } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/SocialIcons'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const githubStats = [
  { icon: GitCommit, label: 'Total Commits', value: '500+' },
  { icon: Star, label: 'GitHub Stars', value: '25+' },
  { icon: GitPullRequest, label: 'Pull Requests', value: '30+' },
  { icon: Code2, label: 'Repositories', value: '20+' },
]

const codingProfiles = [
  { name: 'LeetCode', stats: '500+ Problems', color: 'bg-yellow-500' },
  { name: 'Codeforces', stats: 'Expert (1600+)', color: 'bg-blue-500' },
  { name: 'HackerRank', stats: '5★ Coder', color: 'bg-green-500' },
]

export default function ProofOfWork() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proof of Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Metrics and achievements that demonstrate my commitment to consistent coding and problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GitHubIcon className="w-6 h-6 mr-2" />
                  GitHub Activity
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {githubStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  href="https://github.com/Atharvpote14"
                  className="w-full"
                >
                  <GitHubIcon className="mr-2 w-4 h-4" />
                  View GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                  Coding Profiles
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {codingProfiles.map((profile, index) => (
                    <motion.div
                      key={profile.name}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-gray-800"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${profile.color}`} />
                        <span className="font-semibold text-gray-900 dark:text-white">{profile.name}</span>
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">{profile.stats}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    <span className="font-semibold text-primary-600 dark:text-primary-400">500+ DSA Problems Solved</span>
                    <br />
                    Consistent practice in algorithms, data structures, and problem-solving patterns
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications & Achievements
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Responsive Web Design</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">freeCodeCamp</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold text-gray-900 dark:text-white">JavaScript Algorithms</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">freeCodeCamp</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Frontend Libraries</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">freeCodeCamp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
