/*"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import ElegantContentSection from "./HMV";

interface ExpandableCardProps {
    title: string;
    content: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="mb-4">
            <CardContent className="p-4">
                <Button
                    variant="ghost"
                    className="w-full flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-lg font-semibold">{title}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </Button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="mt-4 text-gray-700">{content}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
};

const NuestraHistoria = () => {
    return (
        <section className="h-auto flex items-start bg-gradient-to-br from-blue-50 to-white pt-10 pb-5 mt-2">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl font-bold text-center mb-8 text-blue-900"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Sobre Nosotros
                </motion.h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                        <motion.h2
                            className="text-4xl font-bold text-blue-800 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nuestra Historia
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100"
                        >
                            <ElegantContentSection />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 mt-10">
                        <motion.div
                            className="sticky top-4 aspect-video md:aspect-auto md:h-[calc(40vh-2rem)]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <iframe
                                src="https://drive.google.com/file/d/17-I0QWEIhEPYtjsTUyUHUpDuLySq5JY1/preview"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen

                                className="w-full h-full rounded-lg shadow-2xl object-contain"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NuestraHistoria;
*/

"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import ElegantContentSection from "./HMV";

interface ExpandableCardProps {
    title: string;
    content: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className={'mb-4 dark:bg-gray-800 dark:border-gray-700'}>
            <CardContent className={'p-4'}>
                <Button
                    variant={'ghost'}
                    className={'w-full flex justify-between items-center dark:text-gray-300'}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={'text-lg font-semibold'}>{title}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </Button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={'overflow-hidden'}
                        >
                            <p className={'mt-4 text-gray-700 dark:text-gray-300'}>{content}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
};

const NuestraHistoria = () => {
    return (
        <section className={'h-auto flex items-start bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 pt-10 pb-5 mt-2'}>
            <div className={'max-w-full container mx-auto lg:px-28'}>
                <motion.h1
                    className={'text-4xl font-bold text-center mb-8 text-blue-900 dark:text-blue-300'}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Sobre Nosotros
                </motion.h1>
                <div className={'flex flex-col md:flex-row'}>
                    <div className={'w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0'}>
                        <motion.h2
                            className={'text-4xl font-bold text-blue-800 dark:text-blue-400 mb-2'}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nuestra Historia
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={'overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 dark:scrollbar-thumb-blue-700 dark:scrollbar-track-gray-900'}
                        >
                            <ElegantContentSection />
                        </motion.div>
                    </div>
                    <div className={'w-full md:w-1/2 lg:mt-10 md:mt-16'}>
                        <motion.div
                            className={'sticky top-4 aspect-video md:aspect-auto md:h-[calc(28vh-2rem)] lg:h-[calc(40vh-2rem)]'}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <iframe
                                src={'https://drive.google.com/file/d/17-I0QWEIhEPYtjsTUyUHUpDuLySq5JY1/preview'}
                                frameBorder={'0'}
                                allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                                allowFullScreen
                                className={'w-full h-full rounded-lg shadow-2xl object-contain dark:bg-gray-700'}
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NuestraHistoria;


/*"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import ElegantContentSection from "./HMV";

interface ExpandableCardProps {
    title: string;
    content: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="mb-4">
            <CardContent className="p-4">
                <Button
                    variant="ghost"
                    className="w-full flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-lg font-semibold">{title}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </Button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="mt-4 text-gray-700">{content}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
};

const NuestraHistoria = () => {
    return (
        <section className="h-auto flex items-center bg-gradient-to-br from-blue-50 to-white pt-10 pb-5 mt-2">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Sobre Nosotros</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 max-h-[1000px] overflow-y-auto">
                        <motion.h2
                            className="text-4xl font-bold text-blue-800 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Nuestra Historia
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <ElegantContentSection />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 md:sticky md:top-0 self-start">
                        <motion.div
                            className="aspect-w-9 aspect-h-16 md:aspect-auto md:h-[350px] mt-12"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <iframe
                                src="https://drive.google.com/file/d/17-I0QWEIhEPYtjsTUyUHUpDuLySq5JY1/preview"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg shadow-2xl"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NuestraHistoria;*/

/*
<ExpandableCard
                                title="Historia"
                                content={
                                    <div className="space-y-6 text-gray-700">
                                        <p className="leading-relaxed text-justify">
                                            CENTRO DE FORMACIÓN INTENSIVA CIA. LTDA. "CENFI", se origina en el año 2018 con el propósito principal de brindar un nivel de educación acorde a las exigencias académicas actuales.
                                        </p>

                                        <p className="leading-relaxed text-justify">
                                            Disponemos de un equipo de trabajo con profesionales de tercer y cuarto nivel, con más de 10 años de experiencia en la preparación y asesoría académica de estudiantes de tercero de bachillerato y bachilleres graduados, obteniendo excelentes resultados de ingreso a universidades locales y a nivel nacional. Contamos con alumnos vinculados al programa GAR (Grupo de Alto Rendimiento).
                                        </p>

                                        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
                                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Alumnos destacados:</h3>
                                            <ul className="list-none space-y-2">
                                                {[
                                                    "Marjhorie Krupskaya Caraguay Sivisapa – 1000 puntos.",
                                                    "Marlon Alexander Coronel Loaiza – 997 puntos.",
                                                    "María Susana Alvarez Castillo – 997 puntos.",
                                                    "Celia María Poma Ortiz – 996 puntos.",
                                                    "Albania Mercedes Crespo Carpio – 991 puntos."
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-blue-500 mr-2">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <p className="leading-relaxed text-justify">
                                            Cada profesional es especialista en áreas relacionadas con la parte psicotécnica que incluye el dominio de Razonamientos (Numérico, Verbal, Lógico, Atención y concentración) y en conocimientos específicos tales como: Matemática, Ciencias Naturales (Biología, Química y Física), Estudios Sociales (Historia, Geografía, Emprendimiento, Ciudadanía) y Lengua y Literatura.
                                        </p>
                                    </div>
                                }
                            />
                            <ExpandableCard
                                title="Misión"
                                content={
                                    <div className="space-y-6 text-gray-700">
                                        <p className="leading-relaxed text-justify">
                                            Nuestra misión en CENFI es proporcionar una educación de alta calidad y personalizada para estudiantes que buscan un cupo en el sistema de educación superior o bien nivelar sus conocimientos y habilidades. Nos comprometemos a:
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
                                            <ul className="space-y-3">
                                                {[
                                                    "Proporcionar un entorno de aprendizaje dinámico y apoyo individualizado para cada estudiante.",
                                                    "Desarrollar habilidades críticas y pensamiento analítico para una comprensión profunda de los conceptos.",
                                                    "Fomentar la confianza y la motivación en nuestros estudiantes para alcanzar su máximo potencial.",
                                                    "Preparar a nuestros estudiantes para el éxito en la educación superior.",
                                                    "Mantener altos estándares de enseñanza y evaluación para garantizar la excelencia académica."
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-blue-500 mr-2 font-bold">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="leading-relaxed text-justify">
                                            En CENFI, nos esforzamos por ser un puente hacia el éxito para nuestros estudiantes, proporcionándoles las herramientas y el conocimiento necesarios para alcanzar sus objetivos y realizar sus sueños.
                                        </p>
                                    </div>
                                }
                            />

                            <ExpandableCard
                                title="Visión"
                                content={
                                    <div className="space-y-6 text-gray-700">
                                        <p className="leading-relaxed text-justify">
                                            Ser reconocida como una academia de nivelación líder en la región, destacándonos por nuestra excelencia académica, innovación y compromiso con el éxito de nuestros estudiantes. Nuestra visión es:
                                        </p>
                                        <div className="bg-green-50 p-4 rounded-lg shadow-inner">
                                            <ul className="space-y-3">
                                                {[
                                                    "Ser el referente en educación de nivelación, brindando programas y servicios de alta calidad que respondan a las necesidades de nuestros estudiantes.",
                                                    "Empoderar a nuestros estudiantes con el conocimiento, habilidades y confianza para alcanzar sus metas académicas.",
                                                    "Fomentar una cultura de aprendizaje colaborativo, inclusivo y estimulante que permita a nuestros estudiantes crecer intelectual y personalmente.",
                                                    "Ser un agente de cambio positivo en la comunidad, contribuyendo al desarrollo educativo y social de la región."
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-green-500 mr-2 font-bold">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="leading-relaxed text-justify">
                                            En CENFI, nos esforzamos por crear un futuro brillante para nuestros estudiantes, y ser un motor de progreso en la educación y la sociedad.
                                        </p>
                                    </div>
                                }
                            />
*/
