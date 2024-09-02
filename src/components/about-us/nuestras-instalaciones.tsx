"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Cpu, PillBottle, Thermometer } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const images = [
    "/images/instalations/instalacion1.jpg?height=400&width=600&text=Imagen+1",
    "/images/instalations/instalacion2.jpg?height=400&width=600&text=Imagen+1",
    "/images/instalations/instalacion3.jpg?height=400&width=600&text=Imagen+1",
    "/images/instalations/instalacion4.jpg?height=400&width=600&text=Imagen+1",
    "/images/instalations/instalacion5.jpg?height=400&width=600&text=Imagen+1",
];

const features = [
    { icon: Home, text: "Aulas confortables" },
    { icon: Cpu, text: "Equipos de última tecnología" },
    { icon: PillBottle, text: "Mesas ergonómicas" },
    { icon: Thermometer, text: "Aulas con sistema de calefacción" },
];

const NuestrasInstalaciones = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Nuestras Instalaciones</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <Card className="w-full md:w-1/2">
                        <CardContent className="p-4">
                            <div className="relative h-[30vh] md:h-[40vh]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[currentIndex]}
                                            alt={`Instalación ${currentIndex + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 flex items-center justify-between p-4">
                                    <Button variant="outline" size="icon" onClick={prevSlide} className="bg-white bg-opacity-50 hover:bg-opacity-75">
                                        <ChevronLeft size={24} />
                                    </Button>
                                    <Button variant="outline" size="icon" onClick={nextSlide} className="bg-white bg-opacity-50 hover:bg-opacity-75">
                                        <ChevronRight size={24} />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Nuestras modernas instalaciones están diseñadas para proporcionar el mejor ambiente de aprendizaje. Contamos con aulas equipadas con la última tecnología, ofreciendo comodidad y eficiencia a nuestros estudiantes.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.li 
                                    key={index}
                                    className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                                        <feature.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NuestrasInstalaciones;