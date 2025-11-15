import About from './About.module.css';
import Me from '../../assets/RakkeshComipng.png';
import { FaLaptopCode, FaProjectDiagram, FaLightbulb } from 'react-icons/fa'; // optional icons

export const AboutPage = () => {
  return (
    <div className={About.A_Container}>
      <h1 className={About.A_Title}>About Me</h1>

      {/* Top rounded image with wave effect */}
      <div className={About.A_TopImage}>
        <img src={Me} alt="Rakkesh" />
      </div>

      {/* Glass effect cards */}
      <div className={About.A_Cards}>
        <div className={About.Card}>
          <FaLaptopCode size={30} style={{ marginBottom: '10px' }} />
          <h3>Passionate Developer</h3>
          <p>I am Rakkesh Kumar, a Full Stack Web Developer skilled in React and Laravel. I create dynamic, responsive, and user-friendly web applications.</p>
        </div>
        <div className={About.Card}>
          <FaProjectDiagram size={30} style={{ marginBottom: '10px' }} />
          <h3>Hands-On Expertise</h3>
          <p>I have 2+ years of experience in full stack development, including a two-month internship where I built multiple projects showcasing front-end and back-end skills.</p>
        </div>
        <div className={About.Card}>
          <FaLightbulb size={30} style={{ marginBottom: '10px' }} />
          <h3>Innovator & Learner</h3>
          <p>I strive to craft efficient, scalable solutions and continuously improve my skills. My goal is to contribute to projects that make a real-world impact.</p>
        </div>
      </div>
    </div>
  );
};
