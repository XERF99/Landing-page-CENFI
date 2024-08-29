import Navbar from '../../app/navbar'
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
}