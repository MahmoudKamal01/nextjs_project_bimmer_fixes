import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularCars from './components/PopularCars'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularCars />
      <Packages />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  )
}
