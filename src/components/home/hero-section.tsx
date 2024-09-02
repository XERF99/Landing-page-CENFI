"use client"
/*import { Button } from "../components/ui/button"

export default function HeroSection() {

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=593992562952&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Prepárate para tu futuro universitario
            </h1>
            <p className="text-xl text-black-600 mb-8">
              Alcanza tu máximo potencial con nuestros cursos preuniversitarios diseñados para asegurar tu ingreso a la universidad de tus sueños.
            </p>
            <div className="space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleClick}>
                Inscríbete ahora
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-96">
            <img
              src="./hero-section.png"
              alt="Estudiantes preparándose para la universidad"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}*/

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "../../components/ui/button";
import { CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {

  const handleClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=593992562952&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="h-[50vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Prepárate para tu futuro universitario
            </h1>
            <p className="text-lg text-blue-700 mb-6">
             Alcanza tu máximo potencial con nuestros cursos preuniversitarios diseñados para asegurar tu ingreso a la universidad de tus sueños.
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleClick}>
              Inscríbete ahora
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <Image
              src="/portada.jpg"
              alt="Estudiante estudiando"
              width={700}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Nuestros servicios</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center text-blue-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Tutorías
                </li>
                <li className="flex items-center text-blue-700">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Pruebas de admisión
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;