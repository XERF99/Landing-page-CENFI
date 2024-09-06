"use client"
/*import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Clock } from 'lucide-react'

const cursos = [
  { icon: Clock, title: "Curso universidades públicas", description: "Curso de preparación para la prueba de admisión de la UNL, UCE, EPN, UNACH, U Cuenca, UTMACH entre otras para cada periodo académico." },
  { icon: Clock, title: "Curso de universidad privadas", description: "Cursos de preparación para la prueba de admisión UTPL, USFQ, PUCE, entre otras para cada periodo académico" },
  { icon: Clock, title: "Cursos vacacionales", description: "Cursos de refuerzo académico en áreas como matemáticas, físicas, química, biología y ciencias sociales." },
  { icon: Clock, title: "Talleres estratégicos", description: "Cursos para desarrollo de pruebas tipo de universidades públicas y privadas" },
]

export default function NuestrosCursos() {
  const motionSettings = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestros Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <motion.div
              key={curso.title}
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <curso.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{curso.title}</CardTitle>
                    <CardDescription>
                      
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{curso.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
*/
/*
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { GraduationCap, BookOpen, Clock, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion'
import { useState } from 'react'

const cursos = [
  {
    title: "Curso universidades públicas",
    description: "Curso de preparación para la prueba de admisión de la UNL, UCE, EPN, UNACH, U Cuenca, UTMACH entre otras para cada período académico.",
    icon: GraduationCap
  },
  {
    title: "Curso de universidad privadas",
    description: "Cursos de preparación para la prueba de admisión UTPL, USFQ, PUCE, entre otras para cada período académico",
    icon: BookOpen
  },
  {
    title: "Cursos vacacionales",
    description: "Cursos de refuerzo académico en áreas como matemáticas, físicas, química, biología y ciencias sociales.",
    icon: Clock
  },
  {
    title: "Talleres estratégicos",
    description: "Cursos para desarrollo de pruebas tipo de universidades públicas y privadas",
    icon: Lightbulb
  }
];

const NuestrosCursos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
      <motion.h2
          className="text-4xl font-bold text-blue-800 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        Nuestros Cursos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 min-h-[310px]">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full p-3 mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <curso.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">{curso.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{curso.description}</p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosCursos;*/

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { GraduationCap, BookOpen, Clock, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const cursos = [
  {
    title: "Curso universidades públicas",
    description: "Curso de preparación para la prueba de admisión de la UNL, UCE, EPN, UNACH, U Cuenca, UTMACH entre otras para cada período académico.",
    icon: GraduationCap
  },
  {
    title: "Curso de universidad privadas",
    description: "Cursos de preparación para la prueba de admisión UTPL, USFQ, PUCE, entre otras para cada período académico",
    icon: BookOpen
  },
  {
    title: "Cursos vacacionales",
    description: "Cursos de refuerzo académico en áreas como matemáticas, física, química, biología y ciencias sociales.",
    icon: Clock
  },
  {
    title: "Talleres estratégicos",
    description: "Cursos para desarrollo de pruebas tipo de universidades públicas y privadas",
    icon: Lightbulb
  }
];

const NuestrosCursos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={'py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900'}>
      <div className={'max-w-full container mx-auto lg:px-28 md:px-8'}>
        <motion.h2
          className={'text-4xl font-bold text-blue-800 dark:text-blue-300 mb-12 text-center'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Cursos
        </motion.h2>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'}>
          {cursos.map((curso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className={'group hover:shadow-lg transition-shadow duration-300 min-h-[310px] dark:bg-gray-800'}>
                <CardHeader className={'text-center'}>
                  <div className={'mx-auto bg-blue-100 rounded-full p-3 mb-4 group-hover:bg-blue-200 transition-colors duration-300 dark:bg-gray-700 dark:group-hover:bg-gray-600'}>
                    <curso.icon className={'w-8 h-8 text-blue-600 dark:text-blue-200'} />
                  </div>
                  <CardTitle className={'text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition-colors duration-300 dark:text-blue-300 dark:group-hover:text-gray-300'}>
                    {curso.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={'text-gray-600 text-center dark:text-gray-300'}>{curso.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosCursos;
