import React, { useState, useEffect } from 'react'
import {navigate} from "hookrouter"
// import Typist from 'react-typist'

export default function Projects() {
    return(
        <div className="projects-app">

            <div className="nav-wrapper-projects">
                <div className="projects-nav-buttons-wrapper">
                    <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                    <button className="nav-btn" onClick={() => navigate("/about")}>About Me</button>
                    <button className="nav-btn" onClick={() => navigate("/resume")}>Resume</button>
                    <button className="nav-btn" onClick={() => navigate("/contact")}>Contact Me</button>
                </div>
            </div>

            <div className="header-wrapper-projects">
                <div className='top-line-projects' />
                    <div class="typewriter-projects">
                        <h1>Projects</h1>
                    </div>
                <div className='bottom-line-projects' />
            </div>

            <div className="flip-card-wrapper">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>Devcamp Fries</h1>
                            <img className="card-img" src="https://i.postimg.cc/cCVkgcY9/fries.png" />
                        </div>
                        <div className="flip-card-back">
                            <a className="link" target="_blank" href="https://jm-fries.herokuapp.com/">Visit Devcamp Fries</a>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>Tool Tracker</h1>
                            <img className="card-img" src="https://i.postimg.cc/j59YcPPN/capstone.png" />
                        </div>
                        <div className="flip-card-back">
                            <a className="link" target="_blank" href=" https://jm-capstone.herokuapp.com/">Visit Tool Tracker</a>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>How old are you? </h1>
                            <img className="card-img" src="https://i.imgur.com/jZh88Zr.png" />
                        </div>
                        <div className="flip-card-back">
                            <a className="link" target="_blank" href="https://wjm-how-old.herokuapp.com/">Visit How Old</a>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h1>Weather App</h1>
                            <img className="card-img" src="https://i.imgur.com/jZh88Zr.png" />
                        </div>
                        <div className="flip-card-back">
                            <a className="link" target="_blank" href="https://wjm-weather.herokuapp.com/">Visit Weather App</a>
                        </div>
                    </div>
                </div>
            </div>


    </div>
    )
}