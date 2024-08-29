"use client"

import React from 'react';
import { Facebook, Instagram, Twitch, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent } from "../ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 my-2 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Información de contacto</h2>
            <div className="space-y-4 text-black-600">
              <p className="flex items-center"><MapPin className="mr-3" /> 18 de noviembre 197 – 32 entre Colón y José Antonio Eguiguren, edificio “hogar & más”, 2° Piso</p>
              <p className="flex items-center"><Phone className="mr-3" /> (+593) 99 256 2952</p>
              <p className="flex items-center"><Mail className="mr-3" /> cenfilojaecuador@gmail.com</p>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-900">Redes sociales</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/share/3xgwpWEhGxW4kViB/?mibextid=qi2Omg" target='_blank' className="text-blue-600 hover:text-blue-900 transition-colors"><Facebook size={28} /></a>
              <a href="https://www.instagram.com/preuniversitario_cenfi?igsh=MTVyZ2c1cnQzNXR3dw==" target='_blank' className="text-blue-600 hover:text-red-800 transition-colors"><Instagram size={28} /></a>
              <a href="https://www.tiktok.com/@preuniversitario.cenfi?_t=8ocuteZQ73G&_r=1" target='_blank' className="text-blue-600 hover:text-green-900 transition-colors"><Twitch size={28} /></a>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <Input name="nombre" type="text" required placeholder="Nombre" className="border-blue-200 focus:border-blue-400" />
              <Input name= "email" type="email" required placeholder="Correo electrónico" className="border-blue-200 focus:border-blue-400" />
              <Textarea name="mensaje" placeholder="Mensaje" required className="border-blue-200 focus:border-blue-400" />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar mensaje</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">Nuestra ubicación</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.75750657387195!2d-79.2041553476152!3d-3.995719456113105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb4801a1b3bbc3%3A0xaa38bacd8505859b!2s18%20de%20Noviembre%20%26%20Crist%C3%B3bal%20Col%C3%B3n%2C%20Loja%2C%20Ecuador!5e0!3m2!1ses-419!2ssv!4v1724959649369!5m2!1ses-419!2ssv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
