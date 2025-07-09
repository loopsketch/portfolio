'use client'

import { motion } from 'framer-motion'

interface WorkCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  index: number
}

export default function WorkCard({ 
  title, 
  description, 
  technologies, 
  image, 
  link, 
  index 
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-600 text-sm">Project Image</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          詳細を見る
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}