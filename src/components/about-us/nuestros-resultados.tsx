"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { X } from 'lucide-react';
import { Star, Users, Award } from 'lucide-react';

const NuestrosResultados = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-16 bg-white-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-800 mb-12 text-left">Nuestros Resultados</h2>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="lg:w-1/2">
                                <AnimatedStats />
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative h-96 cursor-pointer hidden md:block" onClick={() => setIsModalOpen(true)}>
                                    <Image
                                        src="/images/logros.jpg?height=800&width=600&text=Estudiantes"
                                        alt="Estudiantes exitosos"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-lg font-semibold">Click para ampliar</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div className="relative w-full max-w-4xl h-[80vh]">
                            <Image
                                src="/images/logros.jpg?height=800&width=600&text=Estudiantes"
                                alt="Estudiantes exitosos"
                                layout="fill"
                                objectFit="contain"
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="absolute top-4 right-4 bg-white bg-opacity-75 hover:bg-opacity-100"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <X size={20} />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const AnimatedStats = () => {
    const stats = [
        { icon: Star, value: "Excelencia", description: "En CENFI se preparan los mejores" },
        { icon: Users, value: "Resultados", description: "Resultados reales en cada proceso de admisión" },
        { icon: Award, value: "Garantía", description: 'Profesionales con 12 años de experiencia "Enseñanza Garantizada"' },
    ];

    return (
        <div className="space-y-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                            <stat.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                                {stat.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default NuestrosResultados;
