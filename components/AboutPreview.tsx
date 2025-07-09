'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Python', category: 'Language' },
  { name: 'PHP', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'LLM', category: 'AI' },
  { name: 'Image Processing', category: 'AI' },
]

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            エンジニアとして、美しいユーザー体験と堅牢な技術の融合を追求しています。
            フロントエンドからバックエンド、インフラまで幅広い技術スタックで
            プロダクト開発に携わっています。
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            常に新しい技術にチャレンジし、ユーザーに価値を提供することを
            心がけています。
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {['Language', 'Infrastructure', 'AI'].map((category) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-md text-white text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}