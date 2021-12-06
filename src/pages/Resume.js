import React from "react"
import {navigate} from "hookrouter"
// import Typist from "react-typist"

export default function Resume(){
    return(
        <div className="resume-app">
            
            <div className="nav-wrapper">
                <div className="nav-buttons-wrapper">
                    <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>

            <div className="header-wrapper-resume">
                <div className='top-line-resume' />
                    {/* <Typist cursor={{show: false}} avgTypingDelay={100}>
                        <h1 className="typist-header">Résumé</h1>
                    </Typist> */}
                <div className='bottom-line-resume' />
            </div>

            <div className="resume-wrapper">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTEoi7hVCPqTkusuqww72io4iTYB21At-FsXdjfPM5M-Q3IuwmEJof-nqU7axlrWjNJxSdTU8g-Cf-F/pub?embedded=true" height="700px" width="600px"/>
                <a href="https://docs.google.com/document/d/18Dk2ELpPRAqJe8174_1uyrX0avYZkj5cocApeyMNHNY/edit?usp=sharing" target="_blank" download="william_mark_résumé">View Document</a>
            </div>
        </div>
    )
} 