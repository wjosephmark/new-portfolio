import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter"
// import Typist from 'react-typist'

export default function About(){
    return(
        <div className="about-app">


            <div className="nav-wrapper">
                <div className="nav-buttons-wrapper">
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>


            <div className="about-wrapper">
                <div className="header-wrapper-about">
                    <div className="top-line-about" />

                    <div class="typewriter-about">
                        <h1>About</h1>
                    </div>

                    <div className="bottom-line-about" />
                </div>
                <div className="spacer" />
                <div className="photo-wrapper">
                    <img src="https://avatars2.githubusercontent.com/u/61288503?s=460&u=ab9865db546865c0bbbb84e13d11c108ae385a5f&v=4" />
                </div>
                <div className="spacer" />
                <div className="text-wrapper">
                    <p>Hello, I am Joseph Mark. I graduated from Bottega's full stack development course in May of 2020.  Because of the job market at the time I accepted a position as a customer service representative at a good company who was planning to expand their IS team in the future, hopeful that I could advance from within.  After about 5 months I started working as a Junior Systems Developer on January first, 2021. Since then I have worked heavily with AWS and cloud computing, designing scalable custom integrations, collaborating with teams in our company to ensure that they have the data needed to excel in their position, researching and implementing a VPN for the company, collaborating with HR to design an efficient onboarding process as far as the hardware and software needs of the employee being hired, and basic cybersecurity checks.  These have all been wonderful experiences, despite the many challenges and roadblocks that my team and I have overcome in the past year.</p>
                </div>
            </div>

        </div>
    )
}