import profile from "../assets/profile.jpg";

function Home(){
    return(
        <section id="home" className="fade">
            <div className="container hero">
                <div>
                    <h1>Hi, I'm M Gayatri Rao</h1>
                    <p>
                        Aspiring Software Developer | Java | Spring Boot | SQL | Web Development
                    </p>

                    <a href="/resume.pdf" download>
                        <button className="btn">Download Resume</button>
                    </a>
                </div>

                <img src={profile} className="profile-img" />S
            </div>
        </section>
    );
}

export default Home;