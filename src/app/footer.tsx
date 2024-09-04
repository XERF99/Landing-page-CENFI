/*"use client"

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">CENFI</h3>
            <p className="text-sm text-gray-600">
              Preparándote para el éxito universitario desde 2018.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/3xgwpWEhGxW4kViB/?mibextid=qi2Omg' },
                { icon: Instagram, href: 'https://www.instagram.com/preuniversitario_cenfi?igsh=MTVyZ2c1cnQzNXR3dw==' },
                { icon: Twitter, href: 'https://www.tiktok.com/@preuniversitario.cenfi?_t=8ocuteZQ73G&_r=1' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio','Contacto','Sobre nosotros', 'Simuladores'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} as={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                cenfilojaecuador@gmail.com
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                (+593) 99 256 2952
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                Loja, Ecuador
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Horario de Atención</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 9:00 AM - 1:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CENFI. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Diseñado y desarrollado por <a href="#" className="text-blue-500 hover:underline">Francisco Rodríguez y William Zapata</a>
          </p>
        </div>
      </div>
    </footer>
  )
}*/

'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {

  return (
    <footer className={'bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900'}>
      <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'}>
          <div className={'space-y-4'}>
            <h3 className={'text-2xl font-bold text-blue-600 dark:text-blue-400'}>CENFI</h3>
            <p className={'text-sm text-gray-600 dark:text-gray-300'}>
              Preparándote para el éxito universitario desde 2018.
            </p>
            <div className={'flex space-x-4'}>
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/3xgwpWEhGxW4kViB/?mibextid=qi2Omg' },
                { icon: Instagram, href: 'https://www.instagram.com/preuniversitario_cenfi?igsh=MTVyZ2c1cnQzNXR3dw==' },
                { icon: Twitter, href: 'https://www.tiktok.com/@preuniversitario.cenfi?_t=8ocuteZQ73G&_r=1' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={'text-gray-400 hover:text-blue-500 transition-colors dark:text-gray-500 dark:hover:text-blue-400'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <social.icon className={'w-5 h-5'} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className={'text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200'}>Enlaces Rápidos</h4>
            <ul className={'space-y-2'}>
              {['Inicio','Contacto','Sobre nosotros', 'Simuladores'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} as={`/${item.toLowerCase().replace(/ /g, '-')}`} className={'text-sm text-gray-600 hover:text-blue-500 transition-colors dark:text-gray-300 dark:hover:text-blue-400'}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={'text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200'}>Contacto</h4>
            <ul className={'space-y-2'}>
              <li className={'flex items-center text-sm text-gray-600 dark:text-gray-300'}>
                <Mail className={'w-4 h-4 mr-2 text-blue-500 dark:text-blue-400'} />
                cenfilojaecuador@gmail.com
              </li>
              <li className={'flex items-center text-sm text-gray-600 dark:text-gray-300'}>
                <Phone className={'w-4 h-4 mr-2 text-blue-500 dark:text-blue-400'} />
                (+593) 99 256 2952
              </li>
              <li className={'flex items-center text-sm text-gray-600 dark:text-gray-300'}>
                <MapPin className={'w-4 h-4 mr-2 text-blue-500 dark:text-blue-400'} />
                Loja, Ecuador
              </li>
            </ul>
          </div>
          <div>
            <h4 className={'text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200'}>Horario de Atención</h4>
            <ul className={'space-y-2 text-sm text-gray-600 dark:text-gray-300'}>
              <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 9:00 AM - 1:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className={'mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center'}>
          <p className={'text-sm text-gray-500 dark:text-gray-400'}>
            © {new Date().getFullYear()} CENFI. Todos los derechos reservados.
          </p>
          <p className={'text-sm text-gray-500 mt-2 md:mt-0 dark:text-gray-400'}>
            Diseñado y desarrollado por <a href={'#'} className={'text-blue-500 hover:underline dark:text-blue-400'}>Francisco Rodríguez y William Zapata</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
