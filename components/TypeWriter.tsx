'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface TypeWriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypeWriter({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  pauseDuration = 2000 
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // 最も長い単語の長さを計算してレイアウトシフトを防ぐ
  const maxLength = useMemo(() => {
    return Math.max(...words.map(word => word.length))
  }, [words])

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1))
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className="inline-flex items-center justify-center">
      <span 
        className="inline-block text-center"
        style={{ minWidth: `${maxLength}ch` }}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-0.5 h-8 bg-white ml-1"
        />
      </span>
    </div>
  )
}