import React, {useState, useEffect} from "react"

export default function AboutMe(){
    return(
        <div className="app">
            <div className="contact-wrapper">
                <div className="heading-wrapper">
                    <h1>About Me</h1>
                </div>
                <div className="photo-wrapper">
                    <img src="https://avatars2.githubusercontent.com/u/61288503?s=460&u=ab9865db546865c0bbbb84e13d11c108ae385a5f&v=4" />
                </div>
                <div className="spacer" />
                <div className="text-wrapper">
                    <p>Hello, <br /> I am William Mark but I go by Joseph.  I recently completed a coding bootcamp at Bottega and I am currently
                    looking to start my career as a programmer.  I have been coding for almost a year and I fall more in love with it everyday.</p>
                </div>
            </div>
        </div>
    )
}