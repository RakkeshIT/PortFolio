import { Navbar } from '../Navbar/Navbar'
import './About.css'
import Rakkesh from '../../images/Rakkesh.jpg'
import Commic from '../../images/RakkeshComipng.png'
export const About = () => {
  return (
    <div className="About_Main_Container">
      <h1 className="A_Title">About Me</h1>
      <div className='About_Container'>
        <div>
          <img className='A_Image' src={Commic} alt="" />
        </div>
        <div className='A_Content'>
          <div className='A_Card'>
            <a href="" className='Experience'>
              <div >
                <p><i class="fa-solid fa-bolt"></i></p>
                <h4>Experience</h4>
              </div>
            </a>
            <a href="" className='Skill'>
              <div >
                <p><i class="fa-solid fa-code"></i></p>
                <h4>My Skills</h4>
              </div>
            </a>
            <a href="" className='Projects'>
              <div>
                <p><i class="fa-solid fa-handshake"></i></p>
                <h4>Projects</h4>
              </div>
            </a>
          </div>
          <p className='A_Text'>Hi, I'm Rakkesh Kumar, a passionate Full Stack Web Developer with strong expertise in front-end and back-end technologies. I specialize in building dynamic and user-friendly web applications using frameworks like Laravel and React.js. With hands-on experience from a two-month Full Stack Development internship, I have honed my skills in PHP, HTML, CSS, and JavaScript. My goal is to craft efficient and scalable solutions that drive business growth. Let’s create something amazing together!</p>
          <div className='A_Contact'>
           <a href="">Download Resume</a>
          </div>
        </div>
      </div>
    </div>


  )
}