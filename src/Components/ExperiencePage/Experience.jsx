import Style from "./Experience.module.css";
const Experience = () => {
  return (
    <div className={`${Style.E_Container}`}>
      {/* Title */}
      <div className={`${Style.Title}`}>
        <h1>Experience</h1>
      </div>

      {/* Internship */}
      <div className={`${Style.Internship}`}>
        {/* Title */}
        <div>
          <h2 className={`${Style.Intern}`}>Internship</h2>
        </div>

        <h4>
          <span>🤵 Company Name: </span>{" "}
          <span style={{ fontWeight: "200" }}>A1Ideaz</span>
        </h4>
        <h4>
          <span>✨ Duration: </span>{" "}
          <span style={{ fontWeight: "200" }}>
            {" "}
            📅 April 26 / 2024 - 📆 Jun 30 / 2024{" "}
          </span>
        </h4>
        <h4>
          <span> ✔ Project: </span>{" "}
          <span style={{ fontWeight: "200" }}>
            {" "}
            ➰ Role-Based Authentication System{" "}
          </span>
        </h4>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          &nbsp; ✨During my internship, I developed a full-stack Role-Based
          Authentication System using PHP Laravel as the backend framework. I
          implemented role and permission management using the Spatie Laravel
          Permission package, ensuring a scalable and secure access control
          structure. To create a modern and responsive UI, I used Ant Design
          components integrated with React.js via Inertia.js, enabling a smooth
          single-page application experience within the Laravel environment.
        </p>
        <h4>
          <span> 🔧 Technologies Used : 👇 </span>
        </h4>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            <span style={{ fontWeight: "bold" }}>Backend: </span>
            <span>PHP Laravel, Spatie Laravel Permission</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Frontend: </span>
            <span>React.js, Ant Design</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Integration: </span>
            <span>Inertia.js</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Authentication: </span>
            <span>Role & Permission Managemen</span>
          </li>
        </ul>

        <a
          href="/public/asset/file/internship certificate_repaired.pdf"
          download
          className={`${Style.Button}`}
        >
          Internship Certificate
        </a>
      </div>
      {/* P_Exp */}
      <div className={`${Style.P_Exp}`}>
        {/* Title */}
        <div>
          <h2 className={`${Style.Exp}`}>Professional Experience</h2>
        </div>

        <h4>
          <span>🤵 Company Name: </span>{" "}
          <span style={{ fontWeight: "200" }}>
            💼 Software Trainer & Full Stack Developer
          </span>
        </h4>
        <h4>
          <span>✨ Duration: </span>{" "}
          <span style={{ fontWeight: "200" }}>
            {" "}
            📅 May / 2024 - 📆 May / 2025{" "}
          </span>
        </h4>
        <h4>
          <span> ✔ Project: </span>{" "}
          <span style={{ fontWeight: "200" }}>
            {" "}
            ➰ Role-Based Authentication System{" "}
          </span>
        </h4>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          &nbsp; ✨As a dedicated Software Trainer and Full Stack Developer, I
          trained students in various domains including Full Stack Development
          and Core Java, Python, PHP, Data Analytics, Power BI, and Advanced
          Excel. I delivered hands-on sessions, developed course content, and
          guided students in building real-time projects.
        </p>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          &nbsp; ✨In addition to teaching, I worked on multiple frontend and
          backend development projects, as well as data analysis tasks,
          implementing interactive dashboards and reports using Power BI and
          Excel.
        </p>
        <h4>
          <span> 📚 Subjects Taught: 👇 </span>
        </h4>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            <span style={{ fontWeight: "bold" }}>Backend: </span>
            <span>PHP Laravel, MySQL, Node.js (basic)</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Frontend: </span>
            <span>HTML, CSS, JavaScript, Bootstrap, React.js</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Data Analytics: </span>
            <span> Power BI, Advanced Excel, Python (Pandas, Matplotlib)</span>
          </li>

          <li>
            <span style={{ fontWeight: "bold" }}>Version Control: : </span>
            <span>Git, GitHub</span>
          </li>
        </ul>
        <h4>
          <span>💡 Key Contributions:: 👇 </span>
        </h4>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li>
            ✨ Trained and mentored over 100 students in Full Stack Development and
            Data Analytics domains.
          </li>
          <li>
           ✨ Developed and deployed real-time projects integrating frontend,
            backend, and database technologies.
          </li>
          <li>
           ✨ Built interactive dashboards and automated reports using Power BI
            and Advanced Excel.
          </li>
          <li>
           ✨ Assisted students with project building, interview preparation, and
            industry-based scenarios.
          </li>
          <li>
           ✨ Conducted workshops, seminars, and individual mentoring sessions on
            trending technologies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
