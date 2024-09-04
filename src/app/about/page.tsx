import Navbar from '../../app/navbar'
import Footer from "../../app/footer"
import NuestraHistoria from "../../components/about-us/nuestra-historia"
import NuestrasInstalaciones from "../../components/about-us/nuestras-instalaciones"
import NuestrosResultados from "../../components/about-us/nuestros-resultados"
import React, { useState, useEffect } from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <NuestraHistoria />
      <NuestrasInstalaciones />
      <NuestrosResultados />
      </main>
      <Footer />
    </div>
  )
}