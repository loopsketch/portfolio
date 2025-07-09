'use client'

import { motion } from 'framer-motion'
import TypeWriter from './TypeWriter'
import ScrollIndicator from './ScrollIndicator'

const roles = [
  'AI/LLM Engineering',
  'Software Development',
  'Image Processing',
  'Video Production'
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              LOOPSKETCH
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 tracking-widest">
            software works
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300"
        >
          <TypeWriter words={roles} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="/about"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="/works"
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
          >
            View Works
          </a>
        </motion.div>
      </div>
      
      <ScrollIndicator />
    </section>
  )
}