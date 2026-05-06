import Particles from "react-tsparticles";

function ParticlesBg(){
    return(
        <Particles
            options={{
                background: {color: "transparent"},
                particles: {
                    number: {value: 40 },
                    size: { value: 3 },
                    move: { speed: 1 },
                    links: { enable: true },
                },
            }}
            />
    );
}

export default ParticlesBg;