import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { HomePage } from './Components/Home/Home'
import { AboutPage } from './Components/About/About'
import { SkillPage } from './Components/Skills/Skills'
import { Element } from 'react-scroll'
import MouseFollower from './Effects/MouseFollower'
import { Projects } from './Components/Project/Projects'
import Experience from './Components/ExperiencePage/Experience'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <MouseFollower />
      <Navbar />
      <Element name='Home'>
        <HomePage />
      </Element>

      <Element name='About'>
        <AboutPage />
      </Element>

      <Element name='Skills'>
        <SkillPage />
      </Element>

      <Element name='Project'>
        <Projects />
      </Element>

      <Element name='Experience'>
        <Experience/>
      </Element>

      <Element name='Contact'>
        <Contact/>
      </Element>
    </>
  )
}

export default App
