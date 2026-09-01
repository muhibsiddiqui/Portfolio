import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-primary">
      <AnimatedBackground />
      <Navbar />
      <SideNav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
