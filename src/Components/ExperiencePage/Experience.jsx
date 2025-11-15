import Style from "./Experience.module.css";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div className={Style.Container}>
      <h1 className={Style.MainTitle}>Experience</h1>

      <div className={Style.Timeline}>

        {/* Internship */}
        <div className={Style.TimelineItem}>
          <div className={Style.Icon}><FaLaptopCode /></div>
          <div className={Style.Content}>
            <h2 className={Style.Role}>Internship – A1Ideaz</h2>
            <p className={Style.Duration}>📅 Apr 26, 2024 – Jun 30, 2024</p>

            <p className={Style.Description}>
              Developed a full-stack Role-Based Authentication System using Laravel, 
              Spatie Permissions, React.js + Ant Design, and Inertia.js to deliver 
              a seamless SPA experience.
            </p>

            <h4 className={Style.SubHeading}>Technologies Used:</h4>
            <ul className={Style.List}>
              <li>PHP Laravel, Spatie Permissions</li>
              <li>React.js, Ant Design</li>
              <li>Inertia.js</li>
              <li>Role & Permission System</li>
            </ul>

            <a href="/public/asset/file/internship certificate_repaired.pdf" download className={Style.Button}>
              Download Certificate
            </a>
          </div>
        </div>

        {/* Professional Experience */}
        <div className={Style.TimelineItem}>
          <div className={Style.Icon}><FaBriefcase /></div>
          <div className={Style.Content}>
            <h2 className={Style.Role}>Software Trainer & Full Stack Developer</h2>
            <p className={Style.Duration}>📅 May 2024 – May 2025</p>

            <p className={Style.Description}>
              Trained 100+ students in Full Stack Development, Python, PHP, 
              React.js, Power BI & Excel. Developed real-world projects, dashboards, 
              and automation tools for training modules.
            </p>

            <h4 className={Style.SubHeading}>Subjects Taught:</h4>
            <ul className={Style.List}>
              <li>Laravel, MySQL, Node.js (basic)</li>
              <li>HTML, CSS, JS, React.js, Bootstrap</li>
              <li>Power BI, Excel, Python (Pandas)</li>
              <li>Git & GitHub</li>
            </ul>

            <h4 className={Style.SubHeading}>Key Contributions:</h4>
            <ul className={Style.List}>
              <li>Guided 100+ students with real-time projects</li>
              <li>Developed dashboards & automated reports</li>
              <li>Conducted workshops on trending technologies</li>
              <li>Mentored students one-on-one for interviews</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
