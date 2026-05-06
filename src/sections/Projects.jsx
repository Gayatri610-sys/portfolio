import projects from "../data/projects";

function Projects(){
    return(
        <section id="projects" className="fade">
            <div className="container">
               <h2 style={{ marginBottom: "20px", color: "#38bdf8" }}>
          Projects
        </h2>

                <div className="projects-grid">
                    {projects.map((project,index)=>(
                        <div className="card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><b>{project.tech}</b></p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;