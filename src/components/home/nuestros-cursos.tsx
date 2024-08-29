"use client"
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Clock } from 'lucide-react'

const cursos = [
  { icon: Clock, title: "Curso de Preparación", duration: "5 meses", description: "Preparación para el ingreso a la Universidad Nacional de Loja" },
  { icon: Clock, title: "Curso de Preparación", duration: "5 meses", description: "Preparación para el ingreso a la Universidad Técnica Particular de Loja" },
  { icon: Clock, title: "Curso de Preparación", duration: "5 meses", description: "Preparación para ingresar a la Universidad EPN - Quito" },
  { icon: Clock, title: "Curso de Preparación", duration: "5 meses", description: "Preparación para ingresar a la Universidad Central - Quito" },
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
                      <Badge variant="secondary" className="mt-1">
                        <curso.icon className="w-3 h-3 mr-1" />
                        {curso.duration}
                      </Badge>
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
