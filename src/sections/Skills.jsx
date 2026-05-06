import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "GitHub", icon:<FaGithub />},
    { name: "React Js", icon:<FaReact />}
  ];

  return (
    <section id="skills" className="fade">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="icon">{s.icon}</div>
              <p>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;