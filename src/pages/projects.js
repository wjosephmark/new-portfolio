import React, { useState, useEffect } from 'react'

export default function Projects() {
    return(
        <div className='app'>
            <div className="header-wrapper">
                <h1>Projects</h1>
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
                            <h1>Devcamp Fries</h1>
                            <img className="card-img" src="https://i.postimg.cc/cCVkgcY9/fries.png" />
                        </div>
                        <div className="flip-card-back">
                            <a className="link" target="_blank" href="https://jm-fries.herokuapp.com/">Visit Devcamp Fries</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}