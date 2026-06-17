import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackgroundArt } from "@/components/background-art"
import { SolarSystem } from "@/components/solar-system"

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen isolate">
      <BackgroundArt />
      <SolarSystem />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}


