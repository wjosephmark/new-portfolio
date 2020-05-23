import React from "react"
import {navigate} from "hookrouter"

export default function Resume(){
    return(
        <div className="app">
            <div className="resume-wrapper">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTEoi7hVCPqTkusuqww72io4iTYB21At-FsXdjfPM5M-Q3IuwmEJof-nqU7axlrWjNJxSdTU8g-Cf-F/pub?embedded=true" height="700px" width="600px"/>
                <a href="https://filebin.net/m8xvok174bozv0f5/william_mark_resume.pdf?t=apheadyh" target="_blank" download="william_mark_résumé">Download</a>
            </div>
            <div className="nav-wrapper-resume">
                <button className="nav-btn-left" onClick={() => navigate("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigate("/about-me")}>About Me</button>
                <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                <button className="nav-btn-right" onClick={() => navigate("/contact")}>Contact Me</button>
            </div>
        </div>
    )
}