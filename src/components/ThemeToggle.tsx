/*"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Laptop } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="appearance-none w-full bg-transparent py-2 pl-2 pr-8 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
        >
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
          <option value="system">Sistema</option>
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          {theme === 'dark' && <Moon className="h-4 w-4 text-gray-400" />}
          {theme === 'light' && <Sun className="h-4 w-4 text-gray-400" />}
          {theme === 'system' && <Laptop className="h-4 w-4 text-gray-400" />}
        </span>
      </div>
    </div>
  )
}*/
/*
"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Claro', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Oscuro', color: 'text-blue-500' },
    { value: 'system', icon: Laptop, label: 'Sistema', color: 'text-gray-500' },
  ]

  const currentTheme = themeOptions.find(option => option.value === theme) || themeOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
      >
        <currentTheme.icon className={`h-5 w-5 ${currentTheme.color}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value)
                    setIsOpen(false)
                  }}
                  className={`${
                    theme === option.value ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <option.icon className={`mr-3 h-5 w-5 ${option.color}`} />
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
*/
/* Componente con la logica integrada
'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<string | null>(null)
  const [isSystemDark, setIsSystemDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Detectar si el sistema está en modo oscuro
  const checkSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'system') {
      // Si el tema es "sistema", verificamos el tema actual del sistema
      const systemPrefersDark = checkSystemTheme()
      setIsSystemDark(systemPrefersDark)
      setTheme('system')
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    } else if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      setTheme('light') // Valor por defecto
    }

    // Listener para los cambios en el esquema de color del sistema
    const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)')
    systemThemeListener.addEventListener('change', (e) => {
      if (theme === 'system') {
        const systemDark = e.matches
        setIsSystemDark(systemDark)
        document.documentElement.classList.toggle('dark', systemDark)
      }
    })

    setMounted(true)

    return () => {
      systemThemeListener.removeEventListener('change', () => {})
    }
  }, [theme])

  const switchTheme = (newTheme: string) => {
    if (newTheme === 'system') {
      const systemPrefersDark = checkSystemTheme()
      setIsSystemDark(systemPrefersDark)
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return null
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Claro', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Oscuro', color: 'text-blue-500' },
    { value: 'system', icon: Laptop, label: 'Sistema', color: 'text-gray-500' },
  ]

  const currentTheme = themeOptions.find(option => option.value === theme) || themeOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
      >
        <currentTheme.icon className={`h-5 w-5 ${currentTheme.color}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    switchTheme(option.value)
                    setIsOpen(false)
                  }}
                  className={`${
                    theme === option.value || (option.value === 'system' && theme === 'system') ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <option.icon className={`mr-3 h-5 w-5 ${option.color}`} />
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
*/

// Componente con el hook integrado 
/*
'use client'

import { useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme' // Importa el hook

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, switchTheme } = useTheme() // Usa el hook

  useState(() => {
    setMounted(true)
  },)

  if (!mounted) {
    return null
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Claro', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Oscuro', color: 'text-blue-500' },
    { value: 'system', icon: Laptop, label: 'Sistema', color: 'text-gray-500' },
  ]

  const currentTheme = themeOptions.find((option) => option.value === theme) || themeOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
      >
       <currentTheme.icon className={`h-5 w-5 ${currentTheme.color}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    switchTheme(option.value)
                    setIsOpen(false)
                  }}
                  className={`${
                    theme === option.value || (option.value === 'system' && theme === 'system') ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <option.icon className={`mr-3 h-5 w-5 ${option.color}`} />
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
*/
// Con la logica en un hook pero sin el tooptil 

'use client'

import React, { useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, switchTheme } = useTheme()

  useState(() => {
    setMounted(true)
  },)

  if (!mounted) {
    return null
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Claro', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Oscuro', color: 'text-blue-500' },
    { value: 'system', icon: Laptop, label: 'Sistema', color: 'text-gray-500' },
  ]

  const currentTheme = themeOptions.find((option) => option.value === theme) || themeOptions[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
      >
        <currentTheme.icon className={`h-5 w-5 ${currentTheme.color}`}/>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    switchTheme(option.value)
                    setIsOpen(false)
                  }}
                  className={`${
                    theme === option.value || (option.value === 'system' && theme === 'system') ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <option.icon className={`mr-3 h-5 w-5 ${option.color}`}/>
                  {option.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


// Para el sistema 

/*
'use client'

import React, { useState, useEffect } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { theme, switchTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Claro', color: 'text-yellow-500' },
    { value: 'dark', icon: Moon, label: 'Oscuro', color: 'text-blue-500' },
    { value: 'system', icon: Laptop, label: 'Sistema', color: 'text-gray-500' },
  ]

  const currentTheme = themeOptions.find((option) => option.value === theme) || themeOptions[0]

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    setShowTooltip(false)
  }

  return (
    <div className="relative group">
      <button
        onClick={handleButtonClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
        aria-label="Cambiar tema"
      >
        <currentTheme.icon className={`h-5 w-5 ${currentTheme.color}`} />
      </button>
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-1/4 transform -translate-x-1/3 mt-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md shadow-lg pointer-events-none z-50 whitespace-nowrap"
          >
            <div className="relative">
              Cambiar tema
              <div className="absolute -top-1 right-0 transform -translate-x-1/2 -translate-y-full w-2 h-2 bg-white dark:bg-gray-800 rotate-45"></div>
            </div>
          </motion.div>

        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    switchTheme(option.value)
                    setIsOpen(false)
                  }}
                  className={`${theme === option.value || (option.value === 'system' && theme === 'system') ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
                  role="menuitem"
                >
                  <option.icon className={`mr-3 h-5 w-5 ${option.color}`} />
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
*/