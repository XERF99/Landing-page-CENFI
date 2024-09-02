"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "../../components/ui/card";
import NuestraHistoria from "./nuestra-historia"
import NuestrasInstalaciones from "./nuestras-instalaciones"
import NuestrosResultados from "./nuestros-resultados"

const facilities = [
    { src: "/Logo.png?height=400&width=600&text=Aula 1", alt: "Aula 1" },
    { src: "/estudiantes.png?height=400&width=600&text=Laboratorio", alt: "Laboratorio" },
    { src: "/hero-section.png?height=400&width=600&text=Biblioteca", alt: "Biblioteca" },
    { src: "/logros.jpg?height=400&width=600&text=Área de Estudio", alt: "Área de Estudio" },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % facilities.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
            {facilities.map((facility, index) => (
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={facility.src}
                        alt={facility.alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            ))}
        </div>
    );
};

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Sobre Nosotros</h1>

                <NuestraHistoria />

                <NuestrasInstalaciones />
                <NuestrosResultados />                
            </main>
        </div>
    );
};

export default AboutUs;

/*<motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nuestra Historia</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                Desde nuestra fundación en 2005, nos hemos dedicado a preparar a estudiantes para alcanzar sus metas académicas. Con un equipo de educadores apasionados y métodos de enseñanza innovadores, hemos ayudado a miles de estudiantes a ingresar a las mejores universidades del país.
                            </p>
                        </div>
                        <div className="relative h-48 md:h-auto flex justify-center items-center bg-black rounded-lg shadow-lg">
                            <iframe
                                src="https://drive.google.com/file/d/17-I0QWEIhEPYtjsTUyUHUpDuLySq5JY1/preview"
                                className="w-full h-full max-w-xs md:max-w-sm"
                                style={{ aspectRatio: "9/16" }}
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </motion.section>
                
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex justify-end">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nuestras Instalaciones</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <Carousel />
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                Nuestras modernas instalaciones están diseñadas para proporcionar el mejor ambiente de aprendizaje. Contamos con aulas equipadas con la última tecnología, laboratorios de ciencias, biblioteca y áreas de estudio confortables para nuestros estudiantes.
                            </p>
                        </div>
                    </div>
                </motion.section>
                
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Nuestros Resultados</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <ul className="space-y-8">
                                        <li className="flex items-center">
                                            <span className="text-5xl font-bold text-blue-600 mr-6">95%</span>
                                            <span className="text-xl text-gray-700">de nuestros estudiantes ingresan a su universidad de preferencia</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-5xl font-bold text-blue-600 mr-6">100+</span>
                                            <span className="text-xl text-gray-700">puntos de incremento promedio en pruebas estandarizadas</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="text-5xl font-bold text-blue-600 mr-6">1000+</span>
                                            <span className="text-xl text-gray-700">estudiantes admitidos en universidades de prestigio en el último año</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative h-64 md:h-auto">
                                    <Image
                                        src="/images/logros.jpg"
                                        alt="Gráfico de resultados del preuniversitario"
                                        height={300}
                                        width={500}
                                        layout="reponsive"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
                
                */