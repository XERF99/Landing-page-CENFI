"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { BookOpen, Brain, Lightbulb } from 'lucide-react'

const tabContent = [
  {
    value: "estructura",
    title: "Estructura de la Prueba",
    description: "Conoce cómo está organizado el examen",
    icon: BookOpen,
    content: "La prueba consta de dos partes, una de Razonamientos que conforma el 40% de la nota final, y otra parte de Conocimientos que conforma el 60% de la nota final."
  },
  {
    value: "contenido",
    title: "Contenido Evaluado",
    description: "Temas principales que debes dominar",
    icon: Brain,
    content: "Se evalúan conocimientos en álgebra, geometría, comprensión lectora, gramática, física, química y biología. Además, se incluyen secciones de razonamiento lógico, verbal y matemático."
  },
  {
    value: "tips",
    title: "Tips de Estudio",
    description: "Consejos para una preparación efectiva",
    icon: Lightbulb,
    content: "Establece un horario de estudio regular, practica con exámenes anteriores, enfócate en tus áreas de mejora, utiliza técnicas de memorización activa y participa en grupos de estudio para compartir conocimientos."
  }
]

export default function InformacionPrueba() {
  const [selectedTab, setSelectedTab] = useState<string>("estructura")

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Información de la Prueba</h2>
        <Tabs defaultValue="estructura" onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-28 sm:mb-8">
            {tabContent.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-center p-2 rounded-md transition-colors duration-200"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <Card className="shadow-lg mb-8 sm:mb-0">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <tab.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg sm:text-xl">{tab.title}</CardTitle>
                          <CardDescription>{tab.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{tab.content}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
