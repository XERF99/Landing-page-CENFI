import React from 'react';
import { Facebook, Instagram, Twitch, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent } from "../../components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Información de contacto</h2>
            <div className="space-y-4 text-blue-600">
              <p className="flex items-center"><MapPin className="mr-3" /> Av. Ejemplo 1234, Ciudad</p>
              <p className="flex items-center"><Phone className="mr-3" /> +56 9 1234 5678</p>
              <p className="flex items-center"><Mail className="mr-3" /> contacto@preuniversitariocenfi.cl</p>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-500">Redes sociales</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><Facebook size={28} /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><Instagram size={28} /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors"><Twitch size={28} /></a>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Nombre" className="border-blue-200 focus:border-blue-400" />
              <Input type="email" placeholder="Correo electrónico" className="border-blue-200 focus:border-blue-400" />
              <Textarea placeholder="Mensaje" className="border-blue-200 focus:border-blue-400" />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar mensaje</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-6 text-blue-500">Nuestra ubicación</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2568401490627!2d-70.64992368480213!3d-33.43699808077668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c507f91be46f%3A0x1b8d9a25d23be971!2sUniversidad%20de%20Chile!5e0!3m2!1ses!2scl!4v1623183835805!5m2!1ses!2scl"
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
