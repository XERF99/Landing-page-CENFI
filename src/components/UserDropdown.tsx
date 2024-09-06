/*"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Menu, LogOut, User } from "lucide-react" // Import icons
import { AnimatePresence, motion } from "framer-motion"

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [theme, setTheme] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Cargar el tema desde localStorage o usar sistema por defecto
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      setTheme("light")
    }
    setMounted(true)
  }, [])

  const toggleTheme = (newTheme: string) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  if (!mounted) return null

  return (
    <div className="relative">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500"
      >
        Usuario <User className="inline-block ml-2 h-5 w-5" />
      </button>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu">
              
              <div className="px-4 py-2 text-gray-600 dark:text-gray-300 font-semibold">
                Menú de usuario
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />

              
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => alert("Ir al menú")}
              >
                <Menu className="mr-3 h-5 w-5" />
                Ir al menú
              </button>

              
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => alert("Salir")}
              >
                <LogOut className="mr-3 h-5 w-5" />
                Salir
              </button>

            
              <div className="relative">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                >
                  <Sun className="mr-3 h-5 w-5" />
                  Cambiar tema
                </button>

                
                <AnimatePresence>
                  {isThemeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-1 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <button
                        className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          theme === "light" ? "bg-gray-100 dark:bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          toggleTheme("light")
                          setIsThemeOpen(false)
                        }}
                      >
                        <Sun className="mr-3 h-5 w-5 text-yellow-500" />
                        Claro
                      </button>
                      <button
                        className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          theme === "dark" ? "bg-gray-100 dark:bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          toggleTheme("dark")
                          setIsThemeOpen(false)
                        }}
                      >
                        <Moon className="mr-3 h-5 w-5 text-blue-500" />
                        Oscuro
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserDropdown
*/
'use client'

import { useState } from 'react'
import { Sun, Moon, Laptop, Menu, LogOut, User, Mail, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme' // Importa el hook

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isThemeOpen, setIsThemeOpen] = useState(false)
    const { theme, switchTheme } = useTheme() // Usa el hook

    const userEmail = "usuario@example.com" // Cambia esto por el correo dinámico
    const userName = "Usuario"

    const handleMainMenuToggle = () => {
        setIsOpen(prev => {
            if (!prev) {
                setIsThemeOpen(false) // Cierra el submenú cuando se abre el menú principal
            }
            return !prev
        })
    }

    // Función para obtener el ícono del tema actual
    const getThemeIcon = () => {
        switch (theme) {
            case "light":
                return <Sun className={'mr-3 h-5 w-5 text-yellow-500 transition-all'} />
            case "dark":
                return <Moon className={'mr-3 h-5 w-5 text-blue-500 transition-all'} />
            case "system":
                return <Laptop className={'mr-3 h-5 w-5 text-gray-500 transition-all'} />
            default:
                return <Sun className={'mr-3 h-5 w-5 text-yellow-500 transition-all'} />
        }
    }

    return (
        <div className="relative">
            {/* Botón para abrir el menú principal */}
            <button
                onClick={handleMainMenuToggle}
                className={'flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500'}
            >
                <div className={'flex items-center px-4 py-2 text-sm text-gray-800 dark:text-white min-w-0 w-auto'}>
                    <User className={'mr-2 h-5 w-5 flex-shrink-0'} />
                    <span className={'truncate'}>{userName}</span>
                    {/* Ícono Chevron para el menú principal */}
                    {isOpen ? (
                        <ChevronUp className={'ml-2 h-5 w-5'} />
                    ) : (
                        <ChevronDown className={'ml-2 h-5 w-5'} />
                    )}
                </div>
            </button>

            {/* Contenido del dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={'absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50'}
                    >
                        <div className={'py-1'} role="menu">
                            {/* Encabezado del dropdown */}
                            <div className={'px-4 text-sm text-gray-600 dark:text-gray-300 font-semibold'}>
                                Inicio sesión como
                            </div>
                            <div className={'flex items-center px-4 py-2 text-sm text-gray-800 dark:text-white min-w-0 w-auto whitespace-nowrap'}>
                                <Mail className={'mr-2 h-5 w-5 flex-shrink-0'} />
                                <span className={'truncate'}>{userEmail}</span>
                            </div>
                            <hr className={'border-gray-200 dark:border-gray-700'} />

                            {/* Opción del menú */}
                            <button
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                                onClick={() => alert("Ir al menú")}
                            >
                                <Menu className={'mr-3 h-5 w-5'} />
                                Ir al menú
                            </button>

                            {/* Opción de cerrar sesión */}
                            <button
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                                onClick={() => alert("Salir")}
                            >
                                <LogOut className={'mr-3 h-5 w-5'} />
                                Salir
                            </button>

                            {/* Submenú para opciones de tema */}
                            <div className={'relative'}>
                                <button
                                    className={'flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                                    onClick={() => setIsThemeOpen(prev => !prev)}
                                >
                                    <div className={'flex items-center'}>
                                        {getThemeIcon()}
                                        Cambiar tema
                                    </div>
                                    {/* Ícono Chevron a la derecha */}
                                    {isThemeOpen ? (
                                        <ChevronDown className={'ml-2 h-5 w-5'} />
                                    ) : (
                                        <ChevronRight className={'ml-2 h-5 w-5'} />
                                    )}
                                </button>

                                {/* Contenido del submenú */}
                                <AnimatePresence>
                                    {isThemeOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={'absolute left-full top-0 mt-0 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50'}
                                        >
                                            <button
                                                className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === "light" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                                                onClick={() => {
                                                    switchTheme("light")
                                                    setIsThemeOpen(false)
                                                }}
                                            >
                                                <Sun className={'mr-3 h-5 w-5 text-yellow-500'} />
                                                Claro
                                            </button>
                                            <button
                                                className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === "dark" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                                                onClick={() => {
                                                    switchTheme("dark")
                                                    setIsThemeOpen(false)
                                                }}
                                            >
                                                <Moon className={'mr-3 h-5 w-5 text-blue-500'} />
                                                Oscuro
                                            </button>
                                            <button
                                                className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${theme === "system" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                                                onClick={() => {
                                                    switchTheme("system")
                                                    setIsThemeOpen(false)
                                                }}
                                            >
                                                <Laptop className={'mr-3 h-5 w-5 text-gray-500'} />
                                                Sistema
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default UserDropdown
