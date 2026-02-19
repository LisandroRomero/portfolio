import Hero from './sections/Hero'
//import './App.css'
import NavBar from './sections/NavBar'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  

  return (
    <div className="min-h-screen bg-[#20202a] text-white font-sans">
    <NavBar />
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
  )
}

export default App
