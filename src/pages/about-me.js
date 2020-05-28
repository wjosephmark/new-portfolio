import React, {useState, useEffect} from "react"
import {navigate} from "hookrouter"

export default function AboutMe(){
    return(
        <div className="app">
            <div className="contact-wrapper">
                <div className="heading-wrapper">
                    <h1>About Me</h1>
                </div>
                <div className="spacer" />
                <div className="photo-wrapper">
                    <img src="https://avatars2.githubusercontent.com/u/61288503?s=460&u=ab9865db546865c0bbbb84e13d11c108ae385a5f&v=4" />
                </div>
                <div className="spacer" />
                <div className="text-wrapper">
                    <p>Hello, <br /> I am William Mark but I go by Joseph.  I recently completed a coding bootcamp at Bottega and I am currently
                    looking to start my career as a programmer.  I have been coding for almost a year and I fall more in love with it everyday.
                    I love hiking, mountain biking, skiing, rock climbing, and anything else outdoors.  I spend a lot of time with my friends and
                    family too.  I pride myself in being a happy and positive person and creating a fun and comfortable environment wherever I am.</p>
                </div>
            </div>

            <div className="nav-wrapper-about">
                <button className="nav-btn-left" onClick={() => navigate("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigate("/projects")}>Projects</button>
                <button className="nav-btn" onClick={() => navigate("/resume")}>Résumé</button>
                <button className="nav-btn-right" onClick={() => navigate("/contact")}>Contact Me</button>
            </div>

        </div>
    )
}