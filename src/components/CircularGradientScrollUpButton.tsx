"use client"

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const CircularGradientScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 sm:p-4 sm:bottom-8 sm:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      )}
    </>
  )
}

export default CircularGradientScrollUpButton