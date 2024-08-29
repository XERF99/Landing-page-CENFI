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

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#' },
  { name: 'Cursos', href: '#' },
  { name: 'Admisión', href: '#' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Administración', href: '#' },
  { name: 'Simuladores', href: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image src="/Logo.png" alt="CENFI Logo" width={100} height={100} />
            <span className="ml-2 text-xl font-bold text-blue-600">Preuniversitario CENFI</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;