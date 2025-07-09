'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'
import WorkCard from '@/components/WorkCard'

const works = [
  {
    id: 1,
    title: 'プロジェクト 1',
    description: 'Webアプリケーション開発',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    id: 2,
    title: 'プロジェクト 2',
    description: 'モバイルアプリ開発',
    technologies: ['React Native', 'Firebase'],
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    id: 3,
    title: 'プロジェクト 3',
    description: 'AI/機械学習プロジェクト',
    technologies: ['Python', 'TensorFlow', 'Docker'],
    image: '/api/placeholder/600/400',
    link: '#'
  },
  {
    id: 4,
    title: 'プロジェクト 4',
    description: 'フルスタック開発',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: '/api/placeholder/600/400',
    link: '#'
  }
]

export default function WorksPage() {
  return (
    <>
      <ParticleBackground />
      <main className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Works</h1>
            <p className="text-xl text-gray-400 mb-12">
              これまでに手がけたプロジェクトの一部をご紹介します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <WorkCard
                key={work.id}
                title={work.title}
                description={work.description}
                technologies={work.technologies}
                image={work.image}
                link={work.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}