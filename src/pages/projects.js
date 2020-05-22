import React, { useState, useEffect } from 'react'

export default function Projects() {
    return(
        <div className='app'>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>Devcamp Fries</h1>
                        <img className="card-img" src="https://i.postimg.cc/cCVkgcY9/fries.png" />
                    </div>
                    <div className="flip-card-back">
                        <img src="./style/pictures/fries.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}