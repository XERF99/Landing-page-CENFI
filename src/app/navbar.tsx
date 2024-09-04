"use client"
/*import { useState } from 'react'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Menu } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '#' },
  { name: 'Cursos', href: '#' },
  { name: 'Admisión', href: '#' },
  { name: 'Contacto', href: '#' },
  { name: 'Administración', href: '#' },
  { name: 'Simuladores', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-100 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          }
          <div className="flex items-center">
            <img src="/LogoCENFI.png" alt="CENFI Logo" width={70} height={70} className="mr-2" />
            <span className="font-bold text-lg">Preuniversitario CENFI</span>
          </div>
          
          {}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-blue-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}*/
/*
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';


const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Simuladores', href: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <Image src="/LogoCENFI.png" alt="CENFI Logo" width={80} height={90} />
            </Link>
            <span className="hidden lg:inline ml-2 text-l font-bold text-blue-900 dark:text-white">
              CENTRO DE FORMACIÓN INTENSIVA CIA. LTDA.
            </span>
            <span className="lg:hidden ml-2 text-l font-bold text-blue-900 dark:text-white">
              CENFI CIA. LTDA.
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <AnimatePresence mode='wait' initial={false}>
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center"
                  >
                    <Moon className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center"
                  >
                    <Sun className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full text-left px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center">
                  <AnimatePresence mode='wait' initial={false}>
                    {darkMode ? (
                      <motion.div
                        key="moon-mobile"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center"
                      >
                        <Moon className="w-6 h-6" />
                        <span className="ml-2">Modo Oscuro</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun-mobile"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center"
                      >
                        <Sun className="w-6 h-6" />
                        <span className="ml-2">Modo Claro</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun, Moon } from 'lucide-react';
import { Tooltip } from '@mui/material';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Simuladores', href: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");

    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <Image src="/LogoCENFI.png" alt="CENFI Logo" width={80} height={90} />
            </Link>
            <span className="hidden lg:inline ml-2 text-l font-bold text-blue-900 dark:text-white">
              CENTRO DE FORMACIÓN INTENSIVA CIA. LTDA.
            </span>
            <span className="lg:hidden ml-2 text-l font-bold text-blue-900 dark:text-white">
              CENFI CIA. LTDA.
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {item.name}
              </Link>
            ))}
            <Tooltip title={darkMode ? 'Modo Oscuro Activo' : 'Modo Claro Activo'} arrow>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <AnimatePresence mode='wait' initial={false}>
                  {darkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center"
                    >
                      <Moon className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center"
                    >
                      <Sun className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Tooltip>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  {item.name}
                </Link>
              ))}
              <Tooltip title={darkMode ? 'Modo Oscuro Activo' : 'Modo Claro Activo'} arrow>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full text-left px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <AnimatePresence mode='wait' initial={false}>
                      {darkMode ? (
                        <motion.div
                          key="moon-mobile"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-center"
                        >
                          <Moon className="w-6 h-6" />
                          <span className="ml-2">Modo Oscuro</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun-mobile"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="flex items-center"
                        >
                          <Sun className="w-6 h-6" />
                          <span className="ml-2">Modo Claro</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </Tooltip>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
