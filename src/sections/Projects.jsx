import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="fade">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="project-link"
            >
              <div className="card">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span style={{ color: "#38bdf8" }}>
                  {project.tech}
                </span>

                <div className="github-section">
                        <FaGithub className="github-icon"/>

                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;