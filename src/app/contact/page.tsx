/*import Navbar from '../../app/navbar'
import Contacto from '../../components/contact/contacto'
import Footer from "../../app/footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <Contacto />
      </main>
      <Footer />
    </div>
  )
}*/

import Navbar from '../../app/navbar'
import Contacto from '../../components/contact/contacto'
import Footer from "../../app/footer"

export default function Contact() {
  return (
    <div className={'min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col'}>
      <Navbar />
      <main className={'flex-grow'}>
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
