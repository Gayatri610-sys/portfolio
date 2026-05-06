import{ FaLinkedin, FaGithub, FaInstagram, FaWhatsapp }from "react-icons/fa";

function Contact(){
    return(
        <section id="contact" className="fade">
            <div className="container">
                <h2>
          Contact Me
        </h2>
                <p>Email: mgayatrirao610@gmail.com</p>
                <div className="social-icons">
                    <a href = "https://www.linkedin.com/in/gayatri-rao-m-65b5b9253/" target="_blank">
                            <FaLinkedin/>
                    </a>

                    <a href="https://github.com/Gayatri610-sys" target="_blank">
                        <FaGithub/>
                    </a>
                    
                    <a href="https://www.instagram.com/gayatri_6_1_0/" target="_blank">
                        <FaInstagram/>
                    </a>

                    <a href="https://wa.me/919337613729" target="_blank">
                        <FaWhatsapp/>

                    </a>
                </div>
            </div>
        </section>
    );
}

export default  Contact;