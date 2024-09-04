"use client"
import React from 'react';
import { Facebook, Instagram, Twitch, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 my-2 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-blue-900">Información de contacto</h2>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start">
                  <MapPin className="mr-3 flex-shrink-0 text-blue-600 w-6 h-6" />
                  <p className="leading-tight">18 de noviembre 197 – 32 entre Colón y José Antonio Eguiguren, edificio "hogar & más", 2° Piso</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 flex-shrink-0 text-blue-600 w-6 h-6" />
                  <p className="text-lg font-medium">(+593) 99 256 2952</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 flex-shrink-0 text-blue-600 w-6 h-6" />
                  <a href="mailto:cenfilojaecuador@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">cenfilojaecuador@gmail.com</a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-6 text-blue-900">Redes sociales</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/share/3xgwpWEhGxW4kViB/?mibextid=qi2Omg" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Facebook size={36} className="hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="https://www.instagram.com/preuniversitario_cenfi?igsh=MTVyZ2c1cnQzNXR3dw==" target='_blank' rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <Instagram size={36} className="hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="https://www.tiktok.com/@preuniversitario.cenfi?_t=8ocuteZQ73G&_r=1" target='_blank' rel="noopener noreferrer" className="text-black hover:text-gray-800 transition-colors">
                  <Twitch size={36} className="hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="pt-6 pr-6 pl-6 pb-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-blue-900">Envíanos un mensaje</h2>
              <form className="space-y-4">
                <Input name="nombre" type="text" required placeholder="Nombre" className="border-blue-200 focus:border-blue-400" />
                <Input name="email" type="email" required placeholder="Correo electrónico" className="border-blue-200 focus:border-blue-400" />
                <Textarea name="mensaje" placeholder="Mensaje" required className="border-blue-200 focus:border-blue-400 h-32" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Nuestra ubicación</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d995.0300345374256!2d-79.20476173039074!3d-3.9957126619035015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTknNDQuNiJTIDc5wrAxMicxNC44Ilc!5e0!3m2!1ses-419!2ssv!4v1725238701315!5m2!1ses-419!2ssv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
