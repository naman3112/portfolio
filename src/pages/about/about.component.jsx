import React from "react";
import MyPhoto from '../../assets/img/profile/naman.jpeg'

import './about.style.scss'

const About = () => {
    return (
        <div id="about">
            <h1 className="text-center font-details-b">ABOUT ME</h1>
            <hr></hr>
            <div className="about-container flex-container">
                <div className="about-left order: 2">
                    <img className="about-image" src={MyPhoto} alt="My Photograph" />
                </div>
                <div className="about-right order: 1">
                    <h2 className="about-name">Hi there! I am <b>Naman Arora</b></h2>
                    <div className="about-desc">
                        <p>
 I am a pre-final year student pursuing my bachelor's degree majoring in Computer Sceince and Engineering from Maharaja Agrasen Institute of Technology(2018-2022).

I have a keen interest in MERN stack, Internet Of things and have been learning about various sensors from over two years now, demonstrated  3 projects in different hackathons. These three projects were built to solve the real life problems like traffic management and contact tracing for pandemic (Covid-19).


                        </p>
                    </div>


                    <ul className="about-buttons">
                        <li className="about-buttons-li"><a href="https://drive.google.com/file/d/1Hgig9kxgUujUsBSujyB_lh15LUdxhefH/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer">My Resume</a></li>
                        <li className="about-buttons-li"><a href="#contact" target="_blank" rel="noopener noreferrer">Lets talk!</a></li>
                        <li className="about-buttons-li"><a href="https://github.com/naman3112" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li className="about-buttons-li"><a href="https://www.linkedin.com/in/naman-arora-462465139/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About