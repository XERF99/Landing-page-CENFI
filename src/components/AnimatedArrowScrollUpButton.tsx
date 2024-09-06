"use client"

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const AnimatedArrowScrollUpButton: React.FC = () => {
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
          className="fixed bottom-5 right-5 p-2 bg-blue-500 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 group sm:p-3 sm:bottom-8 sm:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
        </button>
      )}
    </>
  )
}

export default AnimatedArrowScrollUpButton