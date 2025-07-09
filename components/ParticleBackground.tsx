'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let particlesMesh: THREE.Points
    let animationId: number

    const init = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement)
      }

      // Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 2000
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 8
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      // Material
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: '#ffffff',
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      })

      // Mesh
      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      camera.position.z = 3
    }

    // Mouse movement
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Animation
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      if (particlesMesh) {
        particlesMesh.rotation.x += 0.0002
        particlesMesh.rotation.y += 0.0003

        // Mouse interaction
        particlesMesh.rotation.x += mouseY * 0.00005
        particlesMesh.rotation.y += mouseX * 0.00005
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }
    }

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
    }

    // Initialize
    init()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      
      if (renderer && mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
        renderer.dispose()
      }
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}