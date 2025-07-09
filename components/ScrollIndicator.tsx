'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-3 bg-white rounded-full mt-2"
        />
      </div>
      <p className="text-xs mt-2 text-gray-400">Scroll</p>
    </motion.div>
  )
}