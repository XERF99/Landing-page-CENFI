import Navbar from './navbar'
import InformacionCentro from './informacion-centro'
import ProcesoAdmision from "./proceso-admision"
import HeroSection from './hero-section'
import InformacionPrueba from './informacion-prueba'
import BeneficiosEstudiantes from './beneficios-estudiantes'
import NuestrosCursos from './nuestros-cursos'
import Footer from "./footer"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <HeroSection />
      <InformacionCentro />
      <InformacionPrueba />
      <ProcesoAdmision />
      <BeneficiosEstudiantes />
      <NuestrosCursos />
      </main>
      <Footer />
    </div>
  )
}