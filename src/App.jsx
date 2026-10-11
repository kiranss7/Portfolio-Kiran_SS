import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
