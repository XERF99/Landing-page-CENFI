"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Award, BookOpen, Users } from 'lucide-react'

const infoCards = [
  {
    title: "Experiencia y Metodología",
    icon: BookOpen,
    description: "Disponemos de un equipo de trabajo con profesionales de cuarto nivel, con más de 10 años de experiencia en la preparación y asesoría académica, que cuentan con un enfoque integral que combina teoría, práctica y desarrollo de habilidades.",
  },
  {
    title: "Profesores Calificados",
    icon: Users,
    description: "Cada profesional es especialista en áreas relacionadas con la parte psicotécnica que incluye el dominio de Razonamientos y en conocimientos específicos, garantizando una enseñanza de alta calidad.",
  },
  {
    title: "Logros",
    icon: Award,
    description: "Obtención de excelentes resultados de ingreso a universidades locales y a nivel nacional. Contamos con alumnos vinculados al programa GAR (Grupo de Alto Rendimiento).",
  },
]

export default function InformacionCentro() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        Información del Centro
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <card.icon className="w-6 h-6 mr-2" />
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.description}</p>
                  <motion.div
                    className="w-full h-1 bg-blue-500 mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}