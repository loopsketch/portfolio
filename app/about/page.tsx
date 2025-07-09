'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CSSParticleBackground from '@/components/CSSParticleBackground'

const experiences = [
  {
    period: 'AI時代',
    title: 'Engineer & Architect',
    company: 'Modern Era',
    description: '働き方や暮らす場所も変わったが、LLMなどのAIや機械学習を通じて、高度なサービス開発に取り組んだり、Webアプリケーションのバックエンドやフロントエンドまで含めたフルスタックな開発に携わる。',
    technologies: ['Python', 'LLM', 'Machine Learning', 'Image Processing', 'AWS', 'Docker']
  },
  {
    period: '機械学習・画像処理時代',
    title: 'Engineer & Architect',
    company: 'Modern Era',
    description: '高度なCPU/GPUの高速化技術や画像処理技術を駆使した自動運転などのプロジェクトに取り組む。',
    technologies: ['Python', 'C', 'CUDA', 'Machine Learning', 'Image Processing']
  },
  {
    period: 'Web・モバイル時代',
    title: 'Software Developer',
    company: 'Internet Era',
    description: 'Webの普及とモバイル革命が、自分達の生活も大きく変えたし、サービスの在り方や仕組みも大きく変わった。',
    technologies: ['JavaScript', 'PHP', 'Java', 'HTML/CSS', 'SQL', 'Linux']
  },
  {
    period: 'パソコン普及期',
    title: 'Software Developer',
    company: 'PC Era',
    description: 'LEDディスプレイメーカー時代にグラフィックス技術を駆使したソフトウェア開発を通じて、組込み系～DirectXを用いたグラフィックやマルチメディア技術を学ぶことができた',
    technologies: ['Java', 'C++', 'DirectX', 'LEDディスプレイ']
  },
  {
    period: 'パソコン黎明期',
    title: 'Programming Explorer',
    company: 'Early Computing',
    description: 'ポケットコンピューターとの出会いから始まった、プログラミングの世界への冒険。限られたメモリとCPUでの創意工夫が今の自分を作っている',
    technologies: ['BASIC', 'Assembly', 'Z80', 'PC-8801', 'FM音源']
  }
]

export default function About() {
  return (
    <>
      <CSSParticleBackground />
      <main className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-400 mb-12">
              コンピューティングの始まりから現在のAIへ、<br />
              その先の進化と共に歩み続けるエンジニア
            </p>
          </motion.div>

        {/* Profile Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">My Journey</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  コンピューターがまだ珍しかった時代、小学生だった私は偶然出会った
                  その小さなマシンに魅了されました。液晶画面に文字が現れる瞬間、
                  コードが動作する喜び——それが全ての始まりでした。
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  8bit時代からインターネットの普及、モバイル革命、そしてAI時代まで。
                  テクノロジーの激動の歴史を肌で感じながら、常に最前線で技術と向き合い続けてきました。
                  今では、幼い頃には想像もできなかったLLMや画像処理技術を駆使し、
                  革新的なソリューションを生み出しています。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  暮らし方や時代は変わっても、コードを通じて世界を変えたいという想いは変わりません。
                  長年培った経験と、新しい技術への飽くなき探求心を持って、
                  ユーザーにとって本当に価値のあるプロダクトを創造し続けています。
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Nagasaki, Japan</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
                  <p className="text-gray-300">Full-stack Development, AI/ML, Cloud Infrastructure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Experience Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Experience
            </motion.h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/30 p-6 rounded-lg border border-gray-700 border-l-4 border-l-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-blue-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-white text-xs hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                新しいプロジェクトやコラボレーションの機会について<br />
                お気軽にお問い合わせください
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
        </div>
      </main>
    </>
  )
}