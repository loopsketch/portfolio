'use client'

import { useState, useEffect } from 'react'

interface Particle {
  left: number
  top: number
  width: number
  height: number
  opacity: number
  animationDuration: number
  animationDelay: number
}

interface MovingParticle {
  left: number
  top: number
  animationDuration: number
  animationType: number
}

export default function CSSParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [movingParticles, setMovingParticles] = useState<MovingParticle[]>([])

  useEffect(() => {
    // Generate static particles
    const staticParticles = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      animationDuration: 2 + Math.random() * 4,
      animationDelay: Math.random() * 3
    }))

    // Generate moving particles
    const movingParticlesData = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 10 + Math.random() * 10,
      animationType: Math.floor(Math.random() * 4)
    }))

    setParticles(staticParticles)
    setMovingParticles(movingParticlesData)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`
          }}
        />
      ))}
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        {movingParticles.map((particle, i) => (
          <div
            key={`moving-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float-${particle.animationType} ${particle.animationDuration}s infinite linear`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float-0 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes float-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-25px, -25px) rotate(90deg); }
          50% { transform: translate(25px, -25px) rotate(180deg); }
          75% { transform: translate(25px, 25px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes float-2 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, 40px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes float-3 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-35px, 35px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  )
}