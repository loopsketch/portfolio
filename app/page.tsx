'use client'

import ParticleBackground from '@/components/ParticleBackground'
import CSSParticleBackground from '@/components/CSSParticleBackground'
import HeroSection from '@/components/HeroSection'
import AboutPreview from '@/components/AboutPreview'

export default function Home() {
  return (
    <>
      <CSSParticleBackground />
      <main className="min-h-screen">
        <HeroSection />
        <AboutPreview />
      </main>
    </>
  )
}