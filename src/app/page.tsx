/*import Navbar from './navbar'
import InformacionCentro from '../components/home/informacion-centro'
import ProcesoAdmision from "../components/home/proceso-admision"
import HeroSection from '../components/home/hero-section'
import InformacionPrueba from '../components/home/informacion-prueba'
import BeneficiosEstudiantes from '../components/home/beneficios-estudiantes'
import NuestrosCursos from '../components/home/nuestros-cursos'
import Footer from "./footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      <Navbar />
      <main className="flex-grow w-full">
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
}*/
import Navbar from './navbar'
import InformacionCentro from '../components/home/informacion-centro'
import ProcesoAdmision from "../components/home/proceso-admision"
import HeroSection from '../components/home/hero-section'
import InformacionPrueba from '../components/home/informacion-prueba'
import BeneficiosEstudiantes from '../components/home/beneficios-estudiantes'
import NuestrosCursos from '../components/home/nuestros-cursos'
import Footer from "./footer"


export default function LandingPage() {
  return (
      <div className={'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex flex-col'}>
        <Navbar />
        <main className={'flex-grow w-full'}>
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
